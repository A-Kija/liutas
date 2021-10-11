// import './App.css';

import Box from './Components/Box';
// import Simple from './Components/Simple';

// const a = 5;
// const b = 6;

const data = [
  {
    ls: '2px',
    boxColor: 'green',
    boxNumber: 68
  },
    {
    ls: '1px',
    boxColor: 'yellow',
    boxNumber: 45
  },
    {
    ls: '-2px',
    boxColor: 'white',
    boxNumber: 90
  },
    {
    ls: '4px',
    boxColor: 'pink',
    boxNumber: 101
  }
];


function App() {

  return (
    <>
    {data.map((box, index) => <Box key={index} boxColor={box.boxColor} ls={box.ls} boxNumber={box.boxNumber} />)}
    </>
  );

}

export default App;