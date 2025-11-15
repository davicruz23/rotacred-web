import { useEffect, useState } from "react";
import api from "../../services/api";

type CollectorTop = {
  collectorId: number;
  collectorName: string;
  totalCollectedToday: number;
  totalToCollectThisMonth: number;
};

const UsersCard2List = () => {
  const [collectors, setCollectors] = useState<CollectorTop[]>([]);

  useEffect(() => {
    const load = async () => {
      const res = await api.get("dashboard/collector/top-today-status");
      setCollectors(res.data);
    };
    load();
  }, []);

  return (
    // container flex-column com gap (Bootstrap 5)
    <div className="d-flex flex-column gap-3">
      {collectors.map((c) => (
        <div
          key={c.collectorId}
          className="card saas-small-card" // card individual (sem wrapper extra)
        >
          <div className="d-flex align-items-center justify-content-between">

            {/* COLUNA ESQUERDA (TOTAL HOJE) */}
            <div>
              <h4>
                {c.totalCollectedToday.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </h4>
              <p className="mb-0">Hoje</p>
            </div>

            {/* CÍRCULO (igual ao original) */}
            <div className="progress-circle">
              <span className="progress-text">Cobr.</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="58"
                height="58"
                viewBox="0 0 58 58"
                fill="none"
              >
                <circle cx="29" cy="29" r="26" stroke="#F5EFFF" strokeWidth="6" />
                <path
                  d="M55 29C55 43.3594 43.3594 55 29 55C14.6406 55 3 43.3594 3 29C3 14.6406 14.6406 3 29 3"
                  stroke="#39AD8A"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* COLUNA DIREITA (ESPERADO) */}
            <div className="text-end">
              <h4>
                {c.totalToCollectThisMonth.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </h4>
              <p className="mb-0">Esperado</p>
            </div>

          </div>

          {/* nome embaixo */}
          <div className="mt-2 text-center">
            <small className="fw-bold">{c.collectorName}</small>
          </div>
        </div>
      ))}
    </div>
  );

};

export default UsersCard2List;
