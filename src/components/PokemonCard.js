import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {

  const [sprites, setSprites] = useState(true)
  
  const handleSprites = () => {
    setSprites(!sprites)
  }
  


  return (
    <Card>
      <div onClick={handleSprites}>
        <div className="image">
          <img src={sprites ? pokemon.sprites.front : pokemon.sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
