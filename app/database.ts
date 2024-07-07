import { Client } from 'pg'

const connString = "postgresql://sigma:123@db:5432/sigma_db"

const db = new Client({
    connectionString: connString
})

export default db
