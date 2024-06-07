import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet, KeyboardAvoidingView } from 'react-native';

export const LoginScreen = ({ navigation }) => {
    const [attendantId, setAttendantId] = useState('');
    const [isLoading, setIsLoading] = useState(false); // State for login progress indicator

    const handleLogin = async () => {
        if (!attendantId) {
          alert('Please enter your attendant ID');
          return;
        }
      
        setIsLoading(true); // Show loading indicator immediately

        try {
          // **Development Mode Check (replace with your actual logic)**
          if (attendantId === '0000' && __DEV__) {
            setTimeout(() => {
              navigation.navigate('Home');
              setIsLoading(false); // Hide loading indicator after navigation
            }, 3000); // Simulate 3 seconds delay
            return;
          }
        //   // **Production Mode Logic (replace with your actual API call)**
        //   const response = await fetch('https://your-api.com/login', {
        //     method: 'POST',
        //     body: JSON.stringify({ attendantId }),
        //   });
      
        //   const data = await response.json();
      
        //   if (data.success) {
        //     navigation.navigate('MainMenu');
        //   } 
          else {
            alert('Invalid attendant ID or password');
          }
        } catch (error) {
          console.error('Login error:', error);
          alert('Login failed. Please try again.');
        } finally {
          setIsLoading(false); // Hide loading indicator
        }
      };
      

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={{ color: 'black', fontSize: 30, fontWeight: 100 }}>Fuel Station App</Text>
                <Text style={{ color: 'black', fontSize: 45, fontWeight: 600 }}>Login</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter Attendant ID"
                    placeholderTextColor='gray'
                    value={attendantId}
                    onChangeText={setAttendantId}
                    autoCapitalize="none" // Prevent auto-capitalization for case-sensitive IDs
                    keyboardType="numeric" // Set keyboard to numeric input
                    secureTextEntry
                />
                {isLoading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <TouchableOpacity onPress={handleLogin}

                        style={styles.button}>
                        <Text style={{ color: 'white', fontSize:24 }}>Login</Text>
                    </TouchableOpacity>
                )}
            </View>
        </KeyboardAvoidingView>

    );
};

const styles = StyleSheet.create({

    container: {
        position: 'relative',
        flex: 1,
        padding: 20,
        backgroundColor: '#FAF9F6',
    },
    wrapper:{
        
        flex: 1,
       
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    textInput: {
        width: '90%',
        marginVertical: 10,
        backgroundColor: '#d9d7d7',
        borderRadius: 5,
        color: '#000000',
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontSize:19
    },
    button: {
        position: 'absolute',
        backgroundColor: 'black',
        width: '90%',
        height: 70,
        borderRadius: 35,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 30
    }
});