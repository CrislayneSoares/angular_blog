import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuCategoryComponent } from './components/menu-category/menu-category.component';
import { BigCardImgComponent } from './components/big-card-img/big-card-img.component';
import { SmallCardImgComponent } from './components/small-card-img/small-card-img.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonImgComponent } from './components/button-img/button-img.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuCategoryComponent,
    BigCardImgComponent,
    SmallCardImgComponent,
    ButtonComponent,
    ButtonImgComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
