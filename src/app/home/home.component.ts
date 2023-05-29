import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GamesService} from "../services/games.service";
import {Game} from "../model/game";
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  games: Game[];

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;

  constructor(private htttpClient: HttpClient,
              private gamesService: GamesService) {
  }

  ngOnInit(): void {
    this.gamesService.getAllGames().subscribe((data: any) => {
        this.games = data
      },
      error => {
        console.log(error)
      })
    this.sortOptions = [
      {label: 'Price High to Low', value: '!price'},
      {label: 'Price Low to High', value: 'price'}
    ];



  }

  onSortChange(event:any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  getSeverity (game:Game) {
    if(game.itemsInStock > 500)
      return 'success'
    else
      if(game.itemsInStock == 0)
        return 'danger'
    return 'warning'
  };

  getStatus(game: Game){
    if(game.itemsInStock > 500)
      return 'INSTOCK'
    else
    if(game.itemsInStock == 0)
      return 'OUTOFSTOCK'
    return 'LOWSTOCK'
  }

}
