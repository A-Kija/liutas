const Elem = (t, el, className) => {
    const div = document.createElement(el); // sukuria tuscia div arba p arba a
    const text = document.createTextNode(t); // sukuria teksta
    const root = document.querySelector('#root'); // surandam vieta
    root.appendChild(div); // pridedam i matoma narsykleje vieta
    div.appendChild(text); // pridedam teksta i elementa
    div.classList.add(className);
}


const data = ['Labas, Bebrai', 'Nu sveikutis, Barsukai', 'Kur aini?', 'Namo ainu'];

// const a = salyga ? taip : ne;

data.forEach((s, nr) => Elem(s, 'h1', nr % 2 === 0 ? 'pink' : 'goth'));