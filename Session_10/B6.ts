class Song{
    public readonly id: number
    private name: string
    private length: number
    constructor(id:number,name:string,length:number){
        this.id = id
        this.name = name
        this.length = length
    }
    set name1(name:string){
        this.name = name
    }
    set length1(length:number){
        this.length = length
    }
}
let song1 = new Song(1,"ez",2323)
song1.name1 = "GG"
song1.length1 = 123123
console.log(song1);
