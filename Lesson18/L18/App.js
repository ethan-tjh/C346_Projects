import React, {useState, useEffect} from 'react';
import {FlatList, StatusBar, Text, TextInput, View, Image, TouchableOpacity, Alert} from 'react-native';
let originalData = [];
const App = () => {
    const [myData, setMyData] = useState([]);
    const myURL = "https://onlinedeliverywebservice.onrender.com/allDeliveries";
    useEffect(() => {
        fetch(myURL)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                setMyData(myJson);
                originalData = myJson;
            })
    }, []);
    const filterData = (text) => {
        if (text !== '') {
            let myFilteredData = originalData.filter((item) =>
                (item.fullname.toLowerCase().includes(text.toLowerCase())) || (item.product_name.toLowerCase().includes(text.toLowerCase())));
            setMyData(myFilteredData);
        } else {
            setMyData(originalData);
        }
    }
    const renderItem = ({item}) => {
        return (
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 12}}>
                <View style={{flex: 1, borderWidth: 1, alignItems: "center", justifyContent: "center", minHeight: 140}}>
                    <Image source={{uri: item.product_image}}
                           style={{width: 100, height: 100, resizeMode: "contain"}}/>
                </View>
                <View style={{flex: 2, borderWidth: 1, minHeight: 140, padding: 4}}>
                    <Text><Text style={{fontWeight: "bold"}}>Customer:</Text> {item.fullname}</Text>
                    <Text><Text style={{fontWeight: "bold"}}>Product:</Text> {item.product_name}</Text>
                    <Text><Text style={{fontWeight: "bold"}}>Delivery Status:</Text> {item.delivery_status}</Text>
                    <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                        <TouchableOpacity
                            onPress={() => {
                                Alert.alert(
                                    'Contact Details',
                                    `Please call ${item.fullname} at ${item.phone_num}`,
                                    [{text: 'OK', style: 'cancel'}]
                                )
                            }}
                            style={{backgroundColor: 'lightblue', borderWidth: 1, margin: 6, padding: 8}}>
                            <Text>Contact</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };
    return (
        <View style={{padding: 8}}>
            <StatusBar/>
            <Text style={{fontWeight: "bold"}}>Customer/Product Search:</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={(text) => {
                filterData(text)
            }}/>
            <FlatList data={myData} renderItem={renderItem}/>
        </View>
    );
}
export default App;