import { useEffect, useState } from "react";
import {
  CircleMarker,
  MapContainer,
  Polyline,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import api from "../services/api";

interface CollectorTrackingDTO {
  collectorId: number;
  userId: number;
  collectorName: string;
  latitude: number | null;
  longitude: number | null;
  lastLocationAt: string | null;
  online: boolean;
}

interface LocationPointDTO {
  id: number;
  latitude: number;
  longitude: number;
  capturedAt: string;
}

interface CollectorRouteDTO {
  collectorId: number;
  userId: number;
  collectorName: string;
  points: LocationPointDTO[];
}

/* ── estilos ── */

const S: Record<string, React.CSSProperties> = {
  page: { padding: "16px 4px" },

  pageHead: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 20,
  },

  pageIcon: {
    width: 42,
    height: 42,
    borderRadius: 10,
    background: "#E6F1FB",
    color: "#185FA5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    flexShrink: 0,
  },

  pageTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: "#1a1a1a",
    margin: 0,
  },

  pageSub: {
    fontSize: 13,
    color: "#888",
    marginTop: 2,
  },

  errorBox: {
    background: "#FCEBEB",
    color: "#A32D2D",
    border: "0.5px solid #F7C1C1",
    borderRadius: 8,
    padding: "10px 14px",
    fontSize: 13,
    marginBottom: 16,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
    gap: 16,
  },

  collCard: {
    background: "#fff",
    border: "0.5px solid #e0e0e0",
    borderRadius: 12,
    overflow: "hidden",
    cursor: "pointer",
    textAlign: "left" as const,
    width: "100%",
    transition: "box-shadow 0.15s, border-color 0.15s",
  },

  collCardTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 16px",
    borderBottom: "0.5px solid #e0e0e0",
    gap: 10,
  },

  collAvatar: {
    width: 52,
    height: 52,
    borderRadius: "50%",
    background: "#E6F1FB",
    color: "#185FA5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    fontWeight: 700,
    flexShrink: 0,
  },

  collName: {
    fontSize: 17,
    fontWeight: 600,
    color: "#1a1a1a",
  },

  collId: {
    fontSize: 13,
    color: "#aaa",
    marginTop: 2,
  },

  collBody: {
    padding: "16px 18px",
    display: "flex",
    flexDirection: "column" as const,
    gap: 14,
  },

  infoRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
  },

  infoIcon: {
    fontSize: 18,
    color: "#185FA5",
    marginTop: 1,
    flexShrink: 0,
  },

  infoLabel: {
    fontSize: 11,
    fontWeight: 600,
    color: "#aaa",
    textTransform: "uppercase" as const,
    letterSpacing: "0.4px",
  },

  infoValue: {
    fontSize: 14,
    color: "#1a1a1a",
    marginTop: 3,
  },

  collFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 18px",
    borderTop: "0.5px solid #e0e0e0",
    background: "#f8f9fa",
    fontSize: 14,
    fontWeight: 600,
    color: "#185FA5",
  },

  emptyBox: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 280,
    border: "0.5px dashed #d0d0d0",
    borderRadius: 12,
    background: "#fff",
    color: "#aaa",
    gap: 8,
  },

  emptyTitle: {
    fontSize: 15,
    fontWeight: 600,
    color: "#555",
  },

  emptySub: {
    fontSize: 13,
    color: "#aaa",
  },

  spinnerWrap: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 280,
    gap: 12,
    color: "#aaa",
    fontSize: 13,
  },

  // Modal
  overlay: {
    position: "fixed" as const,
    inset: 0,
    background: "rgba(0,0,0,0.45)",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },

  modal: {
    background: "#fff",
    borderRadius: 14,
    overflow: "hidden",
    width: "100%",
    maxWidth: 960,
    maxHeight: "90vh",
    display: "flex",
    flexDirection: "column" as const,
    boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
  },

  modalHead: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 18px",
    borderBottom: "0.5px solid #e0e0e0",
    background: "#f8f9fa",
    gap: 12,
    flexShrink: 0,
  },

  modalHeadLeft: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },

  modalIcon: {
    width: 38,
    height: 38,
    borderRadius: "50%",
    background: "#E6F1FB",
    color: "#185FA5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 17,
    flexShrink: 0,
  },

  modalTitle: {
    fontSize: 15,
    fontWeight: 700,
    color: "#1a1a1a",
  },

  modalSub: {
    fontSize: 12,
    color: "#888",
    marginTop: 2,
  },

  closeBtn: {
    width: 34,
    height: 34,
    borderRadius: "50%",
    border: "0.5px solid #e0e0e0",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: 16,
    color: "#555",
    flexShrink: 0,
  },

  modalBody: {
    display: "grid",
    gridTemplateColumns: "1fr 240px",
    minHeight: 420,
    overflow: "hidden",
    flex: 1,
  },

  mapArea: {
    position: "relative" as const,
    width: "100%",
    height: 420,
    background: "#f3f4f6",
  },

  sidebar: {
    borderLeft: "0.5px solid #e0e0e0",
    background: "#fff",
    padding: 16,
    overflowY: "auto" as const,
    display: "flex",
    flexDirection: "column" as const,
    gap: 16,
  },

  sideItem: {
    display: "flex",
    flexDirection: "column" as const,
    gap: 3,
  },

  sideLabel: {
    fontSize: 10,
    fontWeight: 600,
    color: "#aaa",
    textTransform: "uppercase" as const,
    letterSpacing: "0.4px",
  },

  sideValue: {
    fontSize: 14,
    fontWeight: 600,
    color: "#1a1a1a",
  },

  sideValueSm: {
    fontSize: 13,
    color: "#555",
    wordBreak: "break-all" as const,
  },

  refreshBtn: {
    width: "100%",
    padding: "9px",
    borderRadius: 8,
    border: "none",
    background: "#185FA5",
    color: "#E6F1FB",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    marginTop: "auto",
  },

  refreshBtnDisabled: {
    width: "100%",
    padding: "9px",
    borderRadius: 8,
    border: "none",
    background: "#f1f1f1",
    color: "#aaa",
    fontSize: 13,
    fontWeight: 600,
    cursor: "not-allowed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    marginTop: "auto",
  },
};

const getOnlineBadge = (online: boolean): React.CSSProperties => ({
  display: "inline-flex",
  alignItems: "center",
  gap: 5,
  padding: "4px 12px",
  borderRadius: 999,
  fontSize: 13,
  fontWeight: 600,
  background: online ? "#EAF3DE" : "#F1EFE8",
  color: online ? "#3B6D11" : "#5F5E5A",
  flexShrink: 0,
});

const getInitials = (name: string) =>
  name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();

/* ── componente ── */

function CollectorLocationPage() {
  const [collectors, setCollectors] = useState<CollectorTrackingDTO[]>([]);
  const [selectedCollector, setSelectedCollector] = useState<CollectorTrackingDTO | null>(null);
  const [route, setRoute] = useState<CollectorRouteDTO | null>(null);
  const [loadingCollectors, setLoadingCollectors] = useState(true);
  const [loadingRoute, setLoadingRoute] = useState(false);
  const [error, setError] = useState("");

  const buscarCollectors = async () => {
    try {
      setError("");
      const response = await api.get<CollectorTrackingDTO[]>("/tracking/collectors");
      setCollectors(response.data ?? []);
    } catch (error: any) {
      console.error("Erro ao buscar cobradores:", error);
      setError(error.response?.data?.message ?? "Não foi possível carregar os cobradores.");
    } finally {
      setLoadingCollectors(false);
    }
  };

  const buscarRota = async (collector: CollectorTrackingDTO, mostrarCarregamento = true) => {
    try {
      if (mostrarCarregamento) setLoadingRoute(true);
      setError("");
      const response = await api.get<CollectorRouteDTO>(`/tracking/collectors/${collector.userId}/route`);
      setRoute(response.data);
    } catch (error: any) {
      console.error("Erro ao buscar rota:", error);
      setError(error.response?.data?.message ?? "Não foi possível carregar a rota do cobrador.");
    } finally {
      if (mostrarCarregamento) setLoadingRoute(false);
    }
  };

  const selecionarCollector = async (collector: CollectorTrackingDTO) => {
    setSelectedCollector(collector);
    setRoute(null);
    await buscarRota(collector);
  };

  const fecharMapa = () => {
    setSelectedCollector(null);
    setRoute(null);
    setError("");
  };

  useEffect(() => {
    buscarCollectors();
    const interval = setInterval(() => buscarCollectors(), 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!selectedCollector) return;
    const interval = setInterval(() => buscarRota(selectedCollector, false), 10000);
    return () => clearInterval(interval);
  }, [selectedCollector]);

  const pontos = route?.points ?? [];
  const coordenadas: [number, number][] = pontos.map((p) => [p.latitude, p.longitude]);
  const primeiroPonto = pontos.length > 0 ? pontos[0] : null;
  const ultimoPonto = pontos.length > 0 ? pontos[pontos.length - 1] : null;

  const formatarData = (data: string | null | undefined) => {
    if (!data) return "Sem localização";
    return new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeStyle: "medium" }).format(new Date(data));
  };

  function AjustarMapa({ pontos }: { pontos: LocationPointDTO[] }) {
    const map = useMap();
    useEffect(() => {
      if (pontos.length === 0) return;
      const timeout = window.setTimeout(() => {
        map.invalidateSize();
        const limites: [number, number][] = pontos.map((p) => [p.latitude, p.longitude]);
        if (limites.length === 1) { map.setView(limites[0], 17); return; }
        map.fitBounds(limites, { padding: [40, 40] });
      }, 200);
      return () => window.clearTimeout(timeout);
    }, [pontos, map]);
    return null;
  }

  const formatarUltimaAtualizacao = (data: string | null | undefined) => {
    if (!data) return "Nenhuma localização registrada";
    const diff = Math.floor((new Date().getTime() - new Date(data).getTime()) / 1000);
    if (diff < 60) return "Atualizado agora";
    const mins = Math.floor(diff / 60);
    if (mins === 1) return "Atualizado há 1 minuto";
    if (mins < 60) return `Atualizado há ${mins} minutos`;
    return formatarData(data);
  };

  return (
    <div style={S.page}>

      {/* Cabeçalho */}
      <div style={S.pageHead}>
        <div style={S.pageIcon}>
          <i className="ti ti-route" />
        </div>
        <div>
          <div style={S.pageTitle}>Acompanhar cobranças</div>
          <div style={S.pageSub}>Acompanhe a localização e a rota atual dos cobradores.</div>
        </div>
      </div>

      {/* Erro */}
      {error && <div style={S.errorBox}>{error}</div>}

      {/* Loading */}
      {loadingCollectors ? (
        <div style={S.spinnerWrap}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Carregando...</span>
          </div>
          <span>Carregando cobradores...</span>
        </div>

      ) : collectors.length === 0 ? (
        <div style={S.emptyBox}>
          <i className="ti ti-map-pin-off" style={{ fontSize: 40 }} />
          <div style={S.emptyTitle}>Nenhum cobrador encontrado</div>
          <div style={S.emptySub}>Ainda não existem cobradores disponíveis para acompanhamento.</div>
        </div>

      ) : (
        <div style={S.grid}>
          {collectors.map((collector) => (
            <button
              key={collector.collectorId}
              type="button"
              style={S.collCard}
              onClick={() => selecionarCollector(collector)}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.10)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#B5D4F4";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#e0e0e0";
              }}
            >
              {/* Topo */}
              <div style={S.collCardTop}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
                  <div style={S.collAvatar}>{getInitials(collector.collectorName)}</div>
                  <div style={{ minWidth: 0 }}>
                    <div style={S.collName}>{collector.collectorName}</div>
                    <div style={S.collId}>Cobrador #{collector.collectorId}</div>
                  </div>
                </div>
                <span style={getOnlineBadge(collector.online)}>
                  <span style={{
                    width: 7, height: 7, borderRadius: "50%",
                    background: collector.online ? "#3B6D11" : "#aaa",
                    flexShrink: 0,
                  }} />
                  {collector.online ? "Online" : "Offline"}
                </span>
              </div>

              {/* Corpo */}
              <div style={S.collBody}>
                <div style={S.infoRow}>
                  <i className="ti ti-current-location" style={S.infoIcon} />
                  <div>
                    <div style={S.infoLabel}>Última localização</div>
                    <div style={S.infoValue}>
                      {collector.latitude != null && collector.longitude != null
                        ? `${collector.latitude.toFixed(6)}, ${collector.longitude.toFixed(6)}`
                        : "Nenhuma localização registrada"}
                    </div>
                  </div>
                </div>
                <div style={S.infoRow}>
                  <i className="ti ti-clock" style={S.infoIcon} />
                  <div>
                    <div style={S.infoLabel}>Atualização</div>
                    <div style={S.infoValue}>{formatarUltimaAtualizacao(collector.lastLocationAt)}</div>
                  </div>
                </div>
              </div>

              {/* Rodapé */}
              <div style={S.collFooter}>
                <span>Acompanhar rota</span>
                <i className="ti ti-chevron-right" />
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedCollector && (
        <div style={S.overlay} onClick={fecharMapa}>
          <div style={S.modal} onClick={(e) => e.stopPropagation()}>

            {/* Cabeçalho do modal */}
            <div style={S.modalHead}>
              <div style={S.modalHeadLeft}>
                <div style={S.modalIcon}>
                  <i className="ti ti-route" />
                </div>
                <div>
                  <div style={S.modalTitle}>Rota de {selectedCollector.collectorName}</div>
                  <div style={S.modalSub}>
                    {pontos.length} ponto{pontos.length !== 1 ? "s" : ""} registrado{pontos.length !== 1 ? "s" : ""}
                  </div>
                </div>
              </div>
              <button style={S.closeBtn} type="button" onClick={fecharMapa}>✕</button>
            </div>

            {/* Corpo do modal */}
            <div style={S.modalBody}>

              {/* Mapa */}
              <div style={S.mapArea}>
                {loadingRoute ? (
                  <div style={{ ...S.spinnerWrap, minHeight: 420 }}>
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Carregando...</span>
                    </div>
                    <span>Carregando rota...</span>
                  </div>
                ) : pontos.length === 0 ? (
                  <div style={{ ...S.emptyBox, minHeight: 420, borderRadius: 0, border: "none" }}>
                    <i className="ti ti-map-off" style={{ fontSize: 40 }} />
                    <div style={S.emptyTitle}>Nenhum ponto registrado</div>
                    <div style={S.emptySub}>Este cobrador ainda não possui uma rota.</div>
                  </div>
                ) : ultimoPonto ? (
                  <MapContainer
                    key={selectedCollector.userId}
                    center={[ultimoPonto.latitude, ultimoPonto.longitude]}
                    zoom={16}
                    scrollWheelZoom
                    style={{ height: "420px", width: "100%", zIndex: 1 }}
                  >
                    <TileLayer
                      attribution="&copy; OpenStreetMap contributors"
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <AjustarMapa pontos={pontos} />
                    {coordenadas.length > 1 && (
                      <Polyline positions={coordenadas} pathOptions={{ color: "#2563eb", weight: 5, opacity: 0.8 }} />
                    )}
                    {primeiroPonto && (
                      <CircleMarker
                        center={[primeiroPonto.latitude, primeiroPonto.longitude]}
                        radius={9}
                        pathOptions={{ color: "#15803d", fillColor: "#22c55e", fillOpacity: 1, weight: 3 }}
                      >
                        <Popup><strong>Início da rota</strong><br />{formatarData(primeiroPonto.capturedAt)}</Popup>
                      </CircleMarker>
                    )}
                    <CircleMarker
                      center={[ultimoPonto.latitude, ultimoPonto.longitude]}
                      radius={10}
                      pathOptions={{ color: "#b91c1c", fillColor: "#ef4444", fillOpacity: 1, weight: 3 }}
                    >
                      <Popup><strong>Posição atual</strong><br />{formatarData(ultimoPonto.capturedAt)}</Popup>
                    </CircleMarker>
                  </MapContainer>
                ) : null}
              </div>

              {/* Sidebar */}
              <aside style={S.sidebar}>
                <div style={S.sideItem}>
                  <div style={S.sideLabel}>Cobrador</div>
                  <div style={S.sideValue}>{selectedCollector.collectorName}</div>
                </div>

                <div style={S.sideItem}>
                  <div style={S.sideLabel}>Status</div>
                  <span style={{ ...getOnlineBadge(selectedCollector.online), marginTop: 4 }}>
                    <span style={{
                      width: 7, height: 7, borderRadius: "50%",
                      background: selectedCollector.online ? "#3B6D11" : "#aaa",
                    }} />
                    {selectedCollector.online ? "Online" : "Offline"}
                  </span>
                </div>

                <div style={S.sideItem}>
                  <div style={S.sideLabel}>Pontos da rota</div>
                  <div style={{ ...S.sideValue, fontSize: 22 }}>{pontos.length}</div>
                </div>

                <div style={S.sideItem}>
                  <div style={S.sideLabel}>Última atualização</div>
                  <div style={S.sideValueSm}>
                    {ultimoPonto ? formatarData(ultimoPonto.capturedAt) : "Sem localização"}
                  </div>
                </div>

                {ultimoPonto && (
                  <div style={S.sideItem}>
                    <div style={S.sideLabel}>Coordenadas atuais</div>
                    <div style={S.sideValueSm}>
                      {ultimoPonto.latitude.toFixed(6)}, {ultimoPonto.longitude.toFixed(6)}
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  style={loadingRoute ? S.refreshBtnDisabled : S.refreshBtn}
                  disabled={loadingRoute}
                  onClick={() => buscarRota(selectedCollector, true)}
                >
                  <i className="ti ti-refresh" />
                  Atualizar rota
                </button>
              </aside>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CollectorLocationPage;