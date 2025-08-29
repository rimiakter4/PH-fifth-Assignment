Question-1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans-1:

The difference between getElementById and getElementsByClassName is :
getElementById:
a. A getElementById is used to access a specific html element within a web page bye its unique id .
b. it's cannot assign the same id to multiple elements.

getElementsByClassName:
a. A getElementsByClassName  is used to access all element with a given class name.
b. it's possible to  assign the same class to multiple elements.

The difference between querySelector and querySelectorAll:
querySelector:
a.querySelector is used to find the first html element in a document that matches a specified css  selector.
b.its returns  the matching element.

querySelectorAll:
a.querySelectorAll is used to select elements from the html document object model.
b.its returns all elements from the DOM that match a css selector and gives a nodelist .

Question-2 :
How do you create and insert a new element into the DOM?

Ans-2:
First of all create an element,then set its content or properties and finally insert it into the  page wherever needed.
for example :
const newHeading=document.createElement("h1");
newHeading.innerText="hello i am Rimi ";
document.body.appendChild(newHeading);

Question-3 :
What is Event Bubbling and how does it work?

Ans-3 :

Event Bubbling is when an event triggered on a child element and bubbles up to its parent elements and then to granparent elements and so on ,all the way up to the document.

Event Bubbling is work when you trigger an event on a child element.Then event first runs on the child element.Then the same event automatically occurs on its parents,then grandparent,and so on.

Question-4 :
What is Event Delegation in JavaScript? Why is it useful?

Ans-4:
Event Delegation is a JavaScript technique where a single event listener on a parent element handles events for multiple child celements.

Event Delegation is usefull because one listener handles many elements.Works for dynamically added elments and improves performance and keeps code clean.

Question-5 :
What is the difference between preventDefault() and stopPropagation() methods?

Ans-5:
preventDefault() is use stop the browers default action and stopPropagation() stops the event from bubbling up the DOM to parent elements.
