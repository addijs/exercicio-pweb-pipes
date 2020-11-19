import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone',
})
export class TelefonePipe implements PipeTransform {
  transform(value: string): string {
    if (value.length < 8) return value;

    if (value.length < 10) {
      const [first, second] = [
        value.slice(0, value.length - 4),
        value.slice(value.length - 4),
      ];

      return `${first}-${second}`;
    }

    if (value.length <= 12) {
      const [ddd, first, second] = [
        value.length === 11 ? value.slice(0, 2) : value.slice(0, 3),
        value.slice(3, value.length - 4),
        value.slice(value.length - 4),
      ];

      return `(${ddd})${first}-${second}`;
    }
  }
}
