import { Component, Input, EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'app-username',
    template: `
    <p (click)="onUsernameClicked()">{{username}}</p>
    
    `
})

//Basically, it is what props work in Vue and React frameworks.
export class UsernameComponent { //This property is an input from core

    @Input() username:string ='Shijunn O';
    @Output() userClicked = new EventEmitter<string>() //Output our event to the outside

    onUsernameClicked () {
        this.userClicked.emit(this.username)
    }
}