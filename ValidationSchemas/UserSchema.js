import Joi from "joi"
export const userSchema = Joi.object({
    username:Joi.number().required()
})