import { useContext } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ProductsContext } from '../App';
import Header from '../components/Header';

export default function DetailScreen({ route, navigation }) {
  const { product } = route.params;
  const { deleteProduct } = useContext(ProductsContext);

  const handleDelete = () => {
    Alert.alert('Hapus Produk', 'Apakah kamu yakin ingin menghapus karya ini?', [
      { text: 'Batal', style: 'cancel' },
      {
        text: 'Hapus',
        style: 'destructive',
        onPress: () => {
          deleteProduct(product.id);
          navigation.goBack();
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* HEADER SERAGAM */}
      <Header />

      {/* ISI HALAMAN */}
      <Image source={product.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.artist}>Seniman: {product.artist}</Text>
        <Text style={styles.region}>Asal: {product.region}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#A97155' }]}
          onPress={() => navigation.navigate('Form', { product })}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#B71C1C' }]}
          onPress={handleDelete}
        >
          <Text style={styles.buttonText}>Hapus</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EDE0D4' },
  image: {
    width: '90%',
    height: 300,
    alignSelf: 'center',
    marginTop: 20,
    borderWidth: 4,
    borderColor: '#A97155',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  infoContainer: { padding: 20 },
  name: { fontSize: 22, fontWeight: 'bold', color: '#4e342e' },
  artist: { fontSize: 16, color: '#5d4037', marginTop: 8 },
  region: { fontSize: 15, color: '#6d4c41', marginTop: 4 },
  description: { fontSize: 14, color: '#4e342e', marginTop: 12, lineHeight: 20 },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
