const express = require("express");
const mongoose = require("mongoose");
const appRouter = require("./router");

const app = express();
const PORT = process.env.PORT;

const connectionParams = {
    useNewUrlParser : true,
    useUnifiedTopology : true
}

mongoose    
    .connect(process.env.MONGOHOST, connectionParams)
    .then(() => {
        console.log('Connected to database....');
    })
    .catch((err) => {
        console.error(`Error connecting to database: ${err}`);
    })

app.use('/api', appRouter);

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
module.exports = app;