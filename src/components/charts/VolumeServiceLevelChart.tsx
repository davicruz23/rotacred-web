import { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
const chartOptions = {
  series: [
    {
      name: "Volume",
      data: [44, 55, 41, 67, 22, 43, 36],
    },
    {
      name: "Service",
      data: [13, 23, 20, 14, 13, 27, 45],
    },
  ],
  colors: ["#2CC56F", "#0095FF"],
  chart: {
    type: "bar",
    height: 230,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 4,
      columnWidth: "30%",
      dataLabels: {
        total: {
          enabled: false,
          style: {
            fontSize: "13px",
            fontWeight: 400,
          },
        },
      },
    },
  },
  legend: {
    position: "bottom",
    offsetY: 0,
  },
  fill: {
    opacity: 1,
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
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
};
const VolumeServiceLevelChart = () => {
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
  return <div id="VolumeServiceLevel" ref={chartRef}></div>;
};
export default VolumeServiceLevelChart;
