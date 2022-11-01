let architecture = new Entity()
engine.addEntity(architecture)

architecture.addComponent(new GLTFShape("models/test_arch.gltf"))

let architectureTransform = new Transform
architecture.addComponent(architectureTransform)

architectureTransform.position.set(8,0,8)
