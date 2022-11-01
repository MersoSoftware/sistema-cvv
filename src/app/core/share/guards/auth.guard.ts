import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router:Router) { }

  canActivate(
    next:ActivatedRouteSnapshot, state:RouterStateSnapshot
  ):boolean{
    const token = window.localStorage.getItem('token');
    if(token){
      this.mostrarMenuEmitter.emit(true);
      return true;
    }else{
      this.mostrarMenuEmitter.emit(false);
      this.router.navigate(['login']);
      return false;
    }
  }
}
