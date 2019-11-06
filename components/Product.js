import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Product({ name, description, price }) {
    return (
        <View>
            <Text style={{ fontWeight: 'bold' }}>{name}</Text>
            <Text>{description}</Text>
            <Text>{price}</Text>
        </View>
    )
}