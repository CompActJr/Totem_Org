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

    const pdf = new jsPDF({orientation: "landscape", unit: "mm", format: "a4"})
    pdf.addImage(image, "PNG", 5, 5, 100, 100)
    pdf.save("resultado.pdf")
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
                    :title="`Párabens ${state.form.name}! Seu Perfil é ${perfis.at(0)} e ${perfis.at(1)}`"
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