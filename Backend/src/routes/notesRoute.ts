import {Router} from 'express';

import {createNote, getAllNotes} from '../controllers/notesController';

const noteRouter:Router=Router();

noteRouter.post('/register', createNote);
noteRouter.get('/all', getAllNotes);


export default noteRouter;