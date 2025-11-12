import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import Boat from './components/Boat';
const AllBoats = () => {
    return (
        <ScrollView>
            <View style={{marginTop: 50}}>
                <Text style={{fontWeight: 'bold', fontSize: 30, marginBottom: 10}}>
                    GetABoat - For Sale
                </Text>
                <Boat
                    icon_name="sailboat"
                    name="Sea Ray 500 Sundancer"
                    desc="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                    cover={require('./img/sea_ray.jpg')}
                />
                <Boat
                    icon_name="sailboat"
                    name="Four Winns Horizon 180"
                    desc="A sporty look and refined details truly set the Horizon 180 above all others."
                    cover={require('./img/four_winns.jpg')}
                />
                <Boat
                    icon_name="sailboat"
                    name="Flipper 640 ST"
                    desc="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                    cover={require('./img/flipper.jpg')}
                />
                <Boat
                    icon_name="sailboat"
                    name="Princess V48"
                    desc="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                    cover={require('./img/princess.jpg')}
                />
                <Boat
                    icon_name="sailboat"
                    name="Bayliner 175 Bowrider"
                    desc="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                    cover={require('./img/bayliner.jpg')}
                />
                <Boat
                    icon_name="sailboat"
                    name="Fairline Targa 47"
                    desc="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                    cover={require('./img/fairline.jpg')}
                />
            </View>
        </ScrollView>
    );
}
export default AllBoats;