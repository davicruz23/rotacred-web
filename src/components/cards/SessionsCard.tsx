import { useEffect, useState } from "react";
import api from "../../services/api";

const SessionsCard = () => {
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("dashboard/count/chargings")
      .then((res) => setTotal(res.data))
      .catch((err) => console.error("Erro ao buscar total de cidades:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Carregando...</div>;

  return (
    <div className="card saas-cta-card">
      <div className="d-flex align-items-center">
        <div className="icon-wrap">
          <i className="ti ti-truck"></i>
        </div>
        <h6 className="mb-0 fw-medium text-white">Total de Cidades</h6>
      </div>

      <h3 className="title my-4 text-white">{total.toLocaleString("pt-BR")}</h3>

      <div className="subtitle text-white">Total de cidades</div>
    </div>
  );
};
export default SessionsCard;
