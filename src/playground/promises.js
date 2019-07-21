const promise = new Promise((resolve, reject) => {
  setTimeout(() => {    
  // resolve('This is my resolve data')
  reject('This is my other resolved data')
  }, 1500);
  // resolve('This is my resolve data')
})

console.log('before')
promise.then((data) => {
  console.log('Then1 is called',data)
})

promise.catch((data) => {
  console.log('then2 is called',data)
})
console.log('after')