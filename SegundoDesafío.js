import Product from './Product.js'
import ProductManager from './ProductManager.js'

/* PRUEBAS */

// Intento generar dos productos completos
// const producto1 = new Product ("Papas Fritas", "Muy ricas!", 1500, "lays.jpg", 15, "A150")
// const producto2 = new Product ("Chizitos", "Crujientes", 2000, "chizitos.jpg", 20, "B280")

// Intento generar producto incompleto
// const producto3 = new Product ("Palitos", "Sabrosos", 3000)

// Intento generar producto incorrecto a propósito
// const producto4 = new Product ("Maní", "Salado", NaN, "mani.jpg", 30, "C350")

// Intento generar ProductManager sin una ruta específica
// const productManager = new ProductManager ()

// Intento generar ProductManager de manera correcta
// const productManager2 = new ProductManager ('./my_DB.JSON')

// Agrego producto incompleto/erróneo a la DB
// const producto5 = new Product ("Palitos", "Sabrosos", 3000)
// const productManager3 = new ProductManager ('./my_DB.JSON')
// productManager3.addProduct(producto5)

// Intento agregar productos correctos pero con un product manager previamente mal generado
// const producto6 = new Product ("Papas Fritas", "Muy ricas!", 1500, "lays.jpg", 15, "A150")
// const productManager4 = new ProductManager ('')
// productManager4.addProduct(producto6)

// Agrego productos sin problema a la DB
// const producto6 = new Product ("Papas Fritas", "Muy ricas!", 1500, "lays.jpg", 15, "A150")
// const producto_adicional = new Product ("Galletitas Traviata", "Muy sabrosas", 2000, "traviata.jpg", 25, "X840")
// const productManager5 = new ProductManager ('./my_DB.JSON')
// productManager5.addProduct(producto6).then(() => productManager5.addProduct(producto_adicional))

// Intento agregar un mismo producto 2 veces
// const producto7 = new Product ("Papas Fritas", "Muy ricas!", 1500, "lays.jpg", 15, "A150")
// const productManager6 = new ProductManager ('./my_DB.JSON')
// productManager6.addProduct(producto7).then(() => productManager6.addProduct(producto7))

// Traigo todos los productos cargados hasta el momento
// const producto8 = new Product ("Papas Fritas", "Muy ricas!", 1500, "lays.jpg", 15, "A150")
// const productManager6 = new ProductManager ('./my_DB.JSON')
// productManager6.addProduct(producto8).then(() => productManager6.getProducts())

// Intento traer productos con un DB vacío
// const productManager7 = new ProductManager ('./my_DB.JSON')
// productManager7.getProducts()

// Intento obtener un producto particular cuando no tengo ninguno cargado
// const producto8 = new Product ("Papas Fritas", "Muy ricas!", 1500, "lays.jpg", 15, "A150")
// const productManager6 = new ProductManager ('./my_DB.JSON')
// productManager6.getProductById("B150") // Intento acceder a la DB cuando aún no se generó porque no se cargó ningún producto

// Intento obtener un producto con código inexistente
// const producto9 = new Product ("Papas Fritas", "Muy ricas!", 1500, "lays.jpg", 15, "A150")
// const productManager7 = new ProductManager ('./my_DB.JSON')
// productManager7.addProduct(producto9).then(() => productManager7.getProductById("Z150"))

// Intento obtener un producto con código existente.
// const producto10 = new Product ("Papas Fritas", "Muy ricas!", 1500, "lays.jpg", 15, "A150")
// const productManager8 = new ProductManager ('./my_DB.JSON')
// productManager8.addProduct(producto10).then(() => productManager8.getProductById("A150"))

// Intento actualizar producto con código incorrecto
// const producto11 = new Product ("Coca Cola", "Sabor tradicional", 1500, "coca_cola.jpg", 15, "A150")
// const productManager9 = new ProductManager ('./my_DB.JSON')
// productManager9.addProduct(producto11).then(() => productManager9.updateProduct("A950", {title: "Coca Cola Light", description: "0 calorías!", stock: 50, price: 800, thumbnail: "coca_light.jpg"}))

// Intento actualizar producto con código correcto
// const producto12 = new Product ("Coca Cola", "Sabor tradicional", 1500, "coca_cola.jpg", 15, "A150")
// const productManager10 = new ProductManager ('./my_DB.JSON')
// productManager10.addProduct(producto12).then(() => productManager10.updateProduct("A150", {title: "Coca Cola Light", description: "0 calorías!", stock: 50, price: 800, thumbnail: "coca_light.jpg"}))

// Intento eliminar un producto que no está en la base
// const producto13 = new Product ("Coca Cola", "Sabor tradicional", 1500, "coca_cola.jpg", 15, "A150")
// const productManager11 = new ProductManager ('./my_DB.JSON')
// productManager11.addProduct(producto13).then(() => productManager11.deleteProduct("Z150"))

// Intento eliminar un producto que está en la base
// const producto14 = new Product ("Coca Cola", "Sabor tradicional", 1500, "coca_cola.jpg", 15, "A150")
// const productManager12 = new ProductManager ('./my_DB.JSON')
// productManager12.addProduct(producto14).then(() => productManager12.deleteProduct("A150"))
