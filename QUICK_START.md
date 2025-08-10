# 🚀 Configuración Rápida de Supabase

## Paso 1: Crear Proyecto en Supabase

1. Ve a [supabase.com](https://supabase.com)
2. Crea una cuenta o inicia sesión
3. Crea un nuevo proyecto
4. Espera a que se complete la configuración (2-3 minutos)

## Paso 2: Obtener Credenciales

1. Ve a **Settings** > **API**
2. Copia la **Project URL**
3. Copia la **anon public** key
4. Crea un archivo `.env` en la raíz del proyecto:

```env
PUBLIC_SUPABASE_URL=tu_project_url_aqui
PUBLIC_SUPABASE_ANON_KEY=tu_anon_key_aqui
```

## Paso 3: Configurar Base de Datos

1. Ve a **SQL Editor** en tu proyecto de Supabase
2. Copia y pega todo el contenido del archivo `database-schema.sql`
3. Haz clic en **Run** para ejecutar el script
4. Esto creará todas las tablas y políticas necesarias

## Paso 4: Crear Usuario Administrador

1. Ejecuta el proyecto: `npm run dev`
2. Ve a `/login` y registra un usuario normal
3. Ve a **Table Editor** > **users** en Supabase
4. Encuentra tu usuario y cambia `is_admin` de `false` a `true`
5. Guarda los cambios

## Paso 5: Migrar Datos (Opcional)

Si tienes datos en localStorage:

1. Abre la consola del navegador (F12)
2. Ejecuta: `migrateToSupabase()`
3. Confirma la limpieza del localStorage

## ✅ ¡Listo!

Tu tienda ya está configurada con Supabase. Puedes:
- Registrar usuarios en `/login`
- Gestionar productos en `/admin` (solo administradores)
- Explorar la tienda en `/tienda`

## 🔧 Verificar Configuración

Para verificar que todo funciona:

1. Ejecuta en la consola: `checkMigrationStatus()`
2. Deberías ver el número de productos y usuarios en la base de datos
3. Intenta registrar un usuario y agregar productos

## 🆘 Problemas Comunes

**Error de conexión**: Verifica que las credenciales en `.env` sean correctas
**Error de autenticación**: Asegúrate de que las políticas RLS estén configuradas
**Productos no cargan**: Verifica que la tabla `products` tenga datos
