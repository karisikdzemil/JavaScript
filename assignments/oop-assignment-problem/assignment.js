// class Course{
//     constructor(title, lenght, price){
//         this.title = title;
//         this.length = lenght;
//         this.price = price;
//     }

//     priceAndLength(el, money){
//         const prosek = el.price / el.length;
//         const hours = money * prosek;
//         console.log(`For ${money} you can get ${hours} hours of course`);
//     }
//     summary(){
//         console.log("Title: ",this.title);
//         console.log("Length: ", this.length);
//         console.log("Price: ", this.price);
//     }

// }
// let j = new Course("JavaScript", 50, 100);
// let d = new Course("React", 45, 60);
// j.summary();
// d.summary();
// j.priceAndLength(j, 23);
// d.priceAndLength(d, 40);

// class PracticalCourse extends Course{
//     constructor(numEx){
//         this.numOfExercise = numEx;
//     }

// }

// class TheoreticalCourse extends Course{
//     publish(){
//         console.log("Print Something....");
//     }
// }
// MAXIMILIAN SOLUTION

class Course {
    constructor(courseTitle, coursePrice, courseLength) {
      this.title = courseTitle;
      this.price = coursePrice; 
      this.length = courseLength;
    }
  
    get price() {
      return "$" + this._price;
    }
  
    set price(value) {
      if (value <= 0) {
        throw new Error("Invalid value for price! It must be greater than 0.");
      }
      this._price = value;
    }
  
    calculateValue() {
      return this.length / this._price;
    }
  
    printSummary() {
      console.log(
        `Title: ${this.title}, Length: ${this.length} hours, Price: ${this.price}`
      );
    }
  }
  
  class PracticalCourse extends Course {
    constructor(title, length, price, exercisesCount) {
      super(title, price, length); 
      this.numOfExercises = exercisesCount;
    }
  
    printSummary() {
      super.printSummary();
      console.log(`Number of exercises: ${this.numOfExercises}`);
    }
  }
  
  class TheoreticalCourse extends Course {
    publish() {
      console.log("Publishing...");
    }
  }
  
  // Creating instances.
  const jsCourse = new Course("JavaScript - The Complete Guide", 50, 44);
  const reactCourse = new Course("React.js - The Complete Guide", 60, 36);
  
  const angularCourse = new PracticalCourse(
    "Angular - The Complete Guide",
    36,
    50,
    10
  );
  
  const flutterCourse = new TheoreticalCourse(
    "Flutter - Build iOS and Android Apps",
    40,
    48
  );
  
  console.log("\nCourses:");
  jsCourse.printSummary();
  reactCourse.printSummary();
  
  console.log("\nCourse Value (Hours per Dollar):");
  console.log(jsCourse.calculateValue());
  console.log(reactCourse.calculateValue());
  
  console.log("\nPractical Course:");
  angularCourse.printSummary();
  
  console.log("\nTheoretical Course:");
  flutterCourse.printSummary();
  flutterCourse.publish();
  