import { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
const chartOptions = {
  chart: {
    height: 280,
    type: "donut",
    fontFamily: "Poppins, sans-serif",
    animations: {
      enabled: !0,
      easing: "easeinout",
      speed: 1e3,
    },
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: false,
      top: 0,
      left: 0,
      blur: 4,
      color: "rgba(96, 91, 255)",
      opacity: 0.2,
    },
  },
  stroke: {
    show: true,
    curve: "smooth",
    width: 4,
  },
  legend: {
    show: true,
    position: "bottom",
    horizontalAlign: "center",
    fontSize: "12px",
    fontWeight: 400,
    color: "rgba(3, 2, 41, 0.5)",
    offsetX: 0,
    offsetY: 10,
    markers: {
      width: 15,
      height: 15,
      radius: 5,
      offsetX: 0,
      offsetY: 2,
    },
    itemMargin: {
      horizontal: 0,
      vertical: 0,
    },
  },
  colors: ["#5B93FF", "#FFD66B", "#FF8F6B"],
  series: [27, 50, 23],
  labels: ["Asian Food", "Fast Food", "Western Food"],
  responsive: [
    {
      breakpoint: 576,
      options: {
        chart: {
          height: 280,
        },
        legend: {
          fontSize: "12px",
          offsetY: 5,
        },
      },
    },
  ],
};

const PopularFoodChart = () => {
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
  return (
    <div id="popularFoodChart">
      <div ref={chartRef}></div>
      <div className="food-chart-center-content">
        <span>97%</span>
        <span>Transactions</span>
      </div>
    </div>
  );
};
export default PopularFoodChart;
