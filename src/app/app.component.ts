import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor() {
      var firebaseConfig = {
        apiKey: "AIzaSyBhb06Dwp4nxwtClAVwsh4Lmkv384aPiAc",
        authDomain: "blog-1e028.firebaseapp.com",
        databaseURL: "https://blog-1e028.firebaseio.com",
        projectId: "blog-1e028",
        storageBucket: "blog-1e028.appspot.com",
        messagingSenderId: "841343362027",
        appId: "1:841343362027:web:469769878e2e87bf85afae"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    }
}
