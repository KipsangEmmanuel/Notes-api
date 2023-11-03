import express from 'express';
import * as dotenv from 'dotenv';
import noteRouter from './routes/notesRoute';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/notes', noteRouter)

const port = process.env.PORT

app.listen(port, () => console.log(`Server running at port: ${port}`));