## Implement Is Equal

Implement a `isEqual` function similar to lodash’s `isEqual`.

Before you begin coding, take a moment to address these questions:

- What is the purpose of isEqual, and how does it function?
- What comprehensive test cases should you write to validate that your implementation works correctly?

<details>
  <summary>Hint</summary>
  <strong>Lodash’s documentation:</strong> <small>isEqual</small> performs a deep comparison between two values to determine if they are equivalent.
  <br/>
  <br/>
  The function should compare primitive values, arrays, and objects (including nested ones) for equality. It should return true if the two inputs are deeply equal, and false otherwise. Assume that input values are JSON-serializable (e.g., no handling for functions, circular references, or special objects like Map or Set).
</details>

### Example

```javascript
isEqual(1, 1); // Output: true
isEqual(1, "1"); // Output: false

isEqual([1, 2, 3], [1, 2, 3]); // Output: true
isEqual([1, 2, 3], [3, 2, 1]); // Output: false

isEqual({a: 1, b: [2, 3]}, {a: 1, b: [2, 3]}); // Output: true
isEqual({a: 1, b: [2, 3]}, {a: 1, b: [3, 2]}); // Output: false
```
