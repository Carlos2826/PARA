import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ranking-global',
  templateUrl: './ranking-global.page.html',
  styleUrls: ['./ranking-global.page.scss'],
})
export class RankingGlobalPage {
  dropdownOpen = false;
  selectedCategory: string | null = null;
  selectedSubcategory: string | null = null;
  categories: string[] = ['Inundacion', 'Deslizamiento de Tierra'];
  subcategories: string[] = [];
  ranking: { name: string; level1: number; level2: number; level3: number; total: number; isUser?: boolean; }[] = [];

  constructor(private navCtrl: NavController) {
    // Datos de ejemplo
    this.ranking = [
      { name: 'Otro', level1: 0, level2: 0, level3: 0, total: 0 },
      { name: 'Otro', level1: 0, level2: 0, level3: 0, total: 0 },
      { name: 'Otro', level1: 0, level2: 0, level3: 0, total: 0 },
      { name: 'Otro', level1: 0, level2: 0, level3: 0, total: 0 },
      { name: 'Otro', level1: 0, level2: 0, level3: 0, total: 0 },
      { name: 'Otro', level1: 0, level2: 0, level3: 0, total: 0 },
      { name: 'Tu', level1: 0, level2: 0, level3: 0, total: 0, isUser: true },
    ];
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.dropdownOpen = false;
    this.subcategories = category === 'Inundacion' ? ['Opcion Multiple', 'Completar la Oracion'] : ['Opcion Multiple', 'Completar la Oracion'];
  }

  selectSubcategory(subcategory: string) {
    this.selectedSubcategory = subcategory;
    this.dropdownOpen = false;
    // Aquí podrías cargar los datos del ranking para la subcategoría seleccionada.
  }

  clearSelection() {
    this.selectedCategory = null;
    this.selectedSubcategory = null;
    this.subcategories = [];
  }

  goBack() {
    this.navCtrl.back();
  }
}

