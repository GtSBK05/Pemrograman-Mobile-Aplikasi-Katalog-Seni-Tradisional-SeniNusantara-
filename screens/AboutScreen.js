import { Image, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>SeniNusantara</Text>
        <Text style={styles.subtitle}>Katalog Seni Tradisional Indonesia</Text>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Dikembangkan oleh:</Text>
          <Text style={styles.text}>Nama: Narendra Putra Arianto</Text>
          <Text style={styles.text}>NPM: 23081010113</Text>
          <Text style={styles.text}>Kelas: Pemrograman Mobile A081</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EDE0D4' },
  content: { alignItems: 'center', justifyContent: 'center', padding: 20 },
  logo: { width: 120, height: 120, marginBottom: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#4e342e' },
  subtitle: { fontSize: 14, color: '#6d4c41', marginBottom: 30 },
  infoBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    marginBottom: 30,
    elevation: 3,
  },
  label: { fontSize: 16, fontWeight: 'bold', color: '#4e342e', marginBottom: 10 },
  text: { fontSize: 14, color: '#5d4037', marginBottom: 5 },
});
