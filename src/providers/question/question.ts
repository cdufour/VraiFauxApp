import { Injectable } from '@angular/core';
import { Question } from '../../model/Question';
import { questions } from '../../data/questions';

import { SettingsProvider } from '../settings/settings';

@Injectable()
export class QuestionProvider {
  questions: Question[] = [];

  constructor(private settingsProvider: SettingsProvider) {
    this.filterQuestions();
  }

  private filterQuestions(): Question[] {
    this.questions = questions.filter((q: Question) => {
      let filter1: boolean =
        q.level == this.settingsProvider.options.level[
          this.settingsProvider.currentIndexes.level
        ];

      let category = this.settingsProvider.options.category[
        this.settingsProvider.currentIndexes.category
      ];

      if (category == 'N\'importe') {
        return filter1;
      } else {
        return filter1 && q.category == category;
      }

    });
    console.log(this.questions);
    return this.questions;
  }

  getQuestions(): Question[] {
    return this.questions;
  }

  getRandom() {
    let index: number = Math.floor(Math.random() * (this.questions.length - 1));
    return this.questions[index];
  }

  removeQuestion(id: number): any {
    let index: number = -1;
    for (let i:number = 0; i < this.questions.length; i++) {
      if (this.questions[i].id == id) {
        index = i;
        break;
      }
    }
    this.questions.splice(index, 1);
    return this.questions.length;
  }


}
