import { Injectable } from '@angular/core';

@Injectable()
export class SettingsProvider {
  levels : string[] = [
    'Facile',
    'Intermédiaire',
    'Difficile'
  ];

  categories : string[] = [
    'N\'importe',
    'Sport',
    'Art',
    'Histoire'
  ];

  effects : string[] = [
    'Aucun',
    'Sons',
    'Sons et vibrations'
  ];

  options = {
    level: this.levels,
    category: this.categories,
    effect: this.effects
  };

  currentIndexes = {
    level: 0,
    category: 0,
    effect: 0
  };

  playerData = {
    life: 3,
    joker: 2,
    score: 0
  }

  constructor() {}

  getLevels(): string[] {
    return this.levels;
  }

  getCategories(): string[] {
    return this.categories;
  }

  getEffects(): string[] {
    return this.effects;
  }

  getOptions(): any {
    return this.options;
  }

  getPlayerData(): any {
    return this.playerData;
  }

  getCurrentIndexes(): any {
    return this.currentIndexes;
  }

  getCurrentIndex(type: string): number {
    return this.currentIndexes[type];
  }

  setCurrentIndex(type: string, index: number): number {
    this.currentIndexes[type] = index;
    return this.currentIndexes[type];
  }

  // setPlayerData(type: string, val: number): any {
  //   this.playerData[type] = val;
  //   return this.playerData
  // }

  setPlayerData(data: any): any {
    this.playerData = data;
    return this.playerData;
  }

}
