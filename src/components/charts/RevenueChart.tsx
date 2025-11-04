import { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
const chartOptions = {
  chart: {
    height: 310,
    type: "bar",
    fontFamily: "Poppins, sans-serif",
    animations: {
      enabled: !0,
      easing: "easeinout",
      speed: 1e3,
    },
    dropShadow: {
      enabled: !0,
      opacity: 0.02,
      blur: 0,
      left: -1,
      top: 5,
    },
    zoom: {
      enabled: !1,
    },
    toolbar: {
      show: !1,
    },
  },
  plotOptions: {
    bar: {
      horizontal: !1,
      borderRadius: 0,
      columnWidth: "40%",
      endingShape: "",
    },
  },
  colors: ["#1A83FE", "#E6E8EC"],
  dataLabels: {
    enabled: !1,
  },
  grid: {
    borderColor: "#E2E7E7",
    strokeDashArray: 2,
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  labels: [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ],
  legend: {
    position: "bottom",
    horizontalAlign: "left",
    offsetY: 5,
    fontSize: "12px",
    markers: {
      width: 11,
      height: 11,
      radius: 12,
    },
    itemMargin: {
      horizontal: 0,
      vertical: 0,
    },
  },
  tooltip: {
    theme: "dark",
    marker: {
      show: !0,
    },
    x: {
      show: !1,
    },
  },
  stroke: {
    show: !0,
    colors: ["transparent"],
    width: 3,
  },
  series: [
    {
      name: "Last 12 days",
      data: [110, 86, 98, 73, 123, 135, 100, 86, 98, 73, 123, 135],
    },
    {
      name: "Last Month",
      data: [61, 110, 49, 98, 86, 61, 61, 110, 49, 98, 86, 61],
    },
  ],
  xaxis: {
    crosshairs: {
      show: !0,
    },
    labels: {
      offsetX: 0,
      offsetY: 0,
      style: {
        colors: "#737B8B",
        fontSize: "11px",
      },
    },
    tooltip: {
      enabled: !1,
    },
  },
  yaxis: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          height: 200,
        },
        plotOptions: {
          bar: {
            columnWidth: "70%",
          },
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          offsetY: 10,
          fontSize: "12px",
          markers: {
            width: 12,
            height: 12,
            strokeWidth: 0,
          },
        },
      },
    },
  ],
};
const RevenueChart = () => {
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
  return <div id="RevenueCharts" ref={chartRef}></div>;
};
export default RevenueChart;
