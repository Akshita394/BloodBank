import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WebApiService } from '../web-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-donorlog',
  templateUrl: './donorlog.component.html',
  styleUrls: ['./donorlog.component.css']
})

export class DonorlogComponent implements OnInit {

  DonorLoginForm!: FormGroup;

  donorlist = false;
  dashboard = false;
  Appointmentform = false;

  Array1: any = [];
  ae: any;

  AppointmentForm: FormGroup = new FormGroup({
    'Email': new FormControl(null, [Validators.required, Validators.email]),
  })



  constructor(private web: WebApiService) { }

  ngOnInit(): void {
    this.DonorLoginForm = new FormGroup({

      'Email': new FormControl(null, [Validators.required, Validators.email]),
      'Password': new FormControl(null, Validators.required)
    })


  }
  //to_show_Donor's_profile_()
  profile() {
    this.donorlist = true
    this.Appointmentform = false
  }
  //to_Appointment()
  Appointment() {
    this.Appointmentform = true
    this.donorlist = false
  }


  // dono login 
  getDonerLogIn() {

    if (this.DonorLoginForm.valid) {
      this.web.donerLogIn(this.DonorLoginForm.value).subscribe(result => {
        console.log(result);

        this.Array1 = result;
        this.AppointmentForm.patchValue({
          Email: this.Array1[0].Email,
        });
        console.log(this.Array1[0].Email, "eeee");

        if (result != null) {
      
          console.log(result, "2nd result");
          this.dashboard = true

        }
      })
    }
  }


  // To_Book_Appointment()
  BookAppointment() {
    if (this.AppointmentForm.valid) {
      this.web.BookAppointment(this.AppointmentForm.value).subscribe(result1 => {
        Swal.fire("Your Appointment Booked Successfully ", "", 'success')
        console.log(result1);

        if (result1 != null) {
          console.log(result1, "2nd result");
        }
      })
    }
  }


}
