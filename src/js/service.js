export default function getAattackOptions(obj) {
  const arr = [];
  obj.special.forEach((element) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = element;
    arr.push({
      id, name, icon, description,
    });
  });
  return arr;
}
