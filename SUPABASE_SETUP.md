# 🚀 Guía de Configuración de Supabase

## 📋 Pasos para Configurar Supabase

### 1. Crear cuenta en Supabase
1. Ve a [supabase.com](https://supabase.com)
2. Haz clic en "Start your project"
3. Crea una cuenta o inicia sesión con GitHub
4. Crea un nuevo proyecto

### 2. Obtener las credenciales
1. En tu proyecto de Supabase, ve a **Settings** > **API**
2. Copia la **URL** y la **anon key**
3. Crea un archivo `.env` en la raíz del proyecto con:

```env
PUBLIC_SUPABASE_URL=tu_url_de_supabase
PUBLIC_SUPABASE_ANON_KEY=tu_anon_key_de_supabase
```

### 3. Configurar la base de datos
1. Ve a **SQL Editor** en tu proyecto de Supabase
2. Copia y pega el contenido del archivo `database-schema.sql`
3. Ejecuta el script para crear las tablas y políticas

### 4. Configurar autenticación
1. Ve a **Authentication** > **Settings**
2. En **Site URL**, agrega: `http://localhost:4321`
3. En **Redirect URLs**, agrega: `http://localhost:4321/tienda`
4. Desactiva **Enable email confirmations** para desarrollo (opcional)

### 5. Crear usuario administrador
1. Ve a **Authentication** > **Users**
2. Crea un nuevo usuario con email y contraseña
3. Ve a **SQL Editor** y ejecuta:

```sql
UPDATE public.users 
SET is_admin = true 
WHERE email = 'tu_email@ejemplo.com';
```

## 🔧 Configuración del Proyecto

### Instalar dependencias
```bash
npm install @supabase/supabase-js
```

### Variables de entorno
Crea un archivo `.env` en la raíz del proyecto:

```env
PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
PUBLIC_SUPABASE_ANON_KEY=tu_anon_key_aqui
```

### Estructura de archivos
```
src/
├── lib/
│   ├── supabase.js          # Configuración de Supabase
│   └── database.js          # Servicios de base de datos
├── components/
│   ├── Login.astro          # Componente de login actualizado
│   ├── Store.astro          # Tienda con Supabase
│   └── AdminPanel.astro     # Panel admin con Supabase
└── pages/
    ├── login.astro
    ├── admin.astro
    └── tienda.astro
```

## 🗄️ Esquema de la Base de Datos

### Tablas creadas:
- **users**: Información de usuarios
- **products**: Productos de la tienda
- **cart_items**: Items del carrito
- **orders**: Órdenes de compra
- **order_items**: Items de las órdenes

### Políticas de seguridad (RLS):
- Usuarios solo pueden ver/editar sus propios datos
- Solo administradores pueden gestionar productos
- Cualquiera puede ver productos
- Carrito privado por usuario

## 🚀 Funcionalidades Implementadas

### ✅ Autenticación
- Registro con email y contraseña
- Inicio de sesión
- Cerrar sesión
- Verificación de email (opcional)

### ✅ Gestión de Productos
- Crear productos (solo admin)
- Editar productos (solo admin)
- Eliminar productos (solo admin)
- Ver productos (público)
- Filtros por categoría

### ✅ Carrito de Compras
- Agregar productos al carrito
- Modificar cantidades
- Eliminar productos del carrito
- Carrito persistente en base de datos

### ✅ Órdenes
- Crear órdenes de compra
- Historial de órdenes
- Estados de órdenes

## 🔐 Seguridad

### Row Level Security (RLS)
- Todas las tablas tienen RLS habilitado
- Políticas específicas por tabla
- Usuarios solo acceden a sus datos
- Administradores tienen acceso completo

### Autenticación
- JWT tokens automáticos
- Sesiones seguras
- Verificación de email opcional

## 🛠️ Comandos Útiles

### Desarrollo
```bash
npm run dev
```

### Construcción
```bash
npm run build
```

### Preview
```bash
npm run preview
```

## 📱 Pruebas

### Usuario Normal
1. Ve a `/login`
2. Regístrate con email y contraseña
3. Navega por la tienda
4. Agrega productos al carrito
5. Completa una compra

### Administrador
1. Inicia sesión con cuenta admin
2. Ve a `/admin`
3. Gestiona productos
4. Ve estadísticas

## 🔧 Personalización

### Cambiar categorías
Edita el archivo `database-schema.sql` y modifica:
```sql
CHECK (category IN ('libros', 'juegos', 'accesorios', 'materiales'))
```

### Agregar campos
Modifica las tablas en `database-schema.sql` y actualiza los servicios en `database.js`

### Cambiar políticas
Modifica las políticas RLS en `database-schema.sql`

## 🚨 Solución de Problemas

### Error de conexión
- Verifica las variables de entorno
- Asegúrate de que la URL y key sean correctas
- Revisa la consola del navegador

### Error de permisos
- Verifica que las políticas RLS estén correctas
- Asegúrate de que el usuario esté autenticado
- Revisa los logs de Supabase

### Error de autenticación
- Verifica la configuración de autenticación
- Revisa las URLs de redirección
- Asegúrate de que el email esté confirmado

## 📞 Soporte

Si tienes problemas:
1. Revisa los logs de Supabase
2. Verifica la consola del navegador
3. Consulta la documentación de Supabase
4. Contacta al equipo de desarrollo

---

¡Tu tienda está lista con Supabase! 🎉
