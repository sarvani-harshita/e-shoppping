import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filter: string, name: string): any {
    if(value.length === 0 ||  filter === ''){
  return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[name] === filter) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
