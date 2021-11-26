"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appliantArray = exports.Applicant = void 0;
var appliantArray = [];
exports.appliantArray = appliantArray;
var Applicant = /** @class */ (function () {
    function Applicant(applicantID, applicantName, exepereince, Field, Specification, ExpectedCtC, Location, vacanciesId) {
        this.applicantID = applicantID;
        this.applicantName = applicantName;
        this.exepereince = exepereince;
        this.Field = Field;
        this.Specification = Specification;
        this.ExpectedCtC = ExpectedCtC;
        this.Location = Location;
        this.vacanciesId = vacanciesId;
    }
    Applicant.prototype.applicantDataStore = function () {
        var applicantJson = {
            applicantID: this.applicantID,
            applicantName: this.applicantName,
            exepereince: this.exepereince,
            Field: this.Field,
            Specification: this.Specification,
            ExpectedCtC: this.ExpectedCtC,
            Location: this.Location,
            vacanciesId: this.vacanciesId
        };
        appliantArray.push(applicantJson);
        console.log(appliantArray);
    };
    return Applicant;
}());
exports.Applicant = Applicant;
