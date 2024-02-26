import { Component, OnInit } from '@angular/core';
import { NowDTO,Buy } from '../../model/movie.model';
import { HomeService } from '../../service/movie.service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DetailNowComponent } from '../../home-manage/now/detail-now/detail-now.component';
import { BuyNowComponent } from './buy-now/buy-now.component';

@Component({
  selector: 'app-now-movie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './now-movie.component.html',
  styleUrl: './now-movie.component.scss'
})
export class NowMovieComponent implements OnInit{
  NowData:NowDTO[]=[];
  BuyData:Buy[]=[]
  constructor(private dialog: MatDialog,private nowService:HomeService,){
    this.nowService.getAllNow('nowId')
    console.log('视图中的all',this.nowService.getAllNow('nowId'));
    
  }
  ngOnInit(): void {
    this.NowData=(this.nowService.getAllNow('nowId')).slice(0,5)
    this.loadData()
    this.nowService.getAllNow('nowId')
    console.log(this.nowService.getAllNow('nowId'));
    
  }
  loadData() {
    this.NowData.sort((a, b) => {
      const dateA = new Date(a.releasetime);
      const dateB = new Date(b.releasetime)
      return dateB.getTime() - dateA.getTime()
    })
  }

    //点击查看详情
    DetailNow(nowdata: NowDTO){
      this.dialog.open(DetailNowComponent, {
        width: '800px',
        data: nowdata
      })
    }
  //购票
  openBuy(){
    const dialogRef=this.dialog.open(BuyNowComponent,{
      width:'500px',
      data:{}
    })
    dialogRef.afterClosed().subscribe((result:Buy)=>{
      if(result){
        this.handleFrom(result)
      }
    })
  }
handleFrom(data:Buy){
  this.BuyData.push(data)
  
}
}
