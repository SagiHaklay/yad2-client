import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-range-slider',
  imports: [ReactiveFormsModule],
  templateUrl: './range-slider.html',
  styleUrl: './range-slider.scss',
})
export class RangeSlider {
  private fb = inject(FormBuilder);
  isCurrency = input(false);
  isDropdown = input(false);
  options = input<string[]>([]);
  minNumberValue = input(0);
  maxNumberValue = input(0);
  minValue = computed(() => this.isDropdown()? 0 : this.minNumberValue());
  maxValue = computed(() => this.isDropdown()? this.options().length - 1 : this.maxNumberValue());
  step = input(1);
  rangeControls = this.fb.group({
    min: [this.minValue()],
    max: [this.maxValue()],
    minText: [''],
    maxText: ['']
  });
  rangeSize = computed(() => this.maxValue() - this.minValue());
  constructor() {
    effect(() => {
      this.rangeMin?.setValue(this.minValue());
      this.rangeMax?.setValue(this.maxValue());
    });
  }
  get rangeMin() {
    return this.rangeControls.get('min');
  }
  get rangeMax() {
    return this.rangeControls.get('max');
  }
  get minText() {
    return this.rangeControls.get('minText');
  }
  get maxText() {
    return this.rangeControls.get('maxText');
  }
  get minPercent() {
    return (this.rangeMin?.value || 0) / this.rangeSize() * 100;
  }
  get maxPercent() {
    return (this.rangeMax?.value || this.maxValue()) / this.rangeSize() * 100;
  }
  updateTextInputs() {
    if (this.rangeMin?.value === this.minValue()) {
      this.minText?.setValue('');
    } else {
      this.minText?.setValue(`${this.rangeMin?.value}${this.isCurrency()? ' ₪': ''}`);
    }
    if (this.rangeMax?.value === this.maxValue()) {
      this.maxText?.setValue('');
    } else {
      this.maxText?.setValue(`${this.rangeMax?.value}${this.isCurrency()? ' ₪': ''}`);
    }
  }
  handleMinSliderChange() {
    const rangeMinVal = this.rangeMin?.value || 0;
    const rangeMaxVal = this.rangeMax?.value || 0;
    if (rangeMinVal > rangeMaxVal) {
      this.rangeMin?.setValue(rangeMaxVal);
    }
    if (rangeMinVal < this.minValue()) {
      this.rangeMin?.setValue(this.minValue());
    }
    this.updateTextInputs();
  }
  handleMaxSliderChange() {
    const rangeMinVal = this.rangeMin?.value || 0;
    const rangeMaxVal = this.rangeMax?.value || 0;
    if (rangeMinVal > rangeMaxVal) {
      this.rangeMax?.setValue(rangeMinVal);
    }
    if (rangeMaxVal > this.maxValue()) {
      this.rangeMax?.setValue(this.maxValue());
    }
    this.updateTextInputs();
  }
  handleTextInput() {
    const textMinVal = Number((this.minText?.value as string).replace(' ', '').replace('₪', ''));
    const textMaxVal = Number((this.maxText?.value as string).replace(' ', '').replace('₪', ''));
    if (this.isCurrency()) {
      if (this.minText?.value !== '') {
        this.minText?.setValue(textMinVal + ' ₪');
      }
      if (this.maxText?.value !== '') {
        this.maxText?.setValue(textMaxVal + ' ₪');
      }
    }
    
    
    const actualMin = textMinVal < textMaxVal? textMinVal : textMaxVal;
    const actualMax = textMaxVal > textMinVal? textMaxVal : textMinVal;
    this.rangeMin?.setValue(actualMin > this.minValue()? actualMin : this.minValue());
    this.rangeMax?.setValue(actualMax < this.maxValue()? actualMax : this.maxValue());
  }
}
