<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "LineChart",
  components: { Line },
  computed: {
    myStyles() {
      return {
        height: "100px",
        position: "relative",
      };
    },
  },
  data() {
    return {
      chartData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Monthly Sales",
            borderColor: "#4A90E2",
            borderWidth: 2,
            backgroundColor: "rgba(74, 144, 226, 0.8)",
            data: [1200, 1500, 1300, 1800, 1600, 2000],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    };
  },
};
</script>

<style scoped></style>

<template lang="pug">
div.chart
  h1.chart-heading Sales Chart
  p.chart-p
    | This line chart displays our monthly sales revenue for the past year. It
    | shows a consistent upward trend with a noticeable peak in July, indicating
    | our best month. However, we experienced a slight dip in November, which we
    | should investigate further
  div.chart-contain
    Line(:data="chartData", :options="chartOptions")
  p.chart-description Monthly sales trends for the past 6 months

</template>
