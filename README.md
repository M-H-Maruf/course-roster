# Project Features
- Dynamic website
- Toast warnings
- React components
- Interactive cart
- Readability
- Simple and beautiful UI


# How I managed the state in my assignment
- Firstly, I identified the data that I will have to change dynamically based on the interactions of client side
- Then I added state hooks to the variables and declared them in a component which is a common parent of both the trigger element and the element I need to update dynamically
  - I used the useState hook for state management
  - I used setState to ensure immutability
  - Finally, I used onClick to capture events
- After I was done with connecting the the state variables with the trigger elements and event handlers, I updated data dynamically using event handlers that were triggred by click events
  - I used onClick attribute to call upon the event handlers
  - I passed on data and function as props using the drilling method
  - I went to the common parent using lift-up state method

And that's how I managed the state in my assignment.