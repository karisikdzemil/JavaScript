class Course{
    constructor(title, lenght, price){
        this.title = title;
        this.length = lenght;
        this.price = price;
    }


    priceAndLength(el, money){
        const prosek = el.price / el.length;
        const hours = money * prosek;
        console.log(`For ${money} you can get ${hours} hours of course`);
    }
    summary(){
        console.log("Title: ",this.title);
        console.log("Length: ", this.length);
        console.log("Price: ", this.price);
    }

}
let j = new Course("JavaScript", 50, 100);
let d = new Course("React", 45, 60);
j.summary();
d.summary();
j.priceAndLength(j, 23);
d.priceAndLength(d, 40);

class PracticalCourse extends Course{
    constructor(numEx){
        this.numOfExercise = numEx;
    }

}

class TheoreticalCourse extends Course{
    publish(){
        console.log("Print Something....");
    }
}

