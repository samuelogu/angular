import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  todos: Array<{ [key: string]: any; }>
  input:string

  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        title: 'Cras justo odio',
        isComplete: true
      },
      {
        title: 'Dapibus ac facilisis in',
        isComplete: false
      },
      {
        title: 'Morbi leo risus',
        isComplete: true
      }
    ]
  }

  addTodo() {
    if (!this.input) {
      alert('Todo is required!')
      return false
    }

    const newTodo = {
      title: this.input,
      isComplete: false
    }

    // const inputField:any = document.getElementById('todo')
    // console.log(inputField);

    this.todos.push(newTodo)
    this.input = ''

  }



}
