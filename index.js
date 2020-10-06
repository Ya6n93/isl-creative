/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import axios from 'axios';
import {name as appName} from './app.json';
import env from '.env'

axios.defaults.baseURL = env.BASE_URL;
AppRegistry.registerComponent(appName, () => App);

