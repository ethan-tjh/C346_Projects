import React, {useState} from 'react';
import {View, Text, ScrollView, Button, Alert} from 'react-native';
import QuizQn from './components/quiz';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
const QuizApp = () => {
    const [inputAnswer1, setInputAnswer1] = useState('');
    const [pickerAnswer1, setPickerAnswer1] = useState('');
    const [inputAnswer2, setInputAnswer2] = useState('');
    const [pickerAnswer2, setPickerAnswer2] = useState('');
    const Checker = (inputAnswer1, inputAnswer2, pickerAnswer1, pickerAnswer2) => {
        let marks = 0;
        if (pickerAnswer1 === 'sen sei') {
            marks++;
        }
        if (inputAnswer1.toLowerCase() === 'ohayou') {
            marks++;
        }
        if (pickerAnswer2 === 'かくれんぼ') {
            marks++;
        }
        if (inputAnswer2.toLowerCase() === 'merry go round') {
            marks++;
        }
        return marks
    };
    return (
        <ScrollView>
            <View style={{marginVertical: 50, marginHorizontal: 16}}>
                <Text style={{fontWeight: 'bold', fontSize: 40, color: "#AB50D9"}}>
                    <FontAwesome6 name="book" size={40} /> ようこそ！俺の日本語クイズアプリ！
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 40, color: "#AB50D9"}}>
                    Welcome to my Japanese Quiz App!
                </Text>
                <Text style={{marginTop: 40, fontSize: 20, color: "#DB1F6C"}}>
                    日本語の知識にチャレンジしよう！（簡単バージョン）
                </Text>
                <Text style={{fontSize: 20, color: "#DB1F6C"}}>
                    This quiz challenges your knowledge of Japanese language. (Easy version)
                </Text>
                <QuizQn
                    qnStyle='picker'
                    photo={require('./img/sensei.png')}
                    qn="How do you read this kanji?"
                    option1="xian sheng"
                    option2="sen sei"
                    option3="saki nama"
                    onPickerAnswer={(value) => setPickerAnswer1(value)}
                />
                <QuizQn
                    qnStyle='input'
                    photo={{uri: 'https://www.shutterstock.com/image-illustration/vector-japanese-greeting-ohayou-sticker-260nw-2311324409.jpg'}}
                    qn="How would you write/type this in romaji?"
                    onInputAnswer={(value) => setInputAnswer1(value)}
                />
                <QuizQn
                    qnStyle='picker'
                    photo={require('./img/kakurenbo.png')}
                    qn="How would you write this in hiragana?"
                    option1="こくれんほ"
                    option2="はいど"
                    option3="かくれんぼ"
                    onPickerAnswer={(value) => setPickerAnswer2(value)}
                />
                <QuizQn
                    qnStyle='input'
                    photo={{uri: 'https://www.sonymusic.co.jp/img/common/artist_image/70009000/70009629/images/45777.jpg'}}
                    qn="For the text in yellow, how would you translate this to English?"
                    onInputAnswer={(value) => setInputAnswer2(value)}
                />
                <Button onPress={ () => {
                    const marks = Checker(inputAnswer1, inputAnswer2, pickerAnswer1, pickerAnswer2);
                    if (marks < 4) {
                        Alert.alert("You've gotten " + marks + " answers correct.")
                    } else {
                        Alert.alert("You've gotten all of them correct! Good job!")
                    }
                }
                } title="Submit Answers"
                />
            </View>
        </ScrollView>
    );
};
export default QuizApp;