import { useState, useEffect } from "react";
import TableHeader from "../components/header/table-header/TableHeader";
import TableBottomControls from "../components/utils/TableBottomControls";
import api from "../services/api";
import { AllProductDataType } from "../types";
import { allProductHeaderData } from "../data";

const NewChargingPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);
  const [dataList, setDataList] = useState<AllProductDataType[]>([]);
  const [loading, setLoading] = useState(true);

  // Novo estado: quantidade por produto
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  // Descrição do carregamento
  const [description, setDescription] = useState("");

  // Busca produtos do backend
  const fetchProducts = async () => {
    try {
      const response = await api.get("/product/all");
      if (response.status === 200) {
        setDataList(response.data);

        // Inicializa quantidades em 0
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
  }, []);

  // Atualiza quantidade
  const handleQuantityChange = (productId: number, value: string) => {
    const num = Number(value);
    setQuantities({ ...quantities, [productId]: num >= 0 ? num : 0 });
  };

  // Enviar carregamento
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

    const payload = {
      description,
      date: new Date().toISOString().split("T")[0],
      items,
    };

    try {
      const response = await api.post("/charging", payload);
      if (response.status === 200 || response.status === 201) {
        alert("Carregamento enviado com sucesso!");
        setDescription("");
        // zera quantidades
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

  // Pagination logic
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
            tableHeading="Atualizar Carregamento do Caminhão"
            tableHeaderData={allProductHeaderData}
          />

          {/* Descrição */}
          {/* <div className="p-3">
            <label className="form-label fw-bold text-white">Descrição</label>
            <input
              type="text"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ex: Carregamento do caminhão..."
            />
          </div> */}

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
