import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NowMovieComponent } from "./now-movie/now-movie.component";
import { UpcomingMovieComponent } from "./upcoming-movie/upcoming-movie.component";
import { TodayhighMovieComponent } from "./todayhigh-movie/todayhigh-movie.component";
import { ExpectationMovieComponent } from "./expectation-movie/expectation-movie.component";
@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [RouterModule, NowMovieComponent, UpcomingMovieComponent, TodayhighMovieComponent, ExpectationMovieComponent]
})
export class HomePageComponent {

}
