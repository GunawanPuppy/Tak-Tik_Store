require('dotenv').config();
const {getMongoClientInstance} = require("../config/mongo.js")
const data = require("./product.json")

export const getDb = async () => {
  const client = await getMongoClientInstance();
  const db = client.db("Latihan_Next");
  return db;
};

async function seedProduct(){
    try {
        const db = await getDb()
        await db.collection("products").deleteMany({})
        await db.collection("products").insertMany(data)
        console.log("success seeding product");
    } catch (error) {
        console.log("errorr seeding product", error);
    }finally {
        const client= await getMongoClientInstance()
        client.close()
    }
}
seedProduct()


