import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Button } from 'react-native';
import ProductForm from '../components/ProductForm';
import Constants from 'expo-constants'

export default function newProduct({ navigation }) {
    return (
        <SafeAreaView style={styles.container} >
            <ProductForm style={styles.productForm} submitForm={(newData) => { navigation.navigate('products', { newData }) }} />
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