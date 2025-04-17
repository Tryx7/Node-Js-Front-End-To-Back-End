const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/SendDataToBackend")
.then(() => {
     console.log("MongoDB Connected")
})
.catch(() => {
     console.log("MongoDB Not Connected")
})

const schema = new mongoose.Schema({
        msg: {
            type: String,
            required: true
        },
    })

const collection = new mongoose.model("newCollection", schema) 

module.exports = collection