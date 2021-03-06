import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router) { }

  
  ngOnInit(){
  let span = Array.from(document.getElementsByTagName("a"));
  span.forEach(span=>{
    let span_ = span as HTMLElement;
    const init_size = span_.style.fontSize;
    const init_color = span_.style.fontSize;

      span.addEventListener("mouseover",()=>{
      span.style.fontSize="50px";
      span.style.color="black";
    })
    span.addEventListener('mouseout',()=>{
      span.style.fontSize = init_size;
      span.style.color= init_color;
    })
    
    
    


    
  })}



modifier(){
 this.router.navigate(["modifier"]);
}






}


