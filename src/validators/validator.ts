import Joi from 'joi';

const noteSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required()
});

module.exports = {noteSchema};