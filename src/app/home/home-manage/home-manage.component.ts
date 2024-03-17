import { Component } from '@angular/core';
import { NowComponent } from "./now/now.component";
import { UpcomingComponent } from "./upcoming/upcoming.component";

@Component({
    selector: 'app-home-manage',
    standalone: true,
    templateUrl: './home-manage.component.html',
    styleUrl: './home-manage.component.scss',
    imports: [NowComponent, UpcomingComponent]
})
export class HomeManageComponent {

}
