import React from 'react';
import {View, Image, Text, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
const InputBox = ({label, onChangeText}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth: 1, marginBottom: 20}} onChangeText={onChangeText} />
        </View>
    )
};
const QuizQn = ({photo, qn, qnStyle, option1, option2, option3, onInputAnswer, onPickerAnswer})=> {
    if (qnStyle === 'picker') {
        return (
            <View style={{marginBottom: 10}}>
                <Image source={photo}
                       style={{width: 370, height: 370}}/>
                <Text style={{color: "#4B4B4B"}}>{qn}</Text>
                <Picker onValueChange={(value) => onPickerAnswer(value)}>
                    <Picker.Item label="Pick an option" value="" enabled={false}/>
                    <Picker.Item label={option1} value={option1}/>
                    <Picker.Item label={option2} value={option2}/>
                    <Picker.Item label={option3} value={option3}/>
                </Picker>
            </View>
        );
    } else if (qnStyle === 'input') {
        return (
            <View style={{marginBottom: 10}}>
                <Image source={photo}
                       style={{width: 370, height: 390}}/>
                <Text style={{color: "#4B4B4B"}}>{qn}</Text>
                <InputBox onChangeText={onInputAnswer}/>
            </View>
        );
    }
};
export default QuizQn;