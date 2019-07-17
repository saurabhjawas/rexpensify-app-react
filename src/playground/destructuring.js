// Object destructuring

const book = {
  title: 'Ego is the enemy',
  author: 'Ryan Holiday',
  publisher: {
    // name: 'Penguin'
  }
}

const { name: publisherName = 'Self-Published' } = book.publisher

console.log(publisherName)  // Penguin, SelfPublished


// Array destructuring

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const address = ['1299 S Juniper Street', ];

const [, city = 'Toronto', , ] = address

console.log(`you are in ${city}`)

const item = ['Coffee (hot)' , '$2.00', '$2.50', '$2.75']

const [product, , mediumPrice] = item

console.log(`A medium ${product} costs ${mediumPrice}`)