import { useState, useEffect } from "react";
import TableFilter2 from "../components/filter/TableFilter2";
import TableHeader from "../components/header/table-header/TableHeader";
import AllProductTable from "../components/table/AllProductTable";
import TableBottomControls from "../components/utils/TableBottomControls";
import api from "../services/api";
import { AllProductDataType } from "../types";
import { allProductHeaderData } from "../data";

const AllProductPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);
  const [dataList, setDataList] = useState<AllProductDataType[]>([]);
  const [loading, setLoading] = useState(true);

  // Busca produtos do backend
  const fetchProducts = async () => {
    try {
      const response = await api.get("/product/all");
      if (response.status === 200) {
        setDataList(response.data);
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

  // Delete function
  const handleDelete = async (id: number) => {
    if (!window.confirm("Tem certeza que deseja deletar este produto?")) return;

    try {
      const response = await api.delete(`/product/${id}/delete`);
      if (response.status === 200 || response.status === 204) {
        setDataList(dataList.filter((item) => item.id !== id));
        alert("Produto deletado com sucesso!");
      } else {
        alert("Erro ao deletar produto.");
      }
    } catch (error: any) {
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
            tableHeading="Todos os produtos"
            tableHeaderData={allProductHeaderData}
            showAddLink
          />

          <div className="panel-body">
            <div className="product-table-quantity">
              <ul>
                <li className="text-white">All ({dataList.length})</li>
              </ul>
            </div>

            <TableFilter2 showCategory showProductType showProductStock />

            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Carregando...</span>
                </div>
              </div>
            ) : (
              <div className="table-responsive">
                <AllProductTable
                  tableData={currentData}
                  handleDelete={handleDelete}
                />

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
        </div>
      </div>
    </div>
  );
};

export default AllProductPage;
