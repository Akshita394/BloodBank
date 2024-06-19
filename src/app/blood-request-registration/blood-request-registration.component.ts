import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WebApiService } from '../web-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-blood-request-registration',
  templateUrl: './blood-request-registration.component.html',
  styleUrls: ['./blood-request-registration.component.css']
}) 

export class BloodRequestRegistrationComponent implements OnInit {
  BloodRequsetForm!: FormGroup;
  form : any;
  selected =  true

  constructor(private web :WebApiService) { }

  ngOnInit(): void {
    
    this.BloodRequsetForm= new FormGroup({
      'Full_name'  : new FormControl(null, Validators.required ),
      'Father_Name' : new FormControl(null, Validators.required),
      Quantity : new FormControl(null, Validators.required),
      'Address' : new FormControl(null, Validators.required),
      'Email' : new FormControl(null, [Validators.required, Validators.email]),
      'phoneNumber' : new FormControl(null, Validators.required),
      'BloodGruop' : new FormControl(null, Validators.required)
    })
  }

// Blood_Request_Registration_Form_validations_() 
  get Full_name() {
    return this.BloodRequsetForm.get('Full_name');
  }
  get Father_name() {
    return this.BloodRequsetForm.get('Father_name');
  }
  get Address() {
    return this.BloodRequsetForm.get('Address');
  }
  get phoneNumber() {
    return this.BloodRequsetForm.get('phoneNumber');
  }
  get Email() {
    return this.BloodRequsetForm.get('Email');
  }
  get Quantity() {
    return this.BloodRequsetForm.get('Quantity');
  }
  get BloodGruop() {
    return this.BloodRequsetForm.get('BloodGruop');
  }
  get Password() {
    return this.BloodRequsetForm.get('Password');
  }
 

// Post_Blood_Request_()
  PostBloodReq(value:any){
    this.web.PostBloodReq(this.BloodRequsetForm.value).subscribe((response) =>{
      Swal.fire({
        title: 'Do you want to Submit Request?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Yes',
       
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Yes!', '', 'success')
          this.BloodRequsetForm.reset()
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
     
        
    });
    console.log(value);
   
  }
}
