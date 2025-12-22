import { Component, signal } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  get version() {
    return environment.version;
  }
  isRealEstateHidden = signal(true);
  isVehicleHidden = signal(true);
  isSecondHandHidden = signal(true);
  isJobSearchHidden = signal(true);
  isMoreHidden = signal(true);

  toggleRealEstate() {
    this.isRealEstateHidden.update(hidden => !hidden);
  }
  toggleVehicle() {
    this.isVehicleHidden.update(hidden => !hidden);
  }
  toggleSecondHand() {
    this.isSecondHandHidden.update(hidden => !hidden);
  }
  toggleJobSearch() {
    this.isJobSearchHidden.update(hidden => !hidden);
  }
  toggleMore() {
    this.isMoreHidden.update(hidden => !hidden);
  }
}
