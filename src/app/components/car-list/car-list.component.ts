import { Component, OnInit } from '@angular/core';
import { CarServiceService } from '../../services/car-service.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit{

  carList: any;

  constructor(
    private CarServiceService: CarServiceService
  ) {

  }

  ngOnInit() {
    this.carList = this.CarServiceService.carEntry;
    console.log(this.carList);
  }

}
