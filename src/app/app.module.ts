import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TradeComponent } from './trade/trade.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DisclamerComponent } from './disclamer/disclamer.component';
import { LearnComponent } from './learn/learn.component';
import { CommunityForumComponent } from './community-forum/community-forum.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { StocksComponent } from './stocks/stocks.component';
import { SingularStockComponent } from './singular-stock/singular-stock.component';
import { CryptoComponent } from './crypto/crypto.component';
import { SingularCryptoComponent } from './singular-crypto/singular-crypto.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    TradeComponent,
    PortofolioComponent,
    NavbarComponent,
    HomeComponent,
    DisclamerComponent,
    LearnComponent,
    CommunityForumComponent,
    ContactUsComponent,
    StocksComponent,
    SingularStockComponent,
    CryptoComponent,
    SingularCryptoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
