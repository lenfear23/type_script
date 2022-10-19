interface Results {

    winner:string;
    


    result():void;
    toString():string;
    
}

class Football implements Results{
    winner:string;
    csapat1:string;
    csapat2:string;
    #golokSzama:number;
    #masikGolokSzama:number;
   

    constructor(winner:string,golokSzama:number,masikGolokSzama:number,csapat1:string,csapat2:string){
        this.winner = winner;
        this.#golokSzama = golokSzama;
        this.#masikGolokSzama = masikGolokSzama;
        this.csapat1 = csapat1;
        this.csapat2 = csapat2;
        
        
    }

    
    result(): void {
        console.log(this.toString());
    }
    toString(): string {
        if(this.#golokSzama>this.#masikGolokSzama){
            return "Winner: "+ this.csapat1 + " Football match: "+ this.#golokSzama + "-" +this.#masikGolokSzama;
        }else{
            return "Winner: "+ this.csapat2 + " Football match: "+ this.#masikGolokSzama + "-" + this.#golokSzama;
        
        }
       
    }

}




class Marathon implements Results{
    winner: string;
    #futottIdő:number;
   

    constructor(winner:string,futottIdő:number){
        this.winner = winner;
        this.#futottIdő = Math.floor(futottIdő);
     
    }

    

    result(): void {
        console.log(this.toString());
    }
    toString(): string {
        return "Marathon: "+this.winner +" result:" + this.#futottIdő%60+"min "+Math.floor(this.#futottIdő/60)+"s";
    }

}





class Calvinball implements Results{
    winner: string;
    random:number;
    

    constructor(winner:string,random:number){
        this.winner = winner;
        
        this.random = Math.floor(Math.random() * 90) + 11;

    }

    get Winner() {
        return this.winner;
    }
    set Winner(winner:string){
        if(this.winner == "Calvin" || this.winner =="Hobbes"){
            this.winner = winner;
        }else{
            throw new Error("Hiba nem eggyezik");
        }

    }


    result(): void {
        console.log(this.toString());
    }
    toString(): string {
        return "Calvinball: "+this.Winner+ " "+this.random + " points";
    }
}

let upload : Results[] =[
    new Football("Winner",6,3,"Barcelone","Fradi"),
    new Football("Winner",1,3,"Real","Vasas"),
    new Marathon("Alma László",20000),
    new Marathon("Körte Alma",10000),
    new Calvinball("Calvin",30),
    new Calvinball("Laci",30),
]



upload.forEach(e =>{
    e?.result();
})
    