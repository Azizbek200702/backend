const Joi = require("@hapi/joi");

module.exports = {
    addNew : {
        body : {
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