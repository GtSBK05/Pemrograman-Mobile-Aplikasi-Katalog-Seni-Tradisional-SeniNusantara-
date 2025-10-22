import React, { useState, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';

export const ProductsContext = createContext();

export default function App() {
  const [products, setProducts] = useState([
    {
      id: String(Date.now() - 5000),
      name: 'Lukisan Batik Madura',
      artist: 'Siti Nur Aini',
      region: 'Madura, Jawa Timur',
      description: 'Karya batik dengan warna pesisir cerah dan motif khas Madura yang dinamis.',
      image: require('./assets/artworks/BatikMadura.jpg'),
    },
    {
      id: String(Date.now() - 4000),
      name: 'Ukiran Kayu Bali',
      artist: 'I Made Suarya',
      region: 'Gianyar, Bali',
      description: 'Ukiran barong dengan detail halus menggambarkan filosofi keseimbangan hidup.',
      image: require('./assets/artworks/UkiranBali.jpg'),
    },
    {
      id: String(Date.now() - 3000),
      name: 'Wayang Kulit Jawa',
      artist: 'R. Sukarno',
      region: 'Yogyakarta, Jawa Tengah',
      description: 'Wayang kulit bergaya klasik menggambarkan kisah Mahabharata dalam bentuk simbolis.',
      image: require('./assets/artworks/WayangKulit.jpg'),
    },
    {
      id: String(Date.now() - 2000),
      name: 'Tenun Ikat Nusa Tenggara',
      artist: 'Maria Kefi',
      region: 'Kupang, Nusa Tenggara Timur',
      description: 'Tenun ikat tradisional dengan motif geometris dan warna alami dari tumbuhan.',
      image: require('./assets/artworks/TenunIkat.jpg'),
    },
    {
      id: String(Date.now() - 1000),
      name: 'Lukisan Pemandangan Toraja',
      artist: 'Yusuf Lantong',
      region: 'Toraja, Sulawesi Selatan',
      description: 'Lukisan cat minyak menggambarkan rumah adat Tongkonan dan keindahan pegunungan Toraja.',
      image: require('./assets/artworks/TorajaPainting.jpg'),
    },
    {
      id: String(Date.now() - 900),
      name: 'Ukiran Dayak Kalimantan',
      artist: 'Dewi Anak Agung',
      region: 'Kalimantan Barat',
      description: 'Ukiran topeng kayu dengan motif khas suku Dayak yang melambangkan kekuatan alam.',
      image: require('./assets/artworks/DayakWoodCarving.jpg'),
    },
  ]);

  const addProduct = (product) => {
    const newProduct = { ...product, id: String(Date.now()) };
    setProducts([newProduct, ...products]);
  };

  const updateProduct = (id, updated) => {
    setProducts(products.map(p => (p.id === id ? { ...p, ...updated } : p)));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <ProductsContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ProductsContext.Provider>
  );
}
