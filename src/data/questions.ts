import { Question } from '../model/Question';

export const questions: Question[] = [
  new Question(1, 'La France est un pays africain', true, '', '', 'Facile', 'Histoire'),
  new Question(2, 'Flaubert a écrit "Madame Claude"', false, '', '', 'Facile', 'Art'),
  new Question(3, 'Abdel est un stagiaire extraordinaire', true, '', 'Il allie rapidité et légèreté', 'Facile', 'Art'),
  new Question(4, 'Le prénom de Maupassant est Victor', false, 'C\'est Guy', '', 'Facile', 'Art'),
  new Question(5, 'Le PSG est une institution', false, '', 'Loin de là', 'Intermédiaire', 'Art'),
  new Question(6, 'La Juve a remporté 7 scudetti', true, '', '', 'Difficile', 'Sport'),
  new Question(7, 'La capitale du Portugal est Porto', false, 'C\'est Lisbonne', '', 'Difficile', 'Histoire'),
  new Question(8, 'Billy Jean est une chanson de Michael Jackson', true, '', '', 'Facile', 'Art'),
];
