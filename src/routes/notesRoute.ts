import {Router} from 'express';

import {createNote} from '../controllers/notesController';

const noteRouter:Router=Router();

noteRouter.post('/register', createNote);


export default noteRouter;