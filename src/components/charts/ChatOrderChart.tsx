import { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
const chartOptions = {
  chart: {
    height: 430,
    type: "area",
    fontFamily: "Poppins, sans-serif",
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 0,
      left: 0,
      blur: 4,
      color: "rgba(96, 91, 255)",
      opacity: 0.2,
    },
    animations: {
      enabled: !0,
      easing: "easeinout",
      speed: 1e3,
    },
  },
  fill: {
    colors: "#5EC3FF",
    opacity: 0.04,
    type: "solid",
    gradient: {
      shade: "dark",
      type: "horizontal",
      shadeIntensity: 0.1,
      gradientToColors: "#5EC3FF",
      inverseColors: true,
      opacityFrom: 0,
      opacityTo: 0.2,
      stops: [0, 50, 100],
    },
  },
  labels: [
    "10am",
    "11am",
    "12am",
    "01am",
    "02am",
    "03am",
    "04am",
    "05am",
    "06am",
    "07am",
  ],
  series: [
    {
      name: "",
      data: [56, 32, 58, 36, 37, 23, 52, 10, 30, 75],
    },
  ],
  dataLabels: {
    enabled: false,
  },
  colors: ["#AE8FF7"],
  stroke: {
    show: true,
    curve: "smooth",
    width: 4,
  },
  grid: {
    borderColor: "rgba(115, 123, 139, 0.1)",
    strokeDashArray: 0,
  },
  tooltip: {
    theme: "dark",
  },
  legend: {
    show: false,
  },
  xaxis: {
    crosshairs: {
      show: !0,
    },
    labels: {
      show: true,
      offsetX: 0,
      offsetY: 0,
      style: {
        colors: "rgba(3, 2, 41, 0.4)",
        fontSize: "11px",
      },
    },
    tooltip: {
      enabled: !1,
    },
  },
  yaxis: {
    labels: {
      show: true,
      offsetX: -14,
      offsetY: 0,
      style: {
        colors: "rgba(3, 2, 41, 0.4)",
        fontSize: "11px",
        fontWeight: 400,
      },
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          height: 240,
        },
        plotOptions: {
          bar: {
            columnWidth: "50%",
          },
        },
      },
    },
  ],
};

const ChatOrderChart = () => {
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
  return <div id="ChatOrder" ref={chartRef}></div>;
};
export default ChatOrderChart;
