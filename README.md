# A Strapi App to manage friends and events

## how auth works here

### A) Login: a component

Has a typical login form with two event handlers: `handleSubmit()` and `handleChange()`, plus one state, 'data'.

HandleChange updates data by adding 'identifier' and 'password' with their values from the two form fields. It does this programmatically like this:
` setData({ ...data, [event.target.name]: event.target.value })`

On submit, `handleSubmit()` posts a request using axios and passing in the body the identifier and password set in data by the handleChange(). And sets a token using and imported helper function from B, 'isLoggedIn' module.

### B) auth: a module with helper functions

`setToken(data)` uses the imported library 'js-cookie' to set cookies using the data that came in from the axios call in A. The key 'identifier' is a requirement of Strapi to authenticate.

`unsetToken()` is used by the form to log-out.

## How user is given access across components and children using useContext().

### C) authContext: a module with helper functions (aka: authContext)
