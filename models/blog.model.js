import mongoose from 'mongoose';

const { Schema } = mongoose;

const blogschema = new Schema({
    data:{
        type: String
    }
})

const newblock = mongoose.model('blogs',blogschema);
console.log(newblock)

export default newblock
