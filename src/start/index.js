const Div = (t) => {
    const div = document.createElement('div');
    const text = document.createTextNode(t);
    div.appendChild(text);
    const root = document.querySelector('#root');
    root.appendChild(div);
}


const data = ['Labas, Bebrai', 'Nu sveikutis, Barsukai', 'Kur aini?', 'Namo ainu'];