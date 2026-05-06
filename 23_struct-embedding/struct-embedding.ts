class Base {
    num: number;

    constructor(num: number) {
        this.num = num;
    }

    describe(): string {
        return `base with num=${this.num}`;
    }
}

class Container {
    base: Base;
    str: string;

    constructor(num: number, str: string) {
        this.base = new Base(num);
        this.str = str;
    }

    get num(): number {
        return this.base.num;
    }

    describe(): string {
        return this.base.describe();
    }
}

interface Describer {
    describe(): string;
}

const co = new Container(1, "some name");
console.log(`co={num: ${co.num}, str: ${co.str}}`);
console.log("also num:", co.base.num);
console.log("describe:", co.describe());

const d: Describer = co;
console.log("describer:", d.describe());
