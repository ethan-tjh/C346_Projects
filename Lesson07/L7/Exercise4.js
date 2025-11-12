import React from "react";
import {View, Text, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    child: {
        width: 80,
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
});
const Exercise4 = () => {
    return (
        <View style={styles.parent}>
            <Text style={[styles.child, {backgroundColor: 'skyblue'}]}>Square 1</Text>
            <Text style={[styles.child, {backgroundColor: 'aquamarine'}]}>Square 2</Text>
            <Text style={[styles.child, {backgroundColor: 'crimson'}]}>Square 3</Text>
        </View>
    );
};
export default Exercise4;