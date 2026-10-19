// Proyectos del portafolio. images: capturas ('@cover' = diagrama images/covers/<cover>-<idioma>.webp);
// sample: capturas con datos de ejemplo; pro: proyecto profesional; tags: filtros de la sección;
// portada: índice de la captura que se muestra en la tarjeta y al abrir el modal.
const projects = [
    {
        "id": "sig",
        "portada": 2,
        "tags": [
            "web",
            "datos"
        ],
        "pro": true,
        "images": [
            "images/work/sig-01.webp",
            "images/work/sig-02.webp",
            "images/work/sig-03.webp",
            "images/work/sig-04.webp",
            "images/work/sig-05.webp",
            "images/work/sig-06.webp",
            "images/work/sig-07.webp",
            "images/work/sig-08.webp",
            "images/work/sig-09.webp",
            "images/work/sig-10.webp",
            "images/work/sig-11.webp",
            "images/work/sig-12.webp",
            "images/work/sig-13.webp",
            "images/work/sig-14.webp"
        ],
        "captions": {
            "es": [
                "Inicio de sesión.",
                "Portal con los tableros disponibles para el usuario, agrupados por área.",
                "Tablero de ventas: indicadores, ventas mensuales y clasificación.",
                "Ventas fechadas por el pedido o contrato que las originó.",
                "Inventario: indicadores, rotación y valor por bodega.",
                "Búsqueda de productos con entradas, salidas y stock por empresa.",
                "Cartera: evolución de cargos y abonos y composición por grupo.",
                "Ganancias: ingresos contra egresos por mes y por categoría.",
                "P&G con navegación por cuentas y detalle de uniones temporales.",
                "Costo mensual de la fuerza laboral, directa y temporal.",
                "Comisiones por vendedor y comparativo contra lo pagado.",
                "Organigrama interactivo con cargos y equipos (nombres ficticios).",
                "Saldos, entradas y salidas por cuenta bancaria mes a mes.",
                "Administración de usuarios y permisos por tablero."
            ],
            "en": [
                "Sign-in.",
                "Portal with the dashboards available to the user, grouped by area.",
                "Sales dashboard: KPIs, monthly sales and breakdown.",
                "Sales dated by the order or contract that originated them.",
                "Inventory: KPIs, turnover and value by warehouse.",
                "Product search with inbound, outbound and stock by company.",
                "Receivables: charges and payments over time and composition by group.",
                "Profit: income versus expenses by month and category.",
                "P&L with account drill-down and joint-venture detail.",
                "Monthly cost of the workforce, direct and temporary.",
                "Commissions by salesperson compared with what was paid.",
                "Interactive org chart with roles and teams (fictitious names).",
                "Balances, inflows and outflows by bank account, month by month.",
                "User administration and per-dashboard permissions."
            ]
        },
        "category": {
            "es": "Business Intelligence",
            "en": "Business Intelligence"
        },
        "title": {
            "es": "SIG — Sistema de Información Gerencial",
            "en": "SIG — Management Information System"
        },
        "short": {
            "es": "Plataforma web con tableros de ventas, inventario, cartera, finanzas, nómina y tesorería para las empresas del grupo.",
            "en": "Web platform with sales, inventory, receivables, finance, payroll and treasury dashboards for the group's companies."
        },
        "description": {
            "es": "Plataforma de inteligencia de negocio para un grupo empresarial colombiano de fabricación de mobiliario y metalmecánica. Reúne en un solo lugar la información del ERP (replicada por helisa2pg) y la presenta en tableros por área, con filtros por empresa y periodo. Está construida con un servidor HTTP propio en Python, una API JSON por tablero y gráficos interactivos. Cada usuario ve solo los tableros que tiene asignados, y cualquier vista se puede descargar como un libro de Excel con gráficos.",
            "en": "Business intelligence platform for a Colombian furniture and metalworking group. It brings the ERP data (replicated by helisa2pg) into one place and presents it in dashboards by area, filterable by company and period. It is built on a custom Python HTTP server, a JSON API per dashboard and interactive charts. Each user only sees the dashboards assigned to them, and any view can be downloaded as an Excel workbook with charts."
        },
        "highlights": {
            "es": [
                "18 tableros en 5 categorías: inventario, ventas, recursos humanos, financiero y tesorería.",
                "Ventas por mes, categoría, vendedor y empresa; ventas fechadas por el pedido que las originó.",
                "P&G con navegación por la jerarquía contable, cartera por antigüedad y ganancias por categoría.",
                "Nómina consolidada (directa y temporal) por centro de costo y comisiones de ventas por vendedor.",
                "Tesorería mensual por cuenta bancaria y organigrama interactivo.",
                "Exportación a Excel nativo con gráficos y panel de administración de usuarios, accesos y pagos recurrentes.",
                "Despliegue automático con Docker y GitHub Actions en cada cambio a la rama principal."
            ],
            "en": [
                "18 dashboards in 5 categories: inventory, sales, human resources, finance and treasury.",
                "Sales by month, category, salesperson and company; sales dated by the order that originated them.",
                "P&L with drill-down through the chart of accounts, receivables aging and profit by category.",
                "Consolidated payroll (direct and temporary staff) by cost center and sales commissions by salesperson.",
                "Monthly treasury by bank account and an interactive org chart.",
                "Native Excel export with charts and an admin panel for users, access and recurring payments.",
                "Automatic deployment with Docker and GitHub Actions on every change to the main branch."
            ]
        },
        "challenges": {
            "es": [
                "Hacer que los totales cuadraran al peso con los reportes oficiales del ERP, leyendo el libro mayor en vez de sumar movimientos.",
                "Responder rápido sobre una base de varios gigabytes: índices dedicados, caché de respuestas y ajuste de planes de consulta.",
                "Unificar la nómina directa y la de empresas temporales en una sola vista de costo laboral."
            ],
            "en": [
                "Making totals match the ERP's official reports to the peso by reading the general ledger instead of summing transactions.",
                "Fast responses over a multi-gigabyte database: dedicated indexes, response caching and query plan tuning.",
                "Merging direct payroll and staffing-agency payroll into a single labor cost view."
            ]
        },
        "tech": [
            "Python",
            "PostgreSQL",
            "JavaScript",
            "Chart.js",
            "openpyxl",
            "Docker",
            "GitHub Actions"
        ],
        "links": []
    },
    {
    id: 'auto-postulador',
    tags: ['ia', 'devops'],
    cover: 'auto-postulador',
    images: ['images/projects/auto-postulador-1.webp', 'images/projects/auto-postulador-2.webp', 'images/projects/auto-postulador-3.webp', 'images/projects/auto-postulador-4.webp', '@cover'],
    sample: true,
    category: { es: 'IA & Automatización', en: 'AI & Automation' },
    title: { es: 'Auto-postulador de empleos con IA', en: 'AI Job Auto-Applier' },
    short: {
        es: 'Scrapea 5 portales de empleo, analiza cada oferta contra el CV con Gemini y postula sola.',
        en: 'Scrapes 5 job boards, scores every offer against the CV with Gemini and applies on its own.'
    },
    description: {
        es: 'Sistema que busca ofertas en LinkedIn, Computrabajo, elempleo, Indeed y Workana con scrapers en Python y Playwright. Cada oferta se analiza con IA contra el CV del usuario (Gemini, en lotes para ahorrar cuota, con control de límites y reintentos), y a las compatibles se postula automáticamente en los portales que lo permiten; al final envía un reporte por correo. Soporta varios usuarios, tiene panel web de administración y programador de corridas, y corre en un servidor Linux desplegado con GitHub Actions y systemd. Ya ha analizado miles de ofertas.',
        en: 'System that collects job offers from LinkedIn, Computrabajo, elempleo, Indeed and Workana with Python and Playwright scrapers. Every offer is scored by AI against the user\'s CV (Gemini, batched to save quota, with rate limiting and retries), and matching offers get an automatic application on the boards that allow it; a summary is then sent by email. It supports multiple users, has a web admin panel and a run scheduler, and runs on a Linux server deployed with GitHub Actions and systemd. It has already analyzed thousands of offers.'
    },
    tech: ['Python', 'Playwright', 'Gemini', 'SQLite', 'GitHub Actions', 'systemd'],
    links: []
},
    {
        "id": "nexopago",
        "portada": 1,
        "tags": [
            "web"
        ],
        "pro": true,
        "images": [
            "images/work/nexopago-01.webp",
            "images/work/nexopago-02.webp",
            "images/work/nexopago-03.webp",
            "images/work/nexopago-04.webp",
            "images/work/nexopago-05.webp",
            "images/work/nexopago-06.webp",
            "images/work/nexopago-07.webp",
            "images/work/nexopago-08.webp",
            "images/work/nexopago-09.webp",
            "images/work/nexopago-10.webp",
            "images/work/nexopago-11.webp",
            "images/work/nexopago-12.webp",
            "images/work/nexopago-13.webp",
            "images/work/nexopago-14.webp",
            "images/work/nexopago-15.webp",
            "images/work/nexopago-16.webp",
            "images/work/nexopago-17.webp"
        ],
        "captions": {
            "es": [
                "Inicio de sesión.",
                "Tablero con cartera, órdenes pendientes y pagos mensuales.",
                "Proveedores con su saldo pendiente.",
                "Catálogo de productos.",
                "Órdenes de compra con su estado de recepción y pago.",
                "Detalle de una orden con progreso de recepción y pagos.",
                "Creación de una orden de compra, con recorrido guiado.",
                "Entradas de mercancía registradas.",
                "Recibos de pago a proveedores.",
                "Cartera por orden y antigüedad, exportable a Excel.",
                "Importación de saldos iniciales desde Excel.",
                "Usuarios y sus perfiles.",
                "Matriz de permisos por perfil y módulo.",
                "Auditoría de operaciones.",
                "Respaldo y restauración de la base de datos.",
                "Empresas habilitadas en el sistema.",
                "Orden de compra lista para imprimir."
            ],
            "en": [
                "Sign-in.",
                "Dashboard with payables, pending orders and monthly payments.",
                "Suppliers with their outstanding balance.",
                "Product catalog.",
                "Purchase orders with receipt and payment status.",
                "Order detail with receipt and payment progress.",
                "Creating a purchase order, with a guided tour.",
                "Recorded goods receipts.",
                "Supplier payment receipts.",
                "Payables by order and aging, exportable to Excel.",
                "Opening balance import from Excel.",
                "Users and their profiles.",
                "Permission matrix by profile and module.",
                "Operations audit log.",
                "Database backup and restore.",
                "Companies enabled in the system.",
                "Purchase order ready to print."
            ]
        },
        "category": {
            "es": "Sistema web",
            "en": "Web system"
        },
        "title": {
            "es": "NexoPago — Compras y pagos a proveedores",
            "en": "NexoPago — Purchasing & supplier payments"
        },
        "short": {
            "es": "Reconstrucción con código propio de un sistema de compras y pagos que había sido entregado sin código fuente.",
            "en": "In-house rebuild of a purchasing and payments system that had been delivered without source code."
        },
        "description": {
            "es": "El sistema original de compras y pagos fue desarrollado por un proveedor externo y entregado cerrado. Este proyecto lo reconstruye con código propio: un backend compatible con la misma API y la misma base de datos, y un frontend igualado pantalla por pantalla, para poder mantenerlo y ampliarlo internamente. Además del sistema original, agrega manejo de varias empresas y lectura de pedidos y catálogo desde el ERP.",
            "en": "The original purchasing and payments system was built by an external vendor and delivered as a closed product. This project rebuilds it with in-house code: a backend compatible with the same API and database, and a frontend matched screen by screen, so it can be maintained and extended internally. On top of the original, it adds multi-company support and reads orders and the product catalog from the ERP."
        },
        "highlights": {
            "es": [
                "Proveedores, productos, órdenes de compra, entradas de mercancía y recibos de pago.",
                "Ciclo de la orden: borrador, recepción parcial o total, pagos parciales y anulación con validaciones.",
                "Modificación de órdenes con motivo e historial campo por campo, y auditoría de cada operación.",
                "Reporte de cartera por antigüedad e importación de saldos iniciales desde Excel.",
                "Perfiles y permisos por módulo (37 permisos), multiempresa aislada desde la propia base de datos.",
                "Respaldo y restauración, impresión de documentos, ayuda contextual y recorrido guiado.",
                "Pruebas automatizadas por rol, de API y de navegador."
            ],
            "en": [
                "Suppliers, products, purchase orders, goods receipts and payment receipts.",
                "Order lifecycle: draft, partial or full receipt, partial payments and cancellation with validations.",
                "Order changes with a reason and field-by-field history, plus an audit trail of every operation.",
                "Payables aging report and opening balance import from Excel.",
                "Profiles and per-module permissions (37 permissions), with multi-company isolation in the database itself.",
                "Backup and restore, document printing, contextual help and a guided tour.",
                "Automated role-based, API and browser tests."
            ]
        },
        "challenges": {
            "es": [
                "Mantener compatibilidad exacta con el frontend y la base originales mientras se reimplementaba la lógica de negocio.",
                "Aislar los datos de cada empresa con vistas y triggers en la base, no en cada consulta.",
                "Migraciones idempotentes que preparan la base al arrancar sin borrar nada del esquema original."
            ],
            "en": [
                "Keeping exact compatibility with the original frontend and database while reimplementing the business logic.",
                "Isolating each company's data with database views and triggers rather than in every query.",
                "Idempotent migrations that prepare the database at startup without dropping anything from the original schema."
            ]
        },
        "tech": [
            "Python",
            "FastAPI",
            "Firebird",
            "JWT",
            "React",
            "Vite",
            "PrimeReact",
            "Playwright",
            "pytest"
        ],
        "links": []
    },
    {
        "id": "ventas-whatsapp",
        "portada": 2,
        "tags": [
            "web",
            "movil"
        ],
        "pro": true,
        "images": [
            "images/work/ventas-whatsapp-01.webp",
            "images/work/ventas-whatsapp-02.webp",
            "images/work/ventas-whatsapp-03.webp",
            "images/work/ventas-whatsapp-04.webp",
            "images/work/ventas-whatsapp-05.webp",
            "images/work/ventas-whatsapp-06.webp",
            "images/work/ventas-whatsapp-07.webp",
            "images/work/ventas-whatsapp-08.webp",
            "images/work/ventas-whatsapp-09.webp"
        ],
        "captions": {
            "es": [
                "Inicio de sesión.",
                "Bandeja de conversaciones con etapa, canal y línea de producto.",
                "Chat con asignación de vendedor y etapa del embudo.",
                "Vendedores y reparto automático opcional.",
                "Estado de la conexión del número.",
                "Vinculación del número con código QR.",
                "Mensajes rápidos y mensaje de ausencia.",
                "Métricas del embudo, categorías, fuentes y vendedores.",
                "Bandeja y chat del vendedor en el celular."
            ],
            "en": [
                "Sign-in.",
                "Conversation inbox with stage, channel and product line.",
                "Chat with salesperson assignment and funnel stage.",
                "Salespeople and optional automatic routing.",
                "Number connection status.",
                "Linking the number with a QR code.",
                "Quick replies and away message.",
                "Funnel, category, source and salesperson metrics.",
                "Salesperson inbox and chat on the phone."
            ]
        },
        "category": {
            "es": "Web · Mensajería",
            "en": "Web · Messaging"
        },
        "title": {
            "es": "Ventas por WhatsApp — Bandeja compartida",
            "en": "WhatsApp Sales — Shared inbox"
        },
        "short": {
            "es": "Bandeja web para atender desde un solo número de WhatsApp los clientes que llegan por pauta, con asignación a vendedores y métricas.",
            "en": "Web inbox to serve ad-driven leads from a single WhatsApp number, with salesperson assignment and metrics."
        },
        "description": {
            "es": "Sistema que recibe en un único número de WhatsApp los mensajes de la pauta publicitaria y los reparte entre los vendedores. Los vendedores atienden desde un panel web o desde la app, sin usar WhatsApp en su teléfono, y el número nunca cambia para el cliente.",
            "en": "System that receives ad campaign messages on a single WhatsApp number and distributes them among salespeople. Salespeople reply from a web panel or the app, without using WhatsApp on their phones, and the number never changes for the customer."
        },
        "highlights": {
            "es": [
                "Recepción de mensajes por webhook y asignación o reasignación de cada conversación a un vendedor.",
                "Chat web con texto, imágenes, video, audio y documentos, y respuestas citadas.",
                "Etapas del embudo de venta, línea de producto y canal de origen de cada contacto.",
                "Mensajes rápidos, mensaje automático de ausencia y cierre de chat con aviso al cliente.",
                "Métricas de contactos, embudo, categorías, fuentes y rendimiento por vendedor.",
                "Notificaciones push, app Android e instalación como aplicación web.",
                "Vinculación del número escaneando un código QR."
            ],
            "en": [
                "Messages received via webhook, with each conversation assigned or reassigned to a salesperson.",
                "Web chat with text, images, video, audio and documents, plus quoted replies.",
                "Sales funnel stage, product line and source channel for each contact.",
                "Quick replies, automatic away message and chat closing with a notice to the customer.",
                "Metrics for contacts, funnel, categories, sources and per-salesperson performance.",
                "Push notifications, Android app and installable web app.",
                "Number linking by scanning a QR code."
            ]
        },
        "challenges": {
            "es": [
                "Mantener una sola identidad de WhatsApp para el cliente mientras varias personas atienden detrás.",
                "Notificar en tiempo real a cada vendedor en web y en el celular."
            ],
            "en": [
                "Keeping a single WhatsApp identity for the customer while several people respond behind it.",
                "Notifying each salesperson in real time on the web and on their phone."
            ]
        },
        "tech": [
            "Python",
            "FastAPI",
            "SQLAlchemy",
            "SQLite",
            "WebSockets",
            "Evolution API (WhatsApp)",
            "Web Push",
            "Capacitor",
            "Docker"
        ],
        "links": []
    },
    {
        "id": "helisa2pg",
        "tags": [
            "datos",
            "devops"
        ],
        "pro": true,
        "images": [
            "images/work/helisa2pg-01.webp",
            "images/work/helisa2pg-02.webp",
            "images/work/helisa2pg-03.webp"
        ],
        "captions": {
            "es": [
                "Flujo completo: respaldo, migración y base unificada que consumen las aplicaciones.",
                "Cómo las tablas abreviadas y separadas por año quedan en tablas legibles.",
                "Ejecución programada del migrador (cifras ilustrativas)."
            ],
            "en": [
                "Full flow: backup, migration and the unified database consumed by the apps.",
                "How abbreviated, year-split tables become readable tables.",
                "Scheduled migrator run (illustrative figures)."
            ]
        },
        "category": {
            "es": "Datos · ETL",
            "en": "Data · ETL"
        },
        "title": {
            "es": "helisa2pg — Migrador de Helisa a PostgreSQL",
            "en": "helisa2pg — Helisa to PostgreSQL migrator"
        },
        "short": {
            "es": "Pipeline nocturno que unifica las bases Firebird del ERP en una sola base PostgreSQL lista para análisis.",
            "en": "Nightly pipeline that merges the ERP's Firebird databases into a single PostgreSQL database ready for analytics."
        },
        "description": {
            "es": "El ERP contable de un grupo empresarial colombiano de fabricación de mobiliario y metalmecánica guarda la información en archivos Firebird separados por empresa, con tablas partidas por año y nombres abreviados, lo que hacía casi imposible consultar o cruzar datos. helisa2pg respalda cada madrugada las bases del ERP y las vuelca en una sola base PostgreSQL: une la base central y las de cada empresa, da nombres legibles a más de 230 tablas, reúne las tablas anuales en una sola con columna de año y crea relaciones e índices. Es la base sobre la que se construyeron el SIG y el resto de proyectos.",
            "en": "The accounting ERP of a Colombian furniture and metalworking group stores its data in separate Firebird files per company, with tables split by year and abbreviated names, which made querying or joining data nearly impossible. Every night helisa2pg backs up the ERP databases and loads them into a single PostgreSQL database: it merges the central database with each company's, gives readable names to more than 230 tables, consolidates yearly tables into one with a year column, and creates relationships and indexes. It is the foundation the SIG and the other projects were built on."
        },
        "highlights": {
            "es": [
                "Respaldo diario fechado (1:00 a. m.) de las bases y de los archivos clave del ERP.",
                "Migración completa (3:00 a. m.) con opción de usar el respaldo del día anterior si el del día falla.",
                "Consolidación de tablas anuales en una sola tabla con columna anio y origen en fuente_db.",
                "Creación de relaciones (93 llaves foráneas) e índices pensados para los tableros.",
                "Migración encadenada del módulo de nómina a un schema separado.",
                "Verificación de conteos origen contra destino y bloqueo contra corridas simultáneas.",
                "Utilidad de sesiones activas para administrar el límite de licencias del ERP."
            ],
            "en": [
                "Dated daily backup (1:00 a.m.) of the ERP databases and key files.",
                "Full migration (3:00 a.m.) that can fall back to the previous day's backup if today's fails.",
                "Yearly tables consolidated into a single table with an anio column and source tracked in fuente_db.",
                "Relationships (93 foreign keys) and indexes designed for the dashboards.",
                "Chained migration of the payroll module into a separate schema.",
                "Source-versus-target row count checks and a lock against concurrent runs.",
                "Active-session utility to manage the ERP's license limit."
            ]
        },
        "challenges": {
            "es": [
                "Leer Firebird sin depender de un servidor, empaquetando los binarios embebidos para Linux y Windows.",
                "Aislar tablas con páginas BLOB dañadas que tumbaban la conexión completa.",
                "Descifrar la codificación propia de fechas del ERP para poder filtrar por periodos."
            ],
            "en": [
                "Reading Firebird without a server by bundling the embedded binaries for Linux and Windows.",
                "Isolating tables with corrupted BLOB pages that brought down the whole connection.",
                "Decoding the ERP's proprietary date encoding to filter by period."
            ]
        },
        "tech": [
            "Python",
            "Firebird 3",
            "PostgreSQL",
            "fdb",
            "psycopg2",
            "Windows Task Scheduler",
            "GitHub Actions"
        ],
        "links": []
    },
    {
        "id": "helisa-imports",
        "portada": 6,
        "tags": [
            "web",
            "datos"
        ],
        "pro": true,
        "images": [
            "images/work/helisa-imports-01.webp",
            "images/work/helisa-imports-02.webp",
            "images/work/helisa-imports-03.webp",
            "images/work/helisa-imports-04.webp",
            "images/work/helisa-imports-05.webp",
            "images/work/helisa-imports-06.webp",
            "images/work/helisa-imports-07.webp",
            "images/work/helisa-imports-08.webp",
            "images/work/helisa-imports-09.webp",
            "images/work/helisa-imports-10.webp",
            "images/work/helisa-imports-11.webp",
            "images/work/helisa-imports-12.webp",
            "images/work/helisa-imports-13.webp"
        ],
        "captions": {
            "es": [
                "Inicio de sesión.",
                "Inicio con los módulos disponibles para el usuario.",
                "Carga de la planilla de nómina e historial de cargas.",
                "Buscador del precio vigente de cada material.",
                "Carga de la matriz de costos completa y cargas anteriores.",
                "Costeo de productos a partir de los precios cargados.",
                "Resumen de conciliaciones por banco, cuenta y periodo.",
                "Detalle de una conciliación con sus estados y candidatos en el ERP.",
                "Bandeja de planillas de nómina recibidas por correo.",
                "Registro de empresas temporales y sus alias.",
                "Lectura automática del portal de nómina de las temporales.",
                "Usuarios y permisos por área.",
                "Portal externo donde cada temporal sube su planilla."
            ],
            "en": [
                "Sign-in.",
                "Home with the modules available to the user.",
                "Payroll upload and upload history.",
                "Current price lookup for each material.",
                "Full cost matrix upload and previous uploads.",
                "Product costing from the uploaded prices.",
                "Reconciliation summary by bank, account and period.",
                "Reconciliation detail with statuses and ERP candidates.",
                "Inbox of payrolls received by email.",
                "Registry of staffing agencies and their aliases.",
                "Automatic reading of the agencies' payroll portal.",
                "Users and permissions by department.",
                "External portal where each agency uploads its payroll."
            ]
        },
        "category": {
            "es": "Web · Integraciones",
            "en": "Web · Integrations"
        },
        "title": {
            "es": "Helisa Imports — Cargas por dependencia",
            "en": "Helisa Imports — Departmental data uploads"
        },
        "short": {
            "es": "Portal donde cada área carga y valida la información que el ERP no tiene: nómina de temporales, costos y conciliación bancaria.",
            "en": "Portal where each department uploads and validates the data the ERP lacks: agency payroll, costs and bank reconciliation."
        },
        "description": {
            "es": "Aplicación web con usuarios por área para centralizar la información que vivía en hojas de Excel sueltas. Cada carga se valida completa antes de guardarse y queda disponible para los tableros del SIG. Reúne cuatro módulos: nómina de empresas temporales, costos de materia prima, conciliación bancaria contra el ERP y el monitor de uso del ERP.",
            "en": "Web application with per-department users that centralizes data that used to live in scattered Excel sheets. Every upload is fully validated before it is saved and becomes available to the SIG dashboards. It brings together four modules: staffing-agency payroll, raw material costs, bank reconciliation against the ERP and the ERP usage monitor."
        },
        "highlights": {
            "es": [
                "Carga de plantillas Excel con validación de todo o nada y mapeo de columnas por encabezado.",
                "Nómina de temporales por cuatro canales: carga manual, lectura del buzón de correo (Microsoft Graph), lectura nocturna del portal de cada temporal y un portal externo donde la temporal revisa y confirma su planilla.",
                "Matriz de costos de materia prima con histórico de cargas, buscador de precio vigente y calculadora de costos de cotizaciones.",
                "Conciliación bancaria: lectores de extractos en PDF, CSV y Excel para seis bancos y tarjetas de crédito, cruce por monto contra el ERP y re-conciliación automática cada noche.",
                "Desglose de pagos masivos a proveedores y punto de partida desde la conciliación manual.",
                "Monitor de uso del ERP con eventos cifrados y aprobación de equipos."
            ],
            "en": [
                "Excel template uploads with all-or-nothing validation and header-based column mapping.",
                "Agency payroll through four channels: manual upload, mailbox reading (Microsoft Graph), nightly scraping of each agency's portal, and an external portal where the agency reviews and confirms its payroll.",
                "Raw material cost matrix with upload history, current-price lookup and a quote cost calculator.",
                "Bank reconciliation: PDF, CSV and Excel statement readers for six banks and credit cards, amount-based matching against the ERP and automatic nightly re-reconciliation.",
                "Breakdown of bulk supplier payments and a starting point from manual reconciliation.",
                "ERP usage monitor with encrypted events and device approval."
            ]
        },
        "challenges": {
            "es": [
                "Conciliar por monto en lugar de por fecha, porque el ERP registra movimientos con días o semanas de desfase.",
                "Escribir y mantener un lector por banco y formato, detectando el banco por el contenido del archivo.",
                "Evitar duplicados cuando la misma nómina llega por correo, por el portal y por carga manual."
            ],
            "en": [
                "Matching by amount instead of date, because the ERP records transactions days or weeks late.",
                "Writing and maintaining one reader per bank and format, detecting the bank from the file contents.",
                "Avoiding duplicates when the same payroll arrives by email, through the portal and by manual upload."
            ]
        },
        "tech": [
            "Python",
            "Flask",
            "PostgreSQL",
            "Microsoft Graph",
            "Web scraping",
            "openpyxl",
            "pdftotext",
            "RSA",
            "Docker",
            "GitHub Actions"
        ],
        "links": []
    },
    {
    id: 'asesor-voz',
    tags: ['ia'],
    cover: 'asesor-voz',
    images: ['images/projects/asesor-voz-1.webp', '@cover'],
    sample: true,
    category: { es: 'IA conversacional', en: 'Conversational AI' },
    title: { es: 'Asesor de ventas por voz', en: 'AI Voice Sales Agent' },
    short: {
        es: 'Prototipo que conversa por voz en tiempo real con Gemini Live y registra el resultado de la llamada.',
        en: 'Prototype that holds real-time voice conversations with Gemini Live and logs the call outcome.'
    },
    description: {
        es: 'Prototipo de asesor de ventas que atiende una llamada y conversa por voz en tiempo real. Una sola conexión a Gemini Live escucha al cliente, decide qué responder y habla, con respuestas en 1,2 a 1,9 segundos, frente a unos 4,9 s de la cadena voz a texto + LLM + texto a voz, que también medí. El guion de venta, las objeciones y los productos se editan en un archivo de texto, y durante la llamada el asesor ejecuta acciones (cliente quiere comprar, no interesado, colgar) que se envían por webhook. Si el cliente lo interrumpe, se calla en unos 0,4 s.',
        en: 'Sales agent prototype that answers a call and talks in real time. A single Gemini Live connection listens to the customer, decides what to say and speaks, replying in 1.2 to 1.9 seconds, versus about 4.9 s for a speech-to-text + LLM + text-to-speech chain, which I also benchmarked. The sales script, objections and products live in an editable text file, and during the call the agent triggers actions (customer wants to buy, not interested, hang up) that are sent through a webhook. When the customer interrupts, it stops talking within about 0.4 s.'
    },
    tech: ['Python', 'Gemini Live', 'WebSocket', 'Web Audio', 'Webhooks'],
    links: []
},
    {
    id: 'racket-pulse',
    pro: true,
    tags: ['web', 'movil'],
    images: ['images/rp-landing.png', 'images/rp-backoffice.png', 'images/rp-admin.png', 'images/rp-android.png', 'images/rp-ios.png'],
    captions: {
        es: ['Landing page.', 'Backoffice de reservas, usuarios, pagos y reportes.', 'Panel de administración con roles y monitoreo.', 'App Android.', 'App iOS.'],
        en: ['Landing page.', 'Backoffice for bookings, users, payments and reports.', 'Admin panel with roles and monitoring.', 'Android app.', 'iOS app.']
    },
    category: { es: 'Plataforma web y móvil', en: 'Web & mobile platform' },
    title: { es: 'Racket Pulse', en: 'Racket Pulse' },
    short: {
        es: 'Plataforma de pádel: landing, backoffice, panel de administración y apps para Android e iOS.',
        en: 'Padel platform: landing page, backoffice, admin panel and Android and iOS apps.'
    },
    description: {
        es: 'Plataforma completa para jugadores y clubes de pádel, desarrollada en Innobyte Nexus Partners. Incluye landing page, backoffice para gestionar reservas, usuarios, pagos y reportes, panel de administración con roles, permisos y monitoreo en vivo, y apps nativas para Android e iOS hechas con React Native. Trabajé en la arquitectura backend con NestJS y TypeScript, las APIs para web y móvil, las integraciones con Stripe, Fiuu y Nominatim, y el despliegue de los servicios.',
        en: 'Full platform for padel players and clubs, built at Innobyte Nexus Partners. It includes a landing page, a backoffice to manage bookings, users, payments and reports, an admin panel with roles, permissions and live monitoring, and native Android and iOS apps built with React Native. I worked on the NestJS/TypeScript backend architecture, the web and mobile APIs, the Stripe, Fiuu and Nominatim integrations, and service deployment.'
    },
    tech: ['NestJS', 'TypeScript', 'React', 'React Native', 'PostgreSQL', 'Docker'],
    links: [
        { label: 'Landing', url: 'https://racketpulse.com/' },
        { label: 'Backoffice', url: 'https://backoffice.racketpulse.com/' },
        { label: 'Admin', url: 'https://sysadmin.racketpulse.com/' },
        { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.racketpulse.app' },
        { label: 'App Store', url: 'https://apps.apple.com/es/app/racket-pulse/id6749810362' }
    ]
},
    {
        "id": "bancos",
        "tags": [
            "datos",
            "devops"
        ],
        "pro": true,
        "images": [
            "images/work/bancos-01.webp",
            "images/work/bancos-02.webp",
            "images/work/bancos-03.webp",
            "images/work/bancos-04.webp"
        ],
        "captions": {
            "es": [
                "Tablero con indicadores y resumen por cuenta.",
                "Movimientos por tipo de transacción y su distribución.",
                "Flujo diario, evolución de saldos y mayores movimientos.",
                "Registro de bancos y pasos del orquestador."
            ],
            "en": [
                "Dashboard with KPIs and summary by account.",
                "Transactions by type and their distribution.",
                "Daily cash flow, balance trend and largest transactions.",
                "Bank registry and orchestrator steps."
            ]
        },
        "category": {
            "es": "Automatización · Finanzas",
            "en": "Automation · Finance"
        },
        "title": {
            "es": "Bancos — Orquestador de extractos bancarios",
            "en": "Banks — Bank statement orchestrator"
        },
        "short": {
            "es": "Proceso desatendido que descarga, carga y verifica cada día los movimientos bancarios del grupo.",
            "en": "Unattended process that downloads, loads and verifies the group's bank transactions every day."
        },
        "description": {
            "es": "Orquestador que ejecuta, en orden y sin intervención, los pasos de cada banco: descargar los movimientos, cargarlos a la base de datos, actualizar su tablero y verificar que no falte información. Agregar un banco nuevo es declarar su carpeta y sus pasos.",
            "en": "Orchestrator that runs each bank's steps in order and unattended: download the transactions, load them into the database, refresh its dashboard and verify nothing is missing. Adding a new bank is just declaring its folder and steps."
        },
        "highlights": {
            "es": [
                "Davivienda: descarga de los archivos Multicash desde el correo cifrado del banco y carga de saldos y movimientos.",
                "Tablero HTML autocontenido con saldos, flujo diario, tipos de transacción y mayores movimientos.",
                "Verificación de completitud: días faltantes, cuentas sin datos y diferencias contra los totales del banco.",
                "Banco de Bogotá (en pruebas): consulta por API Open Banking con OAuth2 y certificado de cliente.",
                "Registro de cada corrida y código de salida para tareas programadas."
            ],
            "en": [
                "Davivienda: downloads Multicash files from the bank's encrypted email and loads balances and transactions.",
                "Self-contained HTML dashboard with balances, daily cash flow, transaction types and largest movements.",
                "Completeness checks: missing days, accounts without data and differences against the bank's totals.",
                "Banco de Bogotá (in testing): Open Banking API queries with OAuth2 and a client certificate.",
                "Log of every run and exit codes for scheduled tasks."
            ]
        },
        "challenges": {
            "es": [
                "Automatizar la descarga desde un buzón cifrado sin acceso IMAP, recuperando solo los días que faltan.",
                "Detectar respuestas truncadas de la API del banco, que corta en 200 movimientos sin avisar."
            ],
            "en": [
                "Automating downloads from an encrypted mailbox without IMAP access, fetching only the missing days.",
                "Detecting truncated responses from the bank's API, which silently stops at 200 transactions."
            ]
        },
        "tech": [
            "Python",
            "Playwright",
            "PostgreSQL",
            "OAuth2 / mTLS",
            "HTML/JavaScript",
            "cron / Task Scheduler"
        ],
        "links": []
    },
    {
        "id": "cotizaciones",
        "tags": [
            "web"
        ],
        "pro": true,
        "images": [
            "images/work/cotizaciones-01.webp",
            "images/work/cotizaciones-02.webp",
            "images/work/cotizaciones-03.webp",
            "images/work/cotizaciones-04.webp",
            "images/work/cotizaciones-05.webp",
            "images/work/cotizaciones-06.webp",
            "images/work/cotizaciones-07.webp"
        ],
        "captions": {
            "es": [
                "Panel con indicadores, estados, interés por correo y ranking de vendedores.",
                "Listado de cotizaciones con filtros.",
                "Detalle de una cotización con ítems de catálogo y a medida.",
                "Formulario de nueva cotización.",
                "Gestión de clientes.",
                "Catálogo de productos.",
                "Usuarios con sus roles."
            ],
            "en": [
                "Dashboard with KPIs, statuses, email interest and salesperson ranking.",
                "Quote list with filters.",
                "Quote detail with catalog and custom items.",
                "New quote form.",
                "Customer management.",
                "Product catalog.",
                "Users and their roles."
            ]
        },
        "category": {
            "es": "Sistema web · Ventas",
            "en": "Web system · Sales"
        },
        "title": {
            "es": "Cotizaciones Galerías",
            "en": "Galerías Quotation System"
        },
        "short": {
            "es": "Sistema de cotizaciones para tiendas de mobiliario, con productos de catálogo y muebles a medida, PDF y seguimiento por correo.",
            "en": "Quotation system for furniture stores, with catalog products and custom-made furniture, PDF output and email tracking."
        },
        "description": {
            "es": "Aplicación para que los asesores de las tiendas armen cotizaciones que mezclan productos de catálogo y mobiliario a medida, las envíen por correo en PDF y hagan seguimiento al interés del cliente.",
            "en": "Application for store sales reps to build quotes that combine catalog products and custom-made furniture, email them as PDFs and track customer interest."
        },
        "highlights": {
            "es": [
                "Cotización mixta: catálogo por cantidad y piezas a medida con dimensiones, material y color.",
                "Cálculo automático de subtotales, descuento, IVA, transporte e instalación.",
                "PDF con la imagen de la empresa y envío por correo; envío automático de borradores olvidados.",
                "Nivel de interés del cliente según aperturas y clics del correo.",
                "Panel con indicadores, cotizaciones por estado, ranking de vendedores y cotizaciones por vencer.",
                "Roles de administrador, supervisor y vendedor; catálogo sincronizado desde el ERP."
            ],
            "en": [
                "Mixed quotes: catalog items by quantity and custom pieces with dimensions, material and color.",
                "Automatic subtotals, discount, VAT, delivery and installation.",
                "Branded PDF sent by email; forgotten drafts are sent automatically.",
                "Customer interest level based on email opens and clicks.",
                "Dashboard with KPIs, quotes by status, salesperson ranking and expiring quotes.",
                "Admin, supervisor and salesperson roles; catalog synced from the ERP."
            ]
        },
        "challenges": {
            "es": [
                "Convertir eventos de correo (entregado, abierto, clic, rebote) en una señal comercial útil para priorizar seguimiento.",
                "Recalcular totales en el servidor en cada cambio y congelar la cotización al cambiar de estado."
            ],
            "en": [
                "Turning email events (delivered, opened, clicked, bounced) into a useful sales signal to prioritize follow-up.",
                "Recalculating totals on the server on every change and freezing the quote when its status changes."
            ]
        },
        "tech": [
            "Python",
            "Flask",
            "SQLAlchemy",
            "SQLite",
            "PostgreSQL",
            "xhtml2pdf",
            "Transactional email API",
            "Docker",
            "GitHub Actions"
        ],
        "links": []
    },
    {
        "id": "transporte",
        "portada": 1,
        "tags": [
            "web"
        ],
        "pro": true,
        "images": [
            "images/work/transporte-01.webp",
            "images/work/transporte-02.webp",
            "images/work/transporte-03.webp",
            "images/work/transporte-04.webp",
            "images/work/transporte-05.webp",
            "images/work/transporte-06.webp",
            "images/work/transporte-07.webp",
            "images/work/transporte-08.webp",
            "images/work/transporte-09.webp",
            "images/work/transporte-10.webp"
        ],
        "captions": {
            "es": [
                "Inicio de sesión.",
                "Panel principal con métricas y solicitudes recientes.",
                "Formato de solicitud de transporte.",
                "Solicitudes por programar en despachos.",
                "Detalle de una solicitud con su historial.",
                "Solicitudes que requieren un transportador tercero.",
                "Calendario de viajes por vehículo.",
                "Consulta de todas las solicitudes.",
                "Flota de vehículos y conductores.",
                "Usuarios, pantallas y empresas por usuario."
            ],
            "en": [
                "Sign-in.",
                "Main panel with metrics and recent requests.",
                "Transport request form.",
                "Requests pending scheduling in dispatch.",
                "Request detail with its history.",
                "Requests that need a third-party carrier.",
                "Trip calendar by vehicle.",
                "Search across all requests.",
                "Vehicle fleet and drivers.",
                "Users, screens and companies per user."
            ]
        },
        "category": {
            "es": "Sistema web · Logística",
            "en": "Web system · Logistics"
        },
        "title": {
            "es": "Solicitudes de Transporte",
            "en": "Transport Requests"
        },
        "short": {
            "es": "Flujo completo de solicitudes de transporte: solicitud, programación con flota propia o terceros, seguimiento y entrega.",
            "en": "End-to-end transport request flow: request, scheduling with the company fleet or third parties, tracking and delivery."
        },
        "description": {
            "es": "Sistema para registrar, programar y seguir los despachos del grupo. Cada rol tiene su pantalla: quien solicita, despachos, administración, consulta y el conductor, y cada paso queda en el historial de la solicitud.",
            "en": "System to register, schedule and track the group's shipments. Each role has its own screen (requester, dispatch, administration, read-only and driver) and every step is recorded in the request history."
        },
        "highlights": {
            "es": [
                "Formato digital de solicitud con validaciones de fechas y campos obligatorios.",
                "Programación con vehículo propio o paso a administración cuando se requiere un tercero.",
                "Programación de varios pedidos en un mismo viaje con el costo repartido.",
                "Calendario de viajes por vehículo y día.",
                "Historial, comentarios, adjuntos del transportador y exportación a Excel.",
                "Pantallas y empresas asignadas por usuario; notificaciones push.",
                "Base de datos que se prepara sola en cada despliegue, de forma idempotente."
            ],
            "en": [
                "Digital request form with date and required-field validations.",
                "Scheduling with a company vehicle, or escalation to administration when a third party is needed.",
                "Several orders scheduled on the same trip with the cost split between them.",
                "Trip calendar by vehicle and day.",
                "History, comments, carrier attachments and Excel export.",
                "Screens and companies assigned per user; push notifications.",
                "Database that sets itself up idempotently on every deployment."
            ]
        },
        "challenges": {
            "es": [
                "Modelar un flujo con caminos distintos según haya vehículo propio o tercero, sin perder trazabilidad.",
                "Despliegues seguros: esquema idempotente con bloqueo para que dos instancias no se pisen."
            ],
            "en": [
                "Modeling a flow with different paths for company or third-party vehicles without losing traceability.",
                "Safe deployments: an idempotent schema with locking so two instances never collide."
            ]
        },
        "tech": [
            "Python",
            "PostgreSQL",
            "JavaScript",
            "Bootstrap",
            "openpyxl",
            "Web Push",
            "Docker",
            "GitHub Actions"
        ],
        "links": []
    },
    {
        "id": "qr-daily",
        "portada": 4,
        "tags": [
            "web",
            "movil"
        ],
        "pro": true,
        "images": [
            "images/work/qr-daily-01.webp",
            "images/work/qr-daily-02.webp",
            "images/work/qr-daily-03.webp",
            "images/work/qr-daily-04.webp",
            "images/work/qr-daily-05.webp",
            "images/work/qr-daily-06.webp",
            "images/work/qr-daily-07.webp",
            "images/work/qr-daily-08.webp",
            "images/work/qr-daily-09.webp",
            "images/work/qr-daily-10.webp",
            "images/work/qr-daily-11.webp"
        ],
        "captions": {
            "es": [
                "Inicio de sesión del panel administrativo.",
                "Indicadores generales.",
                "Empleados con su sticker asignado.",
                "Historial de escaneos de un empleado.",
                "Registro mensual y progreso hacia el día compensatorio.",
                "Inventario de stickers.",
                "Hoja de stickers lista para imprimir.",
                "Porteros con acceso a la app.",
                "Configuración del beneficio y días no laborales.",
                "Importación masiva de empleados.",
                "Portal del empleado y código QR personal en el celular."
            ],
            "en": [
                "Admin panel sign-in.",
                "Overall KPIs.",
                "Employees with their assigned sticker.",
                "Scan history of an employee.",
                "Monthly log and progress toward the compensatory day.",
                "Sticker inventory.",
                "Sticker sheet ready to print.",
                "Gatekeepers with app access.",
                "Benefit settings and non-working days.",
                "Bulk employee import.",
                "Employee portal and personal QR code on the phone."
            ]
        },
        "category": {
            "es": "Web · App Android",
            "en": "Web · Android app"
        },
        "title": {
            "es": "QR Daily Scanner — Llegada en bicicleta",
            "en": "QR Daily Scanner — Bike-to-work check-in"
        },
        "short": {
            "es": "Control de llegada en bicicleta con códigos QR para otorgar el beneficio legal de día compensatorio.",
            "en": "Bike-to-work check-in with QR codes to grant the legal compensatory day off."
        },
        "description": {
            "es": "Cada bicicleta lleva un sticker con un código QR que el portero escanea con una app Android. El sistema cuenta los días de llegada de cada empleado y avisa a Recursos Humanos cuando alguien completa el periodo que le da derecho al día compensatorio.",
            "en": "Each bike carries a QR code sticker that the gatekeeper scans with an Android app. The system counts each employee's arrival days and notifies Human Resources when someone completes the period that entitles them to the compensatory day off."
        },
        "highlights": {
            "es": [
                "Inventario de stickers QR numerados: generación, asignación, baja e impresión en hoja.",
                "App Android del portero con escaneo sin conexión y reintento sin duplicados.",
                "Registro de entrada y salida, e historial por empleado.",
                "Reporte de beneficio con conteo acumulado, festivos colombianos y días no laborales.",
                "Portal de autoconsulta del empleado para ver y descargar su código.",
                "Importación masiva de empleados y roles de administrador, Recursos Humanos y portero."
            ],
            "en": [
                "Inventory of numbered QR stickers: generation, assignment, retirement and sheet printing.",
                "Gatekeeper Android app with offline scanning and duplicate-free retries.",
                "Check-in and check-out log, plus history per employee.",
                "Benefit report with cumulative count, Colombian holidays and non-working days.",
                "Employee self-service portal to view and download their code.",
                "Bulk employee import and admin, HR and gatekeeper roles."
            ]
        },
        "challenges": {
            "es": [
                "Escanear sin conexión en la portería y sincronizar después sin registrar dos veces el mismo escaneo.",
                "Calcular días hábiles reales con el calendario de festivos de Colombia."
            ],
            "en": [
                "Scanning offline at the gate and syncing later without recording the same scan twice.",
                "Computing real business days with Colombia's holiday calendar."
            ]
        },
        "tech": [
            "Python",
            "Flask",
            "PostgreSQL",
            "qrcode",
            "Kotlin (Android)",
            "Docker",
            "GitHub Actions"
        ],
        "links": []
    },
    {
    id: 'opencode-mobile',
    tags: ['movil', 'ia'],
    cover: 'opencode-mobile',
    images: ['images/projects/opencode-mobile-1.webp', '@cover'],
    sample: true,
    category: { es: 'Herramientas dev', en: 'Dev tools' },
    title: { es: 'Opencode Mobile', en: 'Opencode Mobile' },
    short: {
        es: 'Agente Node.js + MQTT + app Android para seguir en vivo, desde el celular, a un agente de código con IA.',
        en: 'Node.js agent + MQTT + Android app to follow an AI coding agent live from your phone.'
    },
    description: {
        es: 'Permite monitorear desde el celular, en tiempo real y sin estar en la misma red, las terminales de Opencode (un agente de programación con IA) que corren en el PC. Un agente en Node.js y TypeScript escucha los eventos de Opencode por SSE y los publica en un broker MQTT (HiveMQ Cloud); la app Android, hecha en Kotlin con Jetpack Compose, se suscribe al canal y muestra las terminales en vivo. El emparejamiento se hace escaneando un código QR, y el agente arranca Opencode si no está corriendo.',
        en: 'Lets you monitor, in real time and from anywhere, the Opencode terminals (an AI coding agent) running on your PC. A Node.js/TypeScript agent listens to Opencode events over SSE and publishes them to an MQTT broker (HiveMQ Cloud); the Android app, built with Kotlin and Jetpack Compose, subscribes to the channel and shows the terminals live. Pairing is done by scanning a QR code, and the agent starts Opencode if it is not running.'
    },
    tech: ['Node.js', 'TypeScript', 'MQTT', 'Kotlin', 'Jetpack Compose'],
    links: []
},
    {
    id: 'security-monitor',
    tags: ['devops'],
    cover: 'security-monitor',
    images: ['images/projects/security-monitor-1.webp', '@cover'],
    sample: true,
    category: { es: 'DevOps · Seguridad', en: 'DevOps · Security' },
    title: { es: 'Monitor de seguridad para Ubuntu', en: 'Ubuntu Security Monitor' },
    short: {
        es: 'Servicio systemd en Bash que avisa al celular cada acceso SSH, uso de sudo y comando sensible.',
        en: 'Bash systemd service that pushes a phone alert for every SSH login, sudo use and sensitive command.'
    },
    description: {
        es: 'Servicio para servidores Ubuntu que vigila los registros del sistema y envía una notificación push por Gotify ante accesos SSH, uso de sudo y comandos sensibles como docker o rm. Tiene filtros configurables (por ejemplo, ignorar accesos con llave pública desde redes privadas), deduplicación de eventos para no saturar de alertas y control de instancia única. Se instala en un solo paso: el instalador detecta si es una instalación nueva o una actualización y lo deja corriendo como servicio systemd.',
        en: 'Service for Ubuntu servers that watches system logs and sends a Gotify push notification on SSH logins, sudo use and sensitive commands such as docker or rm. It has configurable filters (for example, ignoring public-key logins from private networks), event deduplication to avoid alert fatigue, and single-instance locking. It installs in one step: the installer detects whether it is a new install or an update and leaves it running as a systemd service.'
    },
    tech: ['Bash', 'systemd', 'Linux', 'Gotify', 'SSH'],
    links: []
},
    {
    id: 'gps-moto',
    tags: ['movil'],
    cover: 'gps-moto',
    images: ['images/projects/gps-moto-1.webp', 'images/projects/gps-moto-2.webp', '@cover'],
    category: { es: 'IoT · Android', en: 'IoT · Android' },
    title: { es: 'Alerta Fotomultas (GPS para moto)', en: 'Speed Camera Alert (Motorcycle GPS)' },
    short: {
        es: 'Avisa de cámaras de fotodetección si vas sobre el límite: dispositivo ESP32 con GPS y app Android sin internet.',
        en: 'Warns about speed cameras when you are over the limit: an ESP32 GPS device and an offline Android app.'
    },
    description: {
        es: 'Sistema de bajo costo que avisa al motociclista cuando se acerca a una cámara de fotodetección en Colombia y va por encima del límite. Tiene dos versiones con la misma lista de 725 cámaras y la misma lógica de alerta: un dispositivo con ESP32-C3, GPS NEO-6M y pantalla OLED, que graba los viajes y se configura por Wi-Fi, y una app Android que funciona sin internet, pesa unos 97 KB y avisa con pantalla, vibración y notificación. Incluye herramientas en Python para consolidar la lista de cámaras (ANSV, secretarías de movilidad y OpenStreetMap) y verla en un mapa. Las dos versiones están probadas en banco; falta la prueba en ruta.',
        en: 'Low-cost system that warns motorcyclists when approaching a speed camera in Colombia above the limit. It comes in two versions sharing the same list of 725 cameras and the same alert logic: a device with an ESP32-C3, a NEO-6M GPS and an OLED display that records trips and is configured over Wi-Fi, and an Android app that works offline, weighs about 97 KB and alerts with screen, vibration and notification. It includes Python tools to build the camera list (national road safety agency, city transit offices and OpenStreetMap) and view it on a map. Both versions are bench-tested; road testing is pending.'
    },
    tech: ['ESP32', 'C++ (Arduino)', 'Kotlin', 'Android', 'Python', 'OpenStreetMap'],
    links: []
},
    {
        "id": "pedidos-oc",
        "portada": 2,
        "tags": [
            "datos"
        ],
        "pro": true,
        "images": [
            "images/work/pedidos-oc-01.webp",
            "images/work/pedidos-oc-02.webp",
            "images/work/pedidos-oc-03.webp",
            "images/work/pedidos-oc-04.webp"
        ],
        "captions": {
            "es": [
                "Inicio de sesión de la herramienta.",
                "Selección de la empresa a consultar.",
                "Listado de pedidos con el detalle del documento seleccionado.",
                "Órdenes de compra con proveedor, cliente y detalle."
            ],
            "en": [
                "Tool sign-in.",
                "Choosing the company to query.",
                "Sales order list with the selected document's detail.",
                "Purchase orders with supplier, customer and detail."
            ]
        },
        "category": {
            "es": "App de escritorio",
            "en": "Desktop app"
        },
        "title": {
            "es": "Pedidos y Órdenes de Compra — Visor de escritorio",
            "en": "Sales & Purchase Orders — Desktop viewer"
        },
        "short": {
            "es": "Aplicación de escritorio ligera para consultar en vivo los pedidos y órdenes de compra del ERP, sin riesgo de modificarlos.",
            "en": "Lightweight desktop app to browse the ERP's sales and purchase orders live, with no risk of changing them."
        },
        "description": {
            "es": "Herramienta de un solo ejecutable para Windows que se conecta directamente a la base del ERP y muestra pedidos y órdenes de compra con filtros, detalle e impresión. Es de solo lectura: complementa el módulo oficial sin reemplazarlo.",
            "en": "Single-executable Windows tool that connects directly to the ERP database and shows sales and purchase orders with filters, detail and printing. It is read-only: it complements the official module without replacing it."
        },
        "highlights": {
            "es": [
                "Inicio de sesión propio y selección de empresa.",
                "Cambio rápido entre pedidos y órdenes de compra, con filtros por fecha y número de documento.",
                "Detalle de cada documento con un clic e impresión.",
                "Asesor y cliente de cada orden resueltos a partir del pedido enlazado.",
                "Ventana nativa (WebView2) con respaldo en el navegador y registro de errores junto al ejecutable."
            ],
            "en": [
                "Own sign-in and company selection.",
                "Quick switch between sales and purchase orders, with date and document number filters.",
                "One-click document detail and printing.",
                "Each order's sales rep and customer resolved from the linked sales order.",
                "Native window (WebView2) with browser fallback and an error log next to the executable."
            ]
        },
        "challenges": {
            "es": [
                "Resolver datos relacionados con pocas consultas por lote para que la lista no se vuelva lenta.",
                "Distribuir todo en un solo .exe con su archivo de configuración, sin instalar nada más."
            ],
            "en": [
                "Resolving related data with a few batched queries so the list stays fast.",
                "Shipping everything as a single .exe with its config file, with nothing else to install."
            ]
        },
        "tech": [
            "Go",
            "Firebird",
            "WebView2",
            "Embedded HTML/JS"
        ],
        "links": []
    },
    {
        "id": "smart-launcher",
        "tags": [
            "devops"
        ],
        "pro": true,
        "images": [
            "images/work/smart-launcher-01.webp",
            "images/work/smart-launcher-02.webp"
        ],
        "captions": {
            "es": [
                "Monitor con el estado de uso del ERP por usuario y equipo.",
                "Aprobación y revocación de equipos que reportan eventos."
            ],
            "en": [
                "Monitor with ERP usage status by user and computer.",
                "Approval and revocation of computers that report events."
            ]
        },
        "category": {
            "es": "DevOps · Seguridad",
            "en": "DevOps · Security"
        },
        "title": {
            "es": "Helisa Smart Launcher — Monitor de uso del ERP",
            "en": "Helisa Smart Launcher — ERP usage monitor"
        },
        "short": {
            "es": "Lanzador del ERP para cada PC que registra su uso y lo reporta cifrado al servidor en tiempo real.",
            "en": "ERP launcher for each PC that logs usage and reports it, encrypted, to the server in real time."
        },
        "description": {
            "es": "Conjunto de scripts que reemplaza el acceso directo del ERP en cada equipo. Registra cuándo se abre y se cierra el programa y por qué (cierre normal, inactividad, intento de manipulación), cifra cada evento y lo envía al servidor apenas ocurre. Los eventos se consultan en el Monitor de Helisa Imports, que muestra quién está usando el ERP en cada momento y ayuda a administrar las licencias concurrentes.",
            "en": "Set of scripts that replaces the ERP shortcut on each computer. It records when the program opens and closes and why (normal exit, inactivity, tampering attempt), encrypts every event and sends it to the server as soon as it happens. Events are reviewed in the Helisa Imports monitor, which shows who is using the ERP at any moment and helps manage concurrent licenses."
        },
        "highlights": {
            "es": [
                "Registro de apertura, cierre, inactividad y manipulación de la configuración local.",
                "Cifrado de cada evento con clave pública RSA: solo el servidor puede leerlos.",
                "Envío inmediato y cola local con reintento cuando el equipo no tiene red.",
                "Token único por equipo, con aprobación y revocación desde el panel.",
                "Monitor con estado actual por usuario y equipo y actividad diaria."
            ],
            "en": [
                "Logs opening, closing, inactivity and tampering with the local configuration.",
                "Every event encrypted with an RSA public key: only the server can read them.",
                "Immediate delivery plus a local retry queue when the computer is offline.",
                "Unique token per computer, approved and revoked from the panel.",
                "Monitor with current status by user and computer and daily activity."
            ]
        },
        "challenges": {
            "es": [
                "Autenticar equipos sin un secreto compartido: cada PC genera su propio token y el servidor lo aprueba.",
                "Garantizar que la identidad del usuario y el equipo salga del evento descifrado y no de datos que la PC pueda inventar."
            ],
            "en": [
                "Authenticating computers without a shared secret: each PC generates its own token and the server approves it.",
                "Ensuring user and computer identity come from the decrypted event, not from data the PC could forge."
            ]
        },
        "tech": [
            "PowerShell",
            "RSA",
            "HTTP/JSON",
            "Flask",
            "PostgreSQL"
        ],
        "links": []
    },
    {
        "id": "unificacion",
        "portada": 1,
        "tags": [
            "web"
        ],
        "pro": true,
        "images": [
            "images/work/unificacion-01.webp",
            "images/work/unificacion-02.webp",
            "images/work/unificacion-03.webp"
        ],
        "captions": {
            "es": [
                "Inicio de sesión común a ambos sistemas.",
                "Selector de módulo desde Cotizaciones.",
                "Selector de módulo desde Ventas."
            ],
            "en": [
                "Sign-in shared by both systems.",
                "Module selector from Quotes.",
                "Module selector from Sales."
            ]
        },
        "category": {
            "es": "Integración · SSO",
            "en": "Integration · SSO"
        },
        "title": {
            "es": "Unificación de Ventas y Cotizaciones",
            "en": "Sales & Quotes Unification"
        },
        "short": {
            "es": "Inicio de sesión único y navegación entre el sistema de ventas por WhatsApp y el de cotizaciones.",
            "en": "Single sign-on and navigation between the WhatsApp sales system and the quotation system."
        },
        "description": {
            "es": "Integración de dos aplicaciones independientes para que funcionen como una sola: los mismos usuarios y contraseñas, un selector de módulo al entrar y paso directo de una a otra sin volver a iniciar sesión. La misma app Android sirve para ambas.",
            "en": "Integration of two independent applications so they work as one: the same users and passwords, a module selector at sign-in and direct switching between them without signing in again. The same Android app serves both."
        },
        "highlights": {
            "es": [
                "Tabla única de usuarios en una base de datos separada, compartida por los dos sistemas.",
                "Migración automática e idempotente de los usuarios que ya existían en cada sistema.",
                "Paso de sesión firmado entre aplicaciones, protegido contra reutilización.",
                "Selector de módulo después del inicio de sesión."
            ],
            "en": [
                "Single users table in a separate database shared by both systems.",
                "Automatic, idempotent migration of the users that already existed in each system.",
                "Signed session handoff between apps, protected against replay.",
                "Module selector after sign-in."
            ]
        },
        "challenges": {
            "es": [
                "Unir los usuarios de dos sistemas sin romper las referencias existentes de cada uno."
            ],
            "en": [
                "Merging the users of two systems without breaking each one's existing references."
            ]
        },
        "tech": [
            "PostgreSQL",
            "Flask",
            "FastAPI",
            "Signed tokens"
        ],
        "links": []
    },
    {
    id: 'nequi-confirmer',
    tags: ['movil'],
    cover: 'nequi-confirmer',
    images: ['images/projects/nequi-confirmer-1.webp', '@cover'],
    sample: true,
    category: { es: 'App Android · Pagos', en: 'Android App · Payments' },
    title: { es: 'Nequi Confirmer', en: 'Nequi Confirmer' },
    short: {
        es: 'Confirma que un pago Nequi sí llegó cruzando el comprobante con la notificación real, y lo anuncia en voz alta.',
        en: 'Confirms a Nequi payment really arrived by matching the receipt with the real notification, and announces it out loud.'
    },
    description: {
        es: 'App Android para negocios que cobran por Nequi. Muestra el QR de cobro y escanea el comprobante del cliente; luego lo cruza con la notificación o el SMS real de Nequi (monto, nombre y hora) para confirmar que el pago sí llegó, y anuncia el resultado en voz alta. Guarda el historial de pagos en una base de datos local.',
        en: 'Android app for shops that get paid through Nequi. It shows the payment QR and scans the customer\'s receipt, then matches it against the real Nequi notification or SMS (amount, name and time) to confirm the payment actually arrived, and announces the result out loud. Payment history is stored in a local database.'
    },
    tech: ['Kotlin', 'Jetpack Compose', 'CameraX', 'ML Kit', 'Room', 'Text-to-Speech'],
    links: []
},
    {
    id: 'alerta-destino',
    tags: ['movil'],
    cover: 'alerta-destino',
    images: ['images/projects/alerta-destino-1.webp', '@cover'],
    category: { es: 'App Android', en: 'Android App' },
    title: { es: 'AlertaDestino', en: 'AlertaDestino' },
    short: {
        es: 'Alarma GPS que suena cuando te acercas a tu parada de bus. Publicada en Google Play.',
        en: 'GPS alarm that rings as you approach your bus stop. Published on Google Play.'
    },
    description: {
        es: 'App Android que te avisa cuando te acercas a tu parada destino, para no pasarte durante un viaje en bus. Eliges la parada en Google Maps y un servicio en primer plano sigue tu ubicación por GPS aunque la app esté cerrada; al acercarte suena la alarma. Puede reanudar el monitoreo después de reiniciar el teléfono y guarda tus destinos frecuentes.',
        en: 'Android app that alerts you as you approach your destination stop, so you never miss it on a bus ride. You pick the stop on Google Maps and a foreground service tracks your GPS location even with the app closed; the alarm rings as you get close. It can resume monitoring after a phone restart and saves your frequent destinations.'
    },
    tech: ['Kotlin', 'Jetpack Compose', 'Google Maps', 'Foreground Service'],
    links: [
        { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.alertadestino.app' }
    ]
},
    {
    id: 'inmobiliaria',
    pro: true,
    tags: ['web'],
    images: ['images/inmosurco.png'],
    captions: { es: ['Página de inicio del sitio.'], en: ['Website home page.'] },
    category: { es: 'Página Web', en: 'Website' },
    title: { es: 'Inmobiliaria Surcolombiana', en: 'Inmobiliaria Surcolombiana' },
    short: {
        es: 'Sitio web para operaciones de registro de inmuebles y contacto con clientes.',
        en: 'Website for property listings and client contact.'
    },
    description: {
        es: 'Desarrollamos un sitio web para las operaciones de registro de inmuebles y contacto con el cliente de la inmobiliaria Surcolombiana. El desarrollo se efectuó en WordPress y el servicio se entregó completamente funcional y con garantía de soporte por 1 año.',
        en: 'We built a website for the real estate agency Inmobiliaria Surcolombiana to register properties and handle client contact. It was built in WordPress and delivered fully functional with a one-year support guarantee.'
    },
    tech: ['WordPress', 'PHP', 'HTML', 'CSS'],
    links: [
        { label: { es: 'Ver proyecto', en: 'View project' }, url: 'https://inmobiliariasurcolombiana.com.co/' }
    ]
}
];
