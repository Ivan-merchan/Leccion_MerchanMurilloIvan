import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Datos } from 'src/app/interfaces/datos';
import { DatosServicesService } from 'src/app/services/datos-services.service';

@Component({
  selector: 'app-vista-dos',
  templateUrl: './vista-dos.component.html',
  styleUrls: ['./vista-dos.component.css']
})

export class VistaDosComponent implements OnInit{
  displayedColumns: string[] = ['cedula', 'nombre', 'apellido', 'fecha', 'telefono', 'accion'];
  dataSource = new MatTableDataSource<Datos>();
  form: FormGroup;
  DatosEliminados: Datos[] = [];

  constructor(
    private _datos: DatosServicesService,
    private fb: FormBuilder
  ){
    this.form = this.fb.group({
      cedula:               ['', Validators.required],
      nombre:               ['', Validators.required],
      apellido:             ['', Validators.required],
      fecha:                ['', Validators.required],
      telefono:             ['', Validators.required]     
    })
  }

  ngOnInit(){
    this.obtenerDatos();
  }

  obtenerDatos(){
    this.dataSource.data = this._datos.listaDatos();    
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    if(this.dataSource.data.length > 0){
      this.paginator._intl.itemsPerPageLabel = "Items por Página ";
    }
  }

  Add(){
    if(this.form.invalid){
      return
    }

    const datos: Datos = {
      cedula:     this.form.value.cedula,
      nombre:     this.form.value.nombre,
      apellido:   this.form.value.apellido,
      fechaNac:   this.form.value.fecha,
      telefono:   this.form.value.telefono,
      estado:     "1"
    }

    console.log(datos);
    

    this._datos.Agregar(datos)
    this.obtenerDatos()
    this.form.reset
  }

  eliminar(cedula: string){
    this._datos.eliminar(cedula);
    this.obtenerDatos();
    this.DatosEliminados = this._datos.datosEliminados()
  }
}
