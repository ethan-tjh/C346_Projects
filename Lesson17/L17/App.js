import React,{useState, useEffect} from 'react';
import { FlatList, StatusBar, Text, TextInput, View, Image } from 'react-native';
// Create a new variable named originalData
let originalData = [];
const App = () => {
  const [myData, setMyData] = useState([]);
  // Add fetch() - Exercise 1A
  const myurl = "https://onlinecardappwebservice-5hm7.onrender.com/allcards";
  useEffect(() => {
    fetch(myurl)
        .then((response)=>{
          return response.json();
        })
        .then((myJson)=>{
          setMyData(myJson);
          originalData=myJson;
        })
  }, []);
  const filterData = (text) => {
    if (text!='') {
      let myFilteredData = originalData.filter((item) =>
        item.card_name.toLowerCase().includes(text.toLowerCase()));
      setMyData(myFilteredData);
    }
    else {
      setMyData(originalData);
    }
  }
  const renderItem = ({item, index}) => {
    return (
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', borderWidth:1, marginVertical:4, padding:8}}>
          <Text style={{fontWeight:"bold"}}>{item.card_name}</Text>
          <Image source={{uri: item.card_pic}}
                 style={{width:200, height:200}}/>
        </View>
    );
  };
  return (
      <View style={{padding:8}}>
        <StatusBar/>
        <Text style={{fontWeight:"bold"}}>Search:</Text>
        <TextInput style={{borderWidth:1}} onChangeText={(text) => {filterData(text)}}/>
        <FlatList contentContainerStyle={{marginTop:4}} data={myData} renderItem={renderItem} />
      </View>
  );
}
export default App;