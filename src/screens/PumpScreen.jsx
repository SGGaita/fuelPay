import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';


export const PumpScreen = ({ route }) => {
  const { selectedFuel } = route.params; // Access passed fuel data
  const [amount, setAmount] = useState(''); // Entered amount
  const [estimatedFuel, setEstimatedFuel] = useState(0); // Calculated fuel quantity
  const [selectedSubcategory, setSelectedSubcategory] = useState(selectedFuel.subcategories ? selectedFuel.subcategories[0].name : ''); // Default subcategory or empty string
  


  useEffect(()=>{
    console.log("Pump", selectedFuel.fuel)
  },[])

  const handleSubcategorySelection = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

const handleAmountChange=()=>{

}

  return (
    <View style={styles.container}>
      

      {selectedFuel.fuel === 'Petrol' && ( // Display subcategories only for Petrol
        <View style={styles.subcategories}>
        {
          selectedFuel.subcategories.map(item=>{
            return(
            <TouchableOpacity key={item.id} 
            
              style={[styles.subcategoryButton, selectedSubcategory === item.name && styles.activeButton]}
              onPress={() => handleSubcategorySelection(item.name)}
              >
            <Text style={styles.subcategoryButtonText}>{item.name}</Text>
            <Text style={styles.subcategoryButtonTextPrice}>Kes. {item.price_per_liter} per litre</Text>
          </TouchableOpacity>
            )
          })
        }
        
        </View>
      )}

      <View>
      <Text style={styles.label}>Enter Amount (Ksh):</Text>
      <TextInput
        style={styles.textInput}
        keyboardType="numeric"
        value={amount}
        onChangeText={handleAmountChange}
      />
      </View>

      <View>
        <TouchableOpacity>
          <Text>Pay</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container:{
    padding: 30,
  },
  title:{
    color:'#000'
  },
  subcategories:{
    flexDirection:'row',
    width:'100%',
   
  },
  subcategoryButton:{
    flex:1,
    alignItems: 'center',
        justifyContent: 'center',
height:100,
        borderRadius: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        marginHorizontal:5,

  },
  subcategoryButtonText:{
    color:'#000',
    fontSize:20
  },
  subcategoryButtonTextPrice:{
    color:'#000',
    fontSize:20,
    fontWeight:'700',
    marginTop:5
  },
  activeButton:{
backgroundColor:"#57f777"
  }
})