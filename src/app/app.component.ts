import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import { AuthGuard } from './core/share/guards/auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'sistema';
  href: any;
mostrarMenu:boolean = false;

constructor(private authGuard:AuthGuard){

}
  ngAfterViewInit() {
    (($) => {
      "use strict";
      var path = window.location.href;
          $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(() => {
              if (this.href === path) {
                  $(this).addClass("active");
              }
          });

      // Toggle the side navigation
      $("#sidebarToggle").on("click", function(e) {
          e.preventDefault();
          $("body").toggleClass("sb-sidenav-toggled");
      });
  })(jQuery);
  }


  ngOnInit() {
    this.authGuard.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );

  }

}

