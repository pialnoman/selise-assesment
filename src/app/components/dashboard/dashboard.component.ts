import { Component, OnInit } from '@angular/core';
import { CarServiceService } from '../../services/car-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  carList: any;
  TotalSlot = 100;
  microbus = 0;
  car = 0;
  truck = 0;


  constructor(
    private CarServiceService: CarServiceService
  ) {

  }

  ngOnInit() {
    this.carList = this.CarServiceService.carEntry;
    this.carList.forEach((element: { vehicleType: string; }) => {
      if(element.vehicleType == "Microbus") {
        this.microbus++;
      } else if (element.vehicleType == "Car") {
        this.car++;
      } else {
        this.truck++;
      }
    });
    console.log(this.carList);
  }

}
