import React, { Component } from 'react';
import {
  Link
}from 'react-router-dom'

class Questionnaire extends Component {

  constructor(){
    super();
    this.state={
  Questions:[
  {
    "question": "My favourite SW movie?",
    "input_name": "fav_mov",
    "anwsers": [
      {
        "label": "The Phantom Menace",
        "value": 0
      },
      {
        "label": "Attack of the clones",
        "value": 1
      },
      {
        "label": "Revenge of the Sith",
        "value": 2
      },
      {
        "label": "A new hope",
        "value": 3
      },
      {
        "label": "Empire strikes back",
        "value": 4
      },
      {
        "label": "Return of the jedi",
        "value": 5
      },
      {
        "label": "The force awakens",
        "value": 6
      }
    ]
  },
  {
    "question": "My Favourite Jedi master?",
    "input_name": "fav_jedi",
    "anwsers": [
      {
        "label": "Obi-Wan Kenobi",
        "value": 0
      },
      {
        "label": "Mace Windu",
        "value": 1
      },
      {
        "label": "Yoda",
        "value": 2
      },
      {
        "label": "#EmpireDidNothingWrong",
        "value": 3
      }
    ]
  },
  {
    "question": "My favourite Sith Lord?",
    "input_name": "fav_sith",
    "anwsers": [
      {
        "label": "Darth Sidious",
        "value": 0
      },
      {
        "label": "Count Dooku",
        "value": 1
      },
      {
        "label": "Darth Vader",
        "value": 2
      },
      {
        "label": "I’m in love with the light side of the force",
        "value": 3
      }
    ]
  },
  {
    "question": "My Favourite Planet?",
    "input_name": "fav_planet",
    "anwsers": [
      {
        "label": "Alderaan",
        "value": 0
      },
      {
        "label": "Tatooine",
        "value": 1
      },
      {
        "label": "Hoth",
        "value": 2
      },
      {
        "label": "Mustafar",
        "value": 3
      }
    ]
  },
  {
    "question": "Anakin Skywalker or Darth Vader?",
    "input_name": "force_select",
    "anwsers": [
      {
        "label": "Anakin",
        "value": 0
      },
      {
        "label": "Darth Vader",
        "value": 1
      }
    ]
  }
]
    };
  }

  render() {
    return (
      <div className="Questionnaire">
      <Link to="/"> <button>Nazad</button></Link>



      <form>
          {this.state.Questions.map((question,i)=>
              <div>
              <p>{question.question}</p>
                  {
                        (typeof(question.anwsers)==='object')?
                        <div>
                        {
                        question.anwsers.map((subRowData,k)=>
                        <div>  <input type="radio"/>{subRowData.label}</div>)
                        }
                        </div>
                        :
                        null
                  }
             </div>
          )}
      </form>

      </div>



    );
  }
}

export default Questionnaire;
