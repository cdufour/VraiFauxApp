export class Question {
  id: number;
  title: string;
  correct: boolean;
  image: string;
  comment: string;
  level: string;
  category: string;

  constructor(
    id: number,
    title: string,
    correct: boolean,
    image: string,
    comment: string,
    level: string,
    category: string) {
    this.id         = id,
    this.title      = title;
    this.correct    = correct;
    this.image      = image;
    this.comment    = comment;
    this.level      = level;
    this.category   = category;
  }

  getTitle() {
    return this.title;
  }


}
