import { Component, OnInit } from '@angular/core';
import { NzButtonModule} from 'ng-zorro-antd/button';
import { HomeService } from '../../service/movie.service';
import { moviesDTO } from '../../model/movie.model';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AddNowComponentComponent } from './add-now-component/add-now-component.component';
import { DetailNowComponent } from "./detail-now/detail-now.component";
import { RouterModule } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
@Component({
  selector: 'app-now',
  standalone: true,
  templateUrl: './now.component.html',
  styleUrl: './now.component.scss',
  imports: [RouterModule, NzButtonModule, MatDialogModule, CommonModule,
    NzNotificationModule, NzIconModule, DetailNowComponent,NzTableModule]
})
export class NowComponent implements OnInit{
  NowData: moviesDTO[] = [];
  constructor(private dialog: MatDialog, private nowService: HomeService,) {
    this.nowService.getAllMovies('nowId')
   }
  ngOnInit(): void {
   this.NowData= this.nowService.getAllMovies('nowId')
  }
  nowOpen() {
    const dialogRef = this.dialog.open(AddNowComponentComponent, {
      width: '500px',
      data: {
      }
    })
    dialogRef.afterClosed().subscribe((result: moviesDTO) => {
      //result就是传递过来的数据（this.NowDataForm）
      if (result) {
        this.handleFrom(result);
      }
    })
  }
  handleFrom(data: moviesDTO) {
    this.NowData.push(data)
    data.releseTime=this.convertDateToNumber(data.releasetime)
    this.loadData()
  }
  convertDateToNumber(data:number) { 
    const date = new Date(data); 
     // 获取年、月、日  
     const year = date.getFullYear();  
     const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始，所以需要+1，并确保是两位数  
     const day = String(date.getDate()).padStart(2, '0'); // 确保日期是两位数  
     // 组合成一个数字字符串  
    return year +'-'+ month +'-'+ day;  

   }
   //查看详情
   openOrder(){
  }

  //根据上映时间倒序
  loadData() {
    this.NowData.sort((a, b) => {
      const dateA = new Date(a.releasetime);
      const dateB = new Date(b.releasetime)
      return dateB.getTime() - dateA.getTime()
    })
  }
  //删除
  offNow(data: moviesDTO) {
    const isComfirmed=confirm('确定要删除此电影？')
    if(isComfirmed){
    this.nowService.deleteNow('nowId', data.id)
    this.NowData = this.NowData.filter(NowList => NowList.id !== data.id)
    console.log('deletedelete', data.id, this.NowData);
    }else{
      console.log('取消删除');
      
    }
  }
  selectedNowData: moviesDTO | null = null;
  //点击查看详情
  DetailNow(nowdata: moviesDTO) {
    // this.selectedNowData = nowdata;
    this.dialog.open(DetailNowComponent, {
      width: '800px',
      data: nowdata
    })
  }

}
