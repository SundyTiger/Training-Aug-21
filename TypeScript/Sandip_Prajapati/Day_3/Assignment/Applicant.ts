import { IApplicant } from './interface';
let appliantArray: IApplicant[] = [];
class Applicant {
    constructor(public applicantID: number, public applicantName: string, public exepereince: number, public Field: string, public Specification: string, public ExpectedCtC: number, public Location: string, public vacanciesId: number) {
    }
    applicantDataStore() {

        let applicantJson: IApplicant = {
            applicantID: this.applicantID,
            applicantName: this.applicantName,
            exepereince: this.exepereince,
            Field: this.Field,
            Specification: this.Specification,
            ExpectedCtC: this.ExpectedCtC,
            Location: this.Location,
            vacanciesId: this.vacanciesId
        }
        appliantArray.push(applicantJson);
        console.log(appliantArray)

    }
}
export{
    Applicant,appliantArray
}