"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const InsightBarChart = () => {
  const data = {
    labels: [
      "01/12",
      "02/12",
      "03/12",
      "04/12",
      "05/12",
      "06/12",
      "07/12",
      "08/12",
      "09/12",
      "10/12",
      "11/12",
      "12/12",
    ],
    datasets: [
      {
        label: "NPP",
        data: [55, 30, 37, 51, 56, 33, 60, 45, 55, 57, 38, 50],
        backgroundColor: "#02A0FC",
        borderRadius: Number.MAX_VALUE,
        barThickness: 14,
        borderSkipped: false,
      },
      {
        label: "GPP",
        data: [50, 50, 34, 56, 48, 38, 56, 50, 55, 54, 33, 45],
        backgroundColor: "#34B53A",
        borderRadius: Number.MAX_VALUE,
        barThickness: 14,
        borderSkipped: false,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        align: "start",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
    datasets: {
      bar: { barPercentage: 0.2, categoryPercentage: 0.5, indexAxis: "x" },
    },
    scales: {
      x: {
        beginAtZero: true,
        border: { width: 0 },
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
  };
  return <Bar data={data} options={options} />;
};

export default InsightBarChart;
