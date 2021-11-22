const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/greenhood').then(
    () => console.log("DB is Connected")
).catch(
    err => console.error(new Error('Error Occur ' + err))
)
const courseSchema = new mongoose.Schema(
    {
        name: {
            type: String, required: true,
            minlength: 5,
            maxlength: 255
        },
        category: {
            type: String,
            required:true,
            enum: ['web', 'mobile', 'network']
        },
        tags: [String],
        author: String,
        isPublished: Boolean,
        date: { type: Date, default: Date.now },
        price: { type: Number, required: function () { return this.isPublished; } }

    }
);
const Course = mongoose.model('Course', courseSchema);
async function getCourses() {
    return await Course.find({ isPublished: true, tags: 'backend' })
        .sort({ name: 1 })
        .select({ name: 1, author: 1 })
}
async function getCourses2() {
    return await Course
        .find({ isPublished: true, tags: { $in: ['frontend', 'backend'] } })
        .sort({ price: -1 })
        .select({ name: 1, author: 1 })
}
async function getCourses3() {
    return await Course
        .find({ isPublished: true })
        .or([{ price: { $gte: 15 } }, { name: /.*by.*/i }])
}
async function run() {
    // const courses =  await getCourses()
    // console.log(courses);
    // const courses2 = await getCourses2()
    // console.log(courses2)
    const courses3 = await getCourses3()
    console.log(courses3)
}
run()