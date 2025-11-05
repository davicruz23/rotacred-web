import { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
const chartOptions = {
  chart: {
    height: 260,
    type: "bar",
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
      speed: 1000,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 4,
      borderRadiusApplication: "around",
      borderRadiusWhenStacked: "last",
      columnWidth: "40%",
      barHeight: "70%",
    },
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  series: [
    {
      name: "",
      data: [7800, 13200, 9600, 24500, 18000, 14800, 18000],
    },
    {
      name: "",
      data: [7800, 13200, 9600, 24500, 18000, 14800, 18000],
    },
  ],
  dataLabels: {
    enabled: false,
  },
  colors: ["rgba(132, 90, 223, 0.15)", "#845ADF"],
  stroke: {
    show: false,
  },
  grid: {
    show: false,
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
      show: false,
    },
    axisBorder: {
      show: true,
      color: "rgba(0, 0, 0, 0.10)",
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
        colors: "#606060",
        fontSize: "10px",
        fontWeight: 500,
      },
    },
    tooltip: {
      enabled: !1,
    },
  },
  yaxis: {
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: true,
      color: "rgba(0, 0, 0, 0.10)",
      offsetX: 0,
      offsetY: 0,
    },
    labels: {
      show: true,
      offsetX: -10,
      offsetY: 0,
      formatter: function (val: number) {
        return val / 1000 + "k";
      },
      style: {
        colors: "#606060",
        fontSize: "10px",
        fontWeight: 500,
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
const CustomerChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chart = new ApexCharts(chartRef.current, chartOptions);

    const initChart = () => {
      chart.render();
    };

    initChart();

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, []);
  return <div id="newOldCustomerChart" ref={chartRef}></div>;
};
export default CustomerChart;
