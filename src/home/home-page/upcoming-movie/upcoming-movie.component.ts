import { Component, OnInit } from '@angular/core';
import { UpcomingDTO } from '../../model/movie.model';
import { HomeService } from '../../service/movie.service';
import { CommonModule } from '@angular/common';
import { DetailUpcomingComponent } from "../../home-manage/upcoming/detail-upcoming/detail-upcoming.component";
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-upcoming-movie',
    standalone: true,
    templateUrl: './upcoming-movie.component.html',
    styleUrl: './upcoming-movie.component.scss',
    imports: [CommonModule, DetailUpcomingComponent]
})
export class UpcomingMovieComponent implements OnInit {
  UpcomingData:UpcomingDTO[]=[];
  constructor(private dialog:MatDialog,private nowService:HomeService,){
    this.nowService.getAllNow('nowId')
    console.log('视图中的all',this.nowService.getAllNow('nowId'));
    
  }
  ngOnInit(): void {
    this.UpcomingData=(this.nowService.getAllUpcoming('nowId')).slice(0,5)
    this.loadData()
    this.nowService.getAllNow('nowId')
    console.log(this.nowService.getAllNow('nowId'));
    
  }
    //根据创建时间倒序
    loadData(){
      this.UpcomingData.sort((a,b)=>{
        const dateA=new Date(a.createtime);
        const dateB=new Date(b.createtime)
        return dateB.getTime() - dateA.getTime()
      })
    }
  
    //点击查看详情
    DetailNow(upcomingdata:UpcomingDTO){
      this.dialog.open(DetailUpcomingComponent, {
        width: '800px',
        data: upcomingdata
      })
      }

}
