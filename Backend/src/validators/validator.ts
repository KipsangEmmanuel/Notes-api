import Joi from 'joi';

 export const noteSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
});