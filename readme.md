### Día 3 (25/03/2026) - M2.01 16 - Node + Express

- Servidores Web: Node + Express
  - Mejoras del server: eventos
  - Mejoras de App
    - Cabeceras: app.disable(), añadir cabeceras
    - Rutas con parámetros
    - Rutas con query string

  - Rutas y routers

[Descanso]

- Rutas y routers
  - rutas del CRUD de notes
  - probadas con postman
- Capa de datos
  - Entities
  - Repo (el mismo que para el CLI)
- Validaciones: Zod
  - Validación de variables de env
  - Validación de entities

## Unidad 2

Acceso a datos en aplicaciones web del entorno servidor - 16 días (antes 18)

### Día 4 (26/03/2026) - M2.02 01 - Node / Express

- Uso de validaciones Zod en la ruta de Create Note (POST)
- Nuevo servidor express

- Server y app: separación de responsabilidades
- Middleware
  - Logger
  - Cors
  - Error Handler

[Descanso]

- MVC (Clean Architecture)
- Rutas y controladores
  - Definición mediante clases
- Inyección de dependencias. Patrón Repositorio
  - Clases
  - Funciones (e.g. Router)
  - Inversión de control
- Modelo: Patrón Repositorio
  - ODM encapsulando NodeJS FS
  - Modelo (Repo) como clase instanciable

### Día 5 (27/03/2026) - - M2.02 02 - Node / Express

- Fase final: arquitectura por capas
  - Router funcional
  - DI completa desde app
  - ¿Herencia y clases abstractas?
  - Validaciones: Zod

- Rutas y controladores -- vistas
  - API
  - Sitio Web: Diferentes patrones de renderizado
    - Static Site Generation (SSG) and Static Sites -> HTML, CSS Y JS
      - Servidor de ficheros estáticos creados manualmente
      - Publicación de Astro SSG
    - Server Side Rendering (SSR)
      - Servidor dinámico: PHP, JSP, .NET
      - Node + express
    - Client Side Rendering (CSR) -> SPA en React, Angular, Vue, Web Components

[Descanso]

- Servidores Web: Node + Express
  - Templating (Vistas ES6)
  - Tagged templates
  - Clases y herencia

- Challenge: Servidores Web: Node + Express

## Semana Santa

## Semana 12 (Abril)

## Día 1 (6/04/2026) - M2.02 04 - DB (SQL)

Bases de datos

- Conceptos generales
- Modelos de datos
- Bases de datos relacionales (SQL)
- Bases de datos no relacionales (NoSQL)
- ORM / ODM

Bases de datos relacionales (SQL)

- Conceptos generales: arquitectura cliente-servidor
- Servidor
  - MySQL: instalación del servidor local
  - PostgreSQL: acceso a un servidor remoto SupaBase
- Cliente
  - MySQL Workbench
  - pgAdmin
  - Otras opciones: DBeaver...
- SQL
  - DDL => CREATE, ALTER, DROP
  - DML => SELECT, INSERT, UPDATE, DELETE
  - DCL => GRANT, REVOKE
- Diseño de bases de datos: herramientas
  - Diagramas Entidad-Relación (ER)

## Día 2 (7/04/2026) - M2.02 05 - DB (MySQL)

Bases de datos MySQL

- Conceptos de diseño de bases de datos
  - E/R. Claves y relaciones
  - Normalización
  - Diagramas E/R
- MySQL
  - Conexión
  - Referencia: SQLBolt
- DB y tablas
  - Listado y creación de bases de datos
  - Listado y uso de tablas
  - Descripción de una tabla
- Consultas: SELECT
  - Restricciones (constrains)
- Consultas avanzadas
  - JOIN
  - Sub-consultas

## Día 3 (8/04/2026) - M2.02 06 - DB (Diseño)

- Conceptos de diseño de bases de datos. Prácticas
  - Diagramas E/R
  - Normalización
  - Diseño de tablas

## Día 4 (9/04/2026) - M2.02 07 - DB (Ejemplos)

- Review conceptos de diseño de bases de datos.
  - Un sistema para gestionar una biblioteca
  - Un sistema para gestionar venta de billetes de avión
    - usuario
    - aerolínea (carrier)
    - conexión (connection) - Madrid - Barcelona (10) // Barcelona - Madrid (11)
    - vuelo (fly) - fecha
    - pasaje (booking)
    - aviones (airplane)
  - Un sistema para gestionar una tienda de determinados productos
    - Product
    - Client
    - Category
    - Provider
    - Order
    - Order_item
    - Shipper

## Día 5 (10/04/2026) - M2.02 08 - DB (DDL, DML)

Tipos de datos

- DDL => CREATE, ALTER, DROP
  - Conexión: Shell v. Workbench (GUI)
  - Listado y Creación de bases de datos. Uso
  - Listado y descripción de tablas
  - Creación de tablas. Uso de IF NOT EXISTS
    - Tipos de datos
    - Restricciones
      - NOT NULL
      - UNIQUE
      - DEFAULT
      - CHECK
      - AUTO_INCREMENT
      - Claves primarias y foráneas
        - PRIMARY KEY numérica
        - PRIMARY KEY UUID
        - FOREIGN KEY
    - Añadiendo Named Constraints (e.g. CHECK)
  - Borrado de tablas (DROP)
  - Indexación
  - Modificación de tablas (ALTER)
  - Claves primarias y foráneas
  - Creación de índices

  - Ejemplos / ejercicios - creación de tablas simples
    - red social: usuarios, posts, comentarios, likes, seguidores
    - named constraints: likes, seguidores
    - red social amigos / enemigos

- DML =>
  - SELECT
  - JOIN
  - UNION
  - INSERT, UPDATE, DELETE
  - Group y Funciones de agregación
  - Otras funciones

## Semana 13 (Abril)

## Día 1 (13/04/2026) - M2.02 09