<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Chart } from 'chart.js/auto';
import { AnalysisEnum } from '~/types/analysis';

const chartCanvas = ref(null);
let chartInstance = null;

const props = defineProps<{
    result: Record<AnalysisEnum, number>
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

    chartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [AnalysisEnum.I, AnalysisEnum.C, AnalysisEnum.E, AnalysisEnum.A, AnalysisEnum.R, AnalysisEnum.S],
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
                    display: true,
                    font: { size: 24, weight: 'bold' },
                    color: "#EF6B01",
                    text: 'Resultado Do Seu Teste Vocacional'
                },
                subtitle: {
                    display: true,
                    text:  'Os perfis possuem abaixo uma descrição de cada e as recomendações sugeridas de acordo com seu resultado',
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
</script>

<template>
    <canvas ref="chartCanvas" aria-label="Gráfico de do seu resultado teste vocacional"></canvas>
</template>