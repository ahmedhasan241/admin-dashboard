<template lang="pug">
div.chart
  h1.chart-heading Top-Selling Products
  p.chart-p
    | The bar chart above provides a visual representation of the top-selling
    | products for the month of September 2023. These products have garnered the
    | highest sales volume within this time frame. Each bar on the chart
    | represents a specific product, and the height of the bar corresponds to
    | the quantity of units sold.
  div.chart-contain
    Bar(:data="chartData", :options="chartOptions")

</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "BarChart",
  components: { Bar },
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
        labels: [
          "Product A",
          "Product B",
          "Product C",
          "Product D",
          "Product E",
        ],
        datasets: [
          {
            label: "Top-Selling Products",
            backgroundColor: "rgba(74, 144, 226)",
            data: [250, 180, 320, 210, 280],
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
