const promiseFunction = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve('Hello world')
    } else {
      reject(new Error('Hello error'))
    }
  }, 2000)
})

async function asyncAwait(){
  try {
    const msg = await promiseFunction()
    console.log('msg', msg)
  } catch (error) {
    console.error('error',error)
  }
}

asyncAwait()