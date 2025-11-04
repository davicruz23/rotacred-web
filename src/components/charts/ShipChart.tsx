import { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
const chartOptions = {
  chart: {
    height: 270,
    type: "bar",
    fontFamily: "Poppins, sans-serif",
    animations: {
      enabled: !0,
      easing: "easeinout",
      speed: 1e3,
    },
    dropShadow: {
      enabled: !0,
      opacity: 0,
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
      horizontal: false,
      borderRadius: 4,
      columnWidth: "50%",
      endingShape: "rounded",
    },
  },
  colors: ["#7673E9"],
  dataLabels: {
    enabled: !1,
    formatter: (val: number) => {
      return val / 1000 + "K";
    },
  },
  grid: {
    borderColor: "#B6B6B6",
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
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  legend: {
    show: false,
  },
  tooltip: {
    theme: "dark",
    marker: {
      show: false,
    },
    x: {
      show: !1,
    },
  },
  series: [
    {
      name: "Ship",
      data: [30000, 18000, 43000, 70000, 13000, 37000, 23000],
    },
  ],
  xaxis: {
    title: {
      offsetX: 0,
      offsetY: 0,
      style: {
        color: ["#737b8b"],
        fontSize: "12px",
      },
    },
    crosshairs: {
      show: false,
    },
    labels: {
      offsetX: 0,
      offsetY: 0,
      style: {
        colors: ["#737B8B"],
        fontSize: "14px",
      },
    },
    tooltip: {
      enabled: !1,
    },
  },
  yaxis: {
    title: {
      offsetX: 0,
      offsetY: 0,
      style: {
        color: ["#737b8b"],
        fontSize: "12px",
      },
    },
    labels: {
      offsetX: -10,
      offsetY: 0,
      style: {
        colors: ["#737B8B"],
        fontSize: "14px",
      },
      formatter: (val: number) => {
        return val / 1000 + "K";
      },
    },
  },
  responsive: [
    {
      breakpoint: 576,
      options: {
        chart: {
          height: 250,
        },
        plotOptions: {
          bar: {
            columnWidth: "70%",
          },
        },
      },
    },
  ],
};
const ShipChart = () => {
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
  return <div id="shipCharts" ref={chartRef}></div>;
};
export default ShipChart;
