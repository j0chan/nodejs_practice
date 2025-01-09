// Pure JS (Vanila JS) : Object only -> Prototype-based Programming

// object
let robot = { // Members
    // Property(속성)
    name: "R2-D2",
    model: "AstroMech",
    status: "Active",

    // Method(행동)
    performTask: function (task: string){
        console.log(`${this.name} is performing ${task}.`);
    },

    updateStatus: function(newStatus:string){
        this.status = newStatus;
        console.log(`${this.name}'s status is now ${this.status}.`)
    }
}

// object
let robot2 = { // Members
    // Property(속성)
    name: "A2-A2",
    model: "Proto",
    status: "Active",

    // Method(행동)
    performTask: function (task: string){
        console.log(`${this.name} is performing ${task}.`);
    },
    
    updateStatus: function(newStatus:string){
        this.status = newStatus;
        console.log(`${this.name}'s status is now ${this.status}.`)
    }
}

// object
let robot3 = { // Members
    // Property(속성)
    name: "A1-AB2",
    model: "AD-22",
    status: "Active",

    // Method(행동)
    performTask: function (task: string){
        console.log(`${this.name} is performing ${task}.`);
    },
    
    updateStatus: function(newStatus:string){
        this.status = newStatus;
        console.log(`${this.name}'s status is now ${this.status}.`)
    }
}

// usage with "." dot operator
console.log(robot.name) // Accessing Property
robot.performTask("Getting read to move") // Calling Method


// 추가와 수정이 매우 비효율적이다.