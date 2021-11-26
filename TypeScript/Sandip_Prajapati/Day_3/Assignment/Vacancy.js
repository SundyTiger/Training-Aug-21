"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vacancieArray = exports.Vacancie = void 0;
var vacancieArray = [];
exports.vacancieArray = vacancieArray;
var Vacancie = /** @class */ (function () {
    function Vacancie(vacanciesId, positionName, departmentName, cTc, vacancieStatus) {
        this.vacanciesId = vacanciesId;
        this.positionName = positionName;
        this.departmentName = departmentName;
        this.cTc = cTc;
        this.vacancieStatus = vacancieStatus;
    }
    Vacancie.prototype.vacancieDataStore = function () {
        var vacancieJson = {
            vacanciesId: this.vacanciesId,
            positionName: this.positionName,
            departmentName: this.departmentName,
            cTc: this.cTc,
            vacancieStatus: this.vacancieStatus
        };
        vacancieArray.push(vacancieJson);
        console.log(vacancieArray);
    };
    return Vacancie;
}());
exports.Vacancie = Vacancie;
