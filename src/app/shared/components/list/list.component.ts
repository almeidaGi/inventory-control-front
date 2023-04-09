import { AfterContentInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Observable } from 'rxjs';
import { Produtc, content } from '../../produtc-model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterContentInit{
  public listProducts$: Observable<any>;
  public listProdutcNull: Boolean;
  public valueInput: string = '';
  public filterItems: Array<any> =[];
  public procucts: Array<any> = [];
  public form: FormGroup;
  constructor(
    private serviceService: ServiceService, 
    private router: Router,
    private toastr: ToastrService,  
    ) { }

  ngOnInit(): void {
    this.formValues();
  }
  public formValues() {
    this.form = new FormGroup({
      name: new FormControl(null),
    })
  }
 ngAfterContentInit(): void {
  this.listProdutcNull = true;
  this.serviceService.litProduct().subscribe(res=>{
     this.procucts.push(res.content);
     this.filterItems.push(res.content);
     console.log(this.filterItems[0].filter((min:any)=>{     
      if( min.alertMin ===true)  this.aletIventoryMin(min);
     }));
    if(!!res) this.listProdutcNull = false;
    return;
  })

 }
 public newProduct(){
  this.router.navigate(['/new']);
 }
 public aletIventoryMin(res: any){
  const message =" Produto " + res.name + " atingiu estoque mínimo"
  this.toastr.info(message);
 }
 public filter(inputValue: String){
  this.filterItems[0] = this.procucts[0].filter((i:any)=>{
    const nameInput = i.name;
    return nameInput.toLowerCase().includes(inputValue.toLowerCase().trim())
  })

 }
 public editProduct(list: any){
  this.serviceService.updateData(list);
  this.router.navigate(['/edit']);
 }
 public dellProduct(list: any){
  this.serviceService.dellProduct(list.id).subscribe(res=>{
    this.toastr.success(list.name +', deletado com sucesso')
   // this.listProducts$ = this.serviceService.litProduct();
    document.location.reload();
  })
 }
 
}
