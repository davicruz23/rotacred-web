import { useState } from "react";
import api from "../services/api";

const CreateUsersPage = () => {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [position, setPosition] = useState<number | "">("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      await api.post("/user", {
        name,
        cpf,
        password,
        position,
      });

      setMessage("Usuário criado com sucesso!");
      setName("");
      setCpf("");
      setPassword("");
      setPosition("");
    } catch (error) {
      console.error("Erro ao criar usuário", error);
      setMessage("Erro ao criar usuário.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row g-4">
      <div className="col-12">
        <div className="dashboard-breadcrumb">
          <h6 className="mb-0">Cadastrar Usuário</h6>
        </div>
      </div>

      <div className="col-12">
        <div className="card">
          <div className="card-header-area mb-3 flex-wrap">
            <h5 className="fw-medium">Novo Usuário</h5>
          </div>

          <div className="card-body">
            {message && (
              <div className="alert alert-info py-2">{message}</div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Nome</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">CPF</label>
                  <input
                    type="text"
                    className="form-control"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Senha</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Função</label>
                  <select
                    className="form-select"
                    value={position}
                    onChange={(e) => setPosition(Number(e.target.value))}
                    required
                  >
                    <option value="">Selecione...</option>
                    <option value={2}>FUNCIONARIO</option>
                    <option value={3}>VENDEDOR</option>
                    <option value={4}>COBRADOR</option>
                    <option value={5}>FISCAL</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <button className="btn btn-primary" disabled={loading}>
                  {loading ? "Salvando..." : "Criar Usuário"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUsersPage;
