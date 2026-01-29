import { useState, useEffect } from "react";
import CustomerChart from "../charts/CustomerChart";
import MonthDropdown from "../utils/dropdowns/MonthDropdown";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

interface SalesData {
  mes: string;
  totalVendas: number;
}

const CustomerCard = () => {
  const [selectedMonths, setSelectedMonths] = useState<number>(6);
  const [salesData, setSalesData] = useState<SalesData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    api
      .get(`/dashboard/sales-per-month?meses=${selectedMonths}`)
      .then((response) => {
        setSalesData(response.data);
      })
      .catch((err: any) => {
        console.error("Erro ao buscar dados de vendas:", err);
        setSalesData([]);

        if (err?.response?.status === 404) {
        navigate("/error-404", { replace: true });
        return;
      }

      // outros erros (500, etc)
      navigate("/error-500", { replace: true });
      return;
      })
      .finally(() => setLoading(false));
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
        <div className="d-flex justify-content-center align-items-center" style={{ height: "260px" }}>
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
