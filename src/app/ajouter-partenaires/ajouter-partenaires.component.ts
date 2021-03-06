import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouter-partenaires',
  templateUrl: './ajouter-partenaires.component.html',
  styleUrls: ['./ajouter-partenaires.component.css']
})
export class AjouterPartenairesComponent implements OnInit {

  constructor() { }

 
  ngOnInit(): void {
    let modifs= Array.from(document.getElementsByTagName("h2"));
    modifs.forEach(elt=>{
      const size = elt.style.color;
      let color = elt.style.color;
      const body = document.getElementById('lesModifs') as HTMLElement;
      const body_color = body?.style.color;
      elt.addEventListener('mouseover',()=>{

        elt.style.fontSize="80px";
        elt.style.color="purple";


      });
      elt.addEventListener("mouseout",()=>{
        elt.style.fontSize=size;
        elt.style.color=color;

      })})}
  }


