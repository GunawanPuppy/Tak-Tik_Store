import { MongoClient } from "mongodb";


const MONGO_URI = process.env.MONGO_URI
// console.log(MONGO_URI);

//jika tidak ada Uri 
if(!MONGO_URI){
    throw new Error("Mongo uri tidak ada")
}

let client : MongoClient


 export const getMongoClientInstance = async ()=> {
    if(!client){
        client = new MongoClient(MONGO_URI)
        await client.connect()
    }
    return client
}


 