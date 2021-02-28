import { Component } from '@angular/core';
import { navItems } from '../../_nav';
import { TokenStorageService } from '../../_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  constructor(public router: Router, private tokenStorage: TokenStorageService) { }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  logout(): void {
    this.tokenStorage.signOut();
    this.router.navigate(['base']);
    //window.location.reload();
  }
}
