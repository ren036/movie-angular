import { Component, Inject, OnInit } from '@angular/core';
import { Buy } from '../../../../model/movie.model';
import {MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../../../service/movie.service';

@Component({
  selector: 'app-order-now',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-now.component.html',
  styleUrl: './order-now.component.scss'
})
export class OrderNowComponent implements OnInit{
  orderData:Buy[]=[]
constructor(private orderService:HomeService){
  this.orderService.getAllBuy('nowId')
  console.log(this.orderService.getAllBuy('nowId'),'data');
  
}
ngOnInit(): void {
  this.orderData=this.orderService.getAllBuy('nowId')
  this.orderService.getAllBuy('nowId')
  console.log(this.orderService.getAllBuy('nowId'));
  
}

}
