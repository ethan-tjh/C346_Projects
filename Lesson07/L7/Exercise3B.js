import React from "react";
import {View, Text, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    parent: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5fcff',
        borderColor: '#0099AA',
        borderWidth: 5,
        marginBottom: 20,
    },
    child: {
        flex: 1,
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 24,
    }
})
const Exercise3B = () => {
    return (
        <View style={styles.parent}>
            <Text style={[styles.child, {backgroundColor: "powderblue"}]}>Child One</Text>
            <Text style={[styles.child, {backgroundColor: "skyblue"}]}>Child Two</Text>
            <Text style={[styles.child, {backgroundColor: "steelblue"}]}>Child Three</Text>
        </View>
    );
};
export default Exercise3B;