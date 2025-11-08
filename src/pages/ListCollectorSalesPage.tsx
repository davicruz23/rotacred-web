import { useEffect, useState } from "react";
import api from "../services/api";
import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";

type ProductType = {
  id: number;
  nameProduct: string;
};

type InstallmentType = {
  id: number;
  dueDate: string;
  amount: number;
  paid: boolean;
  status: string | null;
};

type SaleType = {
  id: number;
  numberSale: string;
  saleDate: string;
  paymentType: string;
  clientName: string;
  total: number;
  products: ProductType[];
  installments: InstallmentType[];
};

type CollectorType = {
  id: number;
  collectorName: string;
  sales: SaleType[];
};

const ListCollectorSalesPage = () => {
  const [collectorData, setCollectorData] = useState<CollectorType[]>([]);

  const fetchCollectorsWithSales = async () => {
    try {
      const response = await api.get("/collector/all");
      setCollectorData(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      alert("Erro ao carregar cobradores.");
    }
  };

  useEffect(() => {
    fetchCollectorsWithSales();
  }, []);

  return (
    <div className="container-fluid px-1 my-1">
      <BreadcrumbSection title="Lista de venda para cobrança" link="/inicio" />

      <div className="card p-4 shadow-sm">
        <h3 className="mb-4">Lista de cobranças</h3>

        <div className="accordion" id="accordionCollectors">
          {collectorData.map((collector) => (
            <div className="accordion-item" key={collector.id}>
              <h2 className="accordion-header" id={`heading-coll-${collector.id}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#coll-${collector.id}`}
                  aria-expanded="false"
                  aria-controls={`coll-${collector.id}`}
                >
                  {collector.collectorName} ({collector.sales.length} vendas)
                </button>
              </h2>

              <div
                id={`coll-${collector.id}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading-coll-${collector.id}`}
                data-bs-parent="#accordionCollectors"
              >
                <div className="accordion-body">
                  {collector.sales.length === 0 && (
                    <p className="text-muted">Nenhuma venda encontrada.</p>
                  )}

                  <div className="accordion" id={`sales-${collector.id}`}>
                    {collector.sales.map((sale) => (
                      <div className="accordion-item" key={sale.id}>
                        <h2 className="accordion-header" id={`heading-sale-${sale.id}`}>
                          <button
                            className="accordion-button collapsed bg-light"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#sale-${sale.id}`}
                            aria-expanded="false"
                            aria-controls={`sale-${sale.id}`}
                          >
                            Venda #{sale.id} — {sale.clientName} — R$ {sale.total}
                          </button>
                        </h2>

                        <div
                          id={`sale-${sale.id}`}
                          className="accordion-collapse collapse"
                          aria-labelledby={`heading-sale-${sale.id}`}
                          data-bs-parent={`#sales-${collector.id}`}
                        >
                          <div className="accordion-body">
                            <p><strong>Data:</strong> {sale.saleDate}</p>
                            <p><strong>Pagamento:</strong> {sale.paymentType}</p>
                            <p><strong>Total:</strong> R$ {sale.total}</p>

                            <hr />

                            <h6>🛒 Produtos:</h6>
                            <ul>
                              {sale.products.map((p) => (
                                <li key={p.id}>{p.nameProduct}</li>
                              ))}
                            </ul>

                            <h6 className="mt-3">💰 Parcelas:</h6>
                            <table className="table table-sm table-bordered">
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Vencimento</th>
                                  <th>Valor</th>
                                  <th>Pago?</th>
                                </tr>
                              </thead>
                              <tbody>
                                {sale.installments.map((i) => (
                                  <tr key={i.id}>
                                    <td>{i.id}</td>
                                    <td>{i.dueDate}</td>
                                    <td>R$ {i.amount}</td>
                                    <td>{i.paid ? "✅" : "❌"}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListCollectorSalesPage;
