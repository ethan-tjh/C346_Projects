import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import QuizQn from './components/quiz';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'black'
    },
    header: {
        paddingTop: 50,
        paddingBottom: 30,
        paddingHorizontal: 20,
        backgroundColor: '#AB50D9',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        gap: 10
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 38,
        textAlign: 'center',
        color: 'black'
    },
    subHeader: {
        marginVertical: 30,
        paddingHorizontal: 20
    },
    subHeaderText: {
        fontSize: 20,
        color: '#DB1F6C',
        textAlign: 'center'
    },
    main: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 30,
        marginBottom: 50
    },
    qnCard: {
        paddingHorizontal: 12,
        paddingTop: 12,
        borderRadius: 24,
        alignItems: 'center',
        width: '95%'
    },
    Picker: {
        backgroundColor: '#AB50D9'
    },
    Input: {
        backgroundColor: '#DB1F6C'
    },
    qnText: {
        color: 'black',
        textAlign: 'left',
        width: '100%',
        fontSize: 18,
        fontWeight: 'bold'
    },
    btn: {
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 24,
        backgroundColor: '#AB50D9'
    },
    btnText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    }
})
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
        <ScrollView style={styles.scrollView}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    <FontAwesome6 name="book" size={40} /> ようこそ！俺の日本語クイズアプリ！
                </Text>
                <Text style={styles.headerText}>
                    Welcome to my Japanese Quiz App!
                </Text>
            </View>
            <View style={styles.subHeader}>
                <Text style={styles.subHeaderText}>日本語の知識にチャレンジしよう！</Text>
                <Text style={styles.subHeaderText}>（簡単バージョン）</Text>
                <Text style={styles.subHeaderText}>
                    This quiz challenges your knowledge of Japanese language. (Easy version)
                </Text>
            </View>
            <View style={styles.main}>
                <View style={[styles.qnCard, styles.Picker]}>
                    <Text style={styles.qnText}>Qn 1.</Text>
                    <QuizQn
                        qnStyle='picker'
                        photo={require('./img/sensei.png')}
                        qn="How do you read this kanji?"
                        option1="xian sheng"
                        option2="sen sei"
                        option3="saki nama"
                        onPickerAnswer={(value) => setPickerAnswer1(value)}
                    />
                </View>
                <View style={[styles.qnCard, styles.Input]}>
                    <Text style={styles.qnText}>Qn 2.</Text>
                    <QuizQn
                        qnStyle='input'
                        photo={{uri: 'https://www.shutterstock.com/image-illustration/vector-japanese-greeting-ohayou-sticker-260nw-2311324409.jpg'}}
                        qn="How would you write/type this in romaji?"
                        onInputAnswer={(value) => setInputAnswer1(value)}
                    />
                </View>
                <View style={[styles.qnCard, styles.Picker]}>
                    <Text style={styles.qnText}>Qn 3.</Text>
                    <QuizQn
                        qnStyle='picker'
                        photo={require('./img/kakurenbo.png')}
                        qn="How would you write this in hiragana?"
                        option1="こくれんほ"
                        option2="はいど"
                        option3="かくれんぼ"
                        onPickerAnswer={(value) => setPickerAnswer2(value)}
                    />
                </View>
                <View style={[styles.qnCard, styles.Input]}>
                    <Text style={styles.qnText}>Qn 4.</Text>
                    <QuizQn
                        qnStyle='input'
                        photo={{uri: 'https://www.sonymusic.co.jp/img/common/artist_image/70009000/70009629/images/45777.jpg'}}
                        qn="For the text in yellow, how would you translate this to English?"
                        onInputAnswer={(value) => setInputAnswer2(value)}
                    />
                </View>
                <TouchableOpacity onPress={ () => {
                    const marks = Checker(inputAnswer1, inputAnswer2, pickerAnswer1, pickerAnswer2);
                    if (marks < 4) {
                        Alert.alert("You've gotten " + marks + " answers correct.")
                    } else {
                        Alert.alert("You've gotten all of them correct! Good job!")
                    }
                }
                } style={styles.btn}>
                    <Text style={styles.btnText}>Submit Answers</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};
export default QuizApp;