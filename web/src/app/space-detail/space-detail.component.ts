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
      ctx.strokeStyle = '#00FFFF';
      ctx.stroke(); 
     
      var rowMap = [70, 70, 190, 190, 310, 310, 70];

      var y = rowMap[Math.min(value.row, rowMap.length-1)];
      var x = 28 * value.position;
      var offset = value.row % 2 == 0 ? -30: 30;
      ctx.moveTo(18,35);
      ctx.lineTo(18, y);
      
      ctx.lineTo(18 + x, y);
      ctx.lineTo(18 + x, y+offset);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(18 +  x, y+offset,
          10,0, 2 *Math.PI, false);
      ctx.fillStyle = 'red';
      ctx.fill();
      ctx.lineWidth = 5;
      ctx.strokeStyle = '#00FFFF';
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
    var turn1 = space.row % 2 == 0? 'left': 'left';
    var turn2 = space.row % 2 == 0? 'left': 'right';
    this._instructions.push( {
      text: 'Go South ' + space.row + ' rows',
      imageUrl: 'assets/imgs/down.png'
    });
    this._instructions.push( {
      text: 'Turn ' + turn1,
      imageUrl: 'assets/imgs/' + turn1 + '.png'
    });
    this._instructions.push( {
      text: 'Turn ' + turn2 +'  at position ' + space.position,
      imageUrl: 'assets/imgs/' + turn2 + '.png'
    });
    return null;
  }
  constructor() { 
    this._instructions = [];
  }

  ngOnInit() {
    
  }
  
}
