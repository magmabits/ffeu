# 🪴 FFEU - Functions For Everyday Use!
### *This package features various, useful functions that can be used in many scenarios!*

### generateID(number, boolean, boolean, boolean) -> String
This function generates a randomized string of characters with the provided length.

> It has 4 different modes: "numberOnly", "upperCaseOnly", "lowerCaseOnly" and "default"
```ts
generateID(8) // "4h7s45ef", mode is "default"
generateID(8, true) // "23461862", mode is "numberOnly"
generateID(8, false, true) // "AXDVASVW", mode is "upperCaseOnly"
generateID(8, false, false, true) // "sdfewnzd", mode is "lowerCaseOnly"

```

### toCapital(string) -> String
This function returns the provided string but every word will start with capital letters.
```ts
toCapital("hello world, i am a function") // "Hello World, I Am A Function"
```

### formatBytes(number) -> String
This function returns the provided number formated to bytes.
```ts
formatBytes(1000) // "1000 Bytes"
formatBytes(1024) // "1KB"
```

### toOrdinal(number) -> String
This function returns the provided number with their respective ordinal aka "place".
```ts
toOrdinal(1) // "1st"
toOrdinal(12) // "12th"
toOrdinal(22) // "22nd"
toOrdinal(33) // "33rd"
toOrdinal(4) // "4th"
```

### timeSince(date) -> String
This function returns the time that has elapsed since the start of the function and the provided time.
```ts
timeSince(1657621049) // "39 seconds ago"
timeSince(new Date()) // "2 seconds"
```