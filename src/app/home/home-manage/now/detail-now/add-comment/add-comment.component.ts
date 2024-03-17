import { Component, OnInit } from '@angular/core';
import { Comment } from '../../../../model/movie.model';
import { HomeService } from '../../../../service/movie.service';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-comment',
  standalone: true,
  imports: [NzFormModule, FormsModule, NzDatePickerModule, CommonModule],
  templateUrl: './add-comment.component.html',
  styleUrl: './add-comment.component.scss'
})
export class AddCommentComponent implements OnInit {
  CommentForm: Comment = { id: '', name: '', description: '' }
  commentdata: Comment[] = []
  constructor(private commentService: HomeService,
    private dialogRef: MatDialogRef<AddCommentComponent>) {
  }
  ngOnInit(): void {
  }
  //生成随机用户名
  generateUsername() {
    const adjectives = ['Happy', 'Brave', 'Clever', 'Friendly', 'Generous'];
    const nouns = ['Lion', 'Unicorn', 'Tiger', 'Dragon', 'Elephant'];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomNumber = Math.floor(Math.random() * 1000);
    return `${randomAdjective}${randomNoun}${randomNumber}`;
  }
  newId = Date.now().toString()
  submitForm() {
    this.CommentForm.id = this.newId;
    this.CommentForm.name=this.generateUsername()
    this.commentService.addComment('nowId', this.CommentForm);
    this.dialogRef.close(this.CommentForm);
    this.commentdata.push(this.CommentForm)
  }
}
