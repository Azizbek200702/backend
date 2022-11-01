const Product = require("./model");

module.exports = {
    findAll: async function (req, res, next) {
        try{
            const doc = await Product.find({}).exec();
            if(!doc) throw new Error();
            return res.status(200).json(doc);
        } catch (err) {
            return next(res.status(400).send('Failed to get Products ' + err))
        }
    },

    findOne: async function (req, res, next) {
        try{
            const doc = await Product.findById(req.params.id).exec();
            if(!doc) throw new Error();
            return res.status(200).json(doc);
        } catch (err) {
            return next(res.status(400).send('Failed to get one Products ' + err))
        }
    },

    addNew: async function (req, res, next) {
        try{
            const newProdct = new Product(req.body);
            const doc = await new newProdct.save() 
            if(!doc) throw new Error();
            return res.status(200).json(doc);
        } catch (err) {
            return next(res.status(400).send('Failed to addNew Products ' + err))
        }
    },

    updateOne: async function (req, res, next) {
        try{
            const doc = await Product.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            }).exec();
            if(!doc) throw new Error();
            return res.status(200).json(doc);
        } catch (err) {
            return next(res.status(400).send('Failed to updateOne Products ' + err))
        }
    },

    deleteOne: async function (req, res, next) {
        try{
            const doc = await Product.findByIdAndRemove(req.params.id).exec();
            if(!doc) throw new Error();
            return res.status(200).json(doc);
        } catch (err) {
            return next(res.status(400).send('Failed to deleteOne Products ' + err))
        }
    }
}