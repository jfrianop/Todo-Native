import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Button } from 'react-native';
import ProductList from '../components/ProductList';
import Constants from 'expo-constants'

export default function Products({ navigation }) {
    const [products, setProducts] = useState([
        { name: "Chontaduro", description: "Fruta típica del pacífico colombiano", price: "$35.000", key: '0' },
        { name: "Banano", description: "Fruta típica del urabá colombiano", price: "$45.000", key: '1' }
    ])

    let data = navigation.getParam('newData');

    useEffect(() => {
        if (data) return addProduct(data);
    }, [data])

    const addProduct = function ({ name, description, price }) {
        const newProducts = [...products, { name, description, price, key: products.length.toString() }]
        setProducts(newProducts)
    }

    return (
        <SafeAreaView style={styles.container} >
            <ScrollView style={styles.scrollView}>
                <ProductList data={products} onDetails={(name, description, price) => navigation.navigate('productDetails', { details: { name, description, price } })} />
            </ScrollView>
            <View style={styles.navigation}>
                <Button title='Añadir un nuevo producto' onPress={() => navigation.navigate('newProduct')} />
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 5,
        marginTop: Constants.statusBarHeight,
    },
    scrollView: {
        backgroundColor: 'white',
        marginHorizontal: 20,
    },
    navigation: {
        flex: 1,
        marginHorizontal: 30
    }
});