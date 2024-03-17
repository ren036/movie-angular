import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { HomeService } from '../../../service/movie.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { CommonModule } from '@angular/common';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzMessageModule } from 'ng-zorro-antd/message';
import {  Buy } from '../../../model/movie.model';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { getISOWeek } from 'date-fns';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
@Component({
  selector: 'app-buy-now',
  standalone: true,
  imports: [NzTabsModule, NzRadioModule, NzSelectModule, NzFormModule, FormsModule, NzDatePickerModule, CommonModule, NzMessageModule],
  templateUrl: './buy-now.component.html',
  styleUrl: './buy-now.component.scss'
})
export class BuyNowComponent {
  //购票表单
  BuyForm: Buy = {id:'', time: '', site: '', seat: '' }
  buydata: Buy[] = [];
  constructor(private buyService: HomeService,
    private dialogRef: MatDialogRef<BuyNowComponent>,) { }
  newId = Date.now().toString()
  submitForm() {
    this.BuyForm.id=this.newId;
    this.buyService.addBuy('nowId', this.BuyForm)
    this.dialogRef.close(this.BuyForm)
    this.buydata.push(this.BuyForm)
  }
}
