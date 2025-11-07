import { useState } from "react";
import api from "../services/api";
import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";

type CommissionResponse = {
  collectorId: number;
  collectorName: string;
  startDate: string;
  endDate: string;
  commission: number;
};

const CommissionCollectorPage = () => {
  const [collectorId, setCollectorId] = useState<number | "">("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [saveHistory, setSaveHistory] = useState(false);

  const [response, setResponse] = useState<CommissionResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!collectorId) {
      alert("Informe o ID do cobrador!");
      return;
    }

    setLoading(true);

    try {
      const res = await api.get(`/collector/${collectorId}/commission`, {
        params: {
          startDate: startDate || undefined,
          endDate: endDate || undefined,
          saveHistory,
        },
      });

      setResponse(res.data);
    } catch (err) {
      console.error(err);
      alert("Erro ao buscar comissão.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid px-4 my-4">
      <BreadcrumbSection title="Comissão do Cobrador" link="/inicio" />

      <div className="row mt-3">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="card-title mb-4">Consultar Comissão</h4>

              {/* Form */}
              <div className="row g-3">

                {/* ID do cobrador */}
                <div className="col-md-4">
                  <label className="form-label">ID do Cobrador *</label>
                  <input
                    type="number"
                    className="form-control"
                    value={collectorId}
                    onChange={(e) =>
                      setCollectorId(e.target.value ? Number(e.target.value) : "")
                    }
                    required
                  />
                </div>

                {/* Data inicial */}
                <div className="col-md-4">
                  <label className="form-label">Data inicial</label>
                  <input
                    type="date"
                    className="form-control"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>

                {/* Data final */}
                <div className="col-md-4">
                  <label className="form-label">Data final</label>
                  <input
                    type="date"
                    className="form-control"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>

                {/* Salvar histórico */}
                <div className="col-md-12 mt-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      id="saveHistory"
                      className="form-check-input"
                      checked={saveHistory}
                      onChange={(e) => setSaveHistory(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="saveHistory">
                      Salvar no histórico?
                    </label>
                  </div>
                </div>

                <div className="col-md-12 mt-3">
                  <button
                    onClick={handleSearch}
                    className="btn btn-primary w-100 btn-lg"
                  >
                    Buscar Comissão
                  </button>
                </div>
              </div>

              {/* Resultado */}
              {loading && (
                <div className="text-center mt-4">Carregando...</div>
              )}

              {response && (
                <div className="alert alert-success mt-4">
                  <h5>Resultado da Comissão</h5>
                  <p><strong>Cobrador:</strong> {response.collectorName}</p>
                  <p><strong>Período:</strong> {response.startDate} → {response.endDate}</p>
                  <p><strong>Comissão (R$):</strong> {response.commission.toFixed(2)}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommissionCollectorPage;
