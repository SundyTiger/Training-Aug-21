import { Rstatus, VStatus } from './enum'
interface IVacancie {
    vacanciesId: number;
    positionName: string;
    departmentName: string;
    cTc: number;
    vacancieStatus: VStatus;
}
interface IApplicant {
    applicantID: number;
    applicantName: string;
    exepereince: number;
    Field: string;
    Specification: string;
    ExpectedCtC: number;
    Location: string;
    vacanciesId: number;
}
interface IScheduling {
    InterviewId: number;
    vacanciesId: number;
    applicantID: number;
    date: string;
    Location: string;
}
interface IResult {
    InterviewId: number;
     applicantID: number;
      vacanciesId: number;
       ResultStatus: Rstatus
}
export {
    IVacancie,
    IApplicant,
    IScheduling,
    IResult
}