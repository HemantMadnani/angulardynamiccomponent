import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project1';

  ngOnInit(): void {
 
  $(document).ready(function(){
    $('button').click(function(){
alert("Jquery Test");
    });
  });

  }
}
