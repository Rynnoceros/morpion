import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Joueur } from './entities/joueur';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  joueur1 : Joueur;
  joueur2 : Joueur;

  constructor(title: Title) {
    title.setTitle("Jeu du morpion")
  }

  public connectPlayer(event) {
    const playerToConnect: Joueur = event;

    if (!this.joueur1)
    {
      this.joueur1 = playerToConnect;
    }
    else
    {
      this.joueur2 = playerToConnect;
    }
  }
}
