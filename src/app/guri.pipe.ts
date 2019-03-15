import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'guri'
})
export class GuriPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    //return 2;
    //let c=args[0]
  //  if(value==("b"))//&&(args[0]=("c")))string.localeCompare(compareString)
    if(!value.compareString("b"))
      return 3;
      else 
      return 2;
  }

}
