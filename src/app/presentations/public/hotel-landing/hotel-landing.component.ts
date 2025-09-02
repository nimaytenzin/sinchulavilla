import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../layout/navbar/navbar.component';

@Component({
	selector: 'app-hotel-landing',
	templateUrl: './hotel-landing.component.html',
	styleUrls: ['./hotel-landing.component.scss'],
	imports: [CommonModule], // Add CommonModule for *ngFor
})
export class HotelLandingComponent {
	sliderImages = [
		'images/sinchula_001.jpg',
		'images/sinchula_002.jpg',
		'images/sinchula_016.jpg',
		'images/sinchula_034.jpg',
	];
	currentSlide = 0;

	ngOnInit() {
		setInterval(() => {
			this.currentSlide = (this.currentSlide + 1) % this.sliderImages.length;
		}, 3500); // Change image every 3.5s
	}
}
