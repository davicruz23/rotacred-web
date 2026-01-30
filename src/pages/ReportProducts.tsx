import api from "../services/api";
import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";

const ReportProductsPage = () => {

  const handleGeneratePdf = async () => {

    try {
      const response = await api.get(`/report/products`, {
        responseType: "blob",
      });

      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `estoque.pdf`;
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
        <h4 className="mb-4">Relatório de Produtos</h4>

        <div className="row g-3">
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

export default ReportProductsPage;
