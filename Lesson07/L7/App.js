import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Exercise1 from './Exercise1';
import Exercise2 from './Exercise2';
import Exercise3A from './Exercise3A';
import Exercise3B from './Exercise3B';
import Exercise3C from './Exercise3C';
import Exercise3D from './Exercise3D';
import Exercise3E from './Exercise3E';
import Exercise4 from './Exercise4';
const MyApp = () => {
    return(
        <View style={{marginTop: 40, flex: 1}}>
            <Text style={{fontSize: 30, marginBottom: 20}}>Lesson 7 exercises</Text>
            {/*<Exercise1 />*/}
            {/*<Exercise2 />*/}
            {/*<Exercise3A />*/}
            {/*<Exercise3B />*/}
            {/*<Exercise3C />*/}
            {/*<Exercise3D />*/}
            {/*<Exercise3E />*/}
            <Exercise4 />
        </View>
    );
};
export default MyApp;