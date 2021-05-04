
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const types1Schema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   description: String
})

const types1Model = mongoose.model('types1', types1Schema, 'types1');
export default types1Model;
