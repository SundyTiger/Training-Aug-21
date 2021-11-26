import { IScheduling } from './interface';
let siArray: IScheduling[] = [];
class SchedulingInterview {
    constructor(public InterviewId: number, public vacanciesId: number, public applicantID: number, public date: string, public Location: string) {
    }
    siDataStore() {

        let siJson: IScheduling = {
            InterviewId: this.InterviewId,
            vacanciesId: this.vacanciesId,
            applicantID: this.applicantID,
            date: this.date,
            Location: this.Location
        }
        siArray.push(siJson);
        console.log(siArray)
    }
}
export {
    SchedulingInterview, siArray
}
