import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Observable } from 'rxjs';
import { Produtc } from '../../produtc-model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges{
  public listProducts$: Observable<any>;
  constructor(
    private serviceService: ServiceService, 
    private router: Router,
    private toastr: ToastrService,  
    ) { }

  ngOnInit(): void {
   this.listProducts$ = this.serviceService.litProduct();
  
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes){
      this.listProducts$ ;
    }
  }
 public newProduct(){
  this.router.navigate(['/new']);
 }
 public editProduct(list: any){
  this.serviceService.updateData(list);
  this.router.navigate(['/edit']);
 }
 public dellProduct(list: any){
  this.serviceService.dellProduct(list.id).subscribe(res=>{
    this.toastr.success(list.name +', deletado com sucesso')
    this.listProducts$ = this.serviceService.litProduct();
  })
 }
 
}
