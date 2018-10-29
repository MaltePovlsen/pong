import { Vector } from "./vector";
import { GameObject } from "./gameObject";
import { GameEngine } from "./index";
export class Brick implements GameObject
{
    public position:Vector 
    private gameEngine:GameEngine;

    
    public height:number = 10;
    public width:number =50;

    constructor(position:Vector, gameEngine:GameEngine)
    {
        this.position = position;
        this.gameEngine = gameEngine;
    }

    onColliosion(other: GameObject): void {
       
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(time: number): void {

        //testing for Collision with any gameobject
        this.gameEngine.objects.forEach(elegameobj => {
           
    
        });

}
}