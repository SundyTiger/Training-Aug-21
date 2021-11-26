import { IResult } from './interface';
import { Rstatus } from './enum';
let irArray: IResult[] = [];
class InterviewResult {
    constructor(public InterviewId: number, public applicantID: number, public vacanciesId: number, public ResultStatus: Rstatus) {
    }
    irDataStore() {
        let irJson: IResult = {
            InterviewId: this.InterviewId,
            applicantID: this.applicantID,
            vacanciesId: this.vacanciesId,
            ResultStatus: this.ResultStatus
        }
        irArray.push(irJson);
        console.log(irArray)
    }

}
export {
    InterviewResult, irArray
}