import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Joueur } from '../entities/joueur';

@Injectable()
export class RegisterService {

  players: Joueur[] = [];

  constructor(private _http: Http) { }

  public registerPlayer(name: string, image:string): Promise<Joueur> {
    const newPlayer: Joueur = {id:0, name: name, nombrePartie:0, victoires:0, avatar:image };
    return this._http.post("http://localhost:5000/api/pseudos", newPlayer)
                     .toPromise()
                     .then(res => {
                       var joueur : Joueur = res.json() as Joueur;
                       console.log(`Joueur : ${JSON.stringify(joueur)}`);
                       this.players.push(joueur);
                       console.log(`players : ${JSON.stringify(this.players)}`);
                       return joueur;
                     })
                     .catch(res => {
                       console.log(`Error : ${res}`);
                       return res;
                     })
  }

  public updatePlayer(player: Joueur): Promise<Joueur> {
    console.log(`Update joueur : ${JSON.stringify(player)}`);
    return this._http.put(`http://localhost:5000/api/pseudos/${player.id}`, player)
                     .toPromise()
                     .then(res => res.json() as Joueur);
  }

  public getPlayer(): Promise<Joueur[]> {
    return this._http.get("http://localhost:5000/api/pseudos")
                     .toPromise()
                     .then(res => res.json() as Joueur[]);
  }
}
