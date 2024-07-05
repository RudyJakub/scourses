import pg from 'pg'

const { Client } = pg
const connString = "postgres://postgres:123@localhost:5432/course_db";

const db = new Client(connString)

db.connect()

export default db
