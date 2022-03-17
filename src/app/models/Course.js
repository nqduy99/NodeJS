const mongoose = require('mongoose')
var slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const Course = new Schema({
  // _id: {type: Number},
  name: {type: String, maxlength: 255, required : true},
  description: {type: String, maxlength: 600},
  image: {type: String, maxlength: 255},
  videoId: { type: String, maxlength: 255 },
  level: { type: String, maxlength: 100 },
  slug: { type: String, slug: 'name', unique: true },
  deletedAt: { type: Date},
}, {
  // _id: false,
  timestamps: true
});

//Add plugins
mongoose.plugin(slug);

// Course.plugin(AutoIncrement);
Course.plugin(mongooseDelete, { 
  deletedAt: true,
  overrideMethods: 'all' 
})

module.exports = mongoose.model('Course', Course);
