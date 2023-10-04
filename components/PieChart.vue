<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "App",
  components: {
    Pie,
  },
  data() {
    return {
      chartData: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Active Users",
            backgroundColor: [
              "#003f5c",
              "#374c80",
              "#7a5195",
              "#bc5090",
              "#ef5675",
              "#ff764a",
              "#ffa600",
            ],
            data: [320, 350, 400, 320, 380, 420, 390],
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

<template lang="pug">
div.chart
  h1.chart-heading User Statistics
  p.chart-p
    | This pie chart provides a visual representation of user activity for the
    | past 7 days. It illustrates the distribution of user engagement on
    | different days of the week. Understanding these patterns can help in
    | optimizing your platform's performance.
  div.chart-contain
    Pie(:data="chartData", :options="chartOptions")
  p.chart-description Active users on a daily basis

</template>
