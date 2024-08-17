import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { Article} from './article/article.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ArticleComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  addArticle(title:HTMLInputElement,link:HTMLInputElement):boolean{
    this.articles.push(new Article(title.value,link.value,0))
    title.value='';
    link.value=''
    return false
  }

  articles:Article[]
  constructor(){
    this.articles=[
      new Article('Angular','http://angular.io',10),
      new Article('NodeJs','http://nodejs.io',5),
      new Article('Express','http://express.io',2),
      new Article('PrimeNG','http://primeng.io',7),
    ]
  }

  sortedArticle():Article[]{
    return this.articles.sort((a:Article,b:Article)=>b.votes-a.votes)
  }
}
