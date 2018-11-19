import firebase from 'firebase/app';
import 'firebase/database';
import { FirebaseConfig } from '../config/keys';

//initializing firebase
firebase.initializeApp(FirebaseConfig);
//making a reference of database
export const database = firebase.database();
