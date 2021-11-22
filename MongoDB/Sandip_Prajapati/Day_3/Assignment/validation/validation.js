const joi = require('joi')

const validateStudent = joi.object({
    _id: joi.number().required(),
    Name: joi.string().max(50).min(5).alphanum().required(),
    Addresh: joi.string().min(5).max(100).alphanum().required(),
    Fees: joi.object({
        Amount: joi.number().required(),
        PaymentDate: joi.date().required(),
        Status: joi.boolean().required()
    }),
    Result: joi.object({
        Hindi: joi.number().required(),
        Eng: joi.number().required(),
        Math: joi.number().required(),
        Total: joi.number().required(),
        Grade: joi.string().alphanum().required()
    })
})
const assignment = joi.object({
    _id: joi.number().required(),
    AssignmentCategory: joi.string().required(),
    AssignmentName:joi.string().required(),
    AssignmentStatus:joi.string().required()

})
const validateEmployee = joi.object({
    _id: joi.number(),
    FirstName: joi.string().trim().max(50).min(3),
    LastName: joi.string().min(3).max(50).trim(),
    Assignments:joi.array().items(assignment)

})

module.exports = { validateStudent , validateEmployee}