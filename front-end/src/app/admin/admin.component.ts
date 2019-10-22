import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  detail;pprice;pname;color;category;image;
add: FormGroup;
submitted = false;
  constructor(private service:HttpService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.add = this.formBuilder.group({
      pname: ['', Validators.required],
      pprice: ['', [Validators.required,Validators.pattern('[0-9]*')]],
      category: ['', [Validators.required]],
      detail: ['', [Validators.required, Validators.minLength(30)]],
      color: ['', Validators.required],
      image: ['', Validators.required]
  });
  }
  get f() { return this.add.controls; }

  onSubmit() {
      this.submitted = true;
      if (this.add.invalid) {
          return;
      }
      else{
    const product={
      detail:this.detail,
      pprice:this.pprice,
      color:this.color,
      category:this.category,
      pname:this.pname,
      image:this.image,
      active:1
    };
    this.service.addProduct(product);
  alert("product added");
  }

}
}
