import { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
const chartOptions = {
  chart: {
    height: 250,
    type: "radialBar",
    fontFamily: "Poppins, sans-serif",
    animations: {
      enabled: true,
      easing: "easeInOut",
      speed: 1000,
    },
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: false,
    },
  },
  legend: {
    show: false,
  },
  plotOptions: {
    radialBar: {
      inverseOrder: false,
      startAngle: 0,
      endAngle: 360,
      hollow: {
        margin: 2,
        size: "40%",
        background: "transparent",
        position: "front",
        dropShadow: {
          enabled: false,
        },
      },
      track: {
        show: true,
        background: "#F2F3F9",
        strokeWidth: "100%",
        opacity: 1,
        margin: 10,
        dropShadow: {
          enabled: false,
        },
      },
      dataLabels: {
        show: true,
        name: {
          show: true,
          fontSize: "16px",
          fontWeight: 600,
        },
        value: {
          show: true,
          fontSize: "14px",
          fontWeight: 400,
          formatter: function (val: number) {
            return val + "%";
          },
        },
        total: {
          show: false,
          label: "Total",
          color: "#373d3f",
          fontSize: "16px",
          fontWeight: 600,
        },
      },
    },
  },
  colors: ["#845ADF", "#FF7049", "#20C997"],
  series: [80, 50, 15],
  labels: ["Desktop", "Mobile", "Tablets"],
  responsive: [
    {
      breakpoint: 576,
      options: {
        chart: {
          height: 200,
        },
        legend: {
          position: "bottom",
          horizontalAlign: "center",
        },
      },
    },
  ],
};
const SessionsByDeviceChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chart = new ApexCharts(chartRef.current, chartOptions);

    const initChart = () => {
      chart.render(); // Attempt to render with default options
    };

    initChart();

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, []);
  return <div id="SessionsByDevice" ref={chartRef}></div>;
};
export default SessionsByDeviceChart;
