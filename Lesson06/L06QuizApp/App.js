import React, {useState} from 'react';
import {View, Text, ScrollView, Button, Alert} from 'react-native';
import QuizQn from './components/quiz';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
const QuizApp = () => {
    const [inputAnswer, setInputAnswer] = useState('');
    const Checker = (inputAnswer) => {
        let marks = 0;
        if (inputAnswer === 'ohayou') {
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
                />
                <QuizQn
                    qnStyle='input'
                    qn="How would you write/type this in romaji?"
                    onInputAnswer={(value) => setInputAnswer(value)}
                />
                <Button onPress={ () => {
                    const marks = Checker(inputAnswer);
                    if (marks < 3) {
                        Alert.alert("You've gotten " + {} + " answers correct.")
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