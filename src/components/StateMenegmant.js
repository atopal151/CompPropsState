
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class StateMenegmant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Alaettin',
            number: 0
        };
    }



    onPressDetail = () => {
        alert('Detail');
    };
    onPressChangeName = () => {
        this.setState({
            name: 'Topal'
        });
    };

    onPressArttir = () => {
        this.setState({
            number:++this.state.number,
        });
    };
    onPressAzalt = () => {
        this.setState({
            number:--this.state.number,
        });
    };

    render() {
        return (
            <View>
                <Button title='Detail Alert Open' color='#000' onPress={this.onPressDetail} ></Button>
                <View style={styles.textViewStyle}>
                    <Text style={styles.textStyle}>{this.state.name}</Text>
                </View>
                <Button title='Change Name' color='#000' onPress={this.onPressChangeName} ></Button>
                <View style={styles.textViewStyle}>
                    <Text style={styles.textStyle}>{this.state.number}</Text>
                </View>
                <View style={styles.buttonStyle}>
                    <Button title='Arttır' color='#000' onPress={this.onPressArttir} ></Button>
                    <Button title='Azalt' color='#000' onPress={this.onPressAzalt} ></Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    textViewStyle:{
        alignItems:"center",
        justifyContent:"center",
        margin:15,
        
    },
    textStyle:{
        fontSize:20,
        
    }
})



/*

<Button title='Detail Alert Open' color='#000' onPress={this.onPressDetail} ></Button>
                
                <Button title='Change Name' color='#000' onPress={this.onPressChangeName} ></Button>*/
