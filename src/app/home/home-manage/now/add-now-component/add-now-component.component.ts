import { Component, Inject, OnInit } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { moviesDTO } from '../../../model/movie.model';
import {FormsModule} from '@angular/forms';
import { HomeService } from '../../../service/movie.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { CommonModule } from '@angular/common';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzMessageModule } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-add-now-component',
  standalone: true,
  imports: [NzFormModule,FormsModule,NzDatePickerModule,CommonModule,NzMessageModule],
  templateUrl: './add-now-component.component.html',
  styleUrl: './add-now-component.component.scss'
})
export class AddNowComponentComponent implements OnInit{
  //表单
  NowDataForm:moviesDTO={id:'',name:'',icon:'',
    description: "",
    releasetime: 0,
    ordernum: 0,
    like: 0,
    no:0
  }
  nowdata:moviesDTO[]=[]
  constructor(private nowService:HomeService,
    private dialogRef: MatDialogRef<AddNowComponentComponent>,
    private message: NzMessageService
    ){    
  }
  ngOnInit(){
    
  }
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
        const file = input.files[0];
        // 接下来处理文件
      
     if (file) {
      this.convertToBase64(file); // 转换文件为Base64（可选）
    }} 
  }
  convertToBase64(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.NowDataForm.icon = reader.result as string;
      // 现在 this.NowDataForm.icon 包含了图片的Base64编码，你可以将它保存或做其他操作
      console.log(this.NowDataForm.icon);
    };
  }
  convertDateToNumber() { 
    const date = new Date(this.NowDataForm.releasetime); 
     // 获取年、月、日  
     const year = date.getFullYear();  
     const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始，所以需要+1，并确保是两位数  
     const day = String(date.getDate()).padStart(2, '0'); // 确保日期是两位数  
     // 组合成一个数字字符串  
    return year +'-'+ month +'-'+ day;  

   }
   newId=Date.now().toString();
  submitForm(type: string){
      this.NowDataForm.id=this.newId;   
      this.convertDateToNumber();
      this.NowDataForm.releasetime=new Date(this.NowDataForm.releasetime).getTime();
    this.nowService.addNow('nowId',this.NowDataForm);
    console.log('add中的all',this.nowService.getAllNow('nowId'));
    console.log(this.nowService.getAllMovies,'全部数据全部数据');
    this.dialogRef.close(this.NowDataForm); 
    this.message.create(type, `添加成功`);
    this.nowdata.push(this.NowDataForm)
  }
}
