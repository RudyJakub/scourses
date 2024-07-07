import { Client } from 'pg'

const connString = "postgresql://sigma:123@db:5432/sigma_db";

const db = new Client({
    connectionString: connString
})

db
.connect()
.then(() => {
    console.log("Connected to PostgreSQL")
})
.catch((err) => {
    console.error(err)
})


export default db
