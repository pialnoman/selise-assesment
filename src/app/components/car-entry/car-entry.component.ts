import { Component, OnInit } from '@angular/core';
// import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-car-entry',
  templateUrl: './car-entry.component.html',
  styleUrls: ['./car-entry.component.css']
})
export class CarEntryComponent implements OnInit {

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
  vehicleType = ["Microbus", "Car", "truck", "Pickup"];
  statuses = ["in", "out"];
  hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  amPm = ["AM", "PM"];
  carList: any;

  constructor(
    private fb: FormBuilder, 
    // private store: AngularFirestore, 
    // private carEntry: AngularFirestoreDocument<any>
  ) {
    // carEntry = store.doc('car-entry');
  }

  ngOnInit() {
    this.carList = localStorage.getItem('carEntry');
  }

  submit() {
    // const carEntryRef = this.store.doc('tutorial');
    console.log(this.carEntryForm.value);
    var payload = {
      "licenseNo": this.carEntryForm.value.licenseNo,
      "vehicleType": this.carEntryForm.value.vehicleType,
      "ownerName": this.carEntryForm.value.ownerName,
      "ownerPhone": this.carEntryForm.value.ownerPhone,
      "status": this.carEntryForm.value.status,
      "ownerAddress": this.carEntryForm.value.ownerAddress,
      "carEntryDate": this.carEntryForm.value.carEntryDate,
      "carEntryHour": this.carEntryForm.value.carEntryHour,
      "carEntryAmPm": this.carEntryForm.value.carEntryAmPm,
      "carExitDateTime": this.carEntryForm.value.carExitDate,
      "carExitHour": this.carEntryForm.value.carExitHour,
      "carExitAmPm": this.carEntryForm.value.carExitAmPm,
      "charge": this.carEntryForm.value.charge
    }
    // carEntryRef.set(payload);
    localStorage.setItem('carEntry',JSON.stringify(payload))
    console.log(localStorage.getItem('carEntry'))
  }

}
