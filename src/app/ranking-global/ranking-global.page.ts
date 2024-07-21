import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ranking-global',
  templateUrl: './ranking-global.page.html',
  styleUrls: ['./ranking-global.page.scss'],
})
export class RankingGlobalPage implements OnInit {

  sections = [
    {
      title: 'Ranking',
      subtitle: 'Inundación',
      players: [
        { name: 'Otro', level1: 100, level2: 200, level3: 300, total: 600 },
        { name: 'Otro', level1: 90, level2: 180, level3: 270, total: 540 },
        { name: 'Otro', level1: 80, level2: 160, level3: 240, total: 480 },
        { name: 'Otro', level1: 70, level2: 140, level3: 210, total: 420 },
        { name: 'Tu', level1: 60, level2: 120, level3: 180, total: 360 }
      ]
    },
    {
      title: 'Ranking',
      subtitle: 'Deslizamiento de Tierra',
      players: [
        { name: 'Otro', level1: 110, level2: 210, level3: 310, total: 630 },
        { name: 'Otro', level1: 100, level2: 190, level3: 280, total: 570 },
        { name: 'Otro', level1: 90, level2: 170, level3: 250, total: 510 },
        { name: 'Otro', level1: 80, level2: 150, level3: 220, total: 450 },
        { name: 'Tu', level1: 70, level2: 130, level3: 200, total: 400 }
      ]
    }
  ];

  currentIndex = 0;

  title: string = this.sections[this.currentIndex].title;
  subtitle: string = this.sections[this.currentIndex].subtitle;
  players = this.sections[this.currentIndex].players;

  constructor(private navCtrl: NavController) { }

  ngOnInit() { }

  goBack() {
    this.navCtrl.back();
  }

  navigateToInicioSesion() {
    this.navCtrl.navigateForward('/inicio-sesion');
  }

  nextSection() {
    if (this.currentIndex < this.sections.length - 1) {
      this.currentIndex++;
      this.updateSection();
    }
  }

  prevSection() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateSection();
    }
  }

  updateSection() {
    const section = this.sections[this.currentIndex];
    this.title = section.title;
    this.subtitle = section.subtitle;
    this.players = section.players;
  }
}

