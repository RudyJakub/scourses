import express, { Request, Response , Application } from 'express'
import db from './database'
import nunjucks from "nunjucks"

const app: Application = express();
const port = 3000;

app.use("/static", express.static(__dirname + "/static"))
app.use(express.json())
app.engine('html', nunjucks.render)
app.set('view engine', 'html')
nunjucks.configure('templates', {
    autoescape: true,
    express: app
})

app.get('/', async (req: Request, res: Response) => {
    res.status(200).render("home")
})

db
.connect()
.then(() => {
    console.log("Connected to PostgreSQL")
    app.listen(port, () => { console.log(`Server is running at http://localhost:${port}`) })
})
.catch((err) => { console.error(err) })
