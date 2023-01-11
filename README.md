# Cynotify

A command to play alerts everywhere.

I ever wanted to know when my tests fails, mainly the big ones, and I don't want to be checking all the time, so I 
created this command.

---
### How to install

> **Yarn**
> 
> `yarn add cynotify -D`
> 

> **NPM**
> 
> `npm install cynotify -D`

### How to use

You can just import into your `cypress/support/index.js` file.

```js
// cypress/support/index.js
import 'cynotify'
```

So now you can use the `cy.notify` to play an alert in everywhere.

**Ex.:**
<br>
If you use it in the after hook from `cypress/support/index.js` file, you will be notified whenever a test is done.

```js
// cypress/support/index.js
after(()=> cy.notify())
```

---
### Links


***- [Cynotify](https://github.com/RenanPaixao/cynotify)***
