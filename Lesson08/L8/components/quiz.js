import React from 'react';
import {View, Image, Text, TextInput, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
const styles = StyleSheet.create({
    main: {
        marginVertical: 10,
        alignItems: 'center',
        width: '100%'
    },
    qn: {
        width: '100%',
        overflow: 'hidden',
        backgroundColor: 'white',
        borderColor: 'black',
        marginBottom: 10
    },
    img: {
        width: '100%',
        height: 390,
        borderColor: 'black',
    },
    text: {
        color: 'black',
        fontSize: 15,
        marginVertical: 12,
        textAlign: 'left',
        width: '100%'
    },
    border: {
        borderWidth: 4,
        borderRadius: 14
    }
})
const InputBox = ({label, onChangeText}) => {
    return (
        <View style={{width: '100%'}}>
            <Text style={styles.text}>{label}</Text>
            <TextInput style={[styles.qn, styles.border]} onChangeText={onChangeText} />
        </View>
    )
};
const QuizQn = ({photo, qn, qnStyle, option1, option2, option3, onInputAnswer, onPickerAnswer})=> {
    if (qnStyle === 'picker') {
        return (
            <View style={styles.main}>
                <Image source={photo} style={[styles.img, styles.border]}/>
                <Text style={styles.text}>{qn}</Text>
                <View style={[styles.qn, styles.border]}>
                    <Picker
                        onValueChange={(value) => onPickerAnswer(value)}>
                        <Picker.Item label="Pick an option" value="" enabled={false}/>
                        <Picker.Item label={option1} value={option1}/>
                        <Picker.Item label={option2} value={option2}/>
                        <Picker.Item label={option3} value={option3}/>
                    </Picker>
                </View>
            </View>
        );
    } else if (qnStyle === 'input') {
        return (
            <View style={styles.main}>
                <Image source={photo} style={[styles.img, styles.border]}/>
                <InputBox label={qn} onChangeText={onInputAnswer}/>
            </View>
        );
    }
};
export default QuizQn;