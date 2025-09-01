import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ContactForm {
	name: string;
	email: string;
	phone: string;
	inquiryType: string;
	message: string;
}

@Component({
	selector: 'app-hotel-contact-page',
	templateUrl: './hotel-contact-page.component.html',
	styleUrls: ['./hotel-contact-page.component.css'],
	standalone: true,
	imports: [CommonModule, FormsModule],
})
export class HotelContactPageComponent implements OnInit {
	contactForm: ContactForm = {
		name: '',
		email: '',
		phone: '',
		inquiryType: '',
		message: '',
	};

	constructor() {}

	ngOnInit() {}

	submitContactForm() {
		// Validate required fields
		if (
			!this.contactForm.name ||
			!this.contactForm.email ||
			!this.contactForm.message
		) {
			alert('Please fill in all required fields (Name, Email, and Message).');
			return;
		}

		// Validate email format
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(this.contactForm.email)) {
			alert('Please enter a valid email address.');
			return;
		}

		// Here you would typically send the data to your backend service
		console.log('Contact Form Data:', this.contactForm);

		// Show success message
		alert(
			`Thank you for your message, ${this.contactForm.name}! We will get back to you within 24 hours.`
		);

		// Reset form
		this.clearForm();
	}

	clearForm() {
		this.contactForm = {
			name: '',
			email: '',
			phone: '',
			inquiryType: '',
			message: '',
		};
	}
}
