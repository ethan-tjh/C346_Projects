import React from "react";
import {View, Text, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    parent: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
    },
    child: {
        flex: 1,
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24,
    }
});
const Exercise3C = () => {
    return (
        <View style={styles.parent}>
            <Text style={[styles.child, {backgroundColor: 'powderblue', maxWidth: 90}]}>Child One</Text>
            <Text style={[styles.child, {backgroundColor: 'skyblue'}]}>Child Two</Text>
            <Text style={[styles.child, {backgroundColor: 'steelblue', maxHeight: 120}]}>Child Three</Text>
        </View>
    );
};
export default Exercise3C;