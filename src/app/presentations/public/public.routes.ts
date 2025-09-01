import { Routes } from '@angular/router';
import { PublicLayoutComponentComponent } from './layout/public-layout-component/public-layout-component.component';
import { HotelLandingComponent } from './hotel-landing/hotel-landing.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { HotelAboutComponent } from './hotel-about/hotel-about.component';
import { HotelContactPageComponent } from './hotel-contact-page/hotel-contact-page.component';

export const publicRoutes: Routes = [
	{
		path: '',
		component: PublicLayoutComponentComponent,
		children: [
			{ path: '', component: HotelLandingComponent },
			{
				path: 'book',
				component: HotelBookingComponent,
			},
			{
				path: 'about',
				component: HotelAboutComponent,
			},
			{
				path: 'contact',
				component: HotelContactPageComponent,
			},
		],
	},
];
