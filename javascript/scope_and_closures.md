# Closures and Scope

### Scope
Scope is the set of variables available to use in a method
 this includes: function arguments, local variables, variables devlared when the function was defined.



### Closures
a closure is an inner function that has access to the outer functions variables--scope chain.
Closures will have access to three things:
 - its own scope
 - the outer functions scope
 - global variables

```javascript
 function showName(firstName, lastName) {
   var nameIntro = "Your name is ";

   function makeFullName() {
     return nameIntro + firstName + " " + lastName
   }

   return makeFullName();
 }

 showName("Michael", "Jackson"); // Your name is Michael Jackson 
```
