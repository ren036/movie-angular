import { Component, Input,Inject } from '@angular/core';
import { NowDTO ,Comment,Buy} from '../../../model/movie.model';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../../service/movie.service';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { OrderNowComponent } from './order-now/order-now.component';
@Component({
  selector: 'app-detail-now',
  standalone: true,
  imports: [NzIconModule,CommonModule],
  templateUrl: './detail-now.component.html',
  styleUrl: './detail-now.component.scss'
})
export class DetailNowComponent {
// @Input() data!:NowDTO
CommentData:Comment[]=[]
BuyData:Buy[]=[]
constructor(private dialog: MatDialog,@Inject(MAT_DIALOG_DATA) public data: NowDTO,
private nowService:HomeService) { }
likenum=1
  addLike(){
    this.data.like=this.likenum
    this.likenum++
    this.nowService.getAllNow('nowId')
    console.log(this.nowService.getAllNow('nowId'));
  }
  //喜欢清零
  clearLike(){
    this.data.like=0
  }
  //打开新增评论
  openComment(){
    const dialogRef=this.dialog.open(AddCommentComponent,{
      width:'500px',
      data:{}
    })
    dialogRef.afterClosed().subscribe((result:Comment)=>{
      if(result){
        this.handleFrom(result)
      }
    })
  }
  handleFrom(data:Comment){
    this.data.comment=this.CommentData
    this.CommentData.push(data)
    
  }
  openOrder(){
    const dialogRef=this.dialog.open(OrderNowComponent,{
      width:'500px',
      data:{}
    })
    dialogRef.afterClosed().subscribe((result:Buy)=>{
      if(result){
        this.handleFrom2(result)
      }
    })
  }
  handleFrom2(data:Buy){
    this.data.buy=this.BuyData
    this.BuyData.push(data)
    
  }

}
