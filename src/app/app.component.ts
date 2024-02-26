import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule,
  FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  constructor() {
  }  
  ngOnInit(): void {
      //  // 订阅消息流以接收服务器消息  
      //  this.webSocketService.message$.subscribe((message) => {  
      //   console.log('Received message from server:', message);  
      //   // 在这里处理接收到的消息  
      // });  
    
      // // 发送消息给服务器  
      // this.sendMessageToServer('Hello, Server!');  
      
}
// sendMessageToServer(message: string) {  
//   this.webSocketService.sendMessage(message);  
//   console.log(message ,'应用间传递信息');
  
// }  
}
