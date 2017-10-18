var michelle = {
  name: 'Michelle',
  points: 2000,
  isActive: true,
  courses: ['Intro JS', 'JS avanzado', 'JS master']
};

var alexandra = {
  name: 'Alexandra',
  points: 4100,
  isActive: true,
  courses: ['Intro JS', 'Intro UX', 'UX master']
};

var andrea = {
  name: 'Andrea',
  points: 800,
  isActive: false,
  courses: ['Intro JS', 'JS avanzado']
};

var students = [michelle, alexandra, andrea];

for (var i=0; i<students.length; i++) {
  var studentsCourses=students[i].courses;
  //["intro a js", "avanzado js", "js master"]
  for (var j=0; j<studentsCourses.length; j++) {
    if(studentsCourses[j]==='JS avanzado') {
      console.log(students[i].name);
    }
  }
}
