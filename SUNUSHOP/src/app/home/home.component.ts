import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  Produit:any;
  constructor(){}
  // voteArray: Array<boolean> =[];
  
  voteArray=[{
    id:1,
    etatProduit:false,
    name:"sac rouge"
  },
  {
    id:2,
    etatProduit:false,
    name:"sac vert"
  },
  {
    id:3,
    etatProduit:false,
    name:"sac rose"
  },
  {
    id:4,
    etatProduit:false,
    name:"sac meuve"
  },
  {
    id:5,
    etatProduit:false,
    name:"sac orange"
  },
  {
    id:6,
    etatProduit:false,
    name:"sac "
  }
]

  ngOnInit(): void {
      // this.voteArray = new Array<boolean>(5).fill(false);
  }

  verificationProduit($event:any,index:number){
    this.voteArray.map((data:any)=>{
      data.etatProduit = false;
    })
    this.voteArray[index].etatProduit=true;
  }
  // allowOneVote(){
  //   this.vote
  // }

}
