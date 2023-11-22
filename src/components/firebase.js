import * as firebase from "firebase/app"
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyAQ4FGaxqercRJtHdirpr4YzRIPUC9zwH8",
    authDomain: "product-card-generator.firebaseapp.com",
    projectId: "product-card-generator",
    storageBucket: "product-card-generator.appspot.com",
    messagingSenderId: "576456968739",
    appId: "1:576456968739:web:66ccedd6f52aecf2ecff96"
  };

  const fireApp = firebase.initializeApp(firebaseConfig);
const fireDB = fireApp.database();

export default fireDB;
  // export default database;