import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css']
})
export class LoadingScreenComponent implements OnInit {
  public body = document.getElementsByTagName('body')[0];
  @Input() text: string = '';

  constructor() { }

  ngOnInit(): void {   
    this.body.classList.add('loading');
  }

  ngOnDestroy(): void {
    this.body.classList.remove('loading');
  }

}
