import { useEffect, useRef } from "react";

const chartOptions = {
  chart: {
    width: "100%",
    type: "bar",
    fontFamily: "Poppins, sans-serif",
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 1000,
    },
    dropShadow: {
      enabled: true,
      opacity: 0,
      blur: 0,
      left: -1,
      top: 5,
    },
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 3,
      columnWidth: "50%",
      endingShape: "rounded",
    },
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  colors: ["#22C55E", "#A855F7", "#33BFFF"],
  dataLabels: {
    enabled: false,
  },
  grid: {
    borderColor: "rgba(0, 0, 0, 0.14)",
    strokeDashArray: 4,
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
  legend: {
    show: true,
    showForSingleSeries: true,
    position: "right",
    horizontalAlign: "center",
    fontSize: "10px",
    fontWeight: 500,
    color: "595959",
    offsetX: 0,
    offsetY: -100,
    labels: {
      useSeriesColors: true,
    },
    markers: {
      width: 12,
      height: 12,
      strokeWidth: 0,
      radius: 12,
      offsetX: -5,
      offsetY: 3,
    },
  },
  tooltip: {
    theme: "dark",
    fillSeriesColor: true,
    marker: {
      show: false,
    },
    x: {
      show: false,
    },
  },
  series: [
    {
      name: "Actual",
      data: [77, 52, 63],
    },
    {
      name: "Planing",
      data: [67, 52, 48],
    },
    {
      name: "Budget",
      data: [105, 67, 57],
    },
  ],
  xaxis: {
    crosshairs: {
      show: false,
    },
    labels: {
      show: false,
      offsetX: 0,
      offsetY: 0,
      style: {
        colors: "#737B8B",
        fontSize: "10px",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false,
      fillSeriesColor: true,
    },
  },
  yaxis: {
    labels: {
      offsetX: 0,
      offsetY: 0,
      style: {
        colors: "#595959",
        fontSize: "10px",
      },
    },
  },
  responsive: [
    {
      breakpoint: 576,
      options: {
        chart: {
          width: "100%",
        },
        plotOptions: {
          bar: {
            columnWidth: "40%",
          },
        },
      },
    },
  ],
};

import ApexCharts from "apexcharts";

const CallAnalyticsCard3 = () => {
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
    <div className="card-six p-0 call-analytics-card bg-white full-height">
      <div className="p-4">
        <h3 className="card-title mb-0">Close Rate</h3>
      </div>

      <div className="mt-auto" id="closeRateChart" ref={chartRef}></div>
    </div>
  );
};

export default CallAnalyticsCard3;
