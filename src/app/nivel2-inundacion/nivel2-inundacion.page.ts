// nivel2-inundacion.page.ts
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationService } from '../servicios/navigation.service';

@Component({
  selector: 'app-nivel2-inundacion',
  templateUrl: './nivel2-inundacion.page.html',
  styleUrls: ['./nivel2-inundacion.page.scss'],
})
export class Nivel2InundacionPage implements OnInit {

  questions = [
    {
      text: 'Pregunta 1',
      options: ['Respuesta 1', 'Respuesta 2', 'Respuesta 3', 'Respuesta 4'],
      correct: 'Respuesta 1'
    },
    {
      text: 'Pregunta 2',
      options: ['Respuesta 1', 'Respuesta 2', 'Respuesta 3', 'Respuesta 4'],
      correct: 'Respuesta 2'
    },
    {
      text: 'Pregunta 3',
      options: ['Respuesta 1', 'Respuesta 2', 'Respuesta 3', 'Respuesta 4'],
      correct: 'Respuesta 3'
    }
  ];

  answers: string[] = [];
  timer: number = 40;
  interval: any;
  score: number = 0;
  currentIndex: number = 0;
  selectedOptions: string[] = new Array(this.questions.length).fill(null);

  constructor(private navCtrl: NavController, private navigationService: NavigationService) { }

  ngOnInit() {
    this.shuffleQuestions();
    this.questions.forEach(question => {
      question.options = this.shuffleArray(question.options);
    });
    this.startTimer();
  }  

  goHome(): void {
    this.navigationService.goHome();
  }

  goBack(): void {
    this.navCtrl.back();
  }

  navigateToInicioSesion(): void {
    this.navCtrl.navigateForward('/inicio-sesion');
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        clearInterval(this.interval);
        this.finishQuiz();
      }
    }, 1000);
  }

  selectAnswer(questionIndex: number, answer: string) {
    this.answers[questionIndex] = answer;
    this.selectedOptions[questionIndex] = answer;
  }

  isSelected(questionIndex: number, answer: string): boolean {
    return this.selectedOptions[questionIndex] === answer;
  }

  calculateScore() {
    const correctAnswers = this.questions.filter((q, index) => q.correct === this.answers[index]).length;
    this.score = correctAnswers * this.timer * 40;
  }

  finishQuiz() {
    clearInterval(this.interval);
    this.calculateScore();
    this.navCtrl.navigateForward('/resultado', {
      queryParams: {
        score: this.score,
        correctAnswers: this.answers.filter((answer, index) => answer === this.questions[index].correct).length,
        level: 2,
        gameType: 'inundacion'
      }
    });
  }  

  nextSection() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    }
  }

  prevSection() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
    }
  }

  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
}
