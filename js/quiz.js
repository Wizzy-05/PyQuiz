'use strict';
const Questions = [{
  title: 'Who created the PEP20?',
  answers: ['Tim Berners Lee', 'Robert', 'John Murphy', 'Tim Peters'],
  value: 'D'
}, {
  title: 'PEP20 is also known as ...?',
  answers: ['The Zen of Python', 'The foobar to Python', 'PyDocs of PEP', 'Module Stratarium'],
  value: 'A'
}, {
  title: 'Who created Python?',
  answers: ['Van der Waals', 'Guido van Rossum', 'Denis Ritchie', 'Bell Laboratories'],
  value: 'B'
}, {
  title: 'Python was named from ...?',
  answers: ['JAVA', 'CoffeeScript', 'A comedy show', 'A snake'],
  value: 'C'
}, {
  title: 'What keyword is used to create a variable',
  answers: ['var', 'datatype variable name', 'val', 'no keyword is used'],
  value: 'D'
}, {
  title:' Which operator has higher precedence in the following list',
  answers:['% (Modulus)', ' & (BitWise AND)', '** (Exponent)',' > (Comparison)'], 
  value:'D'
}, {
  title:'What is a correct syntax to output "Hello World" in Python?',
  answers:['Print("Hello World")','echo("Hello World");','echo "Hello World"','p("Hello World")'],
  value:'A'
}, {
  title:'How do you insert COMMENTS in python code?',
  answers:['/*This is a comment*/','//This is a comment','#This is a comment','#This is a comment#'],
  value:'C'
}, {
  title:'Which one is NOT a legal variable name?',
  answers:['Myvar','_myvar','my_var','my-var'],
  value:'D'
}, {
  title:'How do you create a variable with the numeric value 5?',
  answers:['x = 5','x = int(5)','The first two answers are correct','None of the above'],
  value:'C'
}, {
  title:'What is the correct file extension for Python files?',
  answers:['.pyth','.pt','.pyt','.py'],
  value:'D'
}, {
  title:'How do you create a variable with the floating number 2.8?',
  answers:['x = 2.8','x = float(2.8)','The first two options are correct','None of the above'],
  value:'C'
}, {
  title:'What is the correct syntax to output the type of a variable or object in Python?',
  answers:['print(type(x))','print(typeof(x))','print(typeOf(x))','print(typeof x)'],
  value:'A'
}, {
  title:'What is the correct way to create a function in Python?',
  answers:['function myfunction()','create myFunction()','def myFunction','use myFunction'],
  value:'C'
}, {
  title:'What is a correct syntax to return the first character in a string?',
  answers:['x = "Hello"[0]','x = sub("Hello",0,1)','x = "Hello".sub(0,1)','x = "[0] Hello"'],
  value:'A'
}, {
  title:'Which method can be used to remove any whitespace from both the beginning and the end of a string?',
  answers:['trim()','len()','ptrim()','strip()'],
  value:'D'
}, {
  title:'Which method can be used to return a string in upper case letters?',
  answers:['upper()','toUpperCase()','upperCase()','uppercase()'],
  value:'A'
}, {
  title:'Which method can be used to replace parts of a string?',
  answers:['replaceString()','repl()','switch()','replace()'],
  value:'D'
}, {
  title:'Which operator is used to multiply numbers?',
  answers:['%','*','#','x'],
  value:'B'
}, {
  title:'Which operator can be used to compare two values?',
  answers:['<>','><','=','=='],
  value:'D'
}, {
  title:'Which of these collections defines a LIST?',
  answers:['("apple", "Banana","Cherry")','["apple", "Banana","Cherry"]','{"name":"apple", "color":"green"}','{"apple", "Banana","Cherry"}'],
  value:'B'
}, {
  title:'Which of these collections defines a TUPLE?',
  answers:['["apple", "Banana","Cherry"]','("apple", "Banana","Cherry")','{"apple", "Banana","Cherry"}','{"name":"apple", "color":"green"}'],
  value:'B'
}, {
  title:'Which of these collections defines a SET?',
  answers:['{"apple", "Banana","Cherry"}','{"name":"apple", "color":"green"}','("apple", "Banana","Cherry")','["apple", "Banana","Cherry"]'],
  value:'A'
}, {
  title:'Which of these collections defines a DICTIONARY?',
  answers:['["apple", "Banana","Cherry"]','{"name":"apple", "color":"green"}','{"apple", "Banana","Cherry"}','("apple", "Banana","Cherry")'],
  value:'B'
}, {
  title:'Which collection is ordered, changeable, and allows duplicate members?',
  answers:['SET','TUPLE','DICTIONARY','LIST'],
  value:'D'
}, {
  title:'Which collection does not allow duplicate members?',
  answers:['TUPLE','SET','LIST','DICTIONARY'],
  value:'B'
}, {
  title:'How do you start writing an if statement in Python?',
  answers:['if x > y then:','if x > y:','if (x > y):','elif(x > y):'],
  value:'B'
}, {
  title:'How do you start writing a while loop in Python?',
  answers:['while(x > y)','x > y while {','while x > y:','while x > y {'],
  value:'C'
}, {
  title:'Which statement is used to stop a loop?',
  answers:['stop','break','return','exit'],
  value:'B'
}, {
  title:'How do you start writing a for loop in Python?',
  answers:['for each x in y:','for x > y:','for x in y:','foreach x in y:'],
  value:'B'
}];


const correctAnswers = ['A'].concat(Questions.map(item => item.value));
const userAnswers = [];
const WRAPPER = document.querySelector('.quiz-content');
const quizGroup = WRAPPER.querySelector('.quiz-group');
const quizheader = quizGroup.querySelector('.quiz-heading');
const divScore = document.querySelector('.score');
const result = [];

const FORM = document.querySelector('form');
const answerDivs = FORM.querySelectorAll('.answer-group');
const PREV = FORM.querySelector('button');
const NEXT = FORM.querySelector('button[type*="mit"');
var count = 0;
const SCORETEXT = document.querySelector('.score-reveal');
FORM.addEventListener('submit', e => {
  e.preventDefault();
  userAnswers.splice(count, 1, FORM.one.value);
  e.target.action = '';
  localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
  if (count < Questions.length) {
    if (!(count < 0)) {
      if (FORM.one.value == correctAnswers[count]) {
        result.push(FORM.one.value);
      }
      answerDivs.forEach((div, index) => {
        const label = div.querySelector('label');
        const input = div.querySelector('input');
        const eachAnswerList = Questions[count].answers;
        quizheader.textContent = Questions[count].title;
        label.textContent = eachAnswerList[index]
      });
      ++count;
    }
  } else if (count == Questions.length) {
    NEXT.textContent = 'Submit';
    localStorage.setItem('result', result.length);
  } else {
    document.location.reload();
  }
  FORM.reset();

});
PREV.addEventListener('click', e => {
  count = count - 1;
  if (count > 0) {
    answerDivs.forEach((div, index) => {
      const label = div.querySelector('label');
      const input = div.querySelector('input');

      const eachAnswerList = Questions[count - 1].answers;
      quizheader.textContent = Questions[count - 1].title;
      label.textContent = eachAnswerList[index]
    })
    localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
    userAnswers.splice(count + 1, 1, FORM.one.value);
    NEXT.textContent = 'Next';
  } else if (count == 0) {
    userAnswers.splice(count + 1, 1, FORM.one.value);
    localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
    localStorage.setItem('count', count);
    window.location.reload();
    count = localStorage.getItem('count');
  }
});
NEXT.addEventListener('click', e => {
  if (e.target.textContent.toLowerCase() == 'submit') {
    divScore.classList.add('score');
    divScore.classList.remove('remove');

    divScore.style.cssText = 'display: flex;'
    console.log(localStorage.getItem('result'))
    SCORETEXT.textContent = Math.round((localStorage.getItem('result') / Questions.length) * 100);
  }

});
divScore.addEventListener('click', e => {
  divScore.classList.remove('score');
  divScore.classList.add('remove');
  setTimeout(() => {
    divScore.style.cssText = 'display: none;'
  }, 800)
});