import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'one'
})
export class OnePipe implements PipeTransform {

  transform(value: string, name?: string): string {
    return "Hello "+name+", Welcome to "+value;
  }

}
