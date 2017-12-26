import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RegisterService } from './register.service';
import { Joueur } from '../entities/joueur';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

  @Output('onPlayerRegistered') onPlayerRegistered = new EventEmitter<Joueur>();

  constructor(private _registerService: RegisterService) { }

  ngOnInit() {
  }

  public registerPlayer(name: string, image: string) {
    this._registerService.registerPlayer(name, image)
                         .then(joueur => this.onPlayerRegistered.emit(joueur));
  }

}
