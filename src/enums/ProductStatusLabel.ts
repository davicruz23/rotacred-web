import { ProductStatus } from "../types";

export const ProductStatusLabel: Record<ProductStatus, string> = {
  [ProductStatus.DISPONIVEL]: 'Disponível',
  [ProductStatus.INDISPONIVEL]: 'Indisponível',
  [ProductStatus.ZERADO]: 'Zerado',
  [ProductStatus.POUCO]: 'Pouco',
  [ProductStatus.MUITOPOUCO]: 'Muito pouco'
};
