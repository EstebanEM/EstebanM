import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.sass'
})
export class ProjectsComponent {

  activeModal: 'backend' | 'frontend' | 'uiux' | 'graphic' | null = null

  openModal(type: 'backend' | 'frontend' | 'uiux' | 'graphic') {
    this.activeModal = type
  }

  closeModal() {
    this.activeModal = null
  }

}