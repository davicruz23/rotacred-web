import { useState } from "react";
import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
import api from "../services/api";

const AddNewProductPage = () => {
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    amount: 0,
    value: 0,
    status: 1,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]:
        name === "amount" || name === "value" || name === "status"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post("/product", product);
      if (response.status === 200 || response.status === 201) {
        alert("Produto cadastrado com sucesso!");
        setProduct({ name: "", brand: "", amount: 0, value: 0, status: 1 });
      } else {
        alert("Erro ao cadastrar produto.");
      }
    } catch (error: any) {
      console.error(error);
      if (error.response) {
        alert(`Erro: ${error.response.data.message || "Problema no servidor"}`);
      } else {
        alert("Erro ao conectar com o servidor.");
      }
    }
  };

  return (
    <div className="row g-4">
      <div className="col-12">
        <BreadcrumbSection title="Adicionar Novo Produto" link="/all-product" />
      </div>

      <div className="col-12">
        <div className="card shadow-sm">
          <div className="card-header bg-white">
            <h3 className="mb-0">Informações do Produto</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit} className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Nome do Produto</label>
                <input
                  type="text"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Digite o nome do produto"
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Marca</label>
                <input
                  type="text"
                  name="brand"
                  value={product.brand}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Marca do produto"
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Quantidade</label>
                <input
                  type="number"
                  name="amount"
                  value={product.amount === 0 ? "" : product.amount}
                  onChange={(e) =>
                    setProduct((prev) => ({
                      ...prev,
                      amount: e.target.value === "" ? 0 : Number(e.target.value),
                    }))
                  }
                  className="form-control"
                  min={0}
                  placeholder="0"
                  required
                />
              </div>


              <div className="col-md-6">
                <label className="form-label">Valor (R$)</label>
                <div className="input-group">
                  <span className="input-group-text">R$</span>
                  <input
                    type="number"
                    name="value"
                    value={product.value === 0 ? "" : product.value}
                    onChange={(e) =>
                      setProduct((prev) => ({
                        ...prev,
                        value: e.target.value === "" ? 0 : Number(e.target.value),
                      }))
                    }
                    className="form-control"
                    min={0}
                    step={0.01}
                    placeholder="0,00"
                    required
                  />
                </div>
              </div>
              <div className="col-12 mt-4">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100"
                >
                  Adicionar Produto
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewProductPage;
