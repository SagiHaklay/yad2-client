import { Component } from '@angular/core';
import { RealEstateSearch } from '../real-estate-search/real-estate-search';
import { RealEstateList } from '../real-estate-list/real-estate-list';
import { NavbarContainer } from "../../navbar/navbar-container/navbar-container";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-real-estate-page',
  imports: [NavbarContainer, RouterOutlet],
  templateUrl: './real-estate-page.html',
  styleUrl: './real-estate-page.scss',
})
export class RealEstatePage {

}
