import { useState, useEffect } from "react";
import CustomerChart from "../charts/CustomerChart";
import MonthDropdown from "../utils/dropdowns/MonthDropdown";

interface SalesData {
  mes: string;
  totalVendas: number;
}

const CustomerCard = () => {
  const [selectedMonths, setSelectedMonths] = useState<number>(6);
  const [salesData, setSalesData] = useState<SalesData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Função para buscar dados da API
  const fetchSalesData = async (months: number) => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:8081/api/dashboard/sales-per-month?meses=${months}`);
      const data = await response.json();
      setSalesData(data);
    } catch (error) {
      console.error("Erro ao buscar dados de vendas:", error);
      setSalesData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSalesData(selectedMonths);
  }, [selectedMonths]);

  const handleMonthChange = (months: number) => {
    setSelectedMonths(months);
  };

  return (
    <div className="card pb-2 full-height">
      <div className="new-old-customer-wrap d-flex align-items-center justify-content-between mb-4 flex-wrap row-gap-3">
        <h5 className="mb-0">Vendas por Mês</h5>
        <div className="d-flex align-items-center">
          <MonthDropdown onMonthChange={handleMonthChange} />
        </div>
      </div>

      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '260px' }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Carregando...</span>
          </div>
        </div>
      ) : (
        <CustomerChart salesData={salesData} months={selectedMonths} />
      )}
    </div>
  );
};

export default CustomerCard;