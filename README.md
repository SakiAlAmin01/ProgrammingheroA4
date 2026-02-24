<<<<<<< HEAD
1. Difference between getElementById, getElementsByClassName, querySelector, querySelectorAll

getElementById -> selects one element using ID
getElementsByClassName -> selects multiple elements using class name
querySelector -> selects the first matching element (using CSS selector)
querySelectorAll -> selects all matching elements

Simple:
getElementById -> one element
getElementsByClassName -> many elements
querySelector -> first match
querySelectorAll -> all matches


2. How to create and insert a new element into the DOM

First create the element, then add content, then insert it.

Example:
const p = document.createElement("p");
p.innerText = "Hello";
document.body.appendChild(p);


3. What is Event Bubbling?

Event bubbling means the event starts from the clicked element and moves up to its parent.

Example:
If you click a button inside a div, first button event runs, then div event runs.


4. What is Event Delegation? Why is it useful?

Event delegation means adding event listener to the parent instead of adding it to each child.
Why useful:
Less code, Better performance, Works for new elements added later.


5. Difference between preventDefault() and stopPropagation()

preventDefault() -> stops default behavior
Example: stops a link from opening

stopPropagation() -> stops event from going to parent

Simple:
preventDefault -> stops default action
stopPropagation -> stops bubbling

=======
## Welcome To ( সহজ সরল সিম্পল ) Assignment - 4 


---
# 📅 Deadline For 60 marks: 23th February, 2026 (11:59 pm ⏱️)
# 📅 Deadline For 50 marks: 24th February, 2026 (11:59 pm ⏱️)
# 📅 Deadline For 30 marks: Any time after 24th February.


# Main Requirements

## Design Part

## Dashboard
- Website name and Create a dashboard like figma 
- The section should be responsive for mobile devices. It is totally up to you. 

## Available Jobs Section
- A title on the left side, jobs count on the right side 
- 3 different tab  below the section title 
- Minimum 8 cards with:
	- companyName
	- position
	- location
	- type
	- salary
	- description
	- 2 buttons: Interview, Rejected
- By default all the jobs data will show on All tab, and the Interview, Rejected tab will show “No jobs Available” message with a subtitle below and an icon/image on the above

- The section should be responsive for mobile devices. It is totally up to you.

--- 

## Functionalities Part
- Clicking on Interview button on the card 
    - will add the data on Interview tab 
    - add the status as Interview.
    - Will increase the the count of interview in Dashboard 

- Clicking on Rejected button on the card 
    - will add the data on Rejected tab 
    - add the status as Rejected.
    - Will increase the the count of Rejected in Dashboard

- Enable toggle between Interview and rejected button(you can select Rejected button after clicking on Interview, and Interview button after clicking on Rejected button). It will change the tab and dashboard count also. It will show tab wise jobs count on the right.

---

# Challenges Requirements
- Clicking on the delete button will remove that card from the UI, and the count will be deducted from the dashboard card and the main section.
- No lorem ipsum text on your website. At least 8 meaningful commits in your project.  

- Create a readme file and answer this question on your own. Don’t copy-paste from Google or any AI chatbot. 


## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### 2. How do you create and insert a new element into the DOM?

### 3. What is Event Bubbling? And how does it work?

### 4. What is Event Delegation in JavaScript? Why is it useful?

### 5. What is the difference between preventDefault() and stopPropagation() methods?

---


**Technology Stack:**
- HTML
- CSS (Vanilla/Tailwind/DaisyUI)
- JavaScript (Vanilla)


--- 

## What to submit: 

1. GitHub Repository Link: 
2. Live Site Link: 
>>>>>>> f895c8f (Final Push)
