"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.irArray = exports.InterviewResult = void 0;
var irArray = [];
exports.irArray = irArray;
var InterviewResult = /** @class */ (function () {
    function InterviewResult(InterviewId, applicantID, vacanciesId, ResultStatus) {
        this.InterviewId = InterviewId;
        this.applicantID = applicantID;
        this.vacanciesId = vacanciesId;
        this.ResultStatus = ResultStatus;
    }
    InterviewResult.prototype.irDataStore = function () {
        var irJson = {
            InterviewId: this.InterviewId,
            applicantID: this.applicantID,
            vacanciesId: this.vacanciesId,
            ResultStatus: this.ResultStatus
        };
        irArray.push(irJson);
        console.log(irArray);
    };
    return InterviewResult;
}());
exports.InterviewResult = InterviewResult;
