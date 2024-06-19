import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {
  url: any = "https://645a-103-15-67-130.ngrok-free.app/" //yha change krna link jab demo do jo me dunga usse replace krna
header:any =new HttpHeaders({"ngrok-skip-browser-warning":"6022"})

  constructor(private http: HttpClient) { }

  // --BloodDonor--Api
  GetDoonerData(): Observable<any[]> {

    return this.http.get<any>(this.url + "/api/BloodBank/GetAllData" ,{ headers: this.header });
  }

  PostDoonerData(obj: any) {
    return this.http.post(this.url + "/api/BloodBank/InsertData", obj ,{ headers: this.header });
  }

  // --BloodRequest--Api
  PostBloodReq(obj: any) {
    return this.http.post(this.url + "/api/BloodReq/InsertBloodRequest", obj ,{ headers: this.header });
  }



  // ----Donor login
  donerLogIn(data: any): Observable<any> {

    return this.http.post(this.url + "/api/BloodBank/donerLogin", data ,{ headers: this.header })

  }

  // --book_Appointment-api
  BookAppointment(data: any): Observable<any> {

    return this.http.post(this.url + "/api/Appointment/BookAppointment", data ,{ headers: this.header })

  }
  
  // admin dashboard APIs_______>

  // DenyBloodRequest API
  DenyBloodRequest(id: any) {

    return this.http.delete<any>(this.url + "/api/BloodReq/DeletBloodRequest" + "?id=" + id ,{ headers: this.header })
  }
  // accept blood_request API
  RequestresponseHandler(obj: any) {
    return this.http.post(this.url + "/api/History/InsertReqHistory", obj ,{ headers: this.header });

  }
  // accept DonorAppointment API
  DonorAppointmentHandler(obj: any) {
    return this.http.post(this.url + "/api/History/InsertDonorHistory", obj ,{ headers: this.header });

  }
  //DenyAppointment API
  DenyAppointment(id: any) {

    return this.http.delete<any>(this.url + "/api/Appointment/DeleteAppointment" + "?id=" + id ,{ headers: this.header })
  }

  // Get_blood_Appointment_list API
  GetAppointmentdata(): Observable<any[]> {

    return this.http.get<any>(this.url + "/api/Appointment/GetAppointmentdata" ,{ headers: this.header });
  }

  // Get_History_list API
  GetHistorylist(): Observable<any[]> {

    return this.http.get<any>(this.url + "/api/History/GetHistory" ,{ headers: this.header });
  }

  // GetBloodStock AOI
  GetBloodStock(): Observable<any[]> {

    return this.http.get<any>(this.url + "/api/BloodStock/GetBloodStock" ,{ headers: this.header });
  }

  // Bar-chart_API
  GetBlodGraph(): Observable<any[]> {

    return this.http.get<any>(this.url + "/api/BloodStock/GetBlodGraph" ,{ headers: this.header });
  }

  // GetBloodReqData
  GetBloodReqData(): Observable<any[]> {

    return this.http.get<any>(this.url + "/api/BloodReq/GetBloodRequest" ,{ headers: this.header });
  }


}





