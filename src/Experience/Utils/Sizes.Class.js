import EventEmitter from "./EventEmitter";


export default class Sizes extends EventEmitter{

    constructor(){

        super()

        this.height = window.innerHeight
        this.width = window.innerWidth
        this.aspect = this.width / this.height
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)

        this.resizeListener()
    }

    resizeListener(){
        window.addEventListener("resize", ()=>{
            
            this.height = window.innerHeight
            this.width = window.innerWidth
            this.aspect = this.width / this.height
            
            this.trigger("resize")
        })
    }
}