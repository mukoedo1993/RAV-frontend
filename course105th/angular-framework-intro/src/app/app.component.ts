import { Component } from '@angular/core';

//selector here works like a CSS selector.
//Add this component in a file when you can find app-root element.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-framework-intro';
  name ='Shijunn O';
  elements: number[] = []; //So, it is an array of numbers(TS is a strongly-typed language.)


  message = '';

  onChangeName() {
    this.name = 'Tom Wang';
  }

  onAddElement() {
    this.elements.push(this.elements.length + 1);
  }

  getColor(element: number) { //https://stackoverflow.com/questions/43064221/typescript-ts7006-parameter-xxx-implicitly-has-an-any-type
    return element % 2 == 0 ? 'green':'red';
  }

  onUserWasClicked (usrName: string) {
    alert(usrName)
  }
}
