import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/bike.service';
import { Observable } from 'rxjs';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  bikes: any;

  constructor(private bikeService:BikeService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {

    this.bikeService.getBikes().subscribe(response =>{

      this.bikes = response
    } )
  }

  deleteCall(id){
      this.bikeService.deleteBike(id).subscribe(response=>{
        console.log("Res",response);

        this.bikeService.getBikes().subscribe(response =>{

          this.bikes = response
        } )
      })
  }

  recordClick(id){
    console.log("id",id)

    this.router.navigate(['/registerBike'],{queryParams:{id:id}})
  }

}
