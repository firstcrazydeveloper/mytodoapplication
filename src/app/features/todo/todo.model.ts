﻿export class Todo {
    id: number;
    completed: Boolean;
    editing: Boolean;
    isDeletd: Boolean;

    private _title: String;
    get title() {
        return this._title;
    }
    set title(value: String) {
        this._title = value.trim();
    }

    constructor(title: String) {
        this.completed = false;
        this.editing = false;
        this.title = title.trim();
    }
}