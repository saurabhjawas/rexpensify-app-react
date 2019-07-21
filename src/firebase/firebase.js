import * as firebase from 'firebase'

const config = {
  apiKey            : process.env.FIREBASE_API_KEY,
  authDomain        : process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL       : process.env.FIREBASE_DATABASE_URL,
  projectId         : process.env.FIREBASE_PROJECT_ID,
  storageBucket     : process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId : process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId             : process.env.FIREBASE_APP_ID
}

firebase.initializeApp(config)

const database = firebase.database()

export {firebase, database as default}

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })


// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })
// const onValuechange = database.ref('expenses')
// .on('value', (snapshot) => {
//   // console.log(snapshot.val())
//   const expenses = []
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//      id: childSnapshot.key,
//      ...childSnapshot.val()
//     }) 
//   })
//   console.log('These are expenses',expenses)
// })



// database.ref('expenses').push({
//   description: 'desc1',
//   note: 'note1',
//   amount: 1,
//   createdAt: 4000
// })
 

// database.ref('notes').push({
//   title:'american title',
//   body: 'This is my american note'
// })



// const onValueChange = database.ref().on('value', (snaphot) => {
//   const { name, job } = snaphot.val()
//   const {company, title} = job
//   const msg = `${name} is a ${title} at ${company}`
//   console.log(msg)
// })


// setTimeout(() => {
//   database.ref('job/company').set('amazon')
// }, 2000);

/*

const onValueChange = database.ref().on('value', (snapshot) => {
  console.log(snapshot.val())
}, (e) => {
  console.log('Error with data fetching', e)
})

setTimeout(() => {
  database.ref().update({
    age: 28
  })
}, 3000);

setTimeout(() => {
  database.ref().off(onValueChange)
}, 7000);

setTimeout(() => {
  database.ref().update({
    age: 201
  })
}, 10500);

*/

// database.ref('location/city').once('value')
// .then((snapshot) => {
//   const val = snapshot.val()
//   console.log(val)
// }).catch((e) => {
//   console.log('Error fetching data', e)
// })


// database.ref().set({
//   name: "Bulla Jackson",
//   age: 26,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   stressLevel: 6,
//   location: {
//     city: 'Philadelphia',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('data is saved')
// }).catch((e) => {
//   console.log('This failed!', e)
// })

// database.ref().remove()
// .then(() => {
//   console.log('Removed successfully!')
// }).catch((e) => {
//   console.log('Somethinf could not be removed',e)
// })

// database.ref().set(null)
// .then(() => {
//   console.log('Removed successfully!')
// }).catch((e) => {
//   console.log('Somethinf could not be removed',e)
// })

// database.ref().update({
//   stressLevel: 0,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// })

