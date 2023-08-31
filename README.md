# lobo.js

# [How to use]

import { database } from "./lobo.js"

let db = new database("test")

# save to localStorage database example
db.save({
  abc: "123",
  test: "hello"
})

# read from localStorage database example
db.load()
