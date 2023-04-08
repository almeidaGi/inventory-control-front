import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Observable } from 'rxjs';
import { Produtc } from '../../produtc-model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public listProducts$: Observable<any>

  constructor(
    private serviceService: ServiceService, 
    private router: Router,
  
    ) { }

  ngOnInit(): void {
   this.listProducts$ = this.serviceService.litProduct();
   this.listProducts$.subscribe(res=>{console.log(res)});
  }
 public newProduct(){
  this.router.navigate(['/new']);
 }
 public editProduct(list: any){
  this.serviceService.updateData(list);
  this.router.navigate(['/edit']);
 }
}
