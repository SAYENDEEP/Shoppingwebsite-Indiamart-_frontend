import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTable'
})
export class FilterTablePipe implements PipeTransform {

  transform(value: any, name:any): any {
    if(name===''){
      return value;
    }
    return value.filter((value1:any)=>
    ((String(value1.id).startsWith(name))||
      (value1.firstname).startsWith(name))
   
    );
  }

}
