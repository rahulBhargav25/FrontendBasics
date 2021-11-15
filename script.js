// var emp = new Object();
// emp.id=101;
// emp.name="rahul";
// emp.salary=40000;
// document.write(emp.id+" "+emp.name+" "+emp.salary);

// function emp(id,name,salary) {
//     this.id=id;
//     this.name=name;
//     this.salary=salary;
//     this.changeSalary=changeSalary;

//     function changeSalary(otherSalary) {
//         this.salary=otherSalary;
//     }
// }

// emp = new emp(102,"rahul",50000);
// document.write(emp.id+" "+emp.name+" "+emp.salary);
// emp.changeSalary(45000);
// document.write("<br>"+emp.id+" "+emp.name+" "+emp.salary);



// var emp=["sono","mono","kono"];
// for(i = 0; i < emp.length;i++) {
//     document.writeln(emp[i]+"\n");
// }

// var i;
// var emp = new Array();
// emp[0] = "Arun";
// emp[1] = "Varun";
// emp[2] = "rahl";


// for(i=0;i<emp.length;i++) {
//     document.write(emp[i]+" \n");
// }

//var emp = new Array(1,2,3);
// var oldEmp = new Array(4,5);
// var enw = emp.concat(oldEmp);
// for(i=0;i<enw.length;i++) {
//     document.write(enw[i]+" \n");
// }
// emp.copyWithin(2,1);
// for(i=0;i<emp.length;i++) {
//     document.write(emp[i]+" \n");
// }

// var itr = emp.entries();
// for(var e of itr) {
//     document.write(e + "</br>");
// }

// var marks= [50,40,50,30,60];
// function check(value) {
//     return value>=30;
// }
// document.write(marks.every(check));

// var arr=['a','b',['c','d']];
// var newArr = arr.flat();
// document.writeln(arr);
// document.writeln(newArr);

// var arr=[90,18,[89,56],[13,20,[67,17]]]; 
// document.writeln(arr);
// var newArr=arr.flat(2); 
// document.write("After flattening the array:  "+newArr);

// var sname = new String("Rahul is here is ");
// var lname = "c ex";
// document.write(sname.split(" "));

/**java script date object */
// var todat = new Date();
// document.writeln(todat);


// var date = new Date();
// var day = date.getDate();
// var month = date.getMonth()+1;
// var year = date.getUTCFullYear();
// document.write(date);
// document.write("<br>"+day);
// document.write("<br>"+month);
// document.write("<br>"+year);


/**
 * set digital clock
 */
// window.onload=function(){getTime();}
// function getTime(){
//     var today = new Date();
//     var h= today.getHours();
//     var m = today.getMinutes();
//     var s = today.getSeconds();

//     m=checkTime(m);
//     s=checkTime(s);
//     // document.write(h+":"+m+":"+s+"<br>");
//     document.getElementById('txt').innerHTML=h+":"+m+":"+s;  
//     setTimeout(function(){getTime()},1000);
// }
// function checkTime(i) {
//     if(i<10) {
//         i="0"+i;
//     }
//     return i;
// }


// document.write(Math.sqrt(17));
// document.write(Math.random());
// document.write(Math.pow(3,4));
// document.write(Math.floor(4.6));
// window.alert("hello javatpoint");  
// history.back();

    // var x = "Java Enabled: " + navigator.javaEnabled();
    // document.writeln(x);
  

// function printValue() {
//    var num = document.getElementById("number").value;
//     document.write(num*num*num);
// }

// function totalelements() {
//     var allgender=document.getElementsByName("gender");
//     alert("Total Genders: "+allgender.length);
// }

// function countpara() {
//     var totalpara = document.getElementsByTagName("p");
//     alert("Total p tags are : "+totalpara.length);
// }