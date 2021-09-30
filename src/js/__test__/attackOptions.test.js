import Bowerman from '../Bowerman';
import getAattackOptions from '../service';

test('test function getAttackOptions', () => {
  const obj = new Bowerman('Leon');
  expect(getAattackOptions(obj)).toEqual([
    {
      id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9, name: 'Нокаутирующий удар', icon: 'http://...', description: 'Описание недоступно',
    },
  ]);
});
