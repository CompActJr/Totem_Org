<script setup lang="ts">
/**
 * @author Jonas
 */
import { ref, onMounted } from 'vue';
import { Chart } from 'chart.js/auto';
import { AnalysisEnum } from '~/types/analysis';

const chartCanvas = ref<HTMLCanvasElement | null>(null);
let chartInstance: Chart | null = null;

const props = defineProps<{
    result: Record<AnalysisEnum, number>,
    title: string
}>();

const getChartData = () => [
    props.result[AnalysisEnum.I],
    props.result[AnalysisEnum.C],
    props.result[AnalysisEnum.E],
    props.result[AnalysisEnum.A],
    props.result[AnalysisEnum.R],
    props.result[AnalysisEnum.S],
];

console.log(getChartData());

onMounted(() => {
    if (!chartCanvas.value) return;

    const ctx = (chartCanvas.value as HTMLCanvasElement).getContext('2d');
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;

    chartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: isMobile
            ? ['I', 'C', 'E', 'A', 'R', 'S']
            : [
                AnalysisEnum.I,
                AnalysisEnum.C,
                AnalysisEnum.E,
                AnalysisEnum.A,
                AnalysisEnum.R,
                AnalysisEnum.S
            ],
            datasets: [{
                label: 'perfil',
                data: getChartData(),
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                backgroundColor: '#ff333380',
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {

                title: {
                    display: !isMobile,
                    font: { size: 24, weight: 'bold' },
                    color: "#EF6B01",
                    text: props.title
                },
                subtitle: {
                    display: !isMobile,
                    font: {size: 18}
                },
                legend: {
                    display: true,
                    labels: {
                        color: '#EF6B01'
                    }
                },

            },
            scales: {
                r: {
                    pointLabels: {
                        color: 'EF6B01',
                        font: { size: 18, weight: 'bold' }
                    },
                    ticks: {
                        color: '#333333',
                        font: {size: 18}
                    }
                }
            }
        }
    });
});


function getImage() {
  return chartCanvas.value?.toDataURL("image/png")
}

defineExpose({
    getImage
})

</script>

<template>
    <div class="chart-container h-150 w-full flex items-center justify-center">
        <canvas ref="chartCanvas" aria-label="Gráfico de do seu resultado teste vocacional"></canvas>
    </div>
</template>

<style scoped>
    .chart-container:fullscreen {
        background: white;
    }
</style>