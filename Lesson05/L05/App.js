import React, {useState} from 'react';
import {ScrollView, View, Text, TextInput, Button, Alert, TouchableOpacity, ToastAndroid} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const InputBox = ({label, onChangeText}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth: 1, marginBottom: 20}} onChangeText={onChangeText} />
        </View>
    );
};

const MyApp = () => {
    const [userType, setUserType] = useState('');
    const [username, setUsername] = useState('');
    const [pw, setPw] = useState('');
    return (
        <ScrollView>
            <View style={{marginTop: 50}}>
                <Text>User Type: </Text>
                <Picker onValueChange={
                    (value) => setUserType(value)
                }>
                    <Picker.Item label="Admin" value="Admin"/>
                    <Picker.Item label="Guest" value="Guest"/>
                </Picker>
                {/*<Text>User Name:</Text>*/}
                {/*<TextInput style={{borderWidth: 1, marginBottom: 20}} onChangeText={ (text) => setUsername(text) }/>*/}
                {/*<Text>Password: </Text>*/}
                {/*<TextInput style={{borderWidth: 1, marginBottom: 20}} onChangeText={ (text) => setPw(text)} />*/}
                <InputBox label="User Name:" onChangeText={ (text) => setUsername(text) } />
                <InputBox label="Password:" onChangeText ={ (text) => setPw(text) } />
                {/*<Button*/}
                {/*    onPress={ () => Alert.alert("Welcome!") }*/}
                {/*    title={"LOG IN"}*/}
                {/*/>*/}
                {/*<TouchableOpacity onPress={ () => Alert.alert("Welcome!") }>*/}
                {/*    <Text>LOG IN</Text>*/}
                {/*</TouchableOpacity>*/}
                {/*<TouchableOpacity onPress={ () => ToastAndroid.show("Welcome " + userType + " " + username,*/}
                {/*ToastAndroid.SHORT) }>*/}
                {/*    <Text>LOG IN</Text>*/}
                {/*</TouchableOpacity>*/}
                <TouchableOpacity onPress={ () => {
                    const correctPassword = '123';
                    let mymessage = 'Error! Wrong Password!';
                    if (pw === correctPassword) {
                            mymessage = 'Welcome ' + userType + ' ' + username;
                        }
                        ToastAndroid.show(mymessage, ToastAndroid.SHORT);
                    }
                }>
                    <Text>LOG IN</Text>
                </TouchableOpacity>
                <Text>{pw}</Text>
            </View>
        </ScrollView>
    );
}
export default MyApp;