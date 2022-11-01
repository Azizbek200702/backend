const Joi = require("@hapi/joi");

module.exports = {
    addNew : {
        body : {
            name: Joi.string().min(3).max(200).required(),
            form: Joi.string().min(3).max(200).required(),
            title: Joi.string().min(3).max(200).required()
        }
    },

    updateOne : {
        params : {
            id: Joi.string().required(),
        }
    },

    deleteOne : {
        params: {
            id: Joi.string().required(),
        },
    },
};