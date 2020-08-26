import '../css/component.css';

export const hola = (nombre) => {
  console.log('Creado un H1 desde js');
  const h1 = document.createElement('h1');
  h1.innerText = `Holaaaa ${nombre}`;
  document.body.append(h1);
};
