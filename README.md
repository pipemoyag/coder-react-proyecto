# 🐾 PetStore React — Proyecto Curso React Coderhouse (Diciembre 2025)

Este proyecto fue desarrollado como parte del **curso de React de Coderhouse**, entre octubre y diciembre de **2025**.

**Autor:** _Felipe Moya_, chileno, ingeniero civil con un interés creciente en la programación y el desarrollo web.  
La temática está inspirada en la **tienda de mascotas** que tengo junto a mi pareja, lo que le da un toque personal al proyecto.

---

## 🚀 Deploy

Puedes ver el proyecto desplegado en Vercel aquí:

👉 **https://catrepublicreact.vercel.app/**

---

## 🧱 Arquitectura del Proyecto

La aplicación utiliza **React**, **React Router** y **Firebase** para construir un e-commerce funcional de productos para mascotas.

La estructura principal del ruteo se basa en el siguiente esquema:

```jsx
<BrowserRouter>
  <Toaster position="top-right" containerStyle={{ top: 60 }} />
  <NavBarContainer />
  <Routes>
    <Route path="/" element={<ItemListContainer />} />
    <Route path="/category/:categoryName" element={<ItemListContainer />} />
    <Route path="/product/:id" element={<ItemDetailContainer />} />
    <Route path="/cart" element={<CartContainer />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
</BrowserRouter>
```

## 📦 Componentes principales

- Cart
- CartContainer
- CartWidget
- Checkout
- Item
- ItemCount
- ItemDetail
- ItemDetailContainer
- ItemList
- ItemListContainer
- Loader
- NavBar
- NavBarContainer

---

## 🛒 Carrito de Compras

- Implementado mediante **Context API**
- Persistencia mediante **localStorage**
- Lógica centralizada para agregar, borrar y actualizar productos del carrito

---

## 🔥 Base de Datos (Firebase)

La aplicación utiliza **Firebase Firestore** como backend, con métodos para:

- Obtener todos los productos
- Obtener categorías
- Filtrar productos por categoría
- Obtener un producto por ID
- Crear una orden de compra

> Por simplicidad, **NO se actualizan los stocks** luego del checkout.

---

## ⏳ Hook personalizado: `useAsync`

Este hook se encarga de:

- Manejo del estado de **carga (loading)**
- Manejo de **errores**
- Prevención de **race conditions** en las llamadas a Firebase
- Evitar que datos viejos sobrescriban datos nuevos

---

## 🛠️ Utilidades

En `/utils` se incluye la función:

### `addToCartWithToast.js`

Se utiliza para mostrar una notificación tipo **toast** al agregar un producto al carrito, tanto desde:

- ItemList
- ItemDetail

Integrado mediante **react-hot-toast**.

## 📁 Estructura de Carpetas (resumen)

```
/src
  /components
    /style
  /context
  /hooks
  /utils
  /firebase
```

## 📦 Dependencias

Basadas en el archivo `package.json`:

```json
"dependencies": {
  "bootstrap": "^5.3.8",
  "bootstrap-icons": "^1.13.1",
  "firebase": "^12.6.0",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-hot-toast": "^2.6.0",
  "react-router": "^7.9.5",
  "react-spinners": "^0.17.0",
  "sweetalert2": "^11.26.3"
}
```

## 🎯 Objetivo del Proyecto

Este proyecto representa un paso importante en mi camino como desarrollador web, integrando herramientas modernas del ecosistema React y aplicándolas en una temática cercana y significativa para mí.

¡Gracias por revisar este proyecto!  
Si deseas sugerencias para mejorarlo o extenderlo, estaré encantado de recibir feedback.
