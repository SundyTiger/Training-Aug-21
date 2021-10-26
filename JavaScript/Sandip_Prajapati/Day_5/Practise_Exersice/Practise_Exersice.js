//Using Function Expression, find the area of circle
const areaCir =  (input1)=>{
    let aC = Math.PI *(input1 ** 2);
    document.getElementById('circle').innerHTML='Area Of Circle is : ' + aC;
}
areaCir(50)

//Using Function Constructor, find the area of rectangle
const areaRect = (length,width)=>{
    let aRect = length * width;
    document.getElementById('rect').innerHTML='Area Of Rectangle is : ' + aRect;
}

areaRect(50,100);

//Explain usage of Function Hosing using example
myname('Sandip Prajapati')

function myname(str)
{
    console.log('My Name is '+str);
}
//Using Function call create employee object with field Name, Address and Designation and pass it to function.
let Empdetails = {
    Empdetail:function(){
        return(console.log('FieldName: '+ this.fieldName+'\n'
        +'Address: ' + this.addRess+'\n'
        +'Designation: '+ this.Designation))
    }
}
let Empdetail2 = {
    Empdetail:function(addRess,Designation){
        return(console.log('FieldName: '+ this.fieldName+'\n'
        +'Address: ' + addRess+'\n'
        +'Designation: '+Designation))
    }
}
let fulfillDetails ={
    fieldName:'Software Engineering',
    addRess:'Tokyo',
    Designation:'MERN Stack Developer'
}
let fulfillDetails2 ={
    fieldName:'Software Engineering'
}
Empdetails.Empdetail.call(fulfillDetails)
Empdetail2.Empdetail.call(fulfillDetails2,'Berlin','MEAN Stack Developer')

//Using Function Apply pass employee object to a function defined in the function.
Empdetails.Empdetail.apply(fulfillDetails);
Empdetail2.Empdetail.apply(fulfillDetails2,['Nairobi','Linux'])

//Explain Function closure with practical
let add = (function(){
    let counter =0;
    return function(){counter+=1;
    return counter};
})();

function myfunction(){
    document.getElementById('count').innerHTML = 'Counter is Increasig:\t' + add();
}