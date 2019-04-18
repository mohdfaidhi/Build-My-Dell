import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UserProfileComponent implements OnInit {

  images: any = []

  id: string

  constructor(private imageService: ImageService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit() {
    this.imageService.getImages(this.id).subscribe(images => {
      this.images = images
    })
  }
}
