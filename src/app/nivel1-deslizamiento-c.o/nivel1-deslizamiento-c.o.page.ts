import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationService } from '../servicios/navigation.service';

interface SentencePart {
  text: string;
  blank: boolean;
  id?: number;
}

interface Question {
  text: string;
  sentence: SentencePart[];
  options: string[];
  correct: string[];
}

@Component({
  selector: 'app-nivel1-deslizamiento-c.o',
  templateUrl: './nivel1-deslizamiento-c.o.page.html',
  styleUrls: ['./nivel1-deslizamiento-c.o.page.scss'],
})
export class Nivel1DeslizamientoCOPage implements OnInit {
  questions: Question[] = [
    {
      text: 'Completa la oración:',
      sentence: [
        { text: 'Esta es una ', blank: false },
        { text: '', blank: true, id: 1 },
        { text: ' de prueba para ', blank: false },
        { text: '', blank: true, id: 2 },
        { text: ' el juego.', blank: false }
      ],
      options: ['palabra1', 'palabra2', 'palabra3', 'palabra4'],
      correct: ['palabra1', 'palabra2']
    },
    {
      text: 'Completa la oración:',
      sentence: [
        { text: 'El ', blank: false },
        { text: '', blank: true, id: 1 },
        { text: ' es azul.', blank: false }
      ],
      options: ['cielo', 'mar', 'sol', 'tierra'],
      correct: ['cielo']
    },
    {
      text: 'Completa la oración:',
      sentence: [
        { text: 'El gato ', blank: false },
        { text: '', blank: true, id: 1 },
        { text: ' en el tejado.', blank: false }
      ],
      options: ['salta', 'corre', 'duerme', 'juega'],
      correct: ['salta']
    },
    {
      text: 'Completa la oración:',
      sentence: [
        { text: 'La ', blank: false },
        { text: '', blank: true, id: 1 },
        { text: ' está en el jardín.', blank: false }
      ],
      options: ['flor', 'mesa', 'piedra', 'fuente'],
      correct: ['flor']
    },
    {
      text: 'Completa la oración:',
      sentence: [
        { text: 'El perro ', blank: false },
        { text: '', blank: true, id: 1 },
        { text: ' en el parque.', blank: false }
      ],
      options: ['corre', 'ladra', 'salta', 'duerme'],
      correct: ['corre']
    }
  ];

  timer: number = 40;
  interval: any;
  score: number = 0;
  currentIndex: number = 0;
  selectedOptions: any = {};
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor(private navCtrl: NavController, private navigationService: NavigationService) { }

  ngOnInit() {
    this.shuffleQuestions();
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

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  drag(event: DragEvent, word: string) {
    event.dataTransfer?.setData('text', word);
  }

  drop(event: DragEvent) {
    event.preventDefault();
    const data = event.dataTransfer?.getData('text');
    const blankId = (event.target as HTMLElement).id;
    if (data) {
      this.selectedOptions[blankId] = data;
      (event.target as HTMLElement).innerText = data;
    }
  }

  calculateScore() {
    let correctAnswers = 0;
    this.questions.forEach((question, qIndex) => {
      question.sentence.forEach((part) => {
        if (part.blank && part.id !== undefined) {
          const blankId = 'blank-' + qIndex + '-' + part.id;
          if (this.selectedOptions[blankId] === question.correct[part.id - 1]) {
            correctAnswers++;
          }
        }
      });
    });
    this.score = correctAnswers * this.timer * 40;
  }

  finishQuiz() {
    clearInterval(this.interval);
    this.calculateScore();
    this.navCtrl.navigateForward('/resultado', {
      queryParams: {
        score: this.score,
        correctAnswers: this.score / (this.timer * 40)
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
}
