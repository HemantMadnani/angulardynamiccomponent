import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ComponentFactory } from '@angular/core';
import * as $ from 'jquery';
import { HomeComponent } from 'src/app/home/home.component';
import { ContactComponent } from 'src/app/contact/contact.component';
import { TransactionsComponent } from 'src/app/transactions/transactions.component';
import { AboutComponent } from 'src/app/about/about.component';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  appTitle = 'Apexx Portal';
  home = 'Home';
  transaction = 'Transactions';
  about = 'About';
  services = 'Services';
  contact = 'Contact Us';
  @ViewChild('loadComponents', {
    read: ViewContainerRef
  }) entry: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) { }

  loadComponent(componentName) {
    this.entry.clear();
    switch (componentName) {
      case 'home': {
          const factory = this.resolver.resolveComponentFactory(HomeComponent);
          const componentRef = this.entry.createComponent(factory);
          break;
        }
      case 'contact': {
        const factory = this.resolver.resolveComponentFactory(ContactComponent);
        const componentRef = this.entry.createComponent(factory);
        break;
      }
      case 'transactions': {
        const factory = this.resolver.resolveComponentFactory(TransactionsComponent);
        const componentRef = this.entry.createComponent(factory);
        break;
      }
      case 'about': {
        const factory = this.resolver.resolveComponentFactory(AboutComponent);
        const componentRef = this.entry.createComponent(factory);
        break;
      }
    }
  }


  ngOnInit() {
    // tslint:disable-next-line: only-arrow-functions
    $(document).ready(function () {
      // tslint:disable-next-line: only-arrow-functions
      $('#menu-toggle').click(function (e: { preventDefault: () => void; }) {
        // e.preventDefault();
        $('#wrapper').toggleClass('toggled');
        if ($('#toggleimg').attr('src') === '../../../assets/img/arrow.png') {
          $('#toggleimg').attr('src', '../../../assets/img/right.png');
        } else {
          $('#toggleimg').attr('src', '../../../assets/img/arrow.png');
        }
      });
    });
  }
}
