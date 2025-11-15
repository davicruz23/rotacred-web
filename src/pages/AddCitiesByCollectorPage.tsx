import { useEffect, useState } from "react";
import api from "../services/api";
import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";

type SaleType = {
  id: number;
  clientId: number;
  clientName: string;
  city: string;
  state: string;
  amount: number;
};

type GroupedType = {
  city: string;
  totalSales: number;
  sales: SaleType[];
};

const AddCitiesByCollectorPage = () => {
  const [collectorList, setCollectorList] = useState<{ id: number; collectorName: string }[]>([]);
  const [groupedSales, setGroupedSales] = useState<GroupedType[]>([]);
  const [selectedCollector, setSelectedCollector] = useState("");
  const [selectedSales, setSelectedSales] = useState<number[]>([]);

  const fetchGroupedSales = async () => {
    const response = await api.get("/collector/grouped-by-city/assigment");
    setGroupedSales(response.data);
  };

  const fetchCollectors = async () => {
    const response = await api.get("/collector/name/all");
    setCollectorList(response.data);
  };

  useEffect(() => {
    fetchGroupedSales();
    fetchCollectors();
  }, []);

  const toggleSale = (id: number) => {
    setSelectedSales((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleAssign = async () => {
    if (!selectedCollector || selectedSales.length === 0) {
      alert("Selecione o cobrador e as sales.");
      return;
    }

    try {
      await api.post(`/collector/assign-sales`, {
        collectorId: Number(selectedCollector),
        saleIds: selectedSales,
      });

      alert("Cobranças Direcionadas!");

      setSelectedSales([]);
      setSelectedCollector("");

      fetchGroupedSales();

    } catch (error) {
      console.error(error);
      alert("Erro ao atribuir.");
    }
  };

  return (
    <div className="container-fluid px-1 my-1">
      <BreadcrumbSection title="Atribuir Cobranças ao Cobrador" link="/inicio" />

      <div className="card shadow-sm p-4 mb-4">
        <h4 className="mb-3">Selecione o cobrador</h4>

        <select
          className="form-select w-25"
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

      <div className="accordion" id="accordionCities">
        {groupedSales.map((group, index) => (
          <div className="accordion-item" key={group.city}>

            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${index}`}
              >
                {group.city} ({group.totalSales})
              </button>
            </h2>

            <div
              id={`collapse-${index}`}
              className="accordion-collapse collapse"
              data-bs-parent="#accordionCities"
            >
              <div className="accordion-body">

                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Cliente</th>
                      <th>Valor</th>
                      <th className="text-end">Selecionar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.sales.map((sale) => (
                      <tr key={sale.id}>
                        <td>{sale.clientName}</td>
                        <td>R$ {sale.amount}</td>
                        <td className="text-end">
                          <input
                            type="checkbox"
                            checked={selectedSales.includes(sale.id)}
                            onChange={() => toggleSale(sale.id)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

              </div>
            </div>

          </div>
        ))}
      </div>

      <div className="text-end mt-4">
        <button className="btn btn-success px-4" onClick={handleAssign}>
          Atribuir Selecionadas
        </button>
      </div>
    </div>
  );
};

export default AddCitiesByCollectorPage;
