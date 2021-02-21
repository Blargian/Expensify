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

database.ref().on('value',(snapshot)=>{
    console.log(snapshot.val());
})

database.ref().set({
    name: 'Shaun',
    age: 26,
    isSingle: false,
    stressLevel: 6,
    job: {
        title: 'Software developer',
        company: 'Google',
    },
    location: {
        city: 'Moscow',
        country: 'Russian Federation'
    },
}).then(()=>{
    console.log('Data is saved');
}).catch((e)=> {
    console.log('This failed.', e);
});

//database.ref().set('This is some data');

database.ref('attributes').set({
    height: 125,
    weight: 70
}).then(()=>{
    console.log('Data is saved');
}).catch((e)=>{
    console.log('This failed.',e);
});

database.ref('attributes').remove().then(()=>{
    console.log('removed');
}).catch((e)=>{
    console.log('failed',e);
})

database.ref().update({
    'job/company': 'Amazon', 
    'stressLevel': 9,
    'location/city': 'Seattle'
}).then(()=>{
    console.log('Completed update action')
}).catch((e)=>{
    console.log('Something went wrong',e)
})

