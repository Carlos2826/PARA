import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RankingGlobalPageRoutingModule } from './ranking-global-routing.module';
import { RankingGlobalPage } from './ranking-global.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RankingGlobalPageRoutingModule
  ],
  declarations: [RankingGlobalPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RankingGlobalPageModule {}
