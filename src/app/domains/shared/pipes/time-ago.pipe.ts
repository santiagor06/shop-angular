import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';

@Pipe({
  name: 'timeAgo',
  standalone: true,
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: string): string {
    let today = new Date();
    let date = new Date(value);
    return formatDistance(today, date);
  }
}
