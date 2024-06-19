import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WebApiService } from '../web-api.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  AdminLOginForm!: FormGroup;

  Array1: any = [];
  ReqArray: any = [];
  HistoryArray: any = [];
  BloodStockArray: any = [];
  dashboard = false;
  donerList = false;
  BloodRequestList = false;
  HistoryList = false;
  chart = false;
  BloodStocklist = false;
  Lable: any;
  BloodUnit: any;


  constructor(private web: WebApiService) { }
  form: any
  ngOnInit(): void {
    
    this.AdminLOginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required,)
    })


  }

  // --Admin-login()
  login(value: any) {
    console.log(value);
    if (value.email == 'admin@gmail.com' && value.password == 1) {
      console.log(true)
      this.dashboard = true


    } else {
      console.log(false)
    }
  }

  // --show_BookAppointment_list()
  GetDoonerData() {

  
    this.web.GetAppointmentdata().subscribe((response) => {
      if (response) {
        this.donerList = true
        this.BloodRequestList = false
        this.HistoryList = false
        this.chart = false
        this.BloodStocklist = false

      }
      console.log(response);
      this.Array1 = response;
    });
  }


  // show_blood_requset_list()

  GetBloodReqData() {
    this.web.GetBloodReqData().subscribe((res) => {
      if (res) {
        this.BloodRequestList = true
        this.donerList = false
        this.HistoryList = false
        this.chart = false
        this.BloodStocklist = false

      }
      console.log(res);
      this.ReqArray = res;
    });

  }

  // ---Accept_blood_request()

  postRequestHandler(list: any) {

    this.web.RequestresponseHandler(list).subscribe((response) => {
      this.GetBloodReqData();
    });
    console.log(list);

  }
  // ---Accept_DonorAppointmentHandler_request()
  DonorAppointmentHandler(list: any) {

    this.web.DonorAppointmentHandler(list).subscribe((response) => {
      this.GetDoonerData();
    });
    console.log(list);
  }

  //---DenyBloodRequest()
  DenyBloodRequest(id: any) {
    this.web.DenyBloodRequest(id).subscribe((res) => {

      this.GetBloodReqData();
    })

  }
  // ---DenyAppointment()
  DenyAppointment(id: any) {
  
    this.web.DenyAppointment(id).subscribe((res) => {
      this.GetDoonerData();
    })

  }

  // --show_history_list

  GetHistorylist() {
    this.web.GetHistorylist().subscribe((response) => {
      if (response) {
        this.HistoryList = true
        this.donerList = false
        this.BloodRequestList = false
        this.chart = false
        this.BloodStocklist = false
      }
      console.log(response);
      this.HistoryArray = response;
    });
  }

  // -----showBloodStock()
  ShowBloodStock() {

    this.web.GetBloodStock().subscribe((response) => {
      if (response) {
        this.BloodStocklist = true
        this.donerList = false
        this.BloodRequestList = false
        this.HistoryList = false
        this.chart = false

      }
      console.log(response);
      this.BloodStockArray = response;
    });

  }

  GetBlodGraph() {
    this.web.GetBlodGraph().subscribe((res: any) => {
      console.log(res, "GetBlodGraph");
      this.Lable = res.Lable
      this.BloodUnit = res.Value
    })
  }

  // ---Blood_stock_chart()
  bar() {
    this.GetBlodGraph()

    this.chart = true
    this.BloodRequestList = false
    this.donerList = false
    this.HistoryList = false
    this.BloodStocklist = false


    const ctx = document.getElementById('myChart');

    const myChart = new Chart("myChartbar", {


      type: 'bar',
      data: {
        labels: this.Lable,
        datasets: [{
          label: '# BloodStock In ml',
          data: this.BloodUnit,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(300, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 3
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}
