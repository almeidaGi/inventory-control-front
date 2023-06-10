import { AfterContentInit, AfterViewChecked, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../../service/service.service';
import { Produtc, content } from '../../produtc-model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, AfterContentInit {
  public form: FormGroup;
  public payload: content;
  public url: string;
  public product: any;

  constructor(
    private serviceService: ServiceService,
    private router: Router,
    public toastr: ToastrService,
    ) { }

  ngOnInit(): void {
    this.formValues();
    this.url = this.router.url;
 
  }
  ngAfterContentInit(): void {
    this.checkIfItIsAProductEdition();
  }
  public checkIfItIsAProductEdition(){
    this.serviceService.data.subscribe(data=>{
      this.product = data;
    });
    console.log(this.product);
    this.uptadeScreen(this.product);
  }
  showSuccess() {
    if(this.url === '/edit'){
    this.toastr.success('Produto Atualizado com sucesso');
    return
    }
    this.toastr.success('Produto Criado com sucesso');
  }
  public uptadeScreen(data: any): void{
    if(this.url === '/edit'){
    this.form.get('name')?.patchValue(data.name);
    this.form.get('value')?.patchValue(data.value);
    this.form.get('description')?.patchValue(data.description);
    this.form.get('quantity')?.patchValue(data.quantity);
    this.form.get('optionColor')?.patchValue(data.color);
    }
  }
  public formValues() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      value: new FormControl(null,[Validators.required]),
      description: new FormControl(null),
      quantity: new FormControl(null, [Validators.required]),
      optionColor: new FormControl(null, [Validators.required]),
    })
  }
  public save(form: FormGroup) {
    this.payload = {
      name: this.form?.get('name')?.value,
      value: this.form?.get('value')?.value,
      description: this.form?.get('description')?.value,
      color: this.form?.get('optionColor')?.value,
      quantity: this.form?.get('quantity')?.value,
    }
    if(this.url === '/edit'){
    let payloadUpdate ={ id: this.product.id, ...this.payload};
   console.log(payloadUpdate);
    this.serviceService.updateProduct(payloadUpdate).subscribe();
    this.showSuccess();
      return;
    }
    this.serviceService.createdProduct(this.payload).subscribe(res=>{
      if(!!res){
        this.showSuccess();
        this.formValues();
      }
    });
  }

  public backToProductList(){
      this.router.navigate(['/home']);
  }
}
