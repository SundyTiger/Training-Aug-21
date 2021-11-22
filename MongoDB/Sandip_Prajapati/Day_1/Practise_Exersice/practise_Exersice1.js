const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/greenhood')
    .then(() => console.log("MongoDB is Connected......."))
    .catch(err => console.error(new Error("Error Occur: " + err)))

const schema = new mongoose.Schema({
    name: {
        type: String, required: true,
        minlength: 5,
        maxlength: 255
    },
    author: String,
    category: {
        type: String,
        required: true,
        enum: ['web', 'mobile', 'network'],
        lowercase:true
    },
    tags: {
        type: Array,
        validate: {
            isAsync: true,
            validator: function (v, callback) {
                setTimeout(() => {
                    const result = v && v.length > 0;
                    callback(result)
                }, 4000)
            },
            message: 'A course Should have More than one tag'
        }
    },
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: { type: Number, required: function () { return this.isPublished; } }
})

const Course = mongoose.model('Try', schema);
async function createCourse() {
    const course = new Course({
        name: "Angular",
        author: "SunSan",
        tags: ['Angular', 'backend'],
        isPublished: true
    });
    try {
        const result = await course.save();
        console.log(result);
    }
    catch (err) {
        console.error(new Error("Error: " + err));
    }
}
async function getCourses() {
    const pagrNumber = 2;
    const pageSize = 10;
    const courses = await Course
        .find({ name: "Angular" })
        .skip((pagrNumber - 1) * pageSize)
        .limit(pageSize)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 });
    console.log(courses);
}
// async function updateCourse(id) {
//     //Query First
//     const course = await Course.findById(id);
//     if (!course) console.error("ID is Invalid");
//     // course.isPublished = true;
//     // course.author = "yanYung";
//     course.set({
//         isPublished: true,
//         author: 'yanYung'
//     })
//    const result = await course.save();
//     console.log(result)
// }
// async function updateCourse(id) {
//     const result = await Course.update({_id:id},{
//         $set:{
//             author:"Jing Jun",
//             isPublished:false
//         }
//     });
//     console.log(result)
// }
// async function updateCourse(id) {
//     const course = await Course.findByIdAndUpdate(id, {
//         $set: {
//             author: "Buin Bug",
//             isPublished: false
//         }
//     }, { new: true });
//     console.log(course)
// }
// async function removeCourse(id) {
//     //    const result = await Course.deleteOne({_id:id})
//     // const result = await Course.deleteMany({_id:id})
//     const result = await Course.findByIdAndRemove(id)
//     console.log(result)
// }
async function run() {
    const course1 = await createCourse()
    //    const course2 = await getCourses()
    // const course3 = await updateCourse("618a18d48cdb630e9b207a06")
    // const course4 = await removeCourse("618a18d48cdb630e9b207a06")
}
run()