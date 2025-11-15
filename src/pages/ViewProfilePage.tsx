import { useEffect, useState } from "react";
import api from "../services/api";

type Usuario = {
  id: number;
  name: string;
  cpf: string;
  position: string;
};

const ViewProfilePage = () => {
  const [users, setUsers] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const response = await api.get("/user/all");
      setUsers(response.data);
    } catch (error) {
      console.error("Erro ao listar usuários", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="row g-4">
      <div className="col-12">
        <div className="dashboard-breadcrumb">
          <h6 className="mb-0">Usuários do sistema</h6>
        </div>
      </div>

      <div className="col-12">
        <div className="card full-height">
          <div className="card-header-area mb-3 flex-wrap">
            <h5 className="fw-medium">Lista de Usuários</h5>
          </div>

          <div className="table-responsive">
            <table className="table w-100">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>CPF</th>
                  <th>Função</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={4} className="text-center py-3">
                      Carregando...
                    </td>
                  </tr>
                ) : users.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center py-3">
                      Nenhum usuário encontrado
                    </td>
                  </tr>
                ) : (
                  users.map((u) => (
                    <tr key={u.id}>
                      <td>{u.id}</td>
                      <td>{u.name}</td>
                      <td>{u.cpf}</td>
                      <td>{u.position}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfilePage;
