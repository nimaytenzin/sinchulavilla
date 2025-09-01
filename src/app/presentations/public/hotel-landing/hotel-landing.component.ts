import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
		'images/sinchula_003.jpg',
		'images/sinchula_004.jpg',
		'images/sinchula_005.jpg',
		'	images/sinchula_006.jpg',
	];
	currentSlide = 0;

	ngOnInit() {
		setInterval(() => {
			this.currentSlide = (this.currentSlide + 1) % this.sliderImages.length;
		}, 3500); // Change image every 3.5s
	}
}
