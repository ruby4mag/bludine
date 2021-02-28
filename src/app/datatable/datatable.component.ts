import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
//import "@cds/core/alert/register";
//import "@cds/core/button/register";
//import "@cds/core/modal/register";
//import "@cds/core/tag/register";



@Component({
    selector: 'datatable',
    templateUrl: 'datatable.component.html'
})
export class DatatableComponent {

    constructor(private http: HttpClient) { }

    comic = null;
    async getImage() {
        const max = 2393;
        const random = Math.floor(Math.random() * max) + 1;
        this.comic = await this.http
            .get(`https://xkcd.now.sh/?comic=${random}`)
            .toPromise();
    }
}