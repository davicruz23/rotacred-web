import { useState } from "react";
import api from "../services/api";
import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";

const ReportCharginsPage = () => {
  const [chargingId, setChargingId] = useState("");

  const handleGeneratePdf = async () => {
    if (!chargingId) {
      alert("Informe o ID do carregamento");
      return;
    }

    try {
      const response = await api.get(`/report/${chargingId}/chargings`, {
        responseType: "blob",
      });

      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `carregamento-${chargingId}.pdf`;
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      alert("Erro ao gerar PDF");
      console.error(error);
    }
  };

  return (
    <div className="container-fluid px-1 my-1">
      <BreadcrumbSection title="Relatório - Carregamentos" link="/inicio" />

      <div className="card shadow-sm mt-4 p-4">
        <h4 className="mb-4">Gerar Relatório de Carregamento</h4>

        <div className="row g-3">
          <div className="col-md-2">
            <label className="form-label">ID do Carregamento *</label>
            <input
              type="number"
              className="form-control"
              value={chargingId}
              onChange={(e) => setChargingId(e.target.value)}
              required
            />
          </div>

          <div className="col-md-2 d-flex align-items-end">
            <button className="btn btn-primary btn-lg w-100" onClick={handleGeneratePdf}>
              📄 Gerar PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCharginsPage;
