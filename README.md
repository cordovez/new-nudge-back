# A Strapi App to manage friends and events

## how auth works here

NB: for the sake of learning, a new Content-type was created called Nudgers, which represents the app user. The strapi-created 'Users' I am reserving for app developer (me). For the sake of these instructions, user === nudger.

---

### A) Login: a component

Has a typical login form with two event handlers: `handleSubmit()` and `handleChange()`, plus one state, 'data'.

HandleChange updates data by adding 'identifier' and 'password' with their values from the two form fields. It does this programmatically like this:
` setData({ ...data, [event.target.name]: event.target.value })`

On submit, `handleSubmit()` posts a request using axios and passing in the body the identifier and password set in data by the handleChange(). And sets a token using and imported helper function from B, 'isLoggedIn' module.

### B) isLoggedIn: a module with helper functions (aka: auth)

`setToken(data)` uses the imported library 'js-cookie' to set cookies using the data that came in from the axios call in A. The key 'identifier' is a requirement of Strapi to authenticate.

`unsetToken()` is used by the form to log-out.

## How user is given access across components and children using useContext().

### C) LoggedInContext: a module with helper functions (aka: authContext)
