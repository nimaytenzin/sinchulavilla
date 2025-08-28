import { Routes } from '@angular/router';
import { PublicLayoutComponentComponent } from './layout/public-layout-component/public-layout-component.component';
import { HotelLandingComponent } from './hotel-landing/hotel-landing.component';

export const publicRoutes: Routes = [
	{
		path: '',
		component: PublicLayoutComponentComponent,
		children: [{ path: '', component: HotelLandingComponent }],
	},
];
