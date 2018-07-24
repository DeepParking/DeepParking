import { Component, OnInit, Input } from '@angular/core';
import { Space } from '../space';
import { Instruction } from '../instruction';

@Component({
  selector: 'app-space-detail',
  templateUrl: './space-detail.component.html',
  styleUrls: ['./space-detail.component.css']
})
export class SpaceDetailComponent implements OnInit {
  private _space: Space;
  private _instructions: Instruction[];

  @Input() set space(value: Space) {
    this.generateInstructions(value);
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

  get instructions(): Instruction[]{
    return this._instructions;
  }

  generateInstructions(space:Space): Instruction[] {    
    this._instructions.push( {
      text: 'Go south ' + space.row + ' rows',
      imageUrl: 'assets/imgs/down.png'
    });
    this._instructions.push( {
      text: 'turn left',
      imageUrl: 'assets/imgs/left.png'
    });
    this._instructions.push( {
      text: 'turn left at position ' + space.position,
      imageUrl: 'assets/imgs/left.png'
    });
    return null;
  }
  constructor() { 
    this._instructions = [];
  }

  ngOnInit() {
    
  }
  
}
