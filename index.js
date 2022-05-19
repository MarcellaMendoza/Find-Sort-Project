const {MongoClient} = require('mongodb')
const url = "mongodb+srv://mmendoza5:SebasTian12@cluster0.wjicg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const client = new MongoClient(url)


async function getGrades() {
  try {
    await client.connect()
    const collection = client.db('sample_training').collection('grades')
    const cursorArr = await collection.find().sort({class_id: 1}).toArray()
    console.log(cursorArr)
  }
  catch(err) {
    console.log(err)
  }
}

// getGrades()

async function getShips() {
  try {
    await client.connect()
    const collection = client.db('sample_geospatial').collection('shipwrecks')
    const cursorArr = await collection.find({watlev: "always dry"}).project({chart: 1}).toArray()
    console.log(cursorArr)
  }
  catch(err) {
    console.log(err)
  }
}

// getShips()


async function getSales() {
  try {
    await client.connect()
    const collection = client.db('sample_supplies').collection('sales')
    const cursorArr = await collection.find({storeLocation: 'Austin', purchaseMethod: 'Online'}).sort({saleDate: -1}).project({customer: 0}).toArray()
    console.log(cursorArr)
  }
  catch(err) {
    console.log(err)
  }
}

getSales()










  
// '// const {MongoClient} = require('mongodb')
// const url = "mongodb+srv://mmendoza5:SebasTian12@cluster0.wjicg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// const client = new MongoClient(url)


// async function findRestaurants() {
//   try {
//     await client.connect()
//     const collection = client.db("sample_restaurants").collection("restaurants")
//     const cursorArr = await collection.find().project({cuisine: 1, borough: 1, _id: 0}).sort({borough: 1}).toArray()
//     console.log(cursorArr)
//     await client.close()
//   }
//   catch(err) {
//     console.log(err)
//   }
// }

// findRestaurants()