Answering the following questions below:
 
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById: হলো JavaScript DOM (Document Object Model) এর একটা method। যার মাধ্যমে ওয়েব পেইজের কোনো একটা নির্দিষ্ট element (যেটার id দেওয়া আছে) সেটাকে খুঁজে বের করতে পারি।
getElementsByClassName: হচ্ছে JavaScript DOM method, যেটা ব্যবহার করে আমরা একই ক্লাস নাম থাকা সব element একসাথে সিলেক্ট করতে পারি। এবং এটি একটি HTMLCollection রিটার্ন করে।

querySelector: হলো JavaScript-এর একটা DOM মেথড, এর মাধ্যমে CSS সিলেক্টর ব্যবহার করে ওয়েবপেজের প্রথম মিল পাওয়া যেকোনো element সিলেক্ট করতে পারেন। 

querySelectorAll: হলো JavaScript এর DOM method, যেটা দিয়ে একসাথে একাধিক element সিলেক্ট করা যায়। এবং এটি যেসব element ওই selector এর সাথে মিলে যায়, সবগুলোকে নিয়ে একটা NodeList (static list) রিটার্ন করে।

=====================================

2. How do you create and insert a new element into the DOM?

step 1: JavaScript এ document.createElement() দিয়ে নতুন element তৈরি করা হয়।

step 2: .innerText / setAttribute / className → কন্টেন্ট বা প্রপার্টি যোগ করা

step 3: .appendChild(), .append() বা .prepend() ইত্যাদি → DOM এ insert করা।

Example: 

const addNewDiv = document.createElement("div");

addNewDiv.innerText = "This is a new div element, added by js DOM";

addNewDiv.className = "new-box";

parentContainer.appendChild(addNewDiv);


==================================================

4. What is Event Bubbling and how does it work?

Event Bubbling হলো JavaScript-এ DOM event-এর একটি behavior যেখানে child element এ click হওয়া ইভেন্টটা parent element-এর দিকে উপরে চলে যায়। যেমন প্রথমে parent, তারপর grandparent, এর পর সবশেষে root element (document) পর্যন্ত পৌঁছায়। এই প্রক্রিয়াকে “বাবলিং” বলা হয় কারণ ইভেন্টটা বুদবুদ (bubble) এর মতো উপরে ওঠে।

===================================================

4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation হলো JavaScript-এর একটি প্রক্রিয়া যেখানে parent element-এ listener বসিয়ে child element-এর ইভেন্ট handle করা। এতে সুবিধা রয়েছে Less Code, Dynamic elements, এবং Performance ভালো হয়।  


=====================================================

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault(): এটি default browser behavior বন্ধ করে বা click হওয়া Event এর page reload বন্ধ করে।

stopPropagation(): এটি event bubbling বা capturing বন্ধ করে দেয়। অর্থাৎ, ইভেন্ট parent বা ancestor element এ যাবে না।
