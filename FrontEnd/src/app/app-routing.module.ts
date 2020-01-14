import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './views/Music/Item.component';
import { NavComponent } from './nav.component';
import { MarketplaceComponent } from './views/Marketplace/Marketplace.component';
import { RegisterComponent } from './views/Account/Register.component';
import { CustomerComponent } from './views/Customer/Customer.component';
import { LoginComponent } from './views/Account/Login.component';
import { ChatComponent } from './views/Chat/chat.component';


const routes: Routes = [
  { path: 'MusicItem', component: ItemComponent },
  { path: 'Marketplace', component: MarketplaceComponent },
  { path: 'Chat', component: ChatComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Customer', component: CustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
