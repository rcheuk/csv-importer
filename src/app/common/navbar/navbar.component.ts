import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public path;

    constructor() { }

    ngOnInit() { 
        this.path = location.pathname;
        console.log('path' ,this.path);
    }
}