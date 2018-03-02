import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Joueur } from './entities/joueur';
import { RegisterService } from './register/register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RegisterService]
})

export class AppComponent {

  joueur1 : Joueur;
  joueur2 : Joueur;
  activePlayer : Joueur;
  players : Joueur[];

  constructor(title: Title, private _registerService: RegisterService) {
    title.setTitle("Jeu du morpion");
    this._registerService.getPlayer()
                         .then(res => {
                           this.players = res;
                           this.joueur1 = (res.length>0) ? res[0] : null;
                           this.joueur2 = (res.length>0) ? res[0] : null;
                           console.log(`res: ${JSON.stringify(res)}`);
                          });
  }

  public addPlayer(event) {
    const playerToAdd: Joueur = event;

    this.players.push(playerToAdd);
  }

  public selectPlayer1(playerId:number)
  {
    this.joueur1 = this.players.filter(value => value.id == playerId )[0];
  }

  public selectPlayer2(playerId:number)
  {
    this.joueur2 = this.players.filter(value => value.id == playerId )[0];
  }
}
