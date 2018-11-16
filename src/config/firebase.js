import * as firebase from 'firebase';
import { FirebaseConfig } from '../config/keys';

//initializing firebase
firebase.initializeApp(FirebaseConfig);
//making a reference of database
export const database = firebase.database();
