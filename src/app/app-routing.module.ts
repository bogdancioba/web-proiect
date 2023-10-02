import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TradeComponent } from './trade/trade.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { HomeComponent } from './home/home.component';
import { LearnComponent } from './learn/learn.component';
import { CommunityForumComponent } from './community-forum/community-forum.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { StocksComponent } from './stocks/stocks.component';
import { SingularStockComponent } from './singular-stock/singular-stock.component';
import { SingularCryptoComponent } from './singular-crypto/singular-crypto.component';
import { CryptoComponent } from './crypto/crypto.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'trade', component: TradeComponent },
  { path: 'portfolio', component: PortofolioComponent },
  { path: 'home', component: HomeComponent },
  { path: 'learn', component: LearnComponent },
  { path: 'community-forum', component: CommunityForumComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'stocks', component: StocksComponent },
  { path: 'singular-stock', component: SingularStockComponent },
  { path: 'singular-crypto', component: SingularCryptoComponent },
  { path: 'crypto', component: CryptoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





