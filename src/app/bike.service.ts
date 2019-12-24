import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  //  'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http: HttpClient) { }

  getBikes(){

    return this.http.get('/server/api/v1/bikes');
  }

  deleteBike(id){

    return this.http.delete('/server/api/v1/bikes/'+ id);
  }

  registerBike(body){

    return this.http.post('/server/api/v1/bikes', body,httpOptions);
  }

  updateBikeRecord(id,body){
    return this.http.put('/server/api/v1/bikes/' + id , body,httpOptions);
  }

  getBikeById(id){
    return this.http.get('/server/api/v1/bikes/' +id);
  }


}
