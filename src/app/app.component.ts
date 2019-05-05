import {Component} from '@angular/core';
import {Model, TodoItem} from './model';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();

  getName() {
    return this.model.user;
  }

  getTodoItems() : TodoItem[] {
    return this.model.items.filter(item => !item.done);
  }

  addItem(newItem : HTMLInputElement) {
    if (newItem.value != "") {
      this.model.items.push(new TodoItem(newItem.value, false));
    }
  }
}
