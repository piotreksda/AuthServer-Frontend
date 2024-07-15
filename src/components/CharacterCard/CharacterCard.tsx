import "./CharacterCard.css";

interface CharacterCartProps {
    image: string;
    name: string;
    type: string;
  }

export default function CharacterCart({image, name, type} : CharacterCartProps){
    return(
        <div className="characterCart">
            <h2 className="characterCartTitle">{name}</h2>
            {/* <div className="characterCartDetails">{type}</div> */}
            <img src={image} alt={`${name} image`}/>
        </div>
    );
}