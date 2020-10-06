import React from 'react';
import { View, Text, Button, StyleSheet, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';



const DetailsScreen = ({navigation}) => {

    const data = {
        data: [
            {id:1, color:"#bf0000", name: "Musique 1", tags:['rap', 'africa', 'tag 3', 'Mobile dev', 'RN', 'Bootdey']},
            {id:2, color:"#bf0000", name: "Musique 2", tags:['rap', 'africa', 'tag 3', 'Dey-Dey', 'Developer']},
            {id:3, color:"#bf0000", name: "Musique 3", tags:['rap', 'africa', 'tag 3']},
            {id:4, color:"#bf0000", name: "Musique 4", tags:['rap', 'africa', 'tag 3']},
            {id:5, color:"#bf0000", name: "Musique 5", tags:['rap', 'africa', 'tag 3']},
            {id:6, color:"#bf0000", name: "Musique 6", tags:['rap', 'africa', 'tag 3']},
            {id:7, color:"#bf0000", name: "Musique 7", tags:['rap', 'africa', 'tag 3']},
            {id:8, color:"#bf0000", name: "Musique 8", tags:['rap', 'africa', 'tag 3']},
            {id:9, color:"#bf0000", name: "Musique 9", tags:['rap', 'africa', 'tag 3']},
        ]
    }

    const cardClickEventListener = (item) => {
        Alert.alert(item.name);
    }

    const tagClickEventListener = (tagName) => {
        Alert.alert(tagName);
    }

    const renderTags = (item) =>{
        return item.tags.map((tag, key) => {
            return (
                <TouchableOpacity key={key} style={styles.btnColor} onPress={() => {tagClickEventListener(tag)}}>
                    <Text>{tag}</Text>
                </TouchableOpacity>
            );
        })
    }

    return (
      <View style={styles.container}>
          <View style={styles.formContent}>
              <View style={styles.inputContainer}>
                  <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/search/androidL/100/000000'}}/>
                  <TextInput style={styles.inputs}
                             placeholder="Search"
                             underlineColorAndroid='transparent'/>
              </View>
          </View>

          <FlatList
              style={styles.notificationList}
              data={data.data}
              keyExtractor= {(item) => {
                  return item.id;
              }}
              renderItem={({item}) => {
                  return (
                      <TouchableOpacity style={[styles.card, {borderColor:item.color}]} onPress={() => {cardClickEventListener(item)}}>
                          <View style={styles.cardContent}>
                              <Image style={[styles.image, styles.imageContent]} source={{uri: 'https://cdn.pixabay.com/photo/2016/02/01/12/33/play-1173551_1280.png'}}/>
                              <Text style={styles.name}>{item.name}</Text>
                          </View>
                          <View style={[styles.cardContent, styles.tagsContent]}>
                              {renderTags(item)}
                          </View>
                      </TouchableOpacity>
                  )
              }}/>
      </View>
    );
};

export default DetailsScreen;


const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // },
    formContent:{
        flexDirection: 'row',
        marginTop:10,
    },
    inputContainer: {
        borderColor: '#bf0000',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderWidth: 1,
        height:45,
        flexDirection: 'row',
        alignItems:'center',
        flex:1,
        margin:5,
    },
    icon:{
        width:30,
        height:30,
    },
    iconBtnSearch:{
        alignSelf:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
        marginLeft:15,
        justifyContent: 'center'
    },
    notificationList:{
        paddingHorizontal: 8,
        marginBottom: 65,
    },
    card: {
        height:null,
        paddingTop:10,
        paddingBottom:10,
        marginTop:5,
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        borderTopWidth:20,
        marginBottom:20,
        borderBottomWidth:1,
        borderLeftWidth:1,
        borderRightWidth:1,
        borderBottomColor: '#bf0000',
        borderLeftColor: '#bf0000',
        borderRightColor: '#bf0000',
    },
    cardContent:{
        flexDirection:'row',
        marginLeft:10,
    },
    imageContent:{
        marginTop:-20,
    },
    tagsContent:{
        marginTop:10,
        flexWrap:'wrap'
    },
    image:{
        width:60,
        height:60,
        borderRadius:30,
    },
    name:{
        fontSize:20,
        fontWeight: 'bold',
        marginLeft:10,
        alignSelf: 'center'
    },
    btnColor: {
        padding:10,
        borderRadius:40,
        marginHorizontal:3,
        backgroundColor: "#eee",
        marginTop:5,
    },
});
