# [HOWTO lobo.js]

# put this in your test.html
```
<script src="./test.js" type="module"></script>
```

# put this in your test.js
```
import { database } from "./lobo.js"
let db = new database("test")
```

# save to localStorage database example
- This will add Object to a list of Array.
```
db.save(object)
```

# read from localStorage database example
- Example: db.load().forEach((e) => { console.log(e) })
```
db.load()
```

# clear all from localStorage
- Warning: This will clear all.
```
db.clear()
```


# restore localStorage from your json file
```
db.restore(object)
```

# backup current localStorage data to json file
```
db.backup()
```

# Why use this?
- No need to add JSON parse / stringify.
- User friendly.
- Make backup of todolist json file and restore it.
