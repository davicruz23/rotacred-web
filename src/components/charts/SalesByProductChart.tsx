import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type ChartData = {
  productName: string;
  totalQuantity: number;
  totalValue: number;
};

type Props = {
  data: ChartData[];
};

const SalesByProductChart = ({ data }: Props) => {
  const chartData = data.map((item) => ({
    name: item.productName,
    quantidade: item.totalQuantity,
    valor: item.totalValue,
  }));

  return (
    <ResponsiveContainer width={400} height={300}>
      <BarChart data={chartData} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={false} axisLine={false} tickLine={false} />
        <YAxis />
        <Tooltip
          formatter={(value: any, name: string) =>
            name === "valor"
              ? `R$ ${value.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}`
              : value
          }
        />
        {/* <Bar dataKey="quantidade" fill="#3b82f6" name="Qtd Vendida" /> */}
        <Bar dataKey="valor" fill="#10b981" name="Valor Total (R$)" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SalesByProductChart;
