import * as firebase from 'firebase'; //make a variable out of all named exports

const firebaseConfig = {
    apiKey: "AIzaSyAAIpyASnSgaajeVxKfU2ga0mdKjmRzYqc",
    authDomain: "expensify-cf09e.firebaseapp.com",
    databaseURL: "https://expensify-cf09e-default-rtdb.firebaseio.com",
    projectId: "expensify-cf09e",
    storageBucket: "expensify-cf09e.appspot.com",
    messagingSenderId: "586329035051",
    appId: "1:586329035051:web:8c6ab03b6f08c35501356e"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// database.ref('expenses').once('value').then((snapshot)=>{
//     const expenses = [];

//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id: childSnapshot.key,
//             ... childSnapshot.val()
//         });
//     })

//     console.log(expenses)
// })

// database.ref('expenses').on('value',(snapshot)=>{
//     const expenses = [];

//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id: childSnapshot.key,
//             ... childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// })

database.ref('expenses').on('child_changed',(snapshot)=>{
    console.log(snapshot.key,snapshot.val());
})