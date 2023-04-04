import * as THREE from 'three'
import Experience from '../experience'
import EventEmitter from './EventEmitter'

export default class MouseEvent extends EventEmitter{
    constructor(Object){
        super()
        this.Object = Object
        this.experience = new Experience()
        this.mouse = new THREE.Vector2()
        this.raycaster = new THREE.Raycaster()
        this.currentIntersects = null

        window.addEventListener("mousemove", (e)=>{
            this.mouse.x = e.clientX / this.experience.sizes.width * 2 - 1
            this.mouse.y = - (e.clientY / this.experience.sizes.height * 2 - 1)
        })
        
    }
    
    AccessEvent(){
        this.raycaster.setFromCamera(this.mouse, this.experience.camera)
        const intersects = this.raycaster.intersectObject(this.Object)
        if(intersects.length()){
            this.trigger("hover")
            if(!this.currentIntersects){
                this.trigger("mouseenter")
                this.currentIntersects = intersects[0]
            } 
        } else {
            if(this.currentIntersects){
                this.trigger("mouseleave")
                this.currentIntersects = null
            }
        }
    }
}