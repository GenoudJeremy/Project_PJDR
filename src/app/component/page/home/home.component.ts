import { Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor() {

  }
      @HostBinding('class.col-lg-12')
      @HostBinding('class.row')
      @HostBinding('class.p-0')
      @HostBinding('class.m-0')
  ngOnInit() {

  }

}
