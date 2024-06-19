import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { WebApiService } from '../web-api.service';
import { ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
// import Validation from '../Validation';

@Component({
  selector: 'app-dooner-registratio',
  templateUrl: './dooner-registratio.component.html',
  styleUrls: ['./dooner-registratio.component.css']
})
export class DoonerRegistratioComponent implements OnInit {
  DoonerRegistration!: FormGroup;
  selected =  true;

  constructor(private web: WebApiService, private fb: FormBuilder) { }
  form: any
  ngOnInit(): void {
    this.DoonerRegistration = this.fb.group({
      'Full_name': new FormControl('',[ Validators.required,Validators.minLength(4),
        Validators.maxLength(20)]),
      'Father_name': new FormControl('',[ Validators.required,Validators.minLength(4),
        Validators.maxLength(20)]),
      'Address': new FormControl('',[ Validators.required,Validators.minLength(4),
        Validators.maxLength(20)]),
      'Mobile': new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'Email': new FormControl('',[ Validators.required,Validators.email]),
      'Date': new FormControl('', Validators.required),
      'BloodGruop': new FormControl('', Validators.required),
      'Password': new FormControl('',[ Validators.required,Validators.minLength(5),
        Validators.maxLength(20)]),


    })

  }

// ---validations
  get Full_name() {
    return this.DoonerRegistration.get('Full_name');
  }
  get Father_name() {
    return this.DoonerRegistration.get('Father_name');
  }
  get Address() {
    return this.DoonerRegistration.get('Address');
  }
  get Mobile() {
    return this.DoonerRegistration.get('Mobile');
  }
  get Email() {
    return this.DoonerRegistration.get('Email');
  }
  get Date() {
    return this.DoonerRegistration.get('Date');
  }
  get BloodGruop() {
    return this.DoonerRegistration.get('BloodGruop');
  }
  get Password() {
    return this.DoonerRegistration.get('Password');
  }
 








// DoonerRegistrationForm submitbutton
  PostDoonerData() {
  

    this.web.PostDoonerData(this.DoonerRegistration.value).subscribe((response) => {
    

      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
          this.DoonerRegistration.reset();
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })

    });


  }
}
