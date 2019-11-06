import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import NewProduct from './pages/NewProduct'
import ProductDetails from './pages/ProductDetails'
import Products from './pages/Products'
import Constants from 'expo-constants'

const Routes = createStackNavigator({
  products: Products,
  newProduct: NewProduct,
  productDetails: ProductDetails,
});

const AppContainer = createAppContainer(Routes);

export default function App() {
  return (
    <AppContainer />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: Constants.statusBarHeight,
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  productForm: {
    marginBottom: 40,
  }
});
