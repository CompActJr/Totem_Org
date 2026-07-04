<template>

  <button @click="exportarPDF" class="export-btn">
    Baixar Resultado em PDF
  </button>

  <div ref="reportRef" class="pdf-content" style="padding: 20px; background: white;">
    <p style="text-align: center;">Parábens! {{ usuario?.nome }} - Seu Perfil é <b>{{ result[0] }}</b> </p>
    <div class="chart_box">
      <div class="chart_legends">
        <span class="legend investigativo">I (Investigativo)</span>
        <span class="legend artistico">A (Artístico)</span>
        <span class="legend social">S (Social)</span>
        <span class="legend realista">R (Realista)</span>
        <span class="legend empreendedor">E (Empreendedor)</span>
        <span class="legend convencional">C (Convencional)</span>
      </div>
      <canvas ref="canvasRef"></canvas>
    </div>

    <p>Parabéns por concluir sua jornada de autodescoberta! Com base nas suas
      respostas, seu perfil principal de interesses é o {{ result[0] }} -
      <i>" {{ desc1?.descricao }}</i> "
    </p>

    <p>
      Seu código vocacional completo é <b>{{ result[0] }}</b> - <b>{{ result[1] }}</b> - <b>{{ result[2] }}</b>. Isso
      indica uma
      forte combinação de interesses e habilidades. Veja abaixo as outras áreas que mais
      combinam com você em ordem de prioridade:
    </p>

    <p><b>{{ result[1] }}</b> : <i>{{ desc2?.descricao }}</i></p>

    <p><b>{{ result[1] }}</b> : <i>{{ desc3?.descricao }}</i></p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted} from 'vue'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import {
  Chart,
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js'

import { computed } from 'vue'
import { ResponseService } from '@/services/ResponseService'
import { useTestStore } from '@/stores/Teste'
import { storeToRefs } from 'pinia'
import type { AnalysisEnum } from '@/types/Analysis'

const store = useTestStore()
const { usuario, analysis } = storeToRefs(store)

Chart.register(
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

const COLORS = {
  INVESTIGATIVO: '#6366f1',
  ARTÍSTICO: '#ec4899',
  SOCIAL: '#22c55e',
  REALISTA: '#f97316',
  EMPREENDEDOR: '#eab308',
  CONVENCIONAL: '#0ea5e9'
}


const canvasRef = ref<HTMLCanvasElement | null>(null)
const scores = computed(() => ResponseService.getResponseCalculed())
const result: AnalysisEnum[] = ResponseService.getTop3Responses()
const desc1 = computed(() => analysis.value.find(a => a.type === result[0]))
const desc2 = computed(() => analysis.value.find(a => a.type === result[1]))
const desc3 = computed(() => analysis.value.find(a => a.type === result[2]))

onMounted(() => {
  if (!canvasRef.value) return

  new Chart(canvasRef.value, {
    type: 'radar',
    data: {
      labels: ['I', 'A', 'S', 'R', 'E', 'C'],
      datasets: [
        {
          label: 'Perfil Vocacional',
          data: [
            scores.value.INVESTIGATIVO,
            scores.value.ARTÍSTICO,
            scores.value.SOCIAL,
            scores.value.REALISTA,
            scores.value.EMPREENDEDOR,
            scores.value.CONVENCIONAL,
          ],

          pointBackgroundColor: [
            COLORS.INVESTIGATIVO,
            COLORS.ARTÍSTICO,
            COLORS.SOCIAL,
            COLORS.REALISTA,
            COLORS.EMPREENDEDOR,
            COLORS.CONVENCIONAL,
          ],

          pointBorderColor: '#fff',
          pointRadius: 5,
          pointHoverRadius: 7
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        r: {
          beginAtZero: true
        }
      }
    }
  })
})

const reportRef = ref<(HTMLDivElement | null)>(null); 
const canvasRefImg = ref(null); 

const exportarPDF = async () => {
  const element = reportRef.value;
  if(!element) return;

  
  const canvas = await html2canvas(element, {
    scale: 2, 
    useCORS: true,
    logging: false
  });

  const imgData = canvas.toDataURL('image/png');
 
  const pdf = new jsPDF('p', 'mm', 'a4');
  const imgProps = pdf.getImageProperties(imgData);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  pdf.save(`Resultado_Teste_${usuario.value?.nome || 'Perfil'}.pdf`);
};

</script>

<style lang="scss">
@use '@/assets/index.scss' as *;

.pdf-content{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 150vh;
  gap: 16px;
}

.export-btn{
  @include criar_botao($primary_2, $primary_5, 1.2rem, 4px);
  @include centralizar_flex;
  transition: scale ease 0.4s;
  &:hover{
    scale: 1.05;
  }
}

.chart_box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
}

.chart_legends {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.8rem;

  .legend {
    display: flex;
    align-items: center;
    gap: 8px;

    opacity: 0;
    transform: translateX(-10px);
    animation: legendFade 0.5s ease forwards;

    &::before {
      content: '';
      width: 12px;
      height: 12px;
      border-radius: 3px;
      display: inline-block;
    }
  }

  .legend:nth-child(1) {
    animation-delay: 0.3s;
  }

  .legend:nth-child(2) {
    animation-delay: 0.45s;
  }

  .legend:nth-child(3) {
    animation-delay: 0.6s;
  }

  .legend:nth-child(4) {
    animation-delay: 0.75s;
  }

  .legend:nth-child(5) {
    animation-delay: 0.9s;
  }

  .legend:nth-child(6) {
    animation-delay: 1.05s;
  }

  @keyframes legendFade {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .investigativo::before {
    background-color: #6366f1; // azul
  }

  .artistico::before {
    background-color: #ec4899; // rosa
  }

  .social::before {
    background-color: #22c55e; // verde
  }

  .realista::before {
    background-color: #f97316; // laranja
  }

  .empreendedor::before {
    background-color: #eab308; // amarelo
  }

  .convencional::before {
    background-color: #0ea5e9; // azul claro
  }
  
}
</style>
