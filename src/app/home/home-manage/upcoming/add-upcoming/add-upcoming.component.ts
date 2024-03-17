import { Component, Inject, OnInit } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { moviesDTO } from '../../../model/movie.model';
import { FormsModule } from '@angular/forms';
import { HomeService } from '../../../service/movie.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { CommonModule } from '@angular/common';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzMessageModule } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-add-upcoming',
  standalone: true,
  imports: [NzFormModule, FormsModule, NzDatePickerModule, CommonModule,NzMessageModule],
  templateUrl: './add-upcoming.component.html',
  styleUrl: './add-upcoming.component.scss'
})
export class AddUpcomingComponent implements OnInit {
  //表单
  UpcomingDataForm: moviesDTO = {
    id: '', name: '', icon: '',
    description: "",
    releasetime: 0,
    like: 0,
  }
  upcomingdata: moviesDTO[] = []
  constructor(private upcomingService: HomeService,
    private dialogRef: MatDialogRef<AddUpcomingComponent>,
    private message: NzMessageService
  ) {
  }
  ngOnInit() {

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
      this.UpcomingDataForm.icon = reader.result as string;
      // 现在 this.NowDataForm.icon 包含了图片的Base64编码，你可以将它保存或做其他操作
      console.log(this.UpcomingDataForm.icon);
    };
  }

  newId = Date.now().toString();
  submitForm(type: string) {
    this.UpcomingDataForm.id = this.newId;
    this.UpcomingDataForm.releasetime = new Date().getTime()
    this.upcomingService.addUpcoming('nowId', this.UpcomingDataForm);
    this.dialogRef.close(this.UpcomingDataForm);
    this.message.create(type, `添加成功`);
    console.log('新增表单', this.UpcomingDataForm);
    this.upcomingdata.push(this.UpcomingDataForm)

  }

}
