# Tienda para Niños - WIÑASUN

Una tienda e-commerce moderna para niños con sistema de autenticación, panel de administración y integración con Supabase.

## 🚀 Características

- **Sistema de Autenticación**: Registro e inicio de sesión con Supabase Auth
- **Panel de Administración**: Gestión de productos para administradores
- **Filtros por Categoría**: Libros, juegos, accesorios, materiales
- **Carrito de Compras**: Funcionalidad completa con notificaciones
- **Pagos**: Integración con WhatsApp y Yape
- **Diseño Responsivo**: Optimizado para móviles y desktop
- **Base de Datos en la Nube**: PostgreSQL con Supabase

## 🛠️ Tecnologías

- **Frontend**: Astro + Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth + Storage)
- **Autenticación**: Supabase Auth con JWT
- **Base de Datos**: PostgreSQL con Row Level Security (RLS)

## 📋 Requisitos Previos

- Node.js 18+ 
- Cuenta en [Supabase](https://supabase.com)

## ⚙️ Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd wiñasum
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar Supabase**
   - Ve a [supabase.com](https://supabase.com) y crea una cuenta
   - Crea un nuevo proyecto
   - Ve a Settings > API y copia la URL y la anon key
   - Crea un archivo `.env` en la raíz del proyecto:
   ```env
   PUBLIC_SUPABASE_URL=tu_url_de_supabase
   PUBLIC_SUPABASE_ANON_KEY=tu_anon_key_de_supabase
   ```

4. **Configurar la Base de Datos**
   - Ve a SQL Editor en tu proyecto de Supabase
   - Ejecuta el contenido del archivo `database-schema.sql`
   - Esto creará todas las tablas necesarias con RLS

5. **Crear un Usuario Administrador**
   - Registra un usuario normal desde la aplicación
   - Ve a la tabla `users` en Supabase y cambia `is_admin` a `true` para ese usuario

6. **Ejecutar el proyecto**
   ```bash
   npm run dev
   ```

## 🗄️ Estructura de la Base de Datos

### Tablas Principales

- **users**: Información de usuarios y roles
- **products**: Catálogo de productos
- **cart_items**: Items en el carrito de compras
- **orders**: Órdenes de compra
- **order_items**: Items de cada orden

### Políticas RLS

- Usuarios solo pueden ver/editar sus propios datos
- Administradores pueden gestionar todos los productos
- Carrito privado por usuario

## 🔧 Configuración de Supabase

### 1. Crear Proyecto
1. Ve a [supabase.com](https://supabase.com)
2. Crea una nueva cuenta o inicia sesión
3. Crea un nuevo proyecto
4. Espera a que se complete la configuración

### 2. Obtener Credenciales
1. Ve a Settings > API
2. Copia la "Project URL" y "anon public" key
3. Agrega estas credenciales a tu archivo `.env`

### 3. Configurar Base de Datos
1. Ve a SQL Editor
2. Ejecuta el contenido de `database-schema.sql`
3. Esto creará todas las tablas y políticas necesarias

### 4. Configurar Autenticación
1. Ve a Authentication > Settings
2. Habilita "Enable email confirmations" si lo deseas
3. Configura las URLs de redirección si es necesario

## 👤 Credenciales de Administrador

Para crear un administrador:

1. Registra un usuario normal desde la aplicación
2. Ve a la tabla `users` en Supabase Dashboard
3. Encuentra el usuario y cambia `is_admin` de `false` a `true`
4. Guarda los cambios

## 📱 Uso

### Para Usuarios
1. **Registro/Login**: Ve a `/login` para crear cuenta o iniciar sesión
2. **Explorar Productos**: Navega por categorías en `/tienda`
3. **Agregar al Carrito**: Haz clic en "Agregar al carrito"
4. **Comprar**: Usa WhatsApp o Yape para finalizar la compra

### Para Administradores
1. **Acceso**: Inicia sesión con una cuenta de administrador
2. **Panel Admin**: Ve a `/admin` para gestionar productos
3. **Agregar Productos**: Completa el formulario con nombre, precio, categoría, etc.
4. **Eliminar Productos**: Usa el botón "Eliminar" en la tabla

## 🔄 Migración de Datos

Si tienes datos en localStorage que quieres migrar a Supabase:

1. Abre la consola del navegador (F12)
2. Ejecuta: `migrateToSupabase()`
3. Confirma la limpieza del localStorage

Para verificar el estado: `checkMigrationStatus()`

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Agrega las variables de entorno en Vercel
3. Deploy automático en cada push

### Netlify
1. Conecta tu repositorio a Netlify
2. Configura las variables de entorno
3. Build command: `npm run build`

## 🐛 Solución de Problemas

### Error de Conexión a Supabase
- Verifica que las credenciales en `.env` sean correctas
- Asegúrate de que el proyecto de Supabase esté activo

### Error de Autenticación
- Verifica que las políticas RLS estén configuradas correctamente
- Revisa que el usuario exista en la tabla `users`

### Productos no se cargan
- Verifica que la tabla `products` tenga datos
- Revisa la consola del navegador para errores

## 📞 Soporte

Si tienes problemas:
1. Revisa la consola del navegador (F12)
2. Verifica que Supabase esté configurado correctamente
3. Asegúrate de que las variables de entorno estén definidas

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
