import React from 'react';
import { SafeAreaView, View, Image, Text, StyleSheet } from 'react-native';

const MapScreen = () => {
  return (
    <SafeAreaView styles={styles.container}>
      <View>
        <Text styles={styles.Titulo}>
          Você está Aqui
        </Text>
        <Image style={styles.Map} source={require('../assets/Images/Map.png')}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
     container: {

     },
     Titulo: {

     },
     Map: {

     },
  });

export default MapScreen;
