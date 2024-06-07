import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { fueldata } from '../data/fuelData';
import { useNavigation } from '@react-navigation/native';

export const FuelScreen = () => {

  const [fuelCategories, setFuelCategories] = useState(fueldata);
  const navigation = useNavigation()

 
  useEffect(()=>{
    console.log(fuelCategories)
  },[])


  const handleFuelSelection = (fuel) => {
    // Handle user selection of a fuel category (e.g., navigate to next screen)
    console.log('Selected fuel:', fuel);
    navigation.navigate('Pump', { selectedFuel: fuel });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Fuel</Text>

      <View style={styles.buttons}>
     
      {fuelCategories.map((fuel) => (
        <TouchableOpacity key={fuel.id} style={[styles.button, fuel.fuel === 'Petrol' ? styles.petrolButton : styles.dieselButton]} onPress={() => handleFuelSelection(fuel)}>
           <Text style={styles.buttonText}>{fuel.fuel}</Text>
        </TouchableOpacity>
          
        ))}
      </View>
      <View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    paddingHorizontal: 30,
    paddingVertical: 30,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontSize: 30,

  },
  buttons: {
    paddingVertical: 30,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
   
  },

  button: {
    height: 100,
    elevation: 2,
    backgroundColor: '#fff',
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginVertical:20,
    borderRadius:5


  },
  buttonText: {
    color: '#000',
    fontSize: 22,
    fontWeight:'700'

  },
  petrolButton: {
    backgroundColor: '#57f777',
  },
  dieselButton: {
    backgroundColor: '#f75757',
  },


});