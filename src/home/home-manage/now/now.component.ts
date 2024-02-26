import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NzButtonModule, NzButtonSize } from 'ng-zorro-antd/button';
import { HomeService } from '../../service/movie.service';
import { NowDTO } from '../../model/movie.model';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AddNowComponentComponent } from './add-now-component/add-now-component.component';
import { DetailNowComponent } from "./detail-now/detail-now.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-now',
  standalone: true,
  templateUrl: './now.component.html',
  styleUrl: './now.component.scss',
  imports: [RouterModule, NzButtonModule, MatDialogModule, CommonModule,
    NzNotificationModule, NzIconModule, DetailNowComponent]
})
export class NowComponent implements OnInit, AfterViewInit {
  size: NzButtonSize = 'small';
  NowData: NowDTO[] = [];
  constructor(private dialog: MatDialog, private nowService: HomeService,) { }
  ngOnInit(): void {
    this.nowService.getAllNow('nowId')
    console.log('视图all', this.nowService.getAllNow('nowId'));


  }
  ngAfterViewInit() {
    this.nowService.getAllNow('nowId')
    console.log('视图all加载完', this.nowService.getAllNow('nowId'));

  }
  nowOpen() {
    const dialogRef = this.dialog.open(AddNowComponentComponent, {
      width: '500px',
      data: {
      }
    })
    dialogRef.afterClosed().subscribe((result: NowDTO) => {
      //result就是传递过来的数据（this.NowDataForm）
      if (result) {
        this.handleFrom(result);
      }
    })
  }
  handleFrom(data: NowDTO) {
    this.NowData.push(data)
    this.loadData()

    console.log('后台nowall', this.nowService.getAllNow('nowId'));

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
  offNow(data: NowDTO) {
    const isComfirmed=confirm('确定要删除此电影？')
    if(isComfirmed){
    this.nowService.deleteNow('nowId', data.id)
    this.NowData = this.NowData.filter(NowList => NowList.id !== data.id)
    console.log('deletedelete', data.id, this.NowData);
    }else{
      console.log('取消删除');
      
    }
  }
  selectedNowData: NowDTO | null = null;
  //点击查看详情
  DetailNow(nowdata: NowDTO) {
    // this.selectedNowData = nowdata;
    this.dialog.open(DetailNowComponent, {
      width: '800px',
      data: nowdata
    })
  }

}
