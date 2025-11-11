Proyecto: Estructura de carpetas (diagrama)

A continuación está el diagrama de la estructura de carpetas actual y recomendada para el frontend Angular. He inspeccionado las carpetas existentes en el repositorio y las he incluido en el árbol.

```
.git/                          # control de versiones (oculto)
.gitignore
package.json                   # scripts de apoyo (mock-server, etc.)
README.md                      # ESTE archivo (estructura de carpetas)
docs/
	api-integration.md           # guía de integración con backend
src/
	README.md                    # guía rápida para developers dentro de src/
	app/
		models/                    # interfaces TypeScript (modelos del dominio)
			index.ts
	mock-server/
		db.json                    # datos simulados para desarrollo (json-server)

```

Notas:

- El árbol arriba refleja las carpetas y archivos actualmente presentes en el repositorio.
- Para el desarrollo completo del frontend Angular se recomienda crear la siguiente estructura adicional bajo `src/app/` cuando se scaffoldee el proyecto:

```
src/app/
	core/                         # servicios singleton: ApiService, AuthService, Interceptors, Guards
	shared/                       # componentes, pipes, directivas reusables
	features/                     # módulos por dominio
		restaurants/
		products/
		orders/
		drivers/
		reports/
		auth/
	models/                       # (ya presente) interfaces y tipos TypeScript
	assets/
	environments/                 # environment.ts, environment.prod.ts

```

Si quieres, actualizo este `README.md` para añadir más detalles (por ejemplo: breve descripción de cada carpeta, comandos rápidos para crear el scaffold con Angular CLI, o una versión imprimible del árbol con tamaños/fecha). Dime si lo dejo tal cual o prefieres que añada esas descripciones.
