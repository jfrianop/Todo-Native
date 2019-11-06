import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import Product from './Product';

export default function ProductList(props) {
    return (
        <View>
            <FlatList data={props.data} renderItem={({ item }) => (<Product name={item.name} description={item.description} price={item.price} />)} />
        </View>
    )
}