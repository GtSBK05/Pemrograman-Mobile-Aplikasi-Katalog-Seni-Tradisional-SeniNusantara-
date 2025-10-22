import * as ImagePicker from 'expo-image-picker';
import { useContext, useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ProductsContext } from '../App';
import Header from '../components/Header';

export default function FormScreen({ route, navigation }) {
  const { addProduct, updateProduct } = useContext(ProductsContext);
  const editing = route.params && route.params.product;

  const [form, setForm] = useState({
    name: '',
    artist: '',
    region: '',
    description: '',
    image: null,
  });

  useEffect(() => {
    if (editing) setForm(editing);
  }, []);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Izin akses galeri dibutuhkan!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setForm({ ...form, image: { uri: result.assets[0].uri } });
    }
  };

  const handleSubmit = () => {
    if (!form.name || !form.artist || !form.region || !form.description || !form.image) {
      alert('Lengkapi semua data termasuk gambar!');
      return;
    }

    if (editing) {
      updateProduct(form.id, form);
    } else {
      addProduct(form);
    }

    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={styles.formContainer}>
        <Text style={styles.title}>
          {editing ? 'Edit Karya Seni' : 'Tambah Karya Baru'}
        </Text>

        {/* Gambar Preview */}
        {form.image && (
          <Image source={form.image} style={styles.imagePreview} />
        )}

        {/* Tombol Pilih Gambar */}
        <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
          <Text style={styles.imageButtonText}>
            {form.image ? 'Ganti Gambar' : 'Pilih Gambar'}
          </Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Nama Karya"
          value={form.name}
          onChangeText={(t) => handleChange('name', t)}
        />
        <TextInput
          style={styles.input}
          placeholder="Nama Seniman"
          value={form.artist}
          onChangeText={(t) => handleChange('artist', t)}
        />
        <TextInput
          style={styles.input}
          placeholder="Asal Daerah"
          value={form.region}
          onChangeText={(t) => handleChange('region', t)}
        />
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Deskripsi"
          multiline
          value={form.description}
          onChangeText={(t) => handleChange('description', t)}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>
            {editing ? 'Simpan Perubahan' : 'Tambah Karya'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.cancelText}>Batal</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EDE0D4' },
  formContainer: { flexGrow: 1, padding: 20 },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4e342e',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 15,
    color: '#4e342e',
  },
  imagePreview: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#A97155',
  },
  imageButton: {
    backgroundColor: '#A97155',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  imageButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#8B5E3C',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  cancelButton: { marginTop: 10, alignItems: 'center' },
  cancelText: { color: '#6d4c41', fontSize: 15 },
});
