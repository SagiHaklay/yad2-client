import { Component, computed, inject, input, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-range-slider',
  imports: [ReactiveFormsModule],
  templateUrl: './range-slider.html',
  styleUrl: './range-slider.scss',
})
export class RangeSlider {
  private fb = inject(FormBuilder);
  
  minValue = input(0);
  maxValue = input(20000);
  rangeControls = this.fb.group({
    min: [this.minValue()],
    max: [this.maxValue()],
    minText: [''],
    maxText: ['']
  });
  rangeSize = computed(() => this.maxValue() - this.minValue());
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
    return (this.rangeMax?.value || 0) / this.rangeSize() * 100;
  }
  updateTextInputs() {
    if (this.rangeMin?.value === this.minValue()) {
      this.minText?.setValue('');
    } else {
      this.minText?.setValue(`${this.rangeMin?.value} ₪`);
    }
    if (this.rangeMax?.value === this.maxValue()) {
      this.maxText?.setValue('');
    } else {
      this.maxText?.setValue(`${this.rangeMax?.value} ₪`);
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
    const textMinVal = Number((this.minText?.value as string).replace(' ₪', ''));
    const textMaxVal = Number((this.maxText?.value as string).replace(' ₪', ''));
    if (this.minText?.value !== '') {
      this.minText?.setValue(textMinVal + ' ₪');
    }
    if (this.maxText?.value !== '') {
      this.maxText?.setValue(textMaxVal + ' ₪');
    }
    
    const actualMin = textMinVal < textMaxVal? textMinVal : textMaxVal;
    const actualMax = textMaxVal > textMinVal? textMaxVal : textMinVal;
    this.rangeMin?.setValue(actualMin > this.minValue()? actualMin : this.minValue());
    this.rangeMax?.setValue(actualMax < this.maxValue()? actualMax : this.maxValue());
  }
}
