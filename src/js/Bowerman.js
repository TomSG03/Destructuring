import Character from './Character';

export default class Bowerman extends Character {
  constructor(name) {
    super(name, 'Bowerman');
    this.attack = 25;
    this.defence = 25;
    this.special = [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
    ];
  }
}
