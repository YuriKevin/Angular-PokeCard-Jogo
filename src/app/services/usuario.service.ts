import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { Card } from '../model/card';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario!:Usuario;
  
  constructor(private router:Router) {
    const usuarioString = localStorage.getItem('usuario');
    if (usuarioString) {
      this.usuario = JSON.parse(usuarioString) as Usuario;
      this.usuario.batalhaAtual = 31;
    }
    else{
      this.router.navigate(['/cadastro']);
    }
   }


  salvarUsuario(){
    localStorage.setItem('usuario', JSON.stringify(this.usuario));
  }
  setDeck(deck:Card[]){
    this.usuario.deck = deck;
  }
  addNovaCarta(card:Card){
    if (!this.usuario.cards.some(carta => carta.id === card.id)) {
      this.usuario?.cards.push(card);
    }
  }
  getTamanhoDeck(){
    return this.usuario.deck.length;
  }
}
