let pTag = document.querySelector('p')
pTag.innerText = "Hello all";

let div = document.createElement('div')

document.body.append(div)
div.innerText = "First big text";

let image = document.createElement('img');
image.setAttribute("src", "https://people.cs.clemson.edu/~dhouse/courses/404/homework/hw6/hirakr/Documents/elephant.jpg");
div.appendChild(image);
image.setAttribute("border-radius", "8px");
