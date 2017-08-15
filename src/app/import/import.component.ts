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
    file:File;
    alerts:any[] = [];
    private apiEndPoint = environment.endpoint + 'api/upload';

    constructor(private http:Http) { }

    fileChange(event) {
        let fileList: FileList = event.target.files;
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
            .catch(error => Observable.throw(error))
            .subscribe(
                (data) => { 
                    this.alerts.push({ type: 'success', msg: 'SUCCESS! Your file has been successfully imported.', timeout: 5000 });
                },
                (error) => { 
                    console.log('Error occurred', error);
                    this.alerts.push({ type: 'danger', msg: 'ERROR! There was an error in uploading your file. Please try again later.', timeout: 5000 });
                }
            );
    }

}