
//Class and instances, creating a class that takes the age of an individual and feeding back information 
// based on conditional operants of my classes. if someone is 0 , then age is not valid
//if older than 13 but less then 18 then theyre a teenager
// if someone is older than 18 then they are consider older (no pun intended just computational exercises)

function Person(initialAge) {
    // Add some more code to run some checks on initialAge
    if (initialAge >= 0) {
        let age = initialAge;

    } else {
        initialAge = 0;
        console.log("Age is not valid, setting age to 0.");
    }

    this.amIOld = (age) => {
        // Do some computations in here and print out the correct statement to the console
        if (initialAge < 13) {
            console.log("You are young.");
        } else if (initialAge >= 13 && initialAge < 18) {
            console.log("You are a teenager.");
        } else {
            console.log("You are old.");
        }
    };
    this.yearPasses = (age) => {
        // Increment the age of the person in here
        initialAge = initialAge + 1;
    };
}