import { useContext } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ProductsContext } from '../App';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

export default function HomeScreen({ navigation }) {
  const { products } = useContext(ProductsContext);

  return (
    <View style={styles.container}>
      <Header />

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => navigation.navigate('Detail', { product: item })}
          />
        )}
        contentContainerStyle={{ paddingBottom: 150 }}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Form')}
      >
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.aboutButton}
        onPress={() => navigation.navigate('About')}
      >
        <Text style={styles.aboutText}>Tentang Kami</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EDE0D4' },

  addButton: {
    position: 'absolute',
    bottom: 90,
    right: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#8B5E3C',
    textShadowColor: 'rgba(0,0,0,0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },

  aboutButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#8B5E3C',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 8,
    elevation: 3,
  },
  aboutText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
