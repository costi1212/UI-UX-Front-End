import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(public httpClient:HttpClient) { }

  public getAllGames(){
    return this.httpClient.get("http://localhost:8080/GameBaron/Games/getGames");
  }

}
