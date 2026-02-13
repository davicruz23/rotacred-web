import { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

interface SalesData {
  mes: string;
  totalVendas: number;
}

interface CustomerChartProps {
  salesData: SalesData[];
  months: number;
}

const CustomerChart = ({ salesData, months }: CustomerChartProps) => {
  const chartRef = useRef<HTMLDivElement>(null);

  // Função para formatar os dados da API para o formato do gráfico
  const formatChartData = (data: SalesData[], monthsCount: number) => {
    // Obter os últimos X meses baseado na seleção
    const currentDate = new Date();
    const monthNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

    // Criar array dos últimos meses
    const lastMonths = [];
    for (let i = monthsCount - 1; i >= 0; i--) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
      lastMonths.push({
        label: `${monthNames[date.getMonth()]}`, // Removi o ano para ficar mais clean
        key: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
      });
    }

    // Mapear dados da API para os meses
    const formattedData = lastMonths.map(month => {
      const foundData = data.find(item => item.mes === month.key);
      return foundData ? foundData.totalVendas : 0;
    });

    const labels = lastMonths.map(month => month.label);

    return {
      labels,
      data: formattedData
    };
  };

  useEffect(() => {
    if (!chartRef.current) return;

    const formatted = formatChartData(salesData, months);

    const chartOptions = {
      chart: {
        height: 260,
        type: "bar" as const,
        fontFamily: "Poppins, sans-serif",
        toolbar: {
          show: false,
        },
        dropShadow: {
          enabled: false,
        },
        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 1000,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 4,
          borderRadiusApplication: "around" as const,
          borderRadiusWhenStacked: "last" as const,
          columnWidth: "40%",
          barHeight: "70%",
        },
      },
      series: [
        {
          name: "Vendas",
          data: formatted.data,
        }
      ],
      dataLabels: {
        enabled: false,
      },
      colors: ["#845ADF"],
      stroke: {
        show: false,
        width: 0,
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
        y: {
          formatter: function (val: number) {
            return val.toString();
          }
        }
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: formatted.labels, // AQUI ESTÁ A CORREÇÃO - usar categories em vez de labels
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
          enabled: false,
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
            return val.toString();
          },
          style: {
            colors: "#606060",
            fontSize: "10px",
            fontWeight: 500,
          },
        },
        // Ajuste automático da escala - o gráfico vai se adaptar aos seus dados
        min: 0,
        forceNiceScale: true,
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

    const chart = new ApexCharts(chartRef.current, chartOptions);
    chart.render();

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [salesData, months]);

  return <div id="newOldCustomerChart" ref={chartRef}></div>;
};

export default CustomerChart;