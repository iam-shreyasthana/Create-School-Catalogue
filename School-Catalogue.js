//This is a Super Class....
class School{
  constructor(name, level, nummberOfStudents){
    this._name = name;
    this._level = level;
    this._nummberOfStudents = nummberOfStudents;
  }

  get name(){
    return this._name;
  }

  get level(){
    return this._level;
  }

  get nummberOfStudents(){
    return this._nummberOfStudents;
  }
//Setter for number of students in the level of school.....
  set nummberOfStudents(newNummberOfStudents){
    if(typeof newNummberOfStudents === 'number'){
      this._nummberOfStudents = newNummberOfStudents;
    }
    else{
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }
// For logging the school data to the console......
  quickFacts(){
    console.log(`${this._name} educates ${this._nummberOfStudents} students at the ${this._level} school level`);
  }

// For picking any random substitute teacher........
  static pickSubstituteTeacher(substituteTeachers){
    const randomNum = Math.floor(Math.random() * (substituteTeachers.length));
    console.log(substituteTeachers[randomNum]);
  }

};

// Child Class of School......
class PrimarySchool extends School{
  constructor(name, numberOfStudents, pickupPolicy){
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy(){
    return this._pickupPolicy;
  }
};

// Child Class of School.......
class HighSchool extends School{
  constructor(name, numberOfStudents, sportsTeams){
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams(){
    console.log(this._sportsTeams); 
  }
};

//Instance of Primary School class......
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();

School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);


//Instance of High School class.........
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

alSmith.sportsTeams;

//The End.......



