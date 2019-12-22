import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/bike.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  bikes: any;

  constructor(private bikeService:BikeService) { }

  ngOnInit() {

    this.bikeService.getBikes().subscribe(response =>{

      this.bikes = response
    } )
  }

}
