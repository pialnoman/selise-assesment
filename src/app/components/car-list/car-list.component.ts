import { Component, OnInit } from '@angular/core';
import { CarServiceService } from '../../services/car-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit{

  carList: any;

  constructor(
    private CarServiceService: CarServiceService,
    private _router: Router
  ) {

  }

  ngOnInit() {
    this.carList = this.CarServiceService.carEntry;
    console.log(this.carList);
  }

  editCarEntry(id: any){
    this._router.navigate(['car-edit/'], { queryParams: { id: id } });
  }

}
