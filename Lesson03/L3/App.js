import React from 'react';
import {ScrollView, View} from 'react-native';
import Movie from './components/Movie';

const AllMovies = () => {
    return (
        <ScrollView>
            <View>
                <Movie
                    title="Doctor Sleep"
                    year="2019"
                    icon_name="skull"
                    poster={require('./img/doctor-sleep.jpg')}
                />
                <Movie
                    title="Midway"
                    year="2020"
                    icon_name="skull"
                    poster={require('./img/midway.jpg')}
                />
            </View>
        </ScrollView>
    );
}
export default AllMovies;