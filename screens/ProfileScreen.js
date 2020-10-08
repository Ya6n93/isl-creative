import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const ProfileScreen = () => {
    const [data, setData] = React.useState({
        name: '',
    });

    const textChange = (val) => {
        setData({
            ...data,
            name: val.my_profile.name,
        });
    }

    const componentDidMount = async () => {
        let header = {
            'Isl-Token' : await AsyncStorage.getItem('userToken', (err, userToken) => {return userToken})
        }

        axios.get("http://34.68.140.135/api/profiles/my_profile", {headers: header})
            .then(response => {

                textChange(response.data)
            })
            .catch(error => {
                console.log(error.response.data)
            })
    }

    componentDidMount();
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <Text style={{marginLeft: 130, fontSize: 20, marginTop: -85}}>{data.name}</Text>
          <Text style={{marginLeft: 130, fontSize: 20, marginBottom: 15}}>Abonnée : 0 Abonnement : 0</Text>
          <View style={{borderBottomWidth: 2, borderColor: '#c40000', marginTop: 10}} />
          <View>
              <View style={{flexDirection: "row", height: 30}}>
                <Text style={{width: '50%'}}>Age : null</Text>
                <Text style={{width: '50%'}}>Email : null</Text>
              </View>
              <View style={{flexDirection: "row", height: 30}}>
                  <Text style={{width: '50%'}}>Date de naissance : null</Text>
                <Text style={{width: '50%'}}>Genre : null</Text>
              </View>
              <View style={{flexDirection: "row", height: 30}}>
                <Text style={{width: '50%'}}>Pays : null</Text>
                <Text style={{width: '50%'}}>Adresse : null</Text>
              </View>
              <View style={{flexDirection: "row", height: 30}}>
                <Text style={{width: '50%'}}>Ville : null</Text>
                <Text style={{width: '50%'}}>Téléphone : null</Text>
              </View>
          </View>
          <View style={{borderBottomWidth: 2, borderColor: '#c40000'}} />
          <Text style={{fontSize: 20}}>Mes prestations :</Text>
          <Text style={{color: '#9a9a9a', fontSize: 20, alignSelf:'center', marginTop: 30}}>Vide</Text>
          {/*<View style={styles.body}>*/}
              {/*<View style={styles.bodyContent}>*/}
                  {/*<Text style={styles.name}>John Doe</Text>*/}
                  {/*<Text style={styles.info}>UX Designer / Mobile developer</Text>*/}
                  {/*<Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>*/}

                  {/*<TouchableOpacity style={styles.buttonContainer}>*/}
                      {/*<Text>Opcion 1</Text>*/}
                  {/*</TouchableOpacity>*/}
                  {/*<TouchableOpacity style={styles.buttonContainer}>*/}
                      {/*<Text>Opcion 2</Text>*/}
                  {/*</TouchableOpacity>*/}
              {/*</View>*/}
          {/*</View>*/}
      </View>
    );
};


export default ProfileScreen;

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#bf0000",
        height:100,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "black",
        marginBottom:10,
        //position: 'relative',
        marginTop:-50
    },
    body:{
        marginTop:40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding:30,
    },
    name:{
        fontSize:28,
        color: "#696969",
        fontWeight: "600"
    },
    info:{
        fontSize:16,
        color: "#bf0000",
        marginTop:10
    },
    description:{
        fontSize:16,
        color: "#696969",
        marginTop:10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor: "#bf0000",
    },
});
