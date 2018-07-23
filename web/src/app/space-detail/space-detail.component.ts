import { Component, OnInit, Input } from '@angular/core';
import { Space } from '../space';

@Component({
  selector: 'app-space-detail',
  templateUrl: './space-detail.component.html',
  styleUrls: ['./space-detail.component.css']
})
export class SpaceDetailComponent implements OnInit {
  private _space: Space;

  @Input() set space(value: Space) {
    this._space = value;  
    var canvas : any = document.getElementById("direction"),
    ctx = canvas.getContext("2d");

    canvas.width = 800;
    canvas.height = 600;

    var background = new Image();
    background.src = "assets/imgs/lot.png";

    // Make sure the image is loaded first otherwise nothing will draw.
    background.onload = function(){
      ctx.drawImage(background,0,0);   
       drawPath(ctx);
    }
    function drawPath(ctx) {
    
      //ctx.moveTo(25,25);
      ctx.arc(18,25,10,0, 2 *Math.PI, false);
      ctx.fillStyle = 'green';
      ctx.fill();
      ctx.lineWidth = 5;
      ctx.strokeStyle = '#003300';
      ctx.stroke(); 
     
      ctx.moveTo(18,35);
      ctx.lineTo(18, 35 * value.row);
      ctx.lineTo(18 + 28 * value.position, 35 * value.row);
      ctx.lineTo(18 + 28 * value.position, 35 * value.row-30);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(18 + 28 * value.position,35 * value.row-30,
          10,0, 2 *Math.PI, false);
      ctx.fillStyle = 'red';
      ctx.fill();
      ctx.lineWidth = 5;
      ctx.strokeStyle = '#003300';
      ctx.stroke(); 

     }
  }
  get space(): Space {
    return this._space;
  }

  constructor() { }

  ngOnInit() {
  }
  
}
