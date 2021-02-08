import { Component, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public email: string;

  constructor() {
    this.title = 'Sebastian Avila';
    this.subtitle = 'Desarrollador web';
    this.email = 'sebastian@email.com';
  }

  ngOnInit(): void {
  }

}
