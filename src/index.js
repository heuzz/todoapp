import { log } from './utils';
import './app.css';

const todos = [
    {tilte: '먹기', isDone: false},
    {tilte: '놀기', isDone: false}
];

const printTodos = () => {

}
const $form = document.querySelector('.new-task');
const $input = document.querySelector('.new-task > input');

$form.addEventListener('submit',(event)=>{
    event.preventDefault();

    console.log($input.value);

    const todo = {tilte: $input.value, isDone: false}
    todos.push(todo);
    console.log(todos);

    $input.value = '';


});

