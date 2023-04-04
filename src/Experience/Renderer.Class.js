import * as THREE from 'three'
import Experience from './experience'
import Sizes from './Utils/Sizes.Class'

export default class Renderer{

    constructor(){

        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.canvas = this.experience.canvas
        this.camera = this.experience.camera
        this.scene = this.experience.scene

        this.setInstance()
    }

    setInstance(){
        this.instance = new THREE.WebGL1Renderer({
            canvas: this.canvas,
            antialias: true,
        })
        this.instance.physicallyCorrectLights = true
        this.instance.setClearColor(new THREE.Color('#1e1e1e'))
        this.instance.outputEncoding = THREE.sRGBEncoding
        this.instance.toneMapping = THREE.CineonToneMapping
        this.instance.toneMappingExposure = 1.75
        this.instance.shadowMap.enabled = true
        this.instance.shadowMap.type = THREE.PCFSoftShadowMap
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(this.sizes.pixelRatio)
    }

    resize(){
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(this.sizes.pixelRatio)
    }

    update(){
        this.instance.render(this.scene, this.camera.instance)
    }

    



}