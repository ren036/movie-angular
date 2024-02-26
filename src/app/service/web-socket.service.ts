// // websocket.service.ts  
// import { Injectable } from '@angular/core';  
// import { Subject } from 'rxjs';  
  
// @Injectable({  
//   providedIn: 'root',  
// })  
// export class WebSocketService {  
//   // 用于发送消息给服务器的主题  
//   private sendSubject = new Subject<string>();  
//   // 用于接收服务器消息的主题  
//   private messageSubject = new Subject<string>();  
  
//   // WebSocket 连接  
//   private socket?: WebSocket;  
  
//   // 消息观察者  
//   public message$ = this.messageSubject.asObservable();  
  
//   constructor() {  
//     this.connect();  
//   }  
  
//   // 连接 WebSocket 服务器  
//   private connect() {  
//     if (!this.socket) {  
//       this.socket = new WebSocket('ws://localhost:8080');  
  
//       this.socket.onopen = () => {  
//         console.log('WebSocket connected');  
//       };  
  
//       this.socket.onmessage = (event) => {  
//         const message = event.data;  
//         console.log('WebSocket message received:', message);  
//         this.messageSubject.next(message);  
//       };  
  
//       this.socket.onerror = (error) => {  
//         console.error('WebSocket Error:', error);  
//       };  
  
//       this.socket.onclose = (event) => {  
//         if (event.wasClean) {  
//           console.log('WebSocket closed cleanly', event.code, event.reason);  
//         } else {  
//           console.error('WebSocket connection died', event.code, event.reason);  
//         }  
//         this.connect(); // 尝试重新连接  
//       };  
//     }  
//   }  
  
//   // 发送消息给服务器  
//   sendMessage(message: string) {  
//     if (this.socket && this.socket.readyState === WebSocket.OPEN) {  
//       this.socket.send(message);  
//     } else {  
//       console.error('WebSocket is not open. Unable to send message');  
//     }  
//   }  
  
//   // 断开 WebSocket 连接  
//   disconnect() {  
//     if (this.socket && this.socket.readyState === WebSocket.OPEN) {  
//       this.socket.close();  
//     }  
//   }  
// }