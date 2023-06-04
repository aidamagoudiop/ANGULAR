import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;

  // title!: string;
  // description!: string;
  // createdDate!: Date;
  // snaps!: number;
  // imageUrl!:string;
  buttonText!: string;

  ngOnInit(){
    // this.title = 'Archibald';
    // this.description = 'mon meilleur ami depuis tout petit!';
    // this.createdDate = new Date();
    // this.snaps =  6;
    // this.imageUrl = 'https://www.shutterstock.com/image-illustration/abstract-hologram-3d-circuitry-cpu-260nw-1935883087.jpg';
    this.buttonText = 'Oh Snap!';
  }

  onSnap(){
    if (this.buttonText === 'Oh Snap!')
    {
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!'; 
    }
  }
}



