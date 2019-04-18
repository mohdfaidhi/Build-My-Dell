import { Component, OnInit } from '@angular/core';
import { UserListService } from '../user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomePageComponent implements OnInit {

  users: any = []

  constructor(private userListService: UserListService) { }

  ngOnInit(){
    this.userListService.getUsers().subscribe(users => {
      this.users = users
    })
  }
}
