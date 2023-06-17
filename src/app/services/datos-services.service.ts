import { Datos } from './../interfaces/datos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosServicesService {

  constructor() { }

  listDatos: Datos[] = [
    { cedula: '1234567890', nombre: 'Juan', apellido: 'Pérez', fechaNac: new Date(1985, 9, 15), telefono: '555-1234', estado: "1" },
    { cedula: '9876543210', nombre: 'María', apellido: 'López', fechaNac: new Date(1990, 2, 25), telefono: '555-5678', estado: "1" },
  ];

  Agregar(dato: Datos){
    this.listDatos.push(dato)
  }

  eliminar(cedula: string){
    this.listDatos.forEach(elemento => {
      if(elemento.cedula === cedula){
        elemento.estado = "0"       
      }
    })
  }

  listaDatos(){
    return this.listDatos.filter(e => e.estado === "1");
  }

  datosEliminados(){
    return this.listDatos.filter(e => e.estado === "0");
    console.log(this.listDatos);
    
  }
}
