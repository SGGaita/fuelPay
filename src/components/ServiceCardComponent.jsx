import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { icons } from '../constants';
import { useNavigation } from '@react-navigation/native';

export const ServiceCardComponent = () => {

    const navigation = useNavigation()

    const handleNavigate = (service) => {
        console.log(service)
        navigation.navigate(service)
    }

    return (
        <View style={styles.container}>
            {/* Container for two rows of buttons */}
            <View style={styles.serviceRowContainer}>
                <View style={styles.serviceRow}>
                    <TouchableOpacity style={styles.button} onPress={()=>handleNavigate('Fuel')}>
                        <Image source={icons.fuel} resizeMode='contain' style={{ height: 70, width: 70 }} />
                        <Text style={styles.buttonText}>Fuel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>handleNavigate('Fluids')}>
                        <Image source={icons.fluids} resizeMode='contain' style={{ height: 70, width: 70 }} />
                        <Text style={styles.buttonText}>Fluids</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.serviceRow1}>
                    <TouchableOpacity style={styles.button} onPress={()=>handleNavigate('Service')}>
                        <Image source={icons.service} resizeMode='contain' style={{ height: 70, width: 70 }} />
                        <Text style={styles.buttonText}>Car Service</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>handleNavigate('Service B')}>
                        <Image source={icons.fuel} resizeMode='contain' style={{ height: 70, width: 70 }} />
                        <Text style={styles.buttonText}>Service B</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'

    },
    serviceRowContainer: {
        // Wrap rows to prevent overflowing content
        //flexWrap: 'wrap',
    },
    serviceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%', // Ensures buttons fill available width
        marginBottom: 10, // Add spacing between rows
        marginTop: 50
    },

    serviceRow1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%', // Ensures buttons fill available width
        marginTop: 160, // Add spacing between rows
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderColor: '#ddd',
        marginVertical: 5, // Maintain some vertical spacing
        marginHorizontal: 10,
        flex: 0.5, // Ensures buttons take up half the width (2 per row)
        //maxHeight: 150,
        minHeight: 150,
    },
    buttonText: {
        color: 'black',
        fontSize: 20,
        marginTop: 15,
    },
});
