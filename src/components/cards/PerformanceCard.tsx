import { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const chartOptions = {
  series: [
    {
      name: "PROVIDER",
      type: "column",
      data: [44, 55, 41, 67, 22, 43, 21],
    },
    {
      name: "CUSTOMER",
      type: "line",
      data: [44, 55, 41, 67, 22, 43, 21],
    },
  ],
  chart: {
    height: 370,
    type: "line",
    stacked: false,
    fontFamily: "Poppins, sans-serif",
    toolbar: {
      show: false,
    },
    animations: {
      enabled: !0,
      easing: "easeinout",
      speed: 1e3,
    },
  },
  stroke: {
    width: [0, 3, 6],
    curve: "smooth",
  },
  plotOptions: {
    bar: {
      columnWidth: "65%",
      borderRadius: 30,
    },
  },
  colors: ["#1A83FE", "#22C55E"],
  fill: {
    opacity: [1, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: "light",
      type: "vertical",
      opacityFrom: 1,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100],
    },
  },
  labels: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
  markers: {
    size: 0,
  },
  xaxis: {
    lines: {
      show: false,
    },
    labels: {
      show: true,
      style: {
        colors: "#595959",
        fontSize: "16px",
        fontWeight: 400,
      },
    },
    axisBorder: {
      show: true,
      color: "#CECECE",
      height: 2,
      width: "100%",
    },
    axisTicks: {
      show: true,
      borderType: "solid",
      color: "#CECECE",
      height: 10,
    },
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    show: true,
    labels: {
      show: true,
      align: "right",
      style: {
        colors: "#595959",
        fontSize: "16px",
        fontWeight: 400,
      },
    },
    axisBorder: {
      show: true,
      color: "#CECECE",
    },
    axisTicks: {
      show: true,
      borderType: "solid",
      color: "#CECECE",
      width: 10,
    },
    tooltip: {
      enabled: false,
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
    offsetY: -20,
    fontSize: "16px",
    markers: {
      width: 12,
      height: 12,
      strokeWidth: 0,
    },
  },
  tooltip: {
    theme: "dark",
    shared: true,
    intersect: false,
  },
  grid: {
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  responsive: [
    {
      breakpoint: 575,
      options: {
        chart: {
          height: 240,
        },
        legend: {
          fontSize: "12px",
          offsetX: 0,
          offsetY: 10,
        },
      },
    },
  ],
};
const PerformanceCard = () => {
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
    <div className="card-six performance-card bg-white full-height">
      <h5 className="mb-0">Performance</h5>

      <div id="performanceChart" ref={chartRef}></div>
    </div>
  );
};
export default PerformanceCard;
