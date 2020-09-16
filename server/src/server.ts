import express from 'express' ;
import routes from './routes';
import bodyparser from 'body-parser';
import path from 'path';
import cors from 'cors'
const app = express()


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use(cors())
app.use(routes)
app.use('/api/uploads',express.static(path.resolve(__dirname, '..','uploads')));

app.listen(3333)