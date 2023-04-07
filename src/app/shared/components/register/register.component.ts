import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../../service/service.service';
import { Produtc } from '../../produtc-model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  public payload: Produtc;

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.formValues();
  }
  public formValues() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      code: new FormControl(null,),
      description: new FormControl(null),
      quantity: new FormControl(null, [Validators.required]),
      optionColor: new FormControl(null, [Validators.required]),
    })
  }
  public registerProduct(form: FormGroup) {
    this.payload = {
      name: this.form?.get('name')?.value,
      code: this.form?.get('code')?.value,
      description: this.form?.get('description')?.value   ,
      color: this.form?.get('optionColor')?.value,
      quantity: this.form?.get('quantity')?.value,
    }
    this.serviceService.createdProduct(this.payload);
  }
}
