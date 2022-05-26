import { log } from './utils';
import './app.css';

const todos = [];

const $form = document.querySelector('.new-task');
const $input = document.querySelector('.new-task > input');

$form.addEventListener('submit',(event)=>{
    event.preventDefault();

    console.log($input.value);

    const todo = {tilte: $input.value, isDone: false}
    todos.push(todo);
    console.log(todos);

    
});

