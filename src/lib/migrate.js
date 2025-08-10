import { supabase } from './supabase.js';
import { productService, userService } from './database.js';

export async function migrateFromLocalStorage() {
  console.log('🚀 Iniciando migración de datos...');
  
  try {
    // Migrar productos
    const localProducts = JSON.parse(localStorage.getItem('products') || '[]');
    if (localProducts.length > 0) {
      console.log(`📦 Migrando ${localProducts.length} productos...`);
      for (const product of localProducts) {
        try {
          await productService.createProduct({
            name: product.name,
            category: product.category,
            price: product.price,
            image: product.image || product.image_url || '',
            description: product.desc || product.description || ''
          });
          console.log(`✅ Producto migrado: ${product.name}`);
        } catch (error) {
          console.error(`❌ Error migrando producto ${product.name}:`, error);
        }
      }
    }

    // Migrar usuarios
    const localUsers = JSON.parse(localStorage.getItem('users') || '[]');
    if (localUsers.length > 0) {
      console.log(`👥 Migrando ${localUsers.length} usuarios...`);
      for (const user of localUsers) {
        try {
          await userService.createUser({
            id: user.id,
            name: user.name,
            email: user.email,
            is_admin: user.isAdmin || false
          });
          console.log(`✅ Usuario migrado: ${user.name}`);
        } catch (error) {
          console.error(`❌ Error migrando usuario ${user.name}:`, error);
        }
      }
    }

    console.log('🎉 Migración completada exitosamente!');
    
    if (confirm('¿Deseas limpiar el localStorage después de la migración?')) {
      localStorage.removeItem('products');
      localStorage.removeItem('users');
      localStorage.removeItem('cart');
      console.log('🧹 localStorage limpiado');
    }
    
  } catch (error) {
    console.error('❌ Error durante la migración:', error);
  }
}

export async function checkMigrationStatus() {
  try {
    const { data: products } = await supabase.from('products').select('count').single();
    const { data: users } = await supabase.from('users').select('count').single();
    
    console.log('📊 Estado de la base de datos:');
    console.log(`- Productos: ${products?.count || 0}`);
    console.log(`- Usuarios: ${users?.count || 0}`);
    
    return { products: products?.count || 0, users: users?.count || 0 };
  } catch (error) {
    console.error('❌ Error verificando estado:', error);
    return { products: 0, users: 0 };
  }
}

// Hacer las funciones disponibles globalmente para ejecutar desde la consola del navegador
window.migrateToSupabase = migrateFromLocalStorage;
window.checkMigrationStatus = checkMigrationStatus;
