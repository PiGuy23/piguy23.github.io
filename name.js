var names = ['Jim', 'Bob', 'Frank', 'Adam', 'Kyle', 'Deveroon', 'Jesus', 'Chris', 'Jessica', 'Nick', 'John', 'Ashton', 'Doug', 'Bret', 'Edward'];

var ran = Math.floor(Math.random() * 15);

var ranc = Math.floor(Math.random() * 5);

var ranw = Math.floor(Math.random() * 5);

document.getElementById("name").innerHTML = names[ran];

var colors = ["#36ed25", "#ed2525", "#2af9f9", "#f92ae1", "#fcb819"];

document.getElementById("name").style.color = colors[ranc];

var size = ["500px", "200px", "450px", "600px", "550px"];

document.getElementById("pic").style.width = size[ranw];