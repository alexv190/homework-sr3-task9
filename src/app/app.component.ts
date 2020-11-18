import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homework-sr3-task9';

  public myModel: string
  public modelWithValue: string
  public mask: Array<string | RegExp>


  constructor() { 
    this.mask = ['+', '7', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
    this.myModel = ''
    this.modelWithValue = '5554441234'
  }

  ngOnInit(): void {
  }
}
