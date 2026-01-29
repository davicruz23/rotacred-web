import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
import api from "../services/api";

const UptadeProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    brand: "",
    amount: 0,
    value: 0,
  });

  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const response = await api.get(`/product/${id}`);
      setProduct(response.data);
    } catch (err: any) {
      console.error(err);

      if (err?.response?.status === 404) {
        navigate("/error-404", { replace: true });
        return;
      }

      // outros erros (500, etc)
      navigate("/error-500", { replace: true });
      return;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!id) {
      navigate("/error-404", { replace: true });
      return;
    }

    fetchProduct();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]: value === "" ? 0 : Number(value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await api.put(`/product/${id}`, {
        id,
        amount: product.amount,
        value: product.value,
      });

      navigate("/all-product");
    } catch (err: any) {
      console.error(err);

      if (err?.response?.status === 404) {
        navigate("/error-404", { replace: true });
        return;
      }

      navigate("/error-500", { replace: true });
    }
  };

  if (loading) return <div>Carregando...</div>;

  return (
    <div className="container-fluid my-5">
      <BreadcrumbSection title="Editar Produto" link="/all-product" />

      <div className="card shadow-sm mt-4 w-100">
        <div className="card-body">
          <h4 className="card-title mb-4">
            {product.name} - {product.brand}
          </h4>

          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Quantidade</label>
              <input
                type="number"
                name="amount"
                value={product.amount === 0 ? "" : product.amount}
                onChange={handleChange}
                className="form-control form-control-lg"
                min={0}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Valor (R$)</label>
              <input
                type="number"
                name="value"
                value={product.value === 0 ? "" : product.value}
                onChange={handleChange}
                className="form-control form-control-lg"
                min={0}
                step={0.01}
                required
              />
            </div>

            <div className="col-12 mt-3">
              <button type="submit" className="btn btn-primary btn-lg w-100">
                Atualizar Produto
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UptadeProductPage;
