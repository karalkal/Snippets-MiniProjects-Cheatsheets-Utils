const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');

const quotes = [
  {
    id: 0,
    text: "PERFECT IS THE ENEMY OF GOOD.",
    author: "VOLTAIRE"
  },
  {
    id: 1,
    text: "I'M STILL LEARNING.",
    author: "MICHELANGELO"
  },
  {
    id: 2,
    text: "LIFE IS A JOURNEY, NOT A DESTINATION.",
    author: "RALPH WALDO EMERSON"
  },
  {
    id: 3,
    text: "LEARNING IS NOT ATTAINED BY CHANCE, IT MUST BE SOUGHT FOR WITH ARDOR AND ATTENDED TO WITH DILIGENCE.",
    text: "LIFE IS A JOURNEY, NOT A DESTINATION.",
    author: "ABIGAIL ADAMS",
  },
  {
    id: 4,
    text: "YESTERDAY I WAS CLEVER, SO I CHANGED THE WORLD. TODAY I AM WISE, SO I AM CHANGING MYSELF.",
    author: "RUMI",
  },
  {
    id: 5,
    text: "BE CURIOUS, NOT JUDGMENTAL.",
    author: "WALT WHITMAN",
  },
  {
    id: 6,
    text: "YOU DON'T HAVE TO BE GREAT TO START, BUT YOU HAVE TO START TO BE GREAT.",
    author: "ZIG ZIGLAR",
  },
  {
    id: 7,
    text: "BE STUBBORN ABOUT YOUR GOALS AND FLEXIBLE ABOUT YOUR METHODS.",
    author: "UNKNOWN",
  },
  {
    id: 8,
    text: "NOTHING WILL WORK UNLESS YOU DO.",
    author: "MAYA ANGELOU",
  },
  {
    id: 9,
    text: "NEVER GIVE UP ON A DREAM JUST BECAUSE OF THE TIME IT WILL TAKE TO ACCOMPLISH IT. THE TIME WILL PASS ANYWAY.",
    author: "EARL NIGHTINGALE",
  },
  {
    id: 10,
    text: "ANYONE WHO STOPS LEARNING IS OLD, WHETHER AT TWENTY OR EIGHTY.",
    author: "HENRY FORD",
  },
  {
    id: 11,
    text: "TELL ME AND I FORGET. TEACH ME AND I REMEMBER. INVOLVE ME AND I LEARN.",
    author: "BENJAMIN FRANKLIN",
  },
  {
    id: 12,
    text: "CHANGE IS THE END RESULT OF ALL TRUE LEARNING.",
    author: "LEO BUSCAGLIA",
  },
  {
    id: 13,
    text: "LIVE AS IF YOU WERE TO DIE TOMORROW. LEARN AS IF YOU WERE TO LIVE FOREVER.",
    author: "MAHATMA GANDHI",
  },
  {
    id: 14,
    text: "A LEARNING CURVE IS ESSENTIAL TO GROWTH.",
    author: "TAMMY BJELLAND"
  }
]

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/quotes', (req, res) => res.send(quotes))

app.get('/quotes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id > 14 || id < 0 || (!id && id !== 0)) {     // if falsy and not zero
    res.send("A Record with this ID does not exist\nPlease select a number in the range 0 - 15")
  } else {
    res.send(quotes[id]);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
