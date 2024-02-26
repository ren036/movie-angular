import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import{NzMenuModule} from "ng-zorro-antd/menu"
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDividerModule } from 'ng-zorro-antd/divider';
@Component({
  selector: 'app-mean',
  standalone: true,
  imports: [RouterModule,NzMenuModule,NzDropDownModule,NzDividerModule],
  templateUrl: './mean.component.html',
  styleUrl: './mean.component.scss'
})
export class MeanComponent {
  change(value: boolean): void {
    // console.log(value);
  }
}
