const { getId } = require('./utils');

//q1: create 5+ properties and 1+ methods
class ToDoItem {
  constructor(description, priorityLevel, due) {
    this.id = getId();
    this.description = description;
    this.priorityLevel = priorityLevel;
    this.isDone = false;
    this.due = due;
  }
  getDeadline() {
    return this.due;
  }
  markDone() {
    this.isDone = true;
  }
}

//q2: create 3+ properties and 6+ methods
class ToDoList {
  static #allLists = [];
  constructor(name = "This week's tasks", category = "school") { //default params
    this.id = getId();
    this.name = name;
    this.category = category;
    this.items = [];
    ToDoList.#allLists.push(this);
  }
  createItem(description, priorityLevel, due) {
    const task = new ToDoItem(description, priorityLevel, due);
    this.items.push(task);
    return task;
  }
  getItems() {
    return [...this.items];
  }
  getCompletedCount() {
    return [...this.items].filter((task) => task.isDone === true).length;
  }
  static list() {
    return [...ToDoList.#allLists];
  }
  static findBy(lookupId) {
    return ToDoList.#allLists.find(({ id }) => id === lookupId); //destructuring list.id
  }
  summary() {
    return `${this.name}: your to do list for ${this.category} includes ${this.items.join(', ')}.`
  }
};

module.exports = {
  ToDoItem,
  ToDoList
};