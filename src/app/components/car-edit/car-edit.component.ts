import { Component, OnInit } from '@angular/core';
// import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { FormBuilder } from '@angular/forms';
import { CarServiceService } from '../../services/car-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent  implements OnInit {

  carEntryForm = this.fb.group({
    licenseNo: [''],
    vehicleType: [''],
    ownerName: [''],
    ownerPhone: [''],
    status: [''],
    ownerAddress: [''],
    carEntryDate: [''],
    carEntryHour: [''],
    carEntryAmPm: [''],
    carExitDate: [''],
    carExitHour: [''],
    carExitAmPm: [''],
    charge: ['']
  })
  vehicleType = ["Microbus", "Car", "truck"];
  statuses = ["in", "out"];
  hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  amPm = ["AM", "PM"];
  carList: any;
  counter = 0;

  constructor(
    private fb: FormBuilder, 
    private CarServiceService: CarServiceService,
    private _route: Router,
    private router: ActivatedRoute,
    // private store: AngularFirestore, 
    // private carEntry: AngularFirestoreDocument<any>
  ) {
    // carEntry = store.doc('car-entry');
  }

  ngOnInit() {
    this.router.queryParams.subscribe((params: any) => {
      if (params && params['id']) {
        this.carList = this.carList[params['id']]
        console.log(this.carList)
      }
    })
  }

  submit() {
    // const carEntryRef = this.store.doc('tutorial');
    this.counter++;
    console.log(this.carEntryForm.value);
    var payload = {
      "id": this.counter,
      "licenseNo": this.carEntryForm.value.licenseNo,
      "vehicleType": this.carEntryForm.value.vehicleType,
      "ownerName": this.carEntryForm.value.ownerName,
      "ownerPhone": this.carEntryForm.value.ownerPhone,
      "status": this.carEntryForm.value.status,
      "ownerAddress": this.carEntryForm.value.ownerAddress,
      "carEntryDate": this.carEntryForm.value.carEntryDate,
      "carEntryHour": this.carEntryForm.value.carEntryHour,
      "carEntryAmPm": this.carEntryForm.value.carEntryAmPm,
      "carExitDate": this.carEntryForm.value.carExitDate,
      "carExitHour": this.carEntryForm.value.carExitHour,
      "carExitAmPm": this.carEntryForm.value.carExitAmPm,
      "charge": this.carEntryForm.value.charge
    }
    // carEntryRef.set(payload);
    this.CarServiceService.carEntry.push(payload);
  }

}
