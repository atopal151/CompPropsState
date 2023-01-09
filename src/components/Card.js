import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Card extends Component {
   

    render() {
        console.log(this.props);
        const {text,backgroundColor} =this.props;
        return (
            <View style={[styles.cardContainer,{backgroundColor}]}>
                <View><Text style={styles.cardText}>{text}</Text></View>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    cardContainer: {
        padding: 10,
        borderWidth: 2,
        borderColor: '#000',
    },
    cardText: {
        fontSize: 18
    }
});