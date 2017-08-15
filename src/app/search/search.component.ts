import { Component, OnInit } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {DatePipe} from '@angular/common';
import { environment }  from '../../environments/environment';
import 'rxjs/Rx'

@Component({
    selector: 'search-cmp',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {
    id:Number;
    timestamp:String;
    results:any;
    private endpoint;

    constructor(private http:Http) { }

    search() {
        let headers = new Headers();
        let options = new RequestOptions({ headers: headers });
        this.endpoint = environment.endpoint + 'api/search?';
        if (this.id && this.timestamp){
            this.endpoint = this.endpoint + 'id=' + this.id + '&timestamp='+ this.timestamp;
        } else if (this.id) {
            this.endpoint = this.endpoint + 'id=' + this.id;
        } else if (this.timestamp) {
            this.endpoint = this.endpoint + 'timestamp='+ this.timestamp;
        } else {
            return;
        }
        
        this.http.get(`${this.endpoint}`, options)
            .map(res => res.json())
            .catch(error => Observable.throw(error))
            .subscribe(
                data => {this.results = data.results; console.log('data', data);},
                error => console.log('Error occurred', error)
            );
    }
}