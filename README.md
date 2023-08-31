# lobo.js

# [How to use]

import { database } from "./lobo.js"

let db = new database("test")

# save to localStorage database example
- This will add Object to a list of Array.

db.save({
  abc: "123",
  test: "hello"
})

# read from localStorage database example
- Example: db.load().forEach((e) => { console.log() })

db.load()

# clear all from localStorage
- Warning: This will clear all.

db.clear()

# Why use this?
- No need to add JSON parse / stringify.
- User friendly.
