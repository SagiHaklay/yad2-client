import { Component, computed, output, signal } from '@angular/core';

@Component({
  selector: 'app-room-count-select',
  imports: [],
  templateUrl: './room-count-select.html',
  styleUrl: './room-count-select.scss',
})
export class RoomCountSelect {
  readonly options = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6];
  readonly maxValue = this.options[this.options.length-1];
  firstSelection = signal<number | null>(null);
  secondSelection = signal<number | null>(null);
  select = output<number[]>();
  optionPartitions = computed(() => {
    if (this.firstSelection() === null) {
      return [this.options];
    }
    const first = this.options.indexOf(this.firstSelection() as number);
    if (this.secondSelection() === null) {
      return [this.options.slice(0, first), this.options.slice(first, first+1), this.options.slice(first+1)];
    }
    const second = this.options.indexOf(this.secondSelection() as number);
    const [start, end] = first < second? [first, second+1] : [second, first+1];
    return [this.options.slice(0, start), this.options.slice(start, end), this.options.slice(end)];
  });
  toggleOption(value: number) {
    if (this.firstSelection() === value || this.secondSelection() === value) {
      this.firstSelection.set(null);
      this.secondSelection.set(null);
      this.select.emit([]);
    } else if (this.firstSelection() === null || this.secondSelection() !== null) {
      this.firstSelection.set(value);
      this.secondSelection.set(null);
      
      this.select.emit([value]);
    } else {
      this.secondSelection.set(value);
      const first = this.firstSelection() as number;
      const range = first < value? [first, value] : [value, first];
      this.select.emit(range);
    } 
  }
}
