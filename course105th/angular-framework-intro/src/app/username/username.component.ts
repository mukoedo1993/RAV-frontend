import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-username',
    template: `
    <p>{{username}}</p>
    
    `
})

//Basically, it is what props work in Vue and React frameworks.
export class UsernameComponent { //This property is an input from core
    @Input() username:string ='Shijunn O';
}