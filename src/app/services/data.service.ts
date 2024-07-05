import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  

  userData = [{
    data:
    [
      {id: 1, firstName: 'Igor', lastName: 'Popescu', username: 'ipopescu', email: 'igor.popescu@domain.com', salary: 6000},
      {id: 2, firstName: 'Ion', lastName: 'Vasile', username: 'ivasile', email: 'ion.vasile@domain.com', salary: 12000},
      {id: 3, firstName: 'Gigel', lastName: 'Lami', username: 'glami', email: 'gigel.lami@domain.com', salary: 7000},
      {id: 4, firstName: 'Dorel', lastName: 'Smith', username: 'dsmith', email: 'dorel.smith@domain.com', salary: 4500},
      {id: 5, firstName: 'Cardel', lastName: 'Wood', username: 'cwood', email: 'cardel.wood@domain.com', salary: 3950},
      {id: 6, firstName: 'Alex', lastName: 'Blue', username: 'ablue', email: 'alex.blue@domain.com', salary: 5850},
      {id: 7, firstName: 'Mihai', lastName: 'stone', username: 'mstone', email: 'mihai.stone@domain.com', salary: 6700}
    ],
    validation:{
      firstName : {label:'firstName', rules: { required : true}},
      lastName  : {label:'lastName', rules: { required : true}},
      username  : {label:'Username', rules: { required : true, minLength : 8, maxLength: 10}},
      email     : {label:'Email', rules: { required : true, pattern : /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/}} ,   
      salary : {label:'Salary', rules: { required : true, min : 3900, max : 16000 }},  
    }
    ,
   total_pages:7,
   total_items: 49,
   first: true,
   last:false

  },
  {
    data:
    [
      {id: 8, firstName: 'Igor2', lastName: 'Popescu2', username: 'ipopescu2', email: 'igor.popescu2@domain.com', salary: 4000},
      {id: 9, firstName: 'Ion2', lastName: 'Vasile2', username: 'ivasile2', email: 'ion.vasile2@domain.com', salary: 8000},
      {id: 10, firstName: 'Gigel2', lastName: 'Lami2', username: 'glami2', email: 'gigel.lami2@domain.com', salary: 7500},
      {id: 11, firstName: 'Dorel2', lastName: 'Smith2', username: 'dsmith2', email: 'dorel.smith2@domain.com', salary: 3970},
      {id: 12, firstName: 'Cardel2', lastName: 'Wood2', username: 'cwood2', email: 'cardel.wood2@domain.com', salary: 6950},
      {id: 13, firstName: 'Alex2', lastName: 'Blue2', username: 'ablue2', email: 'alex.blue2@domain.com', salary: 5980},
      {id: 14, firstName: 'Mihai2', lastName: 'stone2', username: 'mstone2', email: 'mihai.stone2@domain.com', salary: 7900}
    ],
    validation:{
      firstName : {label:'firstName', rules: { required : true}},
      lastName  : {label:'lastName', rules: { required : true}},
      username  : {label:'Username', rules: { required : true, minLength : 8, maxLength: 10}},
      email     : {label:'Email', rules: { required : true, email : true}} ,   
      salary : {label:'Salary', rules: { required : true, min : 3900, max : 16000 }},  
    }
    ,
   total_pages:7,
   total_items: 49,
   first: false,
   last:false

   },
   {
    data:
    [
      {id: 15, firstName: 'Igor3', lastName: 'Popescu', username: 'ipopescu', email: 'igor.popescu@domain.com', salary: 6000},
      {id: 16, firstName: 'Ion3', lastName: 'Vasile', username: 'ivasile', email: 'ion.vasile@domain.com', salary: 12000},
      {id: 17, firstName: 'Gigel3', lastName: 'Lami', username: 'glami', email: 'gigel.lami@domain.com', salary: 7000},
      {id: 18, firstName: 'Dorel3', lastName: 'Smith', username: 'dsmith', email: 'dorel.smith@domain.com', salary: 4500},
      {id: 19, firstName: 'Cardel3', lastName: 'Wood', username: 'cwood', email: 'cardel.wood@domain.com', salary: 3950},
      {id: 20, firstName: 'Alex3', lastName: 'Blue', username: 'ablue', email: 'alex.blue@domain.com', salary: 5850},
      {id: 21, firstName: 'Mihai3', lastName: 'stone', username: 'mstone', email: 'mihai.stone@domain.com', salary: 6700}
    ],
    validation:{
      firstName : {label:'firstName', rules: { required : true}},
      lastName  : {label:'lastName', rules: { required : true}},
      username  : {label:'Username', rules: { required : true, minLength : 8, maxLength: 10}},
      email     : {label:'Email', rules: { required : true, email : true}} ,   
      salary : {label:'Salary', rules: { required : true, min : 3900, max : 16000 }},  
    }
    ,
   total_pages:7,
   total_items: 49,
   first: false,
   last:false

  },
  {
    data:
    [
      {id: 22, firstName: 'Igor4', lastName: 'Popescu', username: 'ipopescu', email: 'igor.popescu@domain.com', salary: 6000},
      {id: 23, firstName: 'Ion4', lastName: 'Vasile', username: 'ivasile', email: 'ion.vasile@domain.com', salary: 12000},
      {id: 24, firstName: 'Gigel4', lastName: 'Lami', username: 'glami', email: 'gigel.lami@domain.com', salary: 7000},
      {id: 25, firstName: 'Dorel4', lastName: 'Smith', username: 'dsmith', email: 'dorel.smith@domain.com', salary: 4500},
      {id: 26, firstName: 'Cardel4', lastName: 'Wood', username: 'cwood', email: 'cardel.wood@domain.com', salary: 3950},
      {id: 27, firstName: 'Alex4', lastName: 'Blue', username: 'ablue', email: 'alex.blue@domain.com', salary: 5850},
      {id: 28, firstName: 'Mihai4', lastName: 'stone', username: 'mstone', email: 'mihai.stone@domain.com', salary: 6700}
    ],
    validation:{
      firstName : {label:'firstName5', rules: { required : true}},
      lastName  : {label:'lastName5', rules: { required : true}},
      username  : {label:'Username5', rules: { required : true, minLength : 8, maxLength: 10}},
      email     : {label:'Email5', rules: { required : true, email : true}} ,   
      salary : {label:'Salary5', rules: { required : true, min : 3900, max : 16000 }},  
    }
    ,
   total_pages:7,
   total_items: 49,
   first: false,
   last:false

  },
  {
    data:
    [
      {id: 29, firstName: 'Igor6', lastName: 'Popescu', username: 'ipopescu', email: 'igor.popescu@domain.com', salary: 6000},
      {id: 30, firstName: 'Ion6', lastName: 'Vasile', username: 'ivasile', email: 'ion.vasile@domain.com', salary: 12000},
      {id: 31, firstName: 'Gigel6', lastName: 'Lami', username: 'glami', email: 'gigel.lami@domain.com', salary: 7000},
      {id: 32, firstName: 'Dorel6', lastName: 'Smith', username: 'dsmith', email: 'dorel.smith@domain.com', salary: 4500},
      {id: 33, firstName: 'Cardel6', lastName: 'Wood', username: 'cwood', email: 'cardel.wood@domain.com', salary: 3950},
      {id: 34, firstName: 'Alex6', lastName: 'Blue', username: 'ablue', email: 'alex.blue@domain.com', salary: 5850},
      {id: 35, firstName: 'Mihai6', lastName: 'stone', username: 'mstone', email: 'mihai.stone@domain.com', salary: 6700}
    ],
    validation:{
      firstName : {label:'firstName', rules: { required : true}},
      lastName  : {label:'lastName', rules: { required : true}},
      username  : {label:'Username', rules: { required : true, minLength : 8, maxLength: 10}},
      email     : {label:'Email', rules: { required : true, email : true}} ,   
      salary : {label:'Salary', rules: { required : true, min : 3900, max : 16000 }},  
    }
    ,
   total_pages:7,
   total_items: 49,
   first: false,
   last:false

  },
  {
    data:
    [
      {id: 36, firstName: 'Igor7', lastName: 'Popescu', username: 'ipopescu', email: 'igor.popescu@domain.com', salary: 6000},
      {id: 37, firstName: 'Ion7', lastName: 'Vasile', username: 'ivasile', email: 'ion.vasile@domain.com', salary: 12000},
      {id: 38, firstName: 'Gigel7', lastName: 'Lami', username: 'glami', email: 'gigel.lami@domain.com', salary: 7000},
      {id: 39, firstName: 'Dorel7', lastName: 'Smith', username: 'dsmith', email: 'dorel.smith@domain.com', salary: 4500},
      {id: 40, firstName: 'Cardel7', lastName: 'Wood', username: 'cwood', email: 'cardel.wood@domain.com', salary: 3950},
      {id: 41, firstName: 'Alex7', lastName: 'Blue', username: 'ablue', email: 'alex.blue@domain.com', salary: 5850},
      {id: 42, firstName: 'Mihai7', lastName: 'stone', username: 'mstone', email: 'mihai.stone@domain.com', salary: 6700}
    ],
    validation:{
      firstName : {label:'firstName', rules: { required : true}},
      lastName  : {label:'lastName', rules: { required : true}},
      username  : {label:'Username', rules: { required : true, minLength : 8, maxLength: 10}},
      email     : {label:'Email', rules: { required : true, email : true}} ,   
      salary : {label:'Salary', rules: { required : true, min : 3900, max : 16000 }},  
    }
    ,
   total_pages:7,
   total_items: 49,
   first: false,
   last:false

  },
  {
    data:
    [
      {id: 43, firstName: 'Igor8', lastName: 'Popescu', username: 'ipopescu', email: 'igor.popescu@domain.com', salary: 6000},
      {id: 44, firstName: 'Ion8', lastName: 'Vasile', username: 'ivasile', email: 'ion.vasile@domain.com', salary: 12000},
      {id: 45, firstName: 'Gigel8', lastName: 'Lami', username: 'glami', email: 'gigel.lami@domain.com', salary: 7000},
      {id: 46, firstName: 'Dorel8', lastName: 'Smith', username: 'dsmith', email: 'dorel.smith@domain.com', salary: 4500},
      {id: 47, firstName: 'Cardel8', lastName: 'Wood', username: 'cwood', email: 'cardel.wood@domain.com', salary: 3950},
      {id: 48, firstName: 'Alex8', lastName: 'Blue', username: 'ablue', email: 'alex.blue@domain.com', salary: 5850},
      {id: 49, firstName: 'Mihai8', lastName: 'stone', username: 'mstone', email: 'mihai.stone@domain.com', salary: 6700}
    ],
    validation:{
      firstName : {label:'firstName', rules: { required : true}},
      lastName  : {label:'lastName', rules: { required : true}},
      username  : {label:'Username', rules: { required : true, minLength : 8, maxLength: 10}},
      email     : {label:'Email', rules: { required : true, email : true}} ,   
      salary : {label:'Salary', rules: { required : true, min : 3900, max : 16000 }},  
    }
    ,
   total_pages:7,
   total_items: 49,
   first: false,
   last:true

  }]

  fetchUserData(pageNumber : number) : Observable<any>{
    return of(this.userData[pageNumber]);
  }
}
