import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private currentUserSubject: BehaviorSubject<Usuario>;
  public currentUser: Observable<Usuario>;

  constructor(private http: HttpClient, private roputer: Router) {
    this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue():Usuario{
    return this.currentUserSubject.getValue();
  }

  login(usuario:Usuario){

  }
}
