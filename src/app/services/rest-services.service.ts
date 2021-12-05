import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class RestServicesService {
URL="http://localhost:3000/users";
  constructor(private http:HttpClient) { }
  
  getUsers():Observable<any>{
  return this.http.get<User[]>(this.URL);
  }
  getProductsOnId(id:any):Observable<any>{
    let filterById=this.URL+"?id="+id;
    return this.http.get(filterById)
  }
  // getProductsOnName(name:string):Observable<any>{
  //  let filterByName=this.URL+"?firstname="+name;
  //  console.log(filterByName);
  //  return this.http.get(filterByName);
  // }
}
