let state;

const setState = (def = true) => {
    if (def) {
        state = 0;
    } else {
        state++;
    }
    console.log(state);
    document.querySelector('#root').innerHTML = "";
    data.forEach((s, nr) => {
        if (state >= nr) {
            Elem(s, 'h1', nr % 2 === 0 ? 'pink' : 'goth')
        }
    });
}

document.querySelector('button').addEventListener('click', () => {
    setState(false);
})

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

setState(true);