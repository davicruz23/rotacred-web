import { useEffect, useState } from "react";
import api from "../services/api";
import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";

type AssignedType = {
  collectorId: number;
  city: string;
  totalSalesAssigned: number;
};

const AddCitiesByCollectorPage = () => {
  const [collectorList, setCollectorList] = useState<{ id: number; collectorName: string }[]>([]);
  const [assignedResult, setAssignedResult] = useState<AssignedType | null>(null);
  const [selectedCollector, setSelectedCollector] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [cityList, setCityList] = useState<string[]>([]);

  // Busca cidades do backend
  const fetchCities = async () => {
    const response = await api.get("/address/cities");
    setCityList(response.data);
  };

  // Busca cobradores
  const fetchCollectors = async () => {
    const response = await api.get("/collector/name/all");
    setCollectorList(response.data);
  };

  useEffect(() => {
    fetchCities();
    fetchCollectors();
  }, []);

  const handleAssign = async () => {
    if (!selectedCollector || !selectedCity) {
      alert("Selecione o cobrador e a cidade.");
      return;
    }

    try {
      const response = await api.post(`/collector/${selectedCollector}/assign/${selectedCity}`);

      setAssignedResult({
        collectorId: response.data.collectorId,
        city: response.data.city,
        totalSalesAssigned: response.data.totalSalesAssigned,
      });

      // limpa seleção após atribuir
      setSelectedCity("");
      setSelectedCollector("");
    } catch (error) {
      console.error(error);
      alert("Erro ao atribuir cidade.");
    }
  };

  const getCollectorName = (id: number) => {
    const found = collectorList.find((c) => c.id === id);
    return found?.collectorName ?? "Carregando...";
  };

  return (
    <div className="container-fluid px-1 my-1">
      <BreadcrumbSection title="Atribuir Cidade ao Cobrador" link="/inicio" />

      <div className="card shadow-sm p-4">
        <h4 className="mb-4">Atribuição</h4>

        <div className="row g-3">
          <div className="col-md-4">
            <label className="form-label">Selecione o Cobrador *</label>
            <select
              className="form-select"
              value={selectedCollector}
              onChange={(e) => setSelectedCollector(e.target.value)}
            >
              <option value="">-- selecione --</option>
              {collectorList.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.collectorName}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-4">
            <label className="form-label">Selecione a Cidade *</label>
            <select
              className="form-select"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="">-- selecione --</option>
              {cityList.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-2 d-flex align-items-end">
            <button className="btn btn-success w-100" onClick={handleAssign}>
              Atribuir
            </button>
          </div>
        </div>
      </div>

      {assignedResult && (
        <div className="card shadow-sm mt-4 p-4">
          <h4 className="mb-3">Última atribuição</h4>

          <p>
            <strong>Cobrador:</strong> {getCollectorName(assignedResult.collectorId)}
          </p>
          <p>
            <strong>Total de cobranças atribuídas:</strong> {assignedResult.totalSalesAssigned}
          </p>
        </div>
      )}
    </div>
  );
};

export default AddCitiesByCollectorPage;
