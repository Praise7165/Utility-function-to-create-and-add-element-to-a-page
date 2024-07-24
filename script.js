// Write a function "elt" to create a element and add the rest of the argument as its children;


function elt(tag, ...children) {
    let element = document.createElement(tag);

    for (let child of children) {

        if (typeof child !== 'string') element.appendChild(child);
        else {
            element.appendChild(document.createTextNode(child));
        }
    }

    return element;
}




console.log(elt('div', 'Section 2'));
document.body.appendChild(elt('div',
     elt('h1', 'Good is good'), 
     elt('p', 'The replaceChild() method of the Node interface replaces a child node within the given (parent) node.'), 
     elt('button', 'Thank God')));
console.log(elt('div',
     elt('h1', 'Good is good'), 
     elt('p', 'The replaceChild() method of the Node interface replaces a child node within the given (parent) node.'), 
     elt('button', 'Thank God')));

document.body.appendChild(
    elt("footer", "—",
    elt("strong", "Karl Popper"), ", preface to the second edition of ",
    elt("em", "The Open Society and Its Enemies"),
    ", 1950"));

console.log(
    elt("footer", "—",
    elt("strong", "Karl Popper"), ", preface to the second edition of ",
    elt("em", "The Open Society and Its Enemies"),
    ", 1950"));