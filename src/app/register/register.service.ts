import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Joueur } from '../entities/joueur';

@Injectable()
export class RegisterService {

  players: Joueur[] = [];

  constructor(_http: Http) { }

  public registerPlayer(name: string, image:string): Promise<Joueur> {
    const newPlayer: Joueur = {nom: name, nombrePartie:0, victoires:0, image:image };
    this.players.push(newPlayer);
    return new Promise<Joueur>(resolve => {
      resolve(newPlayer);
    });
  }
}
