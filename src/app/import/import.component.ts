import { Component, OnInit, Directive } from '@angular/core';
import { Http, Headers, Request, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx'
import { environment } from '../../environments/environment';

@Component({
    selector: 'import-cmp',
    templateUrl: './import.component.html',
    styleUrls: ['./import.component.scss'],
})

export class ImportComponent {
    private apiEndPoint = environment.endpoint + 'api/upload';
    file:File;

    constructor(private http:Http) { }

    fileChange(event) {
        let fileList: FileList = event.target.files;
        console.log("files", fileList);
        if(fileList.length > 0) {
            this.file = fileList[0];
        }
    }

    upload() {
        let formData:FormData = new FormData();
        formData.append('uploadFile', this.file, this.file.name);
        let headers = new Headers();
        //headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        this.http.post(`${this.apiEndPoint}`, formData, options)
            .map(res => res.json())
            .catch(error => Observable.throw(error))
            .subscribe(
                data => console.log('success'),
                error => console.log('Error occurred', error)
            );
    }

}