import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit{

  carList: any;

  ngOnInit() {
    var carList = localStorage.getItem('carEntry');
    console.log(typeof carList)
    this.carList = JSON.stringify(carList);
  }

}
