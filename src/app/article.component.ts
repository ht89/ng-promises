import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'article',
    template: `
        <div *ngFor="let article of articles | async">
            <h1>{{ article.title }}</h1>
            <p>{{ article.author }}</p>
        </div>
    `
})
export class ArticleComponent implements OnInit {
    private articles: Observable<Object[]>;

    constructor(
        private http: Http
    ) {
        this.articles = http.get('assets/articles.json').map(res => res.json());
    }

    ngOnInit() { }
}