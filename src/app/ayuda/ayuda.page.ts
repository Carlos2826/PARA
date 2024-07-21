import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.page.html',
  styleUrls: ['./ayuda.page.scss'],
})
export class AyudaPage implements OnInit {
  questions = [
    { text: 'Pregunta 1', details: 'Respuesta 1', showDetails: false },
    { text: 'Pregunta 2', details: 'Respuesta 2', showDetails: false },
    { text: 'Pregunta 3', details: 'Respuesta 3', showDetails: false },
    { text: 'Pregunta 4', details: 'Respuesta 4', showDetails: false },
    { text: 'Pregunta 5', details: 'Respuesta 5', showDetails: false },
  ];
  filteredQuestions = [...this.questions];

  constructor() { }

  ngOnInit() {}

  toggleDetails(question: { text: string, details: string, showDetails: boolean }) {
    // Ocultar cualquier detalle desplegado antes de mostrar el nuevo
    this.questions.forEach(q => {
      if (q !== question) {
        q.showDetails = false;
      }
    });
    // Alternar el estado de la pregunta actual
    question.showDetails = !question.showDetails;
  }

  searchQuestions(event: any) {
    const searchTerm = event.target.value.toLowerCase();

    // Filtrar preguntas según el término de búsqueda
    this.filteredQuestions = this.questions.filter(question =>
      question.text.toLowerCase().includes(searchTerm)
    );
    
    // Restablecer el estado de visibilidad de todas las preguntas
    this.filteredQuestions.forEach(question => {
      question.showDetails = false;
    });
  }
}
