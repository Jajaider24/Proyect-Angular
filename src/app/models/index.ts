export interface Restaurante {
  id: number;
  nombre: string;
  direccion?: string;
  telefono?: string;
  imagenUrl?: string;
}

export interface Producto {
  id: number;
  nombre: string;
  descripcion?: string;
  precio: number;
  fotoUrl?: string;
}

// Relacion many-to-many entre Restaurante y Producto
export interface Menu {
  id: number;
  restauranteId: number;
  productoId: number;
  precioEspecial?: number;
  disponible: boolean;
}

export interface Cliente {
  id: number;
  nombre: string;
  email?: string;
  telefono?: string;
}

export interface Direccion {
  id: number;
  pedidoId: number;
  lat: number;
  lng: number;
  direccionCompleta: string;
}

export interface PedidoItem {
  productoId: number;
  cantidad: number;
  precioUnitario: number;
}

export type EstadoPedido =
  | "PENDIENTE"
  | "EN_PREPARACION"
  | "ASIGNADO"
  | "EN_RUTA"
  | "ENTREGADO"
  | "CANCELADO";

export interface Pedido {
  id: number;
  clienteId: number;
  items: PedidoItem[];
  direccionId: number;
  estado: EstadoPedido;
  motoId?: number | null;
  conductorId?: number | null;
  creadoEn: string; // ISO datetime
}

export interface Moto {
  id: number;
  placa: string;
  modelo?: string;
}

export interface Inconveniente {
  id: number;
  motoId: number;
  descripcion: string;
  fecha: string; // ISO
  fotos?: Foto[];
}

export interface Foto {
  id: number;
  inconvenienteId: number;
  url: string;
}

export interface Conductor {
  id: number;
  nombre: string;
  licencia?: string;
  telefono?: string;
}

export interface Turno {
  id: number;
  conductorId: number;
  motoId: number;
  inicio: string; // ISO
  fin?: string | null; // ISO
}

export interface UserProfile {
  id?: number;
  nombre?: string;
  email?: string;
  avatarUrl?: string;
}
