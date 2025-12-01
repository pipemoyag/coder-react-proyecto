import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  addDoc,
} from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

// Obtener todos los productos
export const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "items"));

  const products = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return products;
};

// Obtener categorías
export const getCategories = async () => {
  const querySnapshot = await getDocs(collection(db, "categories"));

  if (querySnapshot.empty) {
    console.warn("La colección 'categories' está vacía");
    return [];
  }

  const docSnap = querySnapshot.docs[0]; // solo definí un documento con la lista de categorías
  const categories = docSnap.data()?.list || [];
  return categories;
};

// Productos por categoría
export const getProductByCategory = async (category) => {
  const q = query(collection(db, "items"), where("category", "==", category));

  const querySnapshot = await getDocs(q);

  const products = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return products;
};

// Producto por ID
export const getProduct = async (id) => {
  const docRef = doc(db, "items", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) throw new Error("Producto no encontrado");

  return { id: docSnap.id, ...docSnap.data() };
};

// Crear orden
export const createOrder = async (order) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), order);
    return docRef.id;
  } catch (e) {
    console.error("Error agregando orden: ", e);
    throw e;
  }
};
