"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.siArray = exports.SchedulingInterview = void 0;
var siArray = [];
exports.siArray = siArray;
var SchedulingInterview = /** @class */ (function () {
    function SchedulingInterview(InterviewId, vacanciesId, applicantID, date, Location) {
        this.InterviewId = InterviewId;
        this.vacanciesId = vacanciesId;
        this.applicantID = applicantID;
        this.date = date;
        this.Location = Location;
    }
    SchedulingInterview.prototype.siDataStore = function () {
        var siJson = {
            InterviewId: this.InterviewId,
            vacanciesId: this.vacanciesId,
            applicantID: this.applicantID,
            date: this.date,
            Location: this.Location
        };
        siArray.push(siJson);
        console.log(siArray);
    };
    return SchedulingInterview;
}());
exports.SchedulingInterview = SchedulingInterview;
