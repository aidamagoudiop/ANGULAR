import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsServices{
    faceSnaps: FaceSnap[]= [
        {// new FaceSnap(
    title: 'Archibald',
    description: 'mon meilleur ami depuis tout petit!',
    imageUrl: 'https://www.shutterstock.com/image-illustration/abstract-hologram-3d-circuitry-cpu-260nw-1935883087.jpg',
    createdDate:  new Date(),
    snaps:  0,
    location: 'Paris'
     },

     {// new FaceSnap(new FaceSnap(
    title: 'vbnj',
    description:'xdfcgvhbjkl',
    imageUrl: 'https://www.shutterstock.com/image-illustration/abstract-hologram-3d-circuitry-cpu-260nw-1935883087.jpg',
    createdDate: new Date(),
    snaps:  0,
    location: 'Paris'
    },

    {// new FaceSnap(new FaceSnap(
      title: 'zsdfgjpo;l',
      description: 'wawsredtfyguhihjk!',
      imageUrl: 'https://www.shutterstock.com/image-illustration/abstract-hologram-3d-circuitry-cpu-260nw-1935883087.jpg',
      createdDate:   new Date(),
      snaps:  0,
      location: ''
    },
    {// new FaceSnap(
      title: 'Archibald',
      description: 'mon meilleur ami depuis tout petit!',
      imageUrl: 'https://www.shutterstock.com/image-illustration/abstract-hologram-3d-circuitry-cpu-260nw-1935883087.jpg',
      createdDate:  new Date(),
      snaps:  0,
      location: 'Paris'
       },
  
       {// new FaceSnap(new FaceSnap(
      title: 'vbnj',
      description:'xdfcgvhbjkl',
      imageUrl: 'https://www.shutterstock.com/image-illustration/abstract-hologram-3d-circuitry-cpu-260nw-1935883087.jpg',
      createdDate: new Date(),
      snaps:  0,
      location: 'Paris'
      },
  
      {// new FaceSnap(new FaceSnap(
        title: 'zsdfgjpo;l',
        description: 'wawsredtfyguhihjk!',
        imageUrl: 'https://www.shutterstock.com/image-illustration/abstract-hologram-3d-circuitry-cpu-260nw-1935883087.jpg',
        createdDate:   new Date(),
        snaps:  0,
        location: ''
      }

      ];

      getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
      }
}


