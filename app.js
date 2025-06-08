
let FetchedGamedata
let newdata
let newID = ''
let editindex = undefined

// fetch data from localstorage
document.addEventListener('DOMContentLoaded', ()=>{
  fetchedgameDatabase()
})

function fetchedgameDatabase(){
  let QuizgameData = localStorage.getItem('QuizgameData')
  if(!QuizgameData){
    FetchedGamedata = {
      Name : 'QuizgameData',
      Scores : []
    }
    console.log('No Data')
  }
  else{
    FetchedGamedata = JSON.parse(QuizgameData)
    console.log(FetchedGamedata)
  }
}

//Name Insertion
function nameInsertion(name){
  let date = new Date()

  newdata = {
    Name : name,
    Score : 0,
    PageNo : 1,
    Subject : '',
    ID : `Test-${new Date().getTime()}`,
    SetofQuestion : [],
    Date : `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  }

  newID = newdata.ID
  FetchedGamedata.Scores.push(newdata)

  //pushes to localstorage
  localStorage.setItem('QuizgameData', JSON.stringify(FetchedGamedata))
  console.log(newdata)
}

const Entername = document.getElementById('enternamebutton');
const Name = document.getElementById('playername');

const Nameinsertionpanel = document.querySelector('.mainMenu');
const Loadingpanel = document.querySelector('.loading');
const topicspanel = document.querySelector('.topics');
const displayquestions = document.querySelector('.quizdisplay');

//add a name 
Entername.addEventListener('click', ()=>{

  if(Name.value == ''){
    alert('Please insert a Name')
  }
  else{
    nameInsertion(Name.value)
    Nameinsertionpanel.classList.add('hide')
    Loadingpanel.classList.remove('hide')

    setTimeout(()=>{
      Loadingpanel.classList.add('hide')
      topicspanel.classList.remove('hide')
      name.value = ''
      populatetopics()
    },2000)
  }

  
})


//All Question per Topic
let englishQuizQuestions = [
  {
    Question: "What is the synonym of 'happy'?",
    choices: ["Sad", "Joyful", "Angry", "Tired"],
    answer: "Joyful"
  },
  {
    Question: "What is the antonym of 'difficult'?",
    choices: ["Hard", "Easy", "Challenging", "Tough"],
    answer: "Easy"
  },
  {
    Question: "What is the plural form of 'child'?",
    choices: ["Childs", "Children", "Childes", "Child"],
    answer: "Children"
  },
  {
    Question: "What is the past tense of 'run'?",
    choices: ["Ran", "Running", "Runs", "Runned"],
    answer: "Ran"
  },
  {
    Question: "What is the opposite of 'fast'?",
    choices: ["Quick", "Slow", "Rapid", "Swift"],
    answer: "Slow"
  },
  {
    Question: "What is the meaning of the word 'benevolent'?",
    choices: ["Kind", "Mean", "Greedy", "Selfish"],
    answer: "Kind"
  },
  {
    Question: "What is the comparative form of 'good'?",
    choices: ["Better", "Best", "Gooder", "Great"],
    answer: "Better"
  },
  {
    Question: "Which word is a conjunction?",
    choices: ["And", "Run", "Happy", "Big"],
    answer: "And"
  },
  {
    Question: "Which sentence is grammatically correct?",
    choices: ["I has a book.", "She have a pen.", "He is playing.", "They was dancing."],
    answer: "He is playing."
  },
  {
    Question: "Choose the correct spelling:",
    choices: ["Receve", "Receive", "Recieve", "Receeve"],
    answer: "Receive"
  },
  {
    Question: "What is a noun?",
    choices: ["A person, place, or thing", "An action", "A describing word", "A feeling"],
    answer: "A person, place, or thing"
  },
  {
    Question: "What is the correct form of the verb in 'I ___ to the store yesterday'?",
    choices: ["Go", "Went", "Goes", "Going"],
    answer: "Went"
  },
  {
    Question: "What is the opposite of 'brave'?",
    choices: ["Courageous", "Fearful", "Strong", "Bold"],
    answer: "Fearful"
  },
  {
    Question: "What is a pronoun?",
    choices: ["A word that replaces a noun", "A describing word", "An action word", "A name"],
    answer: "A word that replaces a noun"
  },
  {
    Question: "Which sentence uses correct punctuation?",
    choices: ["Where are you", "Where are you?", "Where, are you.", "Where are, you!"],
    answer: "Where are you?"
  },
  {
    Question: "What is the superlative form of 'fast'?",
    choices: ["Fast", "Faster", "Fastest", "Speed"],
    answer: "Fastest"
  },
  {
    Question: "Which sentence is in passive voice?",
    choices: ["She wrote the book.", "The book was written by her.", "She is writing the book.", "She had written the book."],
    answer: "The book was written by her."
  },
  {
    Question: "Choose the correct plural form of 'goose':",
    choices: ["Gooses", "Geese", "Goosees", "Geeses"],
    answer: "Geese"
  },
  {
    Question: "Which word is an adjective?",
    choices: ["Quickly", "Beautiful", "Run", "Dog"],
    answer: "Beautiful"
  },
  {
    Question: "Which word is a preposition?",
    choices: ["Jump", "Under", "Quick", "She"],
    answer: "Under"
  },
  {
    Question: "What is the correct possessive form of 'dog'?",
    choices: ["Dogs", "Dog's", "Dog", "Dogs'"],
    answer: "Dog's"
  },
  {
    Question: "What is the correct article for 'apple'?",
    choices: ["A", "An", "The", "Some"],
    answer: "An"
  },
  {
    Question: "Which sentence uses the correct tense?",
    choices: ["I will goes to the store.", "I went to the store.", "I gone to the store.", "I going to the store."],
    answer: "I went to the store."
  },
  {
    Question: "Which is a homophone?",
    choices: ["Their/There", "Run/Walk", "Tall/Short", "Cold/Hot"],
    answer: "Their/There"
  },
  {
    Question: "What is the synonym of 'angry'?",
    choices: ["Calm", "Furious", "Happy", "Tired"],
    answer: "Furious"
  },
  {
    Question: "Which word is an interjection?",
    choices: ["Wow!", "Walk", "Soft", "He"],
    answer: "Wow!"
  },
  {
    Question: "Which is an example of an idiom?",
    choices: ["Raining cats and dogs", "Walking to the park", "Eating food", "Speaking loudly"],
    answer: "Raining cats and dogs"
  },
  {
    Question: "What is the base form of the verb 'driven'?",
    choices: ["Driving", "Drove", "Drive", "Drives"],
    answer: "Drive"
  },
  {
    Question: "Which sentence uses an oxymoron?",
    choices: ["He is clearly confused.", "She walked home.", "They laughed loudly.", "She loves reading."],
    answer: "He is clearly confused."
  }
];

let mathQuizQuestions = [
  {
    Question: 'What is 7 × 8?',
    choices: [54, 56, 64, 58],
    answer: 56
  },
  {
    Question: 'What is the square root of 81?',
    choices: [7, 8, 9, 10],
    answer: 9
  },
  {
    Question: 'What is 12 ÷ 4?',
    choices: [2, 3, 4, 6],
    answer: 3
  },
  {
    Question: 'What is 5²?',
    choices: [10, 15, 20, 25],
    answer: 25
  },
  {
    Question: 'What is 15 × 3?',
    choices: [30, 45, 50, 60],
    answer: 45
  },
  {
    Question: 'Solve: 24 + 17',
    choices: [41, 40, 42, 39],
    answer: 41
  },
  {
    Question: 'Solve: 8 × 5 - 10',
    choices: [30, 35, 40, 25],
    answer: 30
  },
  {
    Question: 'What is the cube of 4?',
    choices: [12, 16, 64, 24],
    answer: 64
  },
  {
    Question: 'What is the next prime number after 11?',
    choices: [12, 13, 14, 15],
    answer: 13
  },
  {
    Question: 'Solve: (10 + 5) × 2',
    choices: [25, 30, 35, 20],
    answer: 30
  },
  {
    Question: 'What is the greatest common factor of 18 and 24?',
    choices: [2, 3, 6, 12],
    answer: 6
  },
  {
    Question: 'What is the least common multiple of 4 and 6?',
    choices: [12, 24, 8, 6],
    answer: 12
  },
  {
    Question: 'Solve: 144 ÷ 12',
    choices: [12, 14, 16, 10],
    answer: 12
  },
  {
    Question: 'What is the area of a rectangle with length 7 and width 3?',
    choices: [21, 24, 14, 10],
    answer: 21
  },
  {
    Question: 'What is the perimeter of a square with side length 5?',
    choices: [10, 15, 20, 25],
    answer: 20
  },
  {
    Question: 'Solve: 50% of 80',
    choices: [20, 30, 40, 50],
    answer: 40
  },
  {
    Question: 'What is the sum of the interior angles of a triangle?',
    choices: ['90°', '180°', '270°', '360°'],
    answer: '180°'
  },
  {
    Question: 'What is the volume of a cube with side length 4?',
    choices: [16, 32, 64, 48],
    answer: 64
  },
  {
    Question: 'Solve: 9 × 9',
    choices: [72, 81, 90, 99],
    answer: 81
  },
  {
    Question: 'What is 2⁵?',
    choices: [10, 16, 25, 32],
    answer: 32
  },
  {
    Question: 'What is 1/2 + 1/4?',
    choices: ['1/4', '1/2', '3/4', '1'],
    answer: '3/4'
  },
  {
    Question: 'What is the decimal representation of 3/8?',
    choices: [0.25, 0.375, 0.5, 0.625],
    answer: 0.375
  },
  {
    Question: 'Solve: 3³',
    choices: [9, 27, 36, 81],
    answer: 27
  },
  {
    Question: 'What is the square root of 100?',
    choices: [8, 9, 10, 12],
    answer: 10
  },
  {
    Question: 'What is the hypotenuse of a right triangle with legs of length 3 and 4?',
    choices: [5, 6, 7, 8],
    answer: 5
  },
  {
    Question: 'What is the value of π (pi) rounded to two decimal places?',
    choices: [3.12, 3.14, 3.16, 3.18],
    answer: 3.14
  },
  {
    Question: 'Solve: (6 × 3) + (4 × 2)',
    choices: [20, 22, 24, 26],
    answer: 26
  },
  {
    Question: 'Solve: 75 ÷ 5',
    choices: [10, 15, 20, 25],
    answer: 15
  },
  {
    Question: 'What is the square of 11?',
    choices: [99, 101, 121, 132],
    answer: 121
  }
];

let scienceQuizQuestions = [
  {
    Question: 'Which planet is known as the Red Planet?',
    choices: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    answer: 'Mars'
  },
  {
    Question: 'What is the chemical symbol for water?',
    choices: ['O', 'H', 'H₂O', 'HO'],
    answer: 'H₂O'
  },
  {
    Question: 'What is the powerhouse of the cell?',
    choices: ['Nucleus', 'Mitochondria', 'Ribosome', 'Chloroplast'],
    answer: 'Mitochondria'
  },
  {
    Question: 'What is the boiling point of water at standard atmospheric pressure?',
    choices: ['0°C', '50°C', '100°C', '200°C'],
    answer: '100°C'
  },
  {
    Question: 'What is the largest organ in the human body?',
    choices: ['Heart', 'Liver', 'Skin', 'Lungs'],
    answer: 'Skin'
  },
  {
    Question: 'What gas do plants use for photosynthesis?',
    choices: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
    answer: 'Carbon Dioxide'
  },
  {
    Question: 'Which vitamin is mainly obtained from sunlight?',
    choices: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'],
    answer: 'Vitamin D'
  },
  {
    Question: 'What is the smallest unit of matter?',
    choices: ['Molecule', 'Atom', 'Electron', 'Proton'],
    answer: 'Atom'
  },
  {
    Question: 'What force keeps planets in orbit around the sun?',
    choices: ['Magnetic Force', 'Gravity', 'Electric Force', 'Friction'],
    answer: 'Gravity'
  },
  {
    Question: 'Which part of the plant absorbs water from the soil?',
    choices: ['Stem', 'Roots', 'Leaves', 'Flowers'],
    answer: 'Roots'
  },
  {
    Question: 'What type of rock is formed from cooled lava?',
    choices: ['Sedimentary', 'Metamorphic', 'Igneous', 'Fossil'],
    answer: 'Igneous'
  },
  {
    Question: 'What is the main gas found in Earth’s atmosphere?',
    choices: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
    answer: 'Nitrogen'
  },
  {
    Question: 'What is the process by which plants make their own food?',
    choices: ['Respiration', 'Photosynthesis', 'Digestion', 'Fermentation'],
    answer: 'Photosynthesis'
  },
  {
    Question: 'What organ pumps blood throughout the body?',
    choices: ['Lungs', 'Brain', 'Heart', 'Liver'],
    answer: 'Heart'
  },
  {
    Question: 'Which blood type is considered the universal donor?',
    choices: ['A', 'B', 'AB', 'O'],
    answer: 'O'
  },
  {
    Question: 'What is the chemical formula for salt?',
    choices: ['NaCl', 'H₂O', 'CO₂', 'O₂'],
    answer: 'NaCl'
  },
  {
    Question: 'What is the study of living organisms called?',
    choices: ['Physics', 'Biology', 'Chemistry', 'Astronomy'],
    answer: 'Biology'
  },
  {
    Question: 'Which animal is known for having the largest brain in proportion to its body?',
    choices: ['Elephant', 'Dolphin', 'Human', 'Octopus'],
    answer: 'Dolphin'
  },
  {
    Question: 'What part of the eye controls the amount of light that enters?',
    choices: ['Retina', 'Lens', 'Cornea', 'Iris'],
    answer: 'Iris'
  },
  {
    Question: 'What is the center of an atom called?',
    choices: ['Proton', 'Electron', 'Neutron', 'Nucleus'],
    answer: 'Nucleus'
  },
  {
    Question: 'What is the unit of measurement for electrical resistance?',
    choices: ['Volt', 'Ampere', 'Ohm', 'Watt'],
    answer: 'Ohm'
  },
  {
    Question: 'What type of energy is stored in food?',
    choices: ['Kinetic', 'Thermal', 'Chemical', 'Magnetic'],
    answer: 'Chemical'
  },
  {
    Question: 'What part of the body produces insulin?',
    choices: ['Heart', 'Liver', 'Pancreas', 'Kidneys'],
    answer: 'Pancreas'
  },
  {
    Question: 'What is Earth’s outermost layer called?',
    choices: ['Core', 'Mantle', 'Crust', 'Atmosphere'],
    answer: 'Crust'
  },
  {
    Question: 'Which element is used in pencil lead?',
    choices: ['Lead', 'Carbon', 'Graphite', 'Sulfur'],
    answer: 'Graphite'
  },
  {
    Question: 'What phenomenon causes day and night?',
    choices: ['Moon Phases', 'Earth’s Rotation', 'Solar Wind', 'Gravity'],
    answer: 'Earth’s Rotation'
  },
  {
    Question: 'Which body system is responsible for transporting oxygen through the body?',
    choices: ['Digestive System', 'Nervous System', 'Circulatory System', 'Skeletal System'],
    answer: 'Circulatory System'
  },
  {
    Question: 'What color does litmus paper turn in an acid?',
    choices: ['Blue', 'Red', 'Green', 'Yellow'],
    answer: 'Red'
  },
  {
    Question: 'What is the process where water changes from liquid to gas?',
    choices: ['Condensation', 'Evaporation', 'Melting', 'Freezing'],
    answer: 'Evaporation'
  }
];

//Topics
const topics = ['Mathematics', 'Science', 'English']
const navfortopics = document.getElementById('alltopics');



//populate topics
function populatetopics(){
  let buttonsfornav = '';

  topics.forEach(e => {
    buttonsfornav += `<button class='buttontopics' data-topic="${e}">${e}</button>`;
  });

  navfortopics.innerHTML = buttonsfornav;
  let buttontopics = document.querySelectorAll('.buttontopics');

  //topic buttons functions
  buttontopics.forEach(element => {
    
    element.addEventListener('click', (e)=>{
      let topic = element.dataset.topic
      
      let setofquestion = pickedtopic(topic)
      editindex = getindex(newID)
      console.log(editindex)

      //setting up the questions
      FetchedGamedata.Scores[editindex].SetofQuestion = setofquestion

      topicspanel.classList.add('hide')
      Loadingpanel.classList.remove('hide')
      setTimeout(() => {
        Loadingpanel.classList.add('hide')
        readallquestions()
      }, 2000);
    })
  });
}

//get the picked topic
function pickedtopic(topicpicked){

  let picked = topicpicked
  let pickedquestionarray = []
  // let shuffledquestions = []

  if(picked == 'Mathematics'){

    pickedquestionarray = mathQuizQuestions

    for(let i = 0; i < pickedquestionarray.length; i++){
      let randindex = Math.floor(Math.random() * pickedquestionarray.length);

      [pickedquestionarray[randindex],pickedquestionarray[i]] = 
        [pickedquestionarray[i],pickedquestionarray[randindex]]
    }
    
    return pickedquestionarray
  }
  else if(picked == 'Science'){
    pickedquestionarray = scienceQuizQuestions

    for(let i = 0; i < pickedquestionarray.length; i++){
      let randindex = Math.floor(Math.random() * pickedquestionarray.length);

      [pickedquestionarray[randindex],pickedquestionarray[i]] = 
        [pickedquestionarray[i],pickedquestionarray[randindex]]
    }
    
    return pickedquestionarray
  }
  else if(picked == 'English'){
    pickedquestionarray = englishQuizQuestions

    for(let i = 0; i < pickedquestionarray.length; i++){
      let randindex = Math.floor(Math.random() * pickedquestionarray.length);

      [pickedquestionarray[randindex],pickedquestionarray[i]] = 
        [pickedquestionarray[i],pickedquestionarray[randindex]]
    }
    
    return pickedquestionarray
  }
}

//get the index based on the ID
function getindex(id){

  let index
  
  FetchedGamedata.Scores.forEach(function(val,ind){
    let fetchedID = val.ID

    if(fetchedID == id){
      index = ind
    }

  })

  console.log(index)
  return index
}

const questionlabel = document.getElementById('question'); //question label
const questionchoices = document.querySelector('.choices'); //choice section
const finalscorepanel = document.querySelector('.finalscore'); //finalscore section
const namefinalscore = document.querySelector('.fullname'); //finalscore section name
const finalscorenum = document.querySelector('.score'); //finalscore section score
const newgamebutton = document.querySelector('.newtest'); //New test

//loading the set of questions
function readallquestions(){

  let pageNo = FetchedGamedata.Scores[editindex].PageNo
  let allquestions = FetchedGamedata.Scores[editindex].SetofQuestion
  let correctans = allquestions[pageNo].answer // correct answer

  if(pageNo <= 20){
    //setting the question and choicesw
    questionlabel.innerHTML = `${pageNo}. ${allquestions[pageNo].Question}`
    let allchoices = ''
    allquestions[pageNo].choices.forEach(e=>{
      allchoices += `<div class='choicesbtns' data-answer="${e}" >${e}</div>`
    })

    questionchoices.innerHTML = allchoices
    displayquestions.classList.remove('hide')
    console.log(FetchedGamedata)

    let choicesbtns = document.querySelectorAll('.choicesbtns')
    let correctanswerdisplay = document.getElementById('correctans')

    choicesbtns.forEach(e=>[

      e.addEventListener('click', ()=>{
        let answer = e.dataset.answer
        if(answer == correctans){
          FetchedGamedata.Scores[editindex].Score += 1
          FetchedGamedata.Scores[editindex].PageNo += 1
          correctanswerdisplay.innerHTML = `Correct Answer: ${correctans}`
          correctanswerdisplay.style.color = "green"
          correctanswerdisplay.classList.remove('hide')
          setTimeout(() => {
            correctanswerdisplay.classList.add('hide')
            readallquestions()
          }, 3000);
        }
        else{
          FetchedGamedata.Scores[editindex].PageNo += 1
          correctanswerdisplay.innerHTML = `Correct Answer: ${correctans}`
          correctanswerdisplay.style.color = "red"
          correctanswerdisplay.classList.remove('hide')
          setTimeout(() => {
            correctanswerdisplay.classList.add('hide')
            readallquestions()
          }, 3000);
        }
      })
    ])
  }else{
    displayquestions.classList.add('hide')
    namefinalscore.innerHTML = FetchedGamedata.Scores[editindex].Name
    finalscorenum.innerHTML = `You Scored : ${FetchedGamedata.Scores[editindex].Score}`
    finalscorepanel.classList.remove('hide')
    localStorage.setItem('QuizgameData', JSON.stringify(FetchedGamedata))
  }
  
}

//new game button
function Newgame(){
  finalscorepanel.classList.add('hide')
  Nameinsertionpanel.classList.remove('hide')
  fetchedgameDatabase()
}
newgamebutton.addEventListener('click', ()=>{
  Newgame()
})

//leaderboards
const leaderboardbutton = document.getElementById('leaderboardbutton')
const leaderboardcont = document.querySelector('.leaderboardcontainer')
const leaderboardpanel = document.querySelector('.leaderboards')
const backfromLB = document.querySelector('.backfromledearboards')

async function fetchedanddisplayleaderboards(){

  fetchedgameDatabase()
  let gamedata = FetchedGamedata.Scores
  let sortedgamedata = await gamedata.sort(function(a,b){return b.Score - a.Score })
  let newgamedata = ''

  sortedgamedata.forEach( e =>{
    newgamedata +=`<tr>
                    <td>${e.Name}</td>
                    <td>${e.Score}</td>
                  </tr>`
  })

  leaderboardcont.innerHTML = newgamedata
  leaderboardpanel.classList.remove('hide')
  console.log(sortedgamedata)

}

leaderboardbutton.addEventListener('click', ()=>{
  fetchedanddisplayleaderboards()
})

backfromLB.addEventListener('click', ()=>{
    leaderboardpanel.classList.add('hide')
})








