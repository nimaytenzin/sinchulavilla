import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
	selector: 'app-hotel-about',
	templateUrl: './hotel-about.component.html',
	styleUrls: ['./hotel-about.component.css'],
	standalone: true,
	imports: [CommonModule, RouterModule],
})
export class HotelAboutComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {}

	navigateToBooking() {
		this.router.navigate(['/booking']);
	}
}
