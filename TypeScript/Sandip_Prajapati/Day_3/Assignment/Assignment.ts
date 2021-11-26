import { Vacancie} from './Vacancy';
import {VStatus,Rstatus} from './enum';
import {Applicant} from './Applicant';
import {SchedulingInterview} from './Scheduling';
import {InterviewResult} from './Result'
let vacant1:Vacancie = new Vacancie(1,'Developer','IT',300000,VStatus.open)
vacant1.vacancieDataStore()
let applicant:Applicant = new Applicant(1,'Sandip',2,'Engineering','Developer',500000000,'Himatnagar',1)
applicant.applicantDataStore()
let scheduled = new SchedulingInterview(1,1,1,'Dec 14 2020','Ahmedabad')
scheduled.siDataStore()
let result = new InterviewResult(1,1,1,Rstatus.Selected)