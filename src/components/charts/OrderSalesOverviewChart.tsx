import { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
const chartOptions = {
  chart: {
    height: 350,
    type: "area",
    fontFamily: "Poppins, sans-serif",
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: false,
    },
    animations: {
      enabled: !0,
      easing: "easeinout",
      speed: 1e3,
    },
  },
  fill: {
    colors: "#1A83FE",
    opacity: 0.1,
    type: "solid",
    gradient: {
      shade: "dark",
      type: "horizontal",
      shadeIntensity: 0.1,
      gradientToColors: "#1A83FE",
      inverseColors: true,
      opacityFrom: 0.2,
      opacityTo: 0,
      stops: [0, 50, 100],
    },
  },
  labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
  series: [
    {
      name: "",
      data: [7800, 13200, 9600, 24500, 18000, 14800, 18000],
    },
  ],
  dataLabels: {
    enabled: false,
  },
  colors: ["#1A83FE"],
  stroke: {
    show: true,
    curve: "smooth",
    width: 2,
  },
  grid: {
    borderColor: "rgba(37, 47, 74, 0.08)",
    strokeDashArray: 4,
  },
  tooltip: {
    theme: "dark",
    fillSeriesColor: true,
    marker: {
      show: false,
    },
    style: {
      fontSize: "12px",
    },
    x: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  xaxis: {
    crosshairs: {
      show: true,
    },
    axisTicks: {
      show: true,
      borderType: "solid",
      color: "#CECECE",
      height: 11,
      offsetX: 0,
      offsetY: 0,
    },
    axisBorder: {
      show: true,
      color: "#CECECE",
      height: 1,
      width: "100%",
      offsetX: 0,
      offsetY: 0,
    },
    labels: {
      show: true,
      offsetX: 0,
      offsetY: 0,
      style: {
        colors: "#595959",
        fontSize: "15px",
      },
    },
    tooltip: {
      enabled: !1,
    },
  },
  yaxis: {
    axisTicks: {
      show: true,
      borderType: "solid",
      color: "#CECECE",
      height: 11,
      offsetX: 0,
      offsetY: 0,
    },
    axisBorder: {
      show: true,
      color: "#CECECE",
      offsetX: 0,
      offsetY: 0,
    },
    labels: {
      show: true,
      offsetX: 0,
      offsetY: 0,
      formatter: function (val: number) {
        return val / 1000 + "k";
      },
      style: {
        colors: "#595959",
        fontSize: "15px",
        fontWeight: 400,
      },
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          height: 200,
        },
      },
    },
  ],
};
const OrderSalesOverviewChart = () => {
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
  return <div id="OrderSalesOverviewChart" ref={chartRef}></div>;
};
export default OrderSalesOverviewChart;
