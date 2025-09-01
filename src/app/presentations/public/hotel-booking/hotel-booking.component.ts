import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface BookingData {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	nationality: string;
	citizenId: string;
	country: string;
	checkInDate: string;
	checkOutDate: string;
	nights: number;
	roomType: string;
	numberOfGuests: string;
	remarks: string;
	services: {
		airportTransfer: boolean;
		spaService: boolean;
		culturalTour: boolean;
		fineDining: boolean;
	};
}

@Component({
	selector: 'app-hotel-booking',
	templateUrl: './hotel-booking.component.html',
	styleUrls: ['./hotel-booking.component.css'],
	standalone: true,
	imports: [CommonModule, FormsModule],
})
export class HotelBookingComponent implements OnInit {
	bookingData: BookingData = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		nationality: '',
		citizenId: '',
		country: '',
		checkInDate: '',
		checkOutDate: '',
		nights: 0,
		roomType: '',
		numberOfGuests: '',
		remarks: '',
		services: {
			airportTransfer: false,
			spaService: false,
			culturalTour: false,
			fineDining: false,
		},
	};

	minDate: string = '';

	roomRates = {
		standard: 2799,
		cottage: 4500,
		suite: 5000,
	};

	serviceRates = {
		airportTransfer: 800,
		spaService: 1500,
		culturalTour: 2000,
		fineDining: 1200,
	};

	constructor() {}

	ngOnInit() {
		// Set minimum date to today
		const today = new Date();
		this.minDate = today.toISOString().split('T')[0];
	}

	onNationalityChange() {
		// Reset related fields when nationality changes
		this.bookingData.citizenId = '';
		this.bookingData.country = '';
	}

	calculateStayDuration() {
		if (this.bookingData.checkInDate && this.bookingData.checkOutDate) {
			const checkIn = new Date(this.bookingData.checkInDate);
			const checkOut = new Date(this.bookingData.checkOutDate);
			const timeDiff = checkOut.getTime() - checkIn.getTime();
			const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
			this.bookingData.nights = dayDiff > 0 ? dayDiff : 0;
			this.calculateTotal();
		}
	}

	calculateTotal() {
		// This method is called when room type or dates change
		// The actual calculation is done in the getter methods
	}

	getRoomTotal(): number {
		if (!this.bookingData.roomType || !this.bookingData.nights) return 0;
		const rate =
			this.roomRates[
				this.bookingData.roomType as keyof typeof this.roomRates
			] || 0;
		return rate * this.bookingData.nights;
	}

	getServicesTotal(): number {
		let total = 0;
		const services = this.bookingData.services;

		if (services.airportTransfer) total += this.serviceRates.airportTransfer;
		if (services.spaService) total += this.serviceRates.spaService;
		if (services.culturalTour) total += this.serviceRates.culturalTour;
		if (services.fineDining) total += this.serviceRates.fineDining;

		return total;
	}

	getTaxes(): number {
		const subtotal = this.getRoomTotal() + this.getServicesTotal();
		return Math.round(subtotal * 0.1); // 10% tax
	}

	getGrandTotal(): number {
		return this.getRoomTotal() + this.getServicesTotal() + this.getTaxes();
	}

	submitBooking() {
		// Validate required fields
		if (!this.validateForm()) {
			alert('Please fill in all required fields.');
			return;
		}

		// Here you would typically send the data to your backend service
		console.log('Booking Data:', this.bookingData);
		console.log('Total Amount:', this.getGrandTotal());

		// Show success message
		alert(
			`Thank you for your reservation! Your booking total is Nu. ${this.getGrandTotal()}. You will receive a confirmation email shortly.`
		);
	}

	private validateForm(): boolean {
		const data = this.bookingData;

		// Check required fields
		if (!data.firstName || !data.lastName || !data.email || !data.phone)
			return false;
		if (!data.nationality) return false;
		if (data.nationality === 'bhutanese' && !data.citizenId) return false;
		if (data.nationality === 'other' && !data.country) return false;
		if (!data.checkInDate || !data.checkOutDate) return false;
		if (!data.roomType || !data.numberOfGuests) return false;
		if (data.nights <= 0) return false;

		return true;
	}
}
