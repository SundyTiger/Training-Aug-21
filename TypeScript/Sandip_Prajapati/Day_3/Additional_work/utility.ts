namespace Utility {
    export namespace Fees {
        export function calculateLateFees(dayslate: number):number {
            return dayslate * .25
        }
        export function maxBookAllow(age:number):number{
            if(age<12){
                return 3;
            }
            else{
                return 10;
            }
        }
        function privateFunc():void{
            console.log('This is Private....')

        }
    }
}