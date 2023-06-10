const students = {
  1: {
    name: 'Egill Vignission',
    gpa: 3.4
  },
  2: {
    name: 'Bianca Pargas',
    gpa: 3.8
  },
  3: {
    name: 'Aisling O\'Sullivan',
    gpa: 3.4
  },
  4: {
    name: 'Sameer Fares',
    gpa: 3.9
  }
}

let arr = Array.from(Object.values(students));

arr.forEach(st => console.log(st))

let arr1 = Array.from(Object.entries(students));
arr1.forEach(st => console.log(st[0], "is item at index 0, previously the key", "--------",  st[1], "is the object, previusly the value"))




