import React from 'react';
import { View, Text, Button, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import Icon from './MainTabScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {white} from 'color-name';



const DetailsScreen = ({navigation}) => {

    const data = {
        data: [
            {id:1, color:"#bf0000", name: "Musique 1", artist: "artist --", tags:['rap', 'africa', 'tag 3', 'Mobile dev', 'RN', 'Bootdey']},
            {id:2, color:"#bf0000", name: "Musique 2", artist: "artist --", tags:['rap', 'africa', 'tag 3', 'Dey-Dey', 'Developer']},
            {id:3, color:"#bf0000", name: "Musique 3", artist: "artist --", tags:['rap', 'africa', 'tag 3']},
            {id:4, color:"#bf0000", name: "Musique 4", artist: "artist --", tags:['rap', 'africa', 'tag 3']},
            {id:5, color:"#bf0000", name: "Musique 5", artist: "artist --", tags:['rap', 'africa', 'tag 3']},
            {id:6, color:"#bf0000", name: "Musique 6", artist: "artist --", tags:['rap', 'africa', 'tag 3']},
            {id:7, color:"#bf0000", name: "Musique 7", artist: "artist --", tags:['rap', 'africa', 'tag 3']},
            {id:8, color:"#bf0000", name: "Musique 8", artist: "artist --", tags:['rap', 'africa', 'tag 3']},
            {id:9, color:"#bf0000", name: "Musique 9", artist: "artist --", tags:['rap', 'africa', 'tag 3']},
        ]
    }

    const start = async () => {
       // Set up the player
        await TrackPlayer.setupPlayer();

        //Add a track to the queue
        await TrackPlayer.add({
            id: 'trackId',
            url: 'https://www.musicscreen.be/mp3gallery/content/songs/MP3/Piano/Jasmin.mp3',
            title: 'Track Title',
            artist: 'Track Artist',
            artwork: '../assets/logo.png'
        });

        // Start playing it
        await TrackPlayer.play();
    };

    const stop = async () => {
        // Start playing it
        await TrackPlayer.stop();
    };

    return (
      <View style={styles.container}>
          <View style={styles.formContent}>
              <View style={styles.inputContainer}>
                  <Image style={[styles.icon, styles.inputIcon]} source={require('../assets/search.png')}/>
                  <TextInput style={styles.inputs}
                             placeholder="Rechercher"
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
                      <View style={[styles.card, {borderColor:item.color}]}>
                          <View style={styles.cardContent}>
                              <Image style={[styles.image]} source={require('../assets/cd.png')}/>
                              <View>
                                  <Text style={styles.name}>{item.name}</Text>
                                  <Text style={styles.artist}>{item.artist}</Text>
                              </View>
                          </View>
                          <View style={[styles.cardContent, styles.tagsContent]}>
                              <TouchableOpacity style={styles.btnColor} onPress={() => {start()}}>
                                  <Text style={styles.textBtnColor}>Play</Text>
                                  <FontAwesome
                                      name="play"
                                      color="white"
                                      size={20}
                                  />
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.btnColor} onPress={() => {stop()}}>
                                  <Text style={styles.textBtnColor}>Stop</Text>
                                  <FontAwesome
                                      name="stop"
                                      color="white"
                                      size={20}
                                  />
                              </TouchableOpacity>
                          </View>
                      </View>
                  )
              }}/>
      </View>
    );
};

export default DetailsScreen;


const styles = StyleSheet.create({
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
        borderRadius: 20,
    },
    cardContent:{
        flexDirection:'row',
        marginLeft:10,
    },
    tagsContent:{
        flexWrap:'wrap',
        alignSelf: "flex-end",
    },
    image:{
        width:70,
        height:70,
        borderRadius:30,
    },
    name:{
        fontSize:20,
        fontWeight: 'bold',
        marginLeft:10,
        marginTop: 5
    },
    artist:{
        fontSize:17,
        textDecorationLine : 'underline',
        marginLeft:10,
    },
    btnColor: {
        padding:10,
        borderRadius:10,
        marginHorizontal:3,
        backgroundColor: "#bf0000",
        marginTop:5,
        flexDirection: "row"
    },
    textBtnColor: {
        color: "white",
        marginRight: 5,
    }
});
