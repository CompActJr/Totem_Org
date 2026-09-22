<script lang="ts" setup>
/**
 * @author Jonas
 */
import { AnalysisEnum } from '~/types/analysis.js';
import ResultChart from './ResultChart.vue';
import data from '~/data/questions.json';
import dataAnalysis from "~/data/analysis.json"
import jsPDF from 'jspdf';

const { state, previousStep } = useVocacional();

const result = computed<Record<AnalysisEnum, number>>(() => {

    const result: Record<AnalysisEnum, number> = {
        [AnalysisEnum.I]: 0,
        [AnalysisEnum.C]: 0,
        [AnalysisEnum.E]: 0,
        [AnalysisEnum.A]: 0,
        [AnalysisEnum.R]: 0,
        [AnalysisEnum.S]: 0
    };

    data.forEach((d) => {
        let answer = state.value.answers.find(a => a.questionId === d.id);
        let options = d.opcoes;

        options.forEach(o => {
            if (answer != null && answer != undefined && answer.options.includes(o.id)) {
                result[o.analysisEnum as AnalysisEnum]++;
            }
        })
    });

    return result;
})

//retornar os 2 perfis mais altos, caso haja empate, retornar todos os perfis empatados
const perfis = computed<AnalysisEnum[]>(()=>{
    const sorted = Object.entries(result.value)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 2)
        .map(([key]) => key as AnalysisEnum);
    
    return sorted;
})

const container = ref<HTMLElement | null>(null)
const chartRef = ref<InstanceType<typeof ResultChart> | null>(null)

const abrirTelaCheia = async () => {
  if (!container.value) return

  try {
    await container.value.requestFullscreen()
    isFullscreen.value = true
  } catch (err) {
    console.error(err)
  }
}

const sairTelaCheia = async () => {
  if (document.fullscreenElement) {
    await document.exitFullscreen()
    isFullscreen.value = false
  }
}

function downloadPDF() {
    const image = chartRef.value?.getImage()

    if (!image) return

    const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
    })

    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()
    const margin = 20
    const contentWidth = pageWidth - margin * 2

    // Cabeçalho

    pdf.setFont("helvetica", "bold")
    pdf.setFontSize(22)
    pdf.setTextColor(230, 90, 20)

    pdf.text("Resultado do Teste Vocacional", margin, 25)

    pdf.setFont("helvetica", "normal")
    pdf.setFontSize(11)
    pdf.setTextColor(90, 90, 90)

    pdf.text(`Olá, ${state.value.form.name}!`, margin, 34)

    // Linha
    pdf.setDrawColor(230, 90, 20)
    pdf.setLineWidth(0.8)
    pdf.line(margin, 40, pageWidth - margin, 40)

    // Perfil
    pdf.setFont("helvetica", "bold")
    pdf.setFontSize(16)
    pdf.setTextColor(50, 50, 50)

    pdf.text(
        `Seu perfil: ${perfis.value[0]} e ${perfis.value[1]}`,
        margin,
        51
    )

    // Gráfico
    const chartWidth = 150
    const chartHeight = 150

    const chartX = (pageWidth - chartWidth) / 2
    const chartY = 58

    pdf.addImage(
        image,
        "PNG",
        chartX,
        chartY,
        chartWidth,
        chartHeight
    )

    // Descrições
    let currentY = chartY + chartHeight + 12

    pdf.setFont("helvetica", "bold")
    pdf.setFontSize(14)
    pdf.setTextColor(50, 50, 50)

    pdf.text("Sobre seus perfis", margin, currentY)

    currentY += 9

    // Perfil 1
    const descricao1 =
        dataAnalysis.find(a => a.type === perfis.value[0])?.descricao ?? ""

    pdf.setFont("helvetica", "bold")
    pdf.setFontSize(11)
    pdf.setTextColor(230, 90, 20)

    pdf.text(`Perfil ${perfis.value[0]}`, margin, currentY)

    currentY += 6

    pdf.setFont("helvetica", "normal")
    pdf.setFontSize(10)
    pdf.setTextColor(80, 80, 80)

    const texto1 = pdf.splitTextToSize(
        descricao1,
        contentWidth
    )

    pdf.text(texto1, margin, currentY)

    currentY += texto1.length * 5 + 8

    // Perfil 2
    const descricao2 =
        dataAnalysis.find(a => a.type === perfis.value[1])?.descricao ?? ""

    pdf.setFont("helvetica", "bold")
    pdf.setFontSize(11)
    pdf.setTextColor(230, 90, 20)

    pdf.text(`Perfil ${perfis.value[1]}`, margin, currentY)

    currentY += 6

    pdf.setFont("helvetica", "normal")
    pdf.setFontSize(10)
    pdf.setTextColor(80, 80, 80)

    const texto2 = pdf.splitTextToSize(
        descricao2,
        contentWidth
    )

    pdf.text(texto2, margin, currentY)

    // Rodapé
    pdf.setDrawColor(220, 220, 220)
    pdf.setLineWidth(0.5)

    pdf.line(
        margin,
        pageHeight - 20,
        pageWidth - margin,
        pageHeight - 20
    )

    pdf.setFont("helvetica", "normal")
    pdf.setFontSize(8)
    pdf.setTextColor(130, 130, 130)

    pdf.text(
        "Colégio Totem • Teste Vocacional",
        margin,
        pageHeight - 13
    )

    pdf.text(
        `Gerado em ${new Date().toLocaleDateString("pt-BR")}`,
        pageWidth - margin,
        pageHeight - 13,
        { align: "right" }
    )

    pdf.save(`resultado-vocacional-${state.value.form.name}.pdf`)
}

const isFullscreen = ref(false)
// mudar botao para quando tiver em tela cheia sair
</script>


<template>

    <ClientOnly>
        <div ref="container" class="container">
            <nav class="flex items-center justify-around mb-8">

                <button class=" transition-all duration-300 hover:scale-110 bg-orange-400 
                    p-2 w-16 rounded-full text-white
                    flex items-center justify-center font-bold text-4-lg" @click="previousStep">
                    <img src="/icons/icon-park-solid--next.svg" class="-scale-x-100" />
                </button>

                <button class=" transition-all duration-300 hover:scale-110 bg-orange-400 
                    p-2 w-16 rounded-full text-white
                    flex items-center justify-center font-bold text-4-lg"
                    @click="isFullscreen ? sairTelaCheia() : abrirTelaCheia()"
                >
                    <img src="/icons/system-uicons--fullscreen.svg" />
                </button>

                <button class=" transition-all duration-300 hover:scale-110 bg-orange-400 
                    p-2 w-16 rounded-full text-white
                    flex items-center justify-center font-bold text-4-lg"
                    @click="downloadPDF()"
                >
                    <img src="/icons/teenyicons--pdf-solid.svg" />
                </button>

            </nav>
            <main>
                <ResultChart 
                    ref="chartRef"
                    :result="result"
                    :title="`Parabéns ${state.form.name}! Seu Perfil é ${perfis.at(0)} e ${perfis.at(1)}`"
                />
                <br/>
                <p class="text-gray-600">{{ dataAnalysis.find(a => a.type === perfis.at(0))?.descricao }}</p>
                <br/>
                <p class="text-gray-600">{{ dataAnalysis.find(a => a.type === perfis.at(1))?.descricao }}</p>
            </main>
        </div>
    </ClientOnly>

</template>

<style scoped lang="css">
    .container:fullscreen{
        background-color: white;
    }
</style>