import { IVacancie } from './interface';
import { VStatus } from './enum';
let vacancieArray: IVacancie[] = [];
class Vacancie {
    constructor(public vacanciesId: number, public positionName: string, public departmentName: string, public cTc: number, public vacancieStatus: VStatus) {
    }
    vacancieDataStore() {
        let vacancieJson = {
            vacanciesId: this.vacanciesId,
            positionName: this.positionName,
            departmentName: this.departmentName,
            cTc: this.cTc,
            vacancieStatus: this.vacancieStatus
        }
        vacancieArray.push(vacancieJson);
        console.log(vacancieArray)

    }
}


export {
    Vacancie, vacancieArray
}