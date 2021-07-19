import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onAddPokemon}) {

const [formData, setFormData] = useState({
  name: "",
  hp: 0,
  frontUrl: "",
  backUrl: ""
})
// {
//   "id": 150,
//   "name": "mewtwo",
//   "hp": 106,
//   "sprites": {
//     "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
//     "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/150.png"
//   }

const handleChange = (event) => {
  debugger
  setFormData({
    ...formData,
    [event.target.name]: event.target.value
  })
}

const handleSubmit = (event) => {
  event.preventDefault()
  onAddPokemon({
    name: formData.name,
    hp: formData.hp,
    sprites: {
      front: formData.frontUrl,
      back: formData.backUrl
    }
  })

}



  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid 
          label="Name" 
          placeholder="Name" 
          name="name" 
          value={formData.name} onChange={handleChange} />
          <Form.Input 
          fluid label="hp" 
          placeholder="hp" 
          name="hp" 
          value={formData.hp} onChange={handleChange} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl" value={formData.frontUrl} onChange={handleChange} 
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl" value={formData.backUrl} onChange={handleChange} 
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
