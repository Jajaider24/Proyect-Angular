# Integración con el backend (ms_delivery)

Este documento recoge las pautas básicas para consumir la API REST del backend `ms_delivery` (https://github.com/felipebuitragocarmona/ms_delivery).

1. Base URL

- En desarrollo, usar la URL que el backend exponga (ejemplo: `http://localhost:8080/api`).
- En producción, usar la URL segura (HTTPS) proporcionada por el equipo de backend.

2. Autenticación

- El backend espera recibir en cada petición un header `Authorization: Bearer <access_token>`.
- El frontend realizará la autenticación por OAuth con los proveedores (Google, Microsoft, GitHub). Dependiendo del flujo elegido, puede que sea necesario intercambiar el código de autorización por tokens en un backend proxy.

3. Endpoints principales (ejemplos)

- `GET /restaurants` — listar restaurantes
- `GET /restaurants/:id` — detalle
- `POST /restaurants` — crear
- `PUT /restaurants/:id` — actualizar
- `DELETE /restaurants/:id` — eliminar

- `GET /orders` — listar pedidos
- `GET /orders/:id` — detalle pedido (incluye dirección, items, estado, moto asignada)
- `POST /orders` — crear pedido

4. Paginación y filtros

- Usar parámetros `page`, `size`, `sort`, `filter` según convenga. Revisar contrato API si el backend ya define parámetros específicos.

5. Manejo de errores

- El interceptor HTTP del frontend debe:
  - Detectar 401 (token inválido) y redirigir al login / refrescar flujo.
  - Mostrar mensajes amigables para 4xx/5xx.

6. CORS

- Asegurarse que el backend tenga CORS habilitado para los orígenes de desarrollo (ej: `http://localhost:4200`). Si se necesita proxificar peticiones en desarrollo, usar `proxy.conf.json` de Angular CLI para evitar problemas de CORS.

7. Recomendación de contratos y tipos

- Crear modelos TypeScript en `src/app/models` que reflejen los DTOs del backend. Mantener sincronía con el equipo backend; si es posible, generar tipos a partir de un contrato OpenAPI.

8. Endpoints para notificaciones y ubicación en tiempo real

- Para ubicación en tiempo real y asignación de pedidos se recomienda usar WebSockets o una solución de mensajería en tiempo real (Socket.IO, SignalR, WebSocket puro). Si el backend expone un socket, documentarlo y crear un servicio Angular que gestione conexión y reconexión automática.

---

Si necesitas, puedo generar ejemplos de servicios Angular (ApiService) que ejemplifiquen llamadas GET/POST y el uso del interceptor para autorizar peticiones.
