import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import Experience from './experience'


export default class Camera{
    constructor(){
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.canvas = this.experience.canvas
        this.scene = this.experience.scene

        this.setInstance()
        this.setOrbitControls()


        
        
    }

    setInstance(){
        this.instance = new THREE.PerspectiveCamera(
            35,
            this.sizes.aspect,
            0.1,
            100
        )
        this.instance.position.set(6, 4, 8)
        this.scene.add(this.instance)
    }

    
    setOrbitControls(){
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
    }

    resize(){
        this.instance.aspect = this.sizes.aspect
        this.instance.updateProjectionMatrix()
    }

    update(){
        this.controls.update()
    }
}