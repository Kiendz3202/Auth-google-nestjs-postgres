import { Injectable } from '@nestjs/common';
import * as firebase from 'firebase-admin';
import firebaseConfig from '../config/firebase/firebase.config';

@Injectable()
export class FirebaseService {
  private firebaseService: firebase.app.App;

  constructor() {
    this.firebaseService = firebase.initializeApp({
      credential: firebase.credential.cert({ ...firebaseConfig }),
      databaseURL: firebaseConfig.databaseUrl,
    });
  }

  getAuth = (): firebase.auth.Auth => {
    return this.firebaseService.auth();
  };

  firestore = (): firebase.firestore.Firestore => {
    return this.firebaseService.firestore();
  };
}
