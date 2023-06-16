import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsServices } from '../services/face-snaps.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
 
  faceSnap!: FaceSnap;
  
  // title!: string;
  // description!: string;
  // createdDate!: D  ate;
  // snaps!: number;
  // imageUrl!:string;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsServices,
              private route: ActivatedRoute){ }

  ngOnInit(){
    // this.title = 'Archibald';
    // this.description = 'mon meilleur ami depuis tout petit!';
    // this.createdDate = new Date();
    // this.snaps =  6;
    // this.imageUrl = 'https://www.shutterstock.com/image-illustration/abstract-hologram-3d-circuitry-cpu-260nw-1935883087.jpg';
    this.buttonText = 'Oh Snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap(){
    if (this.buttonText === 'Oh Snap!')
    {
      // this.faceSnap.snaps++;
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'snap');
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'unsnap');
      this.buttonText = 'Oh Snap!'; 
    }
  }
}







