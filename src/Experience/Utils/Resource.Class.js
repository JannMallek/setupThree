import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import EventEmitter from './EventEmitter';

export default class Resources extends EventEmitter{
    constructor(source){
        super()

        this.sources = source

        this.items = {}
        this.toLoad = this.sources.length
        this.isloaded = 0

        this.setLoaders()

        this.load()
    }

    setLoaders(){
        this.loaders = {
            GLTFLoader: new GLTFLoader(),
            TextureLoader: new THREE.TextureLoader(),
            CubeTextureLoader: new THREE.CubeTextureLoader()

        }
    }

    load(){
        for( const resource of this.sources){
            switch (resource.type){
                case'GLTF':
                    this.loaders.GLTFLoader.load(resource.path, (model)=>{
                        this.loaded(resource, model)
                    })
                    break;

                case'Texture':
                    this.loaders.TextureLoader.load(resource.path, (texture)=>{
                        this.loaded(resource, texture)

                    })
                    break;
                
                case'CubeTexture':
                    this.loaders.CubeTextureLoader.load(resource.path, (cubeTexture)=>{
                        this.loaded(resource, cubeTexture)
                        
                    })
            }
        }
    }

    loaded(source, file){
        this.items[source.name] = file

        this.isloaded += 1

        if(this.isloaded === this.toLoad){
            this.trigger("loaded")
        }

    }
}