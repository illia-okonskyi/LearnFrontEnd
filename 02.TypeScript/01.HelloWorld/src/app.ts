class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const tom: User = new User("Tom");
const header = this.document.getElementById("header");
header!.innerHTML = "Hello " + tom.name;
