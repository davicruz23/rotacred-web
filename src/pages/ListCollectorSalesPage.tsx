import { useEffect, useState } from "react";
import api from "../services/api";
import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
import { FaMapMarkerAlt, FaCheckCircle, FaTimesCircle, FaMinusCircle } from "react-icons/fa";

type ProductType = {
  id: number;
  nameProduct: string;
  quantity: number;
};

type InstallmentType = {
  id: number;
  dueDate: string;
  amount: number;
  paid: boolean;
  status: string | null;
  isValid: boolean;
  attemptLongitude: number;
  attemptLatitude: number;
};

type SaleType = {
  id: number;
  numberSale: string;
  saleDate: string;
  paymentType: string;
  clientName: string;
  total: number;
  longitude: number;
  latitude: number;
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
      const response = await api.get("/collector/all/sales");
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
              <h2
                className="accordion-header"
                id={`heading-coll-${collector.id}`}
              >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#coll-${collector.id}`}
                  aria-expanded="false"
                  aria-controls={`coll-${collector.id}`}
                >
                  {collector.collectorName} ({collector.sales.length} Cobranças)
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
                        <h2
                          className="accordion-header"
                          id={`heading-sale-${sale.id}`}
                        >
                          <button
                            className="accordion-button collapsed bg-light"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#sale-${sale.id}`}
                            aria-expanded="false"
                            aria-controls={`sale-${sale.id}`}
                          >
                            Venda #{sale.id} — {sale.clientName} — R${" "}
                            {sale.total}
                          </button>
                        </h2>

                        <div
                          id={`sale-${sale.id}`}
                          className="accordion-collapse collapse"
                          aria-labelledby={`heading-sale-${sale.id}`}
                          data-bs-parent={`#sales-${collector.id}`}
                        >
                          <div className="accordion-body">
                            <p>
                              <strong>Data:</strong> {sale.saleDate}
                            </p>
                            <p>
                              <strong>Pagamento:</strong> {sale.paymentType}
                            </p>
                            <p>
                              <strong>Total:</strong> R$ {sale.total}
                            </p>

                            {/* ✅ Botão estilizado do Google Maps */}
                            {sale.latitude && sale.longitude && (
                              <div className="mb-3">
                                <button
                                  className="btn btn-outline-primary btn-sm d-flex align-items-center gap-2"
                                  onClick={() =>
                                    window.open(
                                      `https://www.google.com/maps?q=${sale.latitude},${sale.longitude}`,
                                      "_blank",
                                      "noopener,noreferrer",
                                    )
                                  }
                                >
                                  <i className="bi bi-geo-alt-fill"></i> Ver no
                                  Mapa
                                </button>
                              </div>
                            )}

                            <hr />

                            <h6>🛒 Produtos:</h6>
                            <ul className="list-group">
                              {sale.products.map((p) => (
                                <li key={p.id} className="list-group-item">
                                  <strong>{p.quantity}x</strong> {p.nameProduct}
                                </li>
                              ))}
                            </ul>

                            <h6 className="mt-3">💰 Parcelas:</h6>
                            <table className="table table-sm table-bordered">
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Vencimento</th>
                                  <th>Valor</th>
                                  <th>Pago</th>
                                  <th>Localização da cobrança</th>
                                  <th>Ver localização</th>
                                </tr>
                              </thead>
                              <tbody>
                                {sale.installments.map((i) => (
                                  <tr key={i.id}>
                                    <td>{i.id}</td>
                                    <td>{i.dueDate}</td>
                                    <td>R$ {i.amount}</td>
                                    <td style={{ textAlign: "center" }}>
                                      {i.paid ? (
                                        <FaCheckCircle
                                          color="#28a745"
                                          size={18}
                                          title="Parcela Paga"
                                        />
                                      ) : (
                                        <FaTimesCircle
                                          color="#dc3545"
                                          size={18}
                                          title="Parcela Pendente"
                                        />
                                      )}
                                    </td>

                                    <td style={{ textAlign: "center" }}>
                                      {i.isValid === true && (
                                        <FaCheckCircle
                                          color="#28a745"
                                          size={18}
                                          title="Localização validada"
                                        />
                                      )}

                                      {i.isValid === false && (
                                        <FaTimesCircle
                                          color="#dc3545"
                                          size={18}
                                          title="Localização inválida"
                                        />
                                      )}

                                      {i.isValid == null && (
                                        <FaMinusCircle
                                          color="#6c757d"
                                          size={18}
                                          title="Localização não verificada"
                                        />
                                      )}
                                    </td>

                                    <td
                                      style={{
                                        cursor:
                                          i.attemptLatitude &&
                                          i.attemptLongitude
                                            ? "pointer"
                                            : "not-allowed",
                                        textAlign: "center",
                                      }}
                                      title={
                                        i.attemptLatitude && i.attemptLongitude
                                          ? "Abrir localização no Google Maps"
                                          : "Localização indisponível"
                                      }
                                      onClick={() => {
                                        if (
                                          i.attemptLatitude &&
                                          i.attemptLongitude
                                        ) {
                                          window.open(
                                            `https://www.google.com/maps?q=${i.attemptLatitude},${i.attemptLongitude}`,
                                            "_blank",
                                            "noopener,noreferrer",
                                          );
                                        }
                                      }}
                                    >
                                      <FaMapMarkerAlt
                                        size={18}
                                        color={
                                          i.attemptLatitude &&
                                          i.attemptLongitude
                                            ? "#007bff"
                                            : "#ccc"
                                        }
                                        style={{
                                          transition:
                                            "transform 0.2s, color 0.2s",
                                        }}
                                        onMouseEnter={(e) => {
                                          if (
                                            i.attemptLatitude &&
                                            i.attemptLongitude
                                          ) {
                                            e.currentTarget.style.transform =
                                              "scale(1.2)";
                                            e.currentTarget.style.color =
                                              "#0056b3";
                                          }
                                        }}
                                        onMouseLeave={(e) => {
                                          if (
                                            i.attemptLatitude &&
                                            i.attemptLongitude
                                          ) {
                                            e.currentTarget.style.transform =
                                              "scale(1.0)";
                                            e.currentTarget.style.color =
                                              "#007bff";
                                          }
                                        }}
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
