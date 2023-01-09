
import { StyleSheet, View,Image } from 'react-native';
import Card from './src/components/Card';
import React from 'react';
import StateMenegmant from './src/components/StateMenegmant';

export default function App() {

  return (
    <View style={styles.container}>
      <Image style={styles.images} source={require('./assets/bilgisayar.jpg')}/>
      <StateMenegmant />
      <Card text={'Merhaba'} backgroundColor={'orange'} />
      <Card text='Merhaba React !' backgroundColor='pink' />
      <Card text='Hello React !' backgroundColor='orange' />
    </View>
  );
}


const styles = StyleSheet.create({
  images:{
    height:100,
    width:100
  },
  container: {
    flex: 1,
    backgroundColor: '#ffeb3b',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
});


