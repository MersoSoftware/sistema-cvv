
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LayoutSidbarComponent } from './layout-sidbar/layout-sidbar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProdutosService } from './produtos.service';
import { ProdutosModule } from './produtos/produtos.module';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    LayoutSidbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ProdutosModule,
    
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
