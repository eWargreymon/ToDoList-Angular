export class Tarea{
    
    title: string;
    description: string;
    priority: number;
    complete: boolean;

    constructor(t:string='',d:string='',p:number=10,c:boolean=false){
        this.title=t;
        this.description=d;
        this.priority=p;
        this.complete=c;
    }
}