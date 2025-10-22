import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProductCard({ product, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={product.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.artist}>{product.artist}</Text>
        <Text style={styles.region}>{product.region}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    flexDirection: 'row',
    elevation: 3,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
  },
  info: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4e342e',
  },
  artist: {
    fontSize: 14,
    color: '#6d4c41',
    marginTop: 2,
  },
  region: {
    fontSize: 12,
    color: '#8d6e63',
    marginTop: 4,
  },
});
