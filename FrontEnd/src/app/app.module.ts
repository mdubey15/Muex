import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule, MatCardModule, MatListModule, MatToolbarModule } from '@angular/material';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './Services/api.Service';
import { RouterModule } from '@angular/router';
import { ItemComponent } from './views/Music/Item.component';
import { NavComponent } from './nav.component';
import { MarketplaceComponent } from './views/Marketplace/Marketplace.component';
import { RegisterComponent } from './views/Account/Register.component';
import { CustomerComponent } from './views/Customer/Customer.component';
import { AuthService } from './Services/auth.service';
import { AuthInterceptor } from './Services/auth.interceptor';
import { LoginComponent } from './views/Account/Login.component';
import { ChatComponent } from './views/Chat/chat.component';


@NgModule({
  declarations: [
    AppComponent, ItemComponent, NavComponent, MarketplaceComponent, RegisterComponent, CustomerComponent, LoginComponent,ChatComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [ApiService,AuthService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
