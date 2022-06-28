import TriviaItems from '../interfaces/TriviaItems';

const triviaItems: TriviaItems = {
  geology: [
    {
      question: 'Which country has the longest coastline?',
      choices: [
        {
          text: 'Japan'
        },
        {
          text: 'Italy'
        },
        {
          text: 'Greenland'
        },
        {
          text: 'Canada',
          isCorrect: true
        }
      ]
    },
    {
      question: 'What\'s the deepest oceanic trench on Earth?',
      choices: [
        {
          text: 'The Mariana Trench',
          isCorrect: true
        },
        {
          text: 'The Galapagos Trench'
        },
        {
          text: 'The Atlantic Trench'
        },
        {
          text: 'The Neptune Trench'
        }
      ]
    },
    {
      question: 'Which three of these are major types of rock?',
      choices: [
        {
          text: 'Rubella'
        },
        {
          text: 'Igneous',
          isCorrect: true
        },
        {
          text: 'Sedimentary',
          isCorrect: true
        },
        {
          text: 'Metamorphic',
          isCorrect: true
        }
      ]
    },
    {
      question: 'Which one of these layers is directly below Earth\'s crust?',
      choices: [
        {
          text: 'Outer core'
        },
        {
          text: 'Ionosphere'
        },
        {
          text: 'Inner core'
        },
        {
          text: 'Mantle',
          isCorrect: true
        }
      ]
    },
    {
      question: 'True or false. A stalagmite hangs from the ceiling of a cave.',
      choices: [
        {
          text: 'True'
        },
        {
          text: 'False',
          isCorrect: true
        }
      ]
    }
  ],
  animals: [
    {
      question: 'Which of these birds is the only one that can fly backward?',
      choices: [
        {
          text: 'Pigeon'
        },
        {
          text: 'Hummingbird',
          isCorrect: true
        },
        {
          text: 'Owl'
        },
        {
          text: 'Penguin'
        }
      ]
    },
    {
      question: 'What color is a polar bear\'s skin?',
      choices: [
        {
          text: 'White'
        },
        {
          text: 'Black',
          isCorrect: true
        },
        {
          text: 'Pink'
        },
        {
          text: 'Brown'
        }
      ]
    },
    {
      question: 'True or false? Crocodiles can stick out their tongue.',
      choices: [
        {
          text: 'True'
        },
        {
          text: 'False',
          isCorrect: true
        }
      ]
    },
    {
      question: 'Which two of these animals have tails?',
      choices: [
        {
          text: 'Gorilla'
        },
        {
          text: 'Giraffe',
          isCorrect: true
        },
        {
          text: 'Frog'
        },
        {
          text: 'Tiger',
          isCorrect: true
        }
      ]
    },
    {
      question: 'What\'s the largest member of the dolphin family?',
      choices: [
        {
          text: 'Killer whale',
          isCorrect: true
        },
        {
          text: 'Shark'
        },
        {
          text: 'Porpoise'
        },
        {
          text: 'Blue whale'
        }
      ]
    }
  ],
  space: [
    {
      question: 'What\'s the hottest planet in our solar system?',
      choices: [
        {
          text: 'Jupiter'
        },
        {
          text: 'Mars'
        },
        {
          text: 'Venus',
          isCorrect: true
        },
        {
          text: 'Mercury'
        }
      ]
    },
    {
      question: 'If the Sun were hollow how many Earths could fill its interior?',
      choices: [
        {
          text: '1,000,000',
          isCorrect: true
        },
        {
          text: '1,000'
        },
        {
          text: '50,000'
        },
        {
          text: '100'
        }
      ]
    },
    {
      question: 'Which three of these planets have rings around them?',
      choices: [
        {
          text: 'Neptune',
          isCorrect: true
        },
        {
          text: 'Jupiter',
          isCorrect: true
        },
        {
          text: 'Mars'
        },
        {
          text: 'Saturn',
          isCorrect: true
        }
      ]
    },
    {
      question: 'True or false? Earth has just one Moon.',
      choices: [
        {
          text: 'True',
          isCorrect: true
        },
        {
          text: 'False'
        }
      ]
    },
    {
      question: 'Which constellation resembles a winged horse?',
      choices: [
        {
          text: 'Taurus'
        },
        {
          text: 'The Big Dipper'
        },
        {
          text: 'Orion'
        },
        {
          text: 'Pegasus',
          isCorrect: true
        }
      ]
    }
  ]
}

export default triviaItems;
