import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe',
})
export class FilterpipePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    console.log(args);
    console.log(value);
    return value.filter((x) => x.color === args);
  }
}
