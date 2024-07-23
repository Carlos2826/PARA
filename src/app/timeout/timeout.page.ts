import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../servicios/navigation.service';

@Component({
  selector: 'app-timeout',
  templateUrl: './timeout.page.html',
  styleUrls: ['./timeout.page.scss'],
})
export class TimeoutPage implements OnInit {
  jugabilidad: string = '';
  imageUrl: string = '';

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private navigationService: NavigationService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.jugabilidad = params['jugabilidad'] || 'default';
      this.setImageUrl();
    });
  }

  setImageUrl() {
    if (this.jugabilidad === 'deslizamiento') {
      this.imageUrl = 'assets/img/timeout-deslizamiento.png';
    } else {
      this.imageUrl = 'assets/img/timeout-inundacion.png';
    }
  }

  retry() {
    this.navCtrl.back();
  }

  goToLevelSelection() {
    this.navCtrl.navigateForward('/seleccion-juego');
  }

  goHome() {
    this.navigationService.goHome();
  }
}

// startTimer() {
  // this.interval = setInterval(() => {
    // if (this.timer > 0) {
     //  this.timer--;
    // } else {
     //  clearInterval(this.interval);
     //  this.navCtrl.navigateForward('/timeout', {
      //   queryParams: {
       //    jugabilidad: 'inundacion' 
     //    }
     //  });
  //   }
 //  }, 1000);
// }

// timeOut() {
  // clearInterval(this.interval);
 //  this.navCtrl.navigateForward('/timeout');
// }
