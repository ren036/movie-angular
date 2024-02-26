import { Component, Inject, Input } from '@angular/core';
import { UpcomingDTO } from '../../../model/movie.model';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../../service/movie.service';

@Component({
  selector: 'app-detail-upcoming',
  standalone: true,
  imports: [NzIconModule,CommonModule],
  templateUrl: './detail-upcoming.component.html',
  styleUrl: './detail-upcoming.component.scss'
})
export class DetailUpcomingComponent {
  constructor(private dialog: MatDialog,@Inject(MAT_DIALOG_DATA) public data: UpcomingDTO,
  private upcomingService:HomeService) { }
  likenum=1
  addLike(){
    this.data.like=this.likenum
    this.likenum++
    this.upcomingService.getAllUpcoming('nowId')
    console.log(this.upcomingService.getAllUpcoming('nowId'));
  }
  //喜欢清零
  clearLike(){
    this.data.like=0
  }

}
