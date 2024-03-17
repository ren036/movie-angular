import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/movie.service';
import { CommonModule } from '@angular/common';
import { moviesDTO } from '../../model/movie.model';
@Component({
  selector: 'app-expectation-movie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expectation-movie.component.html',
  styleUrl: './expectation-movie.component.scss'
})
export class ExpectationMovieComponent implements OnInit{
MoviesData:moviesDTO[]=[]
constructor(private moviesService:HomeService){
  this.moviesService.getAllMovies('nowId')
}
ngOnInit(): void {
  this.MoviesData=(this.moviesService.getAllMovies('nowId')).slice(0,10)
  this.loadLike()
  console.log(this.MoviesData,'全部数据全部数据');
  
}
  //根据喜欢正序
  loadLike(){
    return this.MoviesData.sort((a,b)=>b.like - a.like)
   }
 
}
