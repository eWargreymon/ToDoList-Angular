export class Tarea{
    id: number = 0;
    title: string;
    description: string;
    priority: number;
    complete: boolean;

    constructor(t:string='', d:string='',p:number=0,c:boolean=false,i:number=0){
        this.id=i;
        this.title=t;
        this.description=d;
        this.priority=p;
        this.complete=c;
    }
}