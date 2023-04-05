import * as THREE from 'three'
import Sizes from './Utils/Sizes.Class'
import Camera from './Camera.Class'
import Renderer from './Renderer.Class'
import Time from './Utils/Time.Class'
import MouseEvent from './Utils/MouseEvents.Class'
import World from './World/World.Class'
import Resources from './Utils/Resource.Class'
import sources from './sources'

let instance = null

export default class Experience {
    UpdatedObjects = [
        //all objects 
    ]


    constructor(canvas){

        if(instance){
            return instance
        }

        instance = this
        
        //Utils (no require)
        this.sizes = new Sizes()
        this.time = new Time()
        
        //base
        this.canvas = canvas
        this.scene = new THREE.Scene()
        this.resources = new Resources(sources)
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.world = new World()
        
        //Utils (require)
        // this.CubeEvent = new MouseEvent(this.UpdatedObjects[0])

        /**
         * Events
         */
        //Loop
        this.time.on("tick", ()=>{
            // this.CubeEvent.AccessEvent()
            this.update()
        })

        //Resize
        this.sizes.on("resize", ()=>{
            this.camera.resize()
            this.renderer.resize()

        })

        //mousenter
        // this.CubeEvent.on("mouseenter", ()=>{

        // })

        //mouseleave
        // this.CubeEvent.on("mouseleave", ()=>{

        // })

    }

    //On each Frame
    update(){
        this.camera.update()
        this.renderer.update()

    }


}