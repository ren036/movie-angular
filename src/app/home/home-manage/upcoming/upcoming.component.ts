import { Component, OnInit } from '@angular/core';
import { NzButtonModule, NzButtonSize } from 'ng-zorro-antd/button';
import { HomeService } from '../../service/movie.service';
import { moviesDTO } from '../../model/movie.model';
import { CommonModule } from '@angular/common';
import { MatDialogModule,MatDialog } from '@angular/material/dialog'; 
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AddUpcomingComponent } from './add-upcoming/add-upcoming.component';
import { DetailUpcomingComponent } from "./detail-upcoming/detail-upcoming.component";

@Component({
    selector: 'app-upcoming',
    standalone: true,
    templateUrl: './upcoming.component.html',
    styleUrl: './upcoming.component.scss',
    imports: [NzButtonModule, MatDialogModule, CommonModule,
        NzNotificationModule, NzIconModule, DetailUpcomingComponent]
})
export class UpcomingComponent implements OnInit {
  size: NzButtonSize = 'small';
  UpcomingData:moviesDTO[]=[];
  constructor(private dialog:MatDialog,private upcomingService:HomeService,){}
  ngOnInit(): void {
    
    
  }
  nowOpen(){
    const dialogRef=this.dialog.open(AddUpcomingComponent,{
      width:'500px',
      data:{
      }
    })
    dialogRef.afterClosed().subscribe((result: moviesDTO)=>{
      //result就是传递过来的数据（this.NowDataForm）
      if(result){
        this.handleFrom(result)
      }
    })
  }
  handleFrom(data:moviesDTO){
    this.UpcomingData.push(data)
    this.loadData()
    console.log(this.UpcomingData,'nowdatajjjjjj');
    
  }
  //根据创建时间倒序
  loadData(){
    this.UpcomingData.sort((a,b)=>{
      const dateA=new Date(a.releasetime);
      const dateB=new Date(b.releasetime)
      return dateB.getTime() - dateA.getTime()
    })
  }
  //删除
  offNow(data:moviesDTO){
    const isComfirmed=confirm('确定要删除此电影？')
    if(isComfirmed){
    this.upcomingService.deleteUpcoming('nowId',data.id)
    this.UpcomingData=this.UpcomingData.filter(NowList=>NowList.id !==data.id)
    console.log('deletedelete',data.id,this.UpcomingData);
  }else{
    console.log('取消删除');
    
  }
  }  
  selectedNowData: moviesDTO | null = null;
    //点击查看详情
    DetailNow(upcomingdata:moviesDTO){
      this.dialog.open(DetailUpcomingComponent, {
        width: '800px',
        data: upcomingdata
      })
        }

}
