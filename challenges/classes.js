// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMakerBeta {
    constructor(attributes) {
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height;
    }


    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
};

const cuboidBeta = new CuboidMakerBeta({
    length: 4,
    width: 5,
    height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidBeta.volume()); // 100
console.log(cuboidBeta.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerBeta {
    constructor(newAttributes) {
        super(newAttributes);
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}
const cube = new CuboidMakerBeta({
    length: 5,
    width: 5,
    height: 5,
});

console.log(cube.volume());
console.log(cube.surfaceArea());
