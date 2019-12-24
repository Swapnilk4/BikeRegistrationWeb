import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BikeService } from '../../bike.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-bike',
  templateUrl: './register-bike.component.html',
  styleUrls: ['./register-bike.component.scss']
})
export class RegisterBikeComponent implements OnInit {


  response: any;
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private bikeService: BikeService,
    private route: ActivatedRoute,
    private router: Router) { }

  id;

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      model: ['', Validators.required],
      serialNumber: [''],
      purchasePrice: ['', Validators.required],
      purchaseDate: ['', Validators.required],
      contact: ['', Validators.required],

    });

    this.id = this.route.snapshot.queryParams.id;

    if (this.id) {
      this.bikeService.getBikeById(this.id).subscribe(response => {

        this.response = response

        if (this.response) {

          this.registerForm.patchValue({
            name: this.response.name,
            email: this.response.email,
            phone: this.response.phone,
            model: this.response.model,
            purchasePrice: this.response.purchasePrice,
            purchaseDate: this.response.purchaseDate


          })

          // this.registerForm.value.name = this.response.name
          // this.registerForm.value.email = this.response.email
          // this.registerForm.value.phone = this.response.phone
          // this.registerForm.value.model = this.response.model
          // this.registerForm.value.purchasePrice = this.response.purchasePrice
          // this.registerForm.value.purchaseDate = this.response.purchaseDate
        }
      })
    }
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  registerBike(body) {

    this.bikeService.registerBike(body).subscribe(response => {
      console.log("registered");
      this.router.navigate(['/admin'])

    })

  }


  updateBikeRecord(body) {

    this.bikeService.updateBikeRecord(this.id, body).subscribe(response => {
      console.log("Updated");
      this.router.navigate(['/admin'])

    })

  }


  onSubmit() {
    this.submitted = true;

    this.registerForm.value.contact = 0
    this.registerForm.value.serialNumber = null
    this.registerForm.value.purchasePrice = parseInt(this.registerForm.value.purchasePrice)


    if (this.id) {
      this.updateBikeRecord(JSON.stringify(this.registerForm.value))
    } else {
      this.registerBike(JSON.stringify(this.registerForm.value))
    }
  }
}
