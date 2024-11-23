import Joi from "joi";


export const searchFormValidator = Joi.object({
    query: Joi.string()
        .trim()
        .min(3)
        .max(100)
        .required()
        .messages({
            "string.empty": "Field should not be empty",
            "string.min": "The query must contain at least 3 characters",
            "string.max": "The query must not exceed 20 characters",
        }),
});
