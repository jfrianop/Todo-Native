import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Product({ name, price, description, onDetails }) {
    return (
        <View style={{ margin: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: 'bold' }}>{name}</Text>
            <Text>{price}</Text>
            <Button title='Detalles' onPress={() => onDetails(name, description, price)} />
        </View>
    )
}