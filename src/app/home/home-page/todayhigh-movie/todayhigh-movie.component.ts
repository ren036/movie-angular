import { Component, OnInit } from '@angular/core';
import {  moviesDTO } from '../../model/movie.model';
import { HomeService } from '../../service/movie.service';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
@Component({
  selector: 'app-todayhigh-movie',
  standalone: true,
  imports: [NzIconModule,CommonModule],
  templateUrl: './todayhigh-movie.component.html',
  styleUrl: './todayhigh-movie.component.scss'
})
export class TodayhighMovieComponent implements OnInit {
  NowData:moviesDTO[]=[];
  ordernumLengths=0
  constructor(private nowService:HomeService,){
    this.nowService.getAllNow('nowId')
    console.log('视图中的all',this.nowService.getAllNow('nowId'));
    
  }
  newdate=new Date().toLocaleDateString()
  ngOnInit(): void {
    this.NowData=(this.nowService.getAllNow('nowId')).slice(0,10)
    this.nowService.getAllNow('nowId')
    console.log(this.nowService.getAllNow('nowId'));
    this.loadOrder()
    //获取订单长度
    this.NowData.forEach(item => {
      // this.ordernumLengths+=item.ordernum.toString.length
      // console.log(item.ordernum!.toString().length); // 使用可选链操作符确保 ordernum 存在
      // this.nowService.getAllNow('nowId')
    });
    console.log(this.ordernumLengths,'lenght');
    
  }
  //根据订票数正序
  loadOrder(){
    // return this.NowData.sort((a,b)=>a.ordernum-b.ordernum)
  }

}
