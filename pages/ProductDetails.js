import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import ProductForm from '../components/ProductForm';
import Constants from 'expo-constants'

export default function ProductDetails({ navigation }) {
    let data = navigation.getParam('details');
    return (
        <View>
            <Text style={{ fontWeight: 'bold' }} >{data.name}</Text>
            <Text>{data.description}</Text>
            <Text style={{ fontStyle: 'italic' }} >{data.price}</Text>
        </View>
    )
}