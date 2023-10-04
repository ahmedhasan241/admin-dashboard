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
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
          {
            label: "Monthly Sales",
            borderColor: "#4A90E2",
            borderWidth: 2,
            backgroundColor: "rgba(74, 144, 226, 0.2)",
            data: [1200, 1500, 1300, 1800, 1600],
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
  h1.chart-heading Sales Trends Over Time
  p.chart-p
    | This line chart provides a visual representation of sales trends for a specific product or service over a span of five months. The x-axis represents the timeline, indicating each of the five months, while the y-axis represents the sales figures in the respective currency or units.
  div.chart-contain
    Line(:data="chartData" :options="chartOptions")

</template>
