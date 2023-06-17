import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaUnoComponent } from './components/vista-uno/vista-uno.component';
import { VistaDosComponent } from './components/vista-dos/vista-dos.component';
import { VistaTresComponent } from './components/vista-tres/vista-tres.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: VistaUnoComponent},
  { path: 'tabla', component: VistaDosComponent },
  { path: 'contacto', component: VistaTresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
