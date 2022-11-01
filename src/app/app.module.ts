
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';

import { HomeComponent } from './componentes/home/home.component';


import { ProdutosService } from './core/share/services/produtos.service';
import { ProdutosModule } from './produtos/produtos.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ProdutosModule,
    ReactiveFormsModule,
    FormsModule

  ],
  exports:[
    NavBarComponent,
    SidebarComponent
  ],
  providers: [
    ProdutosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
