import { useState, useEffect } from "react";
import TableHeader from "../components/header/table-header/TableHeader";
import TableBottomControls from "../components/utils/TableBottomControls";
import api from "../services/api";
import { AllProductDataType, ChargingType } from "../types";
import { allProductHeaderData } from "../data";

const NewChargingPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);
  const [dataList, setDataList] = useState<AllProductDataType[]>([]);
  const [chargingList, setChargingList] = useState<ChargingType[]>([]);
  const [loading, setLoading] = useState(true);

  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const fetchChargings = async () => {
    try {
      const response = await api.get("/charging/all");
      if (response.status === 200) {
        setChargingList(response.data);
      } else {
        alert("Erro ao carregar produtos");
      }
    } catch (error: any) {
      console.error(error);
      alert("Erro ao conectar com o servidor");
    } finally {
      setLoading(false);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await api.get("/product/all");
      if (response.status === 200) {
        setDataList(response.data);

        const initialQuantities: any = {};
        response.data.forEach((p: any) => {
          initialQuantities[p.id] = 0;
        });
        setQuantities(initialQuantities);
      } else {
        alert("Erro ao carregar produtos");
      }
    } catch (error: any) {
      console.error(error);
      alert("Erro ao conectar com o servidor");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchChargings();
  }, []);

  const handleQuantityChange = (productId: number, value: string) => {
    const num = Number(value);
    setQuantities({ ...quantities, [productId]: num >= 0 ? num : 0 });
  };

  const handleSendCharging = async () => {
    const items = Object.entries(quantities)
      .filter(([_, qty]) => qty > 0)
      .map(([id, qty]) => ({
        productId: Number(id),
        quantity: qty,
      }));

    if (items.length === 0) {
      alert("Digite quantidades em pelo menos um produto.");
      return;
    }

    try {
      // usa PUT e envia apenas a lista de items (array)
      const response = await api.put("/charging/add", items);

      if (response.status === 200 || response.status === 201) {
        alert("Carregamento enviado com sucesso!");

        // atualiza o estoque local (subtrai a quantidade enviada)
        setDataList((prev) =>
          prev.map((p) => {
            const sentQty = quantities[p.id] || 0;
            return sentQty > 0 ? { ...p, amount: p.amount - sentQty } : p;
          }),
        );

        await loadCharging();

        // reseta quantidades
        const reset: any = {};
        Object.keys(quantities).forEach((id) => (reset[id] = 0));
        setQuantities(reset);
      } else {
        alert("Erro ao enviar carregamento.");
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  const loadCharging = async () => {
    const response = await api.get("/charging/all");
    setChargingList(response.data);
  };

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = dataList.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(dataList.length / dataPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="row g-4">
      <div className="col-12">
        <div className="panel">
          <TableHeader
            tableHeading="Carregamento Atual"
            tableHeaderData={allProductHeaderData}
          />

          <div className="panel-body">
            <div className="product-table-quantity">
              <ul>
                <li className="text-white">
                  Carregamento ({chargingList.length})
                </li>
              </ul>
            </div>

            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Carregando...</span>
                </div>
              </div>
            ) : (
              <div className="table-responsive">
                {/* Tabela com input de quantidade */}
                <table className="table table-striped text-white">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nome</th>
                      <th>Disponível</th>
                      <th>Preço</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chargingList.map((charging) =>
                      [...charging.chargingItems]
                        .sort((a, b) => a.id - b.id)
                        .map((item) => (
                          <tr key={item.id}>
                            <td>{item.productId}</td>
                            <td>{item.nameProduct}</td>
                            <td>{item.quantity}</td>
                            <td>R$ {item.priceProduct.toFixed(2)}</td>
                            <td>
                              {item.quantity > 0
                                ? "Disponível"
                                : "Indisponível"}
                            </td>
                          </tr>
                        )),
                    )}
                  </tbody>
                </table>

                <TableBottomControls
                  indexOfFirstData={indexOfFirstData}
                  indexOfLastData={indexOfLastData}
                  dataList={dataList}
                  currentPage={currentPage}
                  totalPages={totalPages}
                  paginate={paginate}
                  pageNumbers={pageNumbers}
                />
              </div>
            )}
          </div>

          <div className="panel-body">
            <div className="product-table-quantity">
              <ul>
                <li className="text-white">Produtos ({dataList.length})</li>
              </ul>
            </div>

            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Carregando...</span>
                </div>
              </div>
            ) : (
              <div className="table-responsive">
                {/* Tabela com input de quantidade */}
                <table className="table table-striped text-white">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nome</th>
                      <th>Disponível</th>
                      <th>Preço</th>
                      <th>Status</th>
                      <th>Quantidade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentData.map((product) => (
                      <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.amount}</td>
                        <td>R$ {product.value}</td>
                        <td>{product.status}</td>
                        <td>
                          <input
                            type="number"
                            min="0"
                            className="form-control"
                            value={quantities[product.id] || 0}
                            onChange={(e) =>
                              handleQuantityChange(product.id, e.target.value)
                            }
                            style={{ width: "100px" }}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <TableBottomControls
                  indexOfFirstData={indexOfFirstData}
                  indexOfLastData={indexOfLastData}
                  dataList={dataList}
                  currentPage={currentPage}
                  totalPages={totalPages}
                  paginate={paginate}
                  pageNumbers={pageNumbers}
                />
              </div>
            )}

            {/* Botão enviar */}
            <div className="text-end p-3">
              <button className="btn btn-primary" onClick={handleSendCharging}>
                Enviar Carregamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewChargingPage;
