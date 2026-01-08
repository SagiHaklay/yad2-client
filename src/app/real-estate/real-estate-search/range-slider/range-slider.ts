import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-range-slider',
  imports: [ReactiveFormsModule],
  templateUrl: './range-slider.html',
  styleUrl: './range-slider.scss',
})
export class RangeSlider {
  private fb = inject(FormBuilder);
  
  minValue = this.fb.control(0);
  maxValue = this.fb.control(20000);
  rangeSize = 20000;
  get minPercent() {
    return `${(this.minValue.value || 0) / this.rangeSize * 100}%`;
  }
  get maxPercent() {
    return `${(this.maxValue.value || 0) / this.rangeSize * 100}%`;
  }
}
