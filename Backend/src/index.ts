import express from 'express';
import * as dotenv from 'dotenv';
import noteRouter from './routes/notesRoute';
import cors from 'cors'


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())

app.use('/notes', noteRouter)

const port = process.env.PORT

app.listen(port, () => console.log(`Server running at port: ${port}`));