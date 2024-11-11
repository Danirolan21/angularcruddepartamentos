import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { Departamento } from '../../models/departamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  @ViewChild("cajaid") cajaid!: ElementRef;
  @ViewChild("cajanombre") cajanombre!: ElementRef;
  @ViewChild("cajalocalidad") cajalocalidad!: ElementRef;
  public departamento!: Departamento;

  constructor(
    private _service: ServiceDepartamentos,
    private router: Router
  ) {}

  insertDepartamento() {
    let idDepartamento = parseInt(this.cajaid.nativeElement.value);
    let nombre = this.cajanombre.nativeElement.value;
    let localidad = this.cajalocalidad.nativeElement.value;
    this.departamento = new Departamento(idDepartamento, nombre, localidad)
    this._service.insertDepartamento(this.departamento).subscribe(response => {
      console.log("Insertado...");
      this.router.navigate(['/']);
    })
  }
}
