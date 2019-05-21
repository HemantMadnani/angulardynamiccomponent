import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as CanvasJS from '../../assets/js/canvasjs.min';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
// tslint:disable-next-line: only-arrow-functions
    $(document).ready(function() {
      const chart = new CanvasJS.Chart('chartContainer', {
        theme: 'light2',
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: 'Transaction Catalog'
        },
        data: [{
          type: 'pie',
          showInLegend: true,
          toolTipContent: '<b>{name}</b>: ${y} (#percent%)',
          indexLabel: '{name} - #percent%',
          dataPoints: [
            { y: 450, name: 'Capture' },
            { y: 120, name: 'Cancel' },
            { y: 300, name: 'Authorised' },
            { y: 800, name: 'SUCCESS' },
            { y: 150, name: 'Refund' },
            { y: 150, name: 'Failed'},
            { y: 250, name: 'Others' }
          ]
        }]
      });
      chart.render();
    });
  }

}
