const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/OnlineMaterial')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  authors:[authorSchema]
}));

async function createCourse(name, authors) {
  const course = new Course({
    name, 
    authors
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}
async function addAuthor(courseId, author){
    const course = await Course.findById(courseId)
    course.authors.push(author)
    course.save()

}
async function removeAuthor(courseId,authorId)
{
    const course = Course.findById(courseId);
    const author = course.authors.id(authorId);
    author.remove()
    course.save()
}
// createCourse('Node Course', [new Author({ name: 'Mosh' }),
// new Author({ name: 'John' }),
// new Author({ name: 'Mathew' })
// ]);
// addAuthor("618ea657a83a4c921185a907",new Author({ name:"Elon"}))

removeAuthor("618ea657a83a4c921185a907","618ea657a83a4c921185a904")