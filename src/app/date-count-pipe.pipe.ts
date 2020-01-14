import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCountPipe'
})
export class DateCountPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
