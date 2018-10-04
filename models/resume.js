const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const ResumeSchema = new Schema({
  summary: String,
  experience: [
    {
      company: String,
      companyDescription: String,
      role: String,
      roleDescription: String,
      accomplishments: [String]
    }
  ],
  education: [
    {
    insitution: String,
    datesAttended: String,
    credential: String,
    notes: String
    }
  ],
  skills: [
    {
      category: String,
      skills: [String]
    }
  ]
});

const Resume= mongoose.model('Resume', ResumeSchema);
module.exports = Resume;
