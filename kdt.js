function myKdt(name, age, address, tel){
 if(typeof(name) ==="string" 
 && typeof(age) ==="number"
 && typeof(address) === "string"
 && typeof(tel) === "string"){
  this.name = name;
  this.age = age;
  this.address = address;
  this.tel = tel;
 } 
}

function Kdt(id, name){
  this.id = id;
  this.name = name;
}

const studentList = ["강예훈","김성현","류주완","마근원","박종인","박재형","송형주","양상희","원두진","유민호","이상호","이소영","이은수","정동욱","정윤환","정정원","지영빈","한용준","황초영","김근수","김승현","전형민","정연주","이아연","최화연"
];


for(let i = 0; i< studentList.length; i++){
  let me = studentList.indexOf("박재형");



  if(studentList[i].slice(0, 1) === "김"){
    let rue = studentList[i].replace("김", "류")
    let student = new Kdt( i,rue)
    console.log(student)
  }
  
  // if(i === me){
  //   let student = new Kdt(i, studentList[i])
  //   student.animal = "깜순이"
  //   console.table(student)
  // }
  // else{
  //   let student = new Kdt(i, studentList[i])
  //   console.table(student)
  // }
}
// const members = [];

// for(let i =0; i <5; i++){
//   members.push(new kdt(i +1, "hello", "bye"))
// }

// console.log(members)
// const juwan = new kdt("슈크림", "김치", "소주");
// console.log(typeof(juwan))
