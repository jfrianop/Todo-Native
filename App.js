import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import Constants from 'expo-constants'

export default function App() {
  const [products, setProducts] = useState([
    { name: "Chontaduro", description: "Fruta típica del pacífico colombiano", price: "$35.000", key: '0' },
    { name: "Banano", description: "Fruta típica del urabá colombiano", price: "$45.000", key: '1' }
  ])

  const addProduct = function (name, description, price) {
    const newProducts = [...products, { name, description, price, key: products.length.toString() }]
    setProducts(newProducts)
  }

  return (
    <SafeAreaView style={styles.container} >
      <ScrollView style={styles.scrollView}>
        <ProductList data={products} />
      </ScrollView>
      <ProductForm style={styles.productForm} submitForm={addProduct} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  productForm: {
    marginBottom: 40,
  }
});
