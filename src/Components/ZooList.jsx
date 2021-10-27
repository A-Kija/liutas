import ZooAnimal from "./ZooAnimal";

function ZooList({animals}) {

    return (
        <div className="zoo__list">
            {animals.map(animal => <ZooAnimal key={animal.id} animal={animal}></ZooAnimal>)}
        </div>
    )
}

export default ZooList;