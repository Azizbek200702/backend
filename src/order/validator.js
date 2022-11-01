const Joi = require("@hapi/joi");

module.exports = {
    addNew : {
        body : {
            name: Joi.string().min(3).max(200).required(),
            address: Joi.string().min(3).max(200).required(),
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