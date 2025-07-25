import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.sass'
})
export class ProjectsComponent {

  mostrarModalUIUX: boolean = false;
  mostrarModalWeb: boolean = false;

  abrirModalUIUX() {
    this.mostrarModalUIUX = true;
  }

  abrirModalWeb() {
    this.mostrarModalWeb = true;
  }

  cerrarModales() {
    this.mostrarModalUIUX = false;
    this.mostrarModalWeb = false;
  }

}
