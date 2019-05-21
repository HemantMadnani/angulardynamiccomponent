import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IconsComponent } from './icons/icons.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
  entryComponents: [HomeComponent, ContactComponent, TransactionsComponent, AboutComponent],
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    IconsComponent,
    LayoutsComponent,
    MapsComponent,
    NotificationsComponent,
    TableListComponent,
    TypographyComponent,
    UpgradeComponent,
    UserProfileComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
