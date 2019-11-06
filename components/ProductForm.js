import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function ProductForm(props) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const onSubmit = function () {
        props.submitForm({ name, description, price })
        setName("")
        setDescription("")
        setPrice("")
    }

    return (
        <View>
            <Text style={{ fontWeight: 'bold' }} >Nombre: </Text>
            <TextInput onChangeText={setName} value={name} />
            <Text style={{ fontWeight: 'bold' }} >Descripción: </Text>
            <TextInput onChangeText={setDescription} value={description} />
            <Text style={{ fontWeight: 'bold' }} >Precio: </Text>
            <TextInput onChangeText={setPrice} value={price} />
            <Button title='Añadir Producto' onPress={onSubmit} />
        </View>
    )
}