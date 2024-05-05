import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import { MongoClient } from "mongodb";
const connectionString = process.env.ATLAS_URI || `mongodb+srv://culiacan:1234-@cluster0.2xgtfpu.mongodb.net/prueba?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(connectionString);
let conn;
try {
    conn = await client.connect();
}
catch (e) {
    console.error(e);
    console.log(`\n\nYou must set the ATLAS_URI environment variable in the .env file`);
}
let db = conn.db("sample_training");
export default db;
//# sourceMappingURL=conn.js.map