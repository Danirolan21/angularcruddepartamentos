import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";
import { Departamento } from "../models/departamento";

@Injectable()
export class ServiceDepartamentos {

    constructor(private _http: HttpClient) {}

    getDepartamentos(): Observable<any> {
        let request = "api/Departamentos"

        let url = environment.urlApiDepartamentos + request;
        return this._http.get(url);
    }

    insertDepartamento(departamento: Departamento): Observable<any> {
        //CONVERTIMOS EL OBJETO A JSON
        let json = JSON.stringify(departamento);

        //TAMBIEN NECESITAMOS MANDAR EL HEADER A LA HORA DE HACER UN INSERT 
        let headers = new HttpHeaders();

        //DECIRLE EL TIPO DE Content-tpe, application/json
        headers = headers.set("Content-type", "application/json");

        let request = "api/Departamentos";
        let url = environment.urlApiDepartamentos + request;
        return this._http.post(url, json, {headers: headers});
    }
}