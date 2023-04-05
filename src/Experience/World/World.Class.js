import * as THREE from 'three'
import Experience from '../experience'
import Enviroment from './Enviroment.Class'

export default class World {
    constructor(){

        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        
        const Test = new THREE.Mesh(
            new THREE.BoxGeometry(1,1,1), 
            new THREE.MeshStandardMaterial({
                color: 'aliceblue',
                roughness:1,
                metalness:1
            }))
            
            this.scene.add(Test)
            
            this.resources.on("loaded", ()=>{
                this.enviroment = new Enviroment()
            })
        }
}