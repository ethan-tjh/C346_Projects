import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    greenBox: {
        width: 100,
        height: 100,
        marginVertical: 20,
        backgroundColor: 'green',
        borderColor: 'black',
        borderWidth: 1,
    },
    boxText: {
        textAlign: 'center',
        color: 'white',
    },
    title: { fontWeight: 'bold' }
});
const Exercise2 = () => {
    return (
        <View>
            <View style={styles.greenBox}>
                <Text style={[styles.boxText, styles.title]}>Who we are</Text>
            </View>
            <View style={styles.greenBox}>
                <Text style={styles.boxText}>Our People</Text>
            </View>
            <View style={styles.greenBox}>
                <Text style={styles.boxText}>Our Campus</Text>
            </View>
        </View>
    );
};
export default Exercise2;