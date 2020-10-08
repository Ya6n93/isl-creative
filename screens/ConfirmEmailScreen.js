import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';

import { useTheme } from 'react-native-paper';

import { AuthContext } from '../components/context';

import Users from '../model/users';
import axios from 'axios';

const SignInScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        code: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const { colors } = useTheme();

    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                code: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                code: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const loginHandle = (userName, password) => {

        if ( data.username.length == 0 || data.password.length == 0 ) {
            Alert.alert('Champs requis !', 'Tout les champs doivent être rempli.', [
                {text: 'Ok'}
            ]);
            return;
        }

        let user = {
            'email': data.username,
            'password': data.password
        };

        // console.log("caca",data);
        //
        // axios.post("http://34.68.140.135/api/users/login", user)
        //     .then( response => {
        //         console.log(response.data)
        //         //signIn();
        //     })
        //     .catch(error => {
        //         console.log(error.response.data)
        //         Alert.alert('Erreur', error.response.data, [
        //             {text: 'Ok'}
        //         ]);
        //     });

        signIn();
    }

    const checkCode = async () => {
        let user = {
            'email': '',
            'keys': data.code
        }

        await AsyncStorage.getItem('userToken', (err, emailConfirm) => {user.email = emailConfirm});

        let headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "*",
        };
        axios.post("http://34.68.140.135/api/users/get_if_keys_validate", user, {headers : headers})
            .then(response => {
                console.log(response.data)
                navigation.navigate("SignInScreen");
            })
            .catch(error => {
                console.log(error)
                // Alert.alert('Erreur', error, [
                //     {text: 'Ok'}
                // ]);
            })
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#bf0000' barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.text_header}>Confirmation votre Email</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.footer, {
                    backgroundColor: colors.background
                }]}
            >
                <Text style={[styles.text_footer, {
                    color: colors.text
                }]}>Saisissez votre code de validation :</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color={colors.text}
                        size={20}
                    />
                    <TextInput
                        placeholder="Code de validation "
                        placeholderTextColor="#666666"
                        style={[styles.textInput, {
                            color: colors.text
                        }]}
                        keyboardType="numeric"
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                    />
                </View>

                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => {checkCode()}}
                    >
                        <LinearGradient
                            colors={['#ff0000', '#bf0000']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign, {
                                color:'#fff'
                            }]}>Valider</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bf0000'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});
