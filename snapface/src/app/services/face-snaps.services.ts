import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsServices{
    faceSnaps: FaceSnap[]= [
        {// new FaceSnap(
    id: 1,
    title: 'Archibald',
    description: 'mon meilleur ami depuis tout petit!',
    imageUrl: 'https://www.shutterstock.com/image-illustration/abstract-hologram-3d-circuitry-cpu-260nw-1935883087.jpg',
    createdDate:  new Date(),
    snaps:  0,
    location: 'Paris'
     },

     {// new FaceSnap(new FaceSnap(
    id: 2,
    title: 'vbnj',
    description:'xdfcgvhbjkl',
    imageUrl: 'https://www.shutterstock.com/image-illustration/abstract-hologram-3d-circuitry-cpu-260nw-1935883087.jpg',
    createdDate: new Date(),
    snaps:  0,
    location: 'Paris'
    },

    {// new FaceSnap(new FaceSnap(
      id: 3,
      title: 'zsdfgjpo;l',
      description: 'wawsredtfyguhihjk!',
      imageUrl: 'https://www.shutterstock.com/image-illustration/abstract-hologram-3d-circuitry-cpu-260nw-1935883087.jpg',
      createdDate:   new Date(),
      snaps:  0,
      location: ''
    },
    {// new FaceSnap(
      id: 4,
      title: 'Archibald',
      description: 'mon meilleur ami depuis tout petit!',
      imageUrl: 'https://www.shutterstock.com/image-illustration/abstract-hologram-3d-circuitry-cpu-260nw-1935883087.jpg',
      createdDate:  new Date(),
      snaps:  0,
      location: 'Paris'
       },
  
       {// new FaceSnap(new FaceSnap(
      id: 5,
      title: 'vbnj',
      description:'xdfcgvhbjkl',
      imageUrl: 'https://www.shutterstock.com/image-illustration/abstract-hologram-3d-circuitry-cpu-260nw-1935883087.jpg',
      createdDate: new Date(),
      snaps:  0,
      location: 'Paris'
      },
  
      {// new FaceSnap(new FaceSnap(
        id: 6,
        title: 'zsdfgjpo;l',
        description: 'wawsredtfyguhihjk!',
        imageUrl: 'https://www.shutterstock.com/image-illustration/abstract-hologram-3d-circuitry-cpu-260nw-1935883087.jpg',
        createdDate:   new Date(),
        snaps:  0
      }

      ];

      getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
      }

      // snapFaceSnapById(faceSnapId: number): void {
      //   const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
      //   if(faceSnap){
      //     faceSnap.snaps++;
      //   } else{
      //     throw new Error('FaceSnap non trouve!');
      //   }
      // }

      // unsnapFaceSnapById(faceSnapId: number): void {
      //   const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
      //   if(faceSnap){
      //     faceSnap.snaps--;
      //   } else{
      //     throw new Error('FaceSnap non trouve!');
      //   }
      // }


      getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if(!faceSnap){
          throw new Error('FaceSnap non trouve!');
        } else {
          return faceSnap;
        }
      }

      snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap' ): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
      }
      



}


