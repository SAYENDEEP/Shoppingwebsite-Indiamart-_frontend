import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class RestServicesService {
URL1="http://localhost:8001/UserDisplay";
  constructor(private http:HttpClient) { }
  
  getUsers():Observable<any>{
    var URL=this.URL1+'/getAllUser'
  return this.http.get(URL);
  }
  insertData(userObj:User):Observable<any>{
  
    let header= {'content-type':'application/json'};
    //  console.log(userObj);
   var URL=this.URL1+'/newRecord'
    return this.http.post(URL,userObj,{'headers':header,responseType:'text'});
   }
   deleteRecord(iRecord:any):Observable<any>{
    let deleteURL= this.URL1 +"/deleteUser/" +iRecord;
     console.log("URL:"+deleteURL);
    return this.http.delete(deleteURL,{responseType:'text'});
  }
  updateEmployee(UserObj:any):Observable<any>
  {
    console.log(UserObj);
    var URL=this.URL1+"/updateRecord";

    let header ={'content-type':'application/json'}
    return this.http.put(URL,UserObj,{'headers':header,'responseType':'text'});
  }
 
}
