import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// ...existing code...
import { Router } from '@angular/router';
import { APPNAME } from '../../../../core/constants/constants';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
	standalone: true,
	imports: [CommonModule],
})
export class NavbarComponent {
	appName = APPNAME;
	menuOpen = false;
	sidebarOpen = false;

	constructor(private router: Router) {}

	goToLoginPage() {
		this.router.navigate(['auth/login']);
	}

	toggleMenu() {
		this.menuOpen = !this.menuOpen;
	}

	openSidebar() {
		this.sidebarOpen = true;
	}

	closeSidebar() {
		this.sidebarOpen = false;
	}
}
