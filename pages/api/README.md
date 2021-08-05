# `api` Directory

## Philosophy

The `api` directory is used for containing functional handlers of the back-end.

## Structure of a handler

- Imports must be included at the top.

- A **noun** must be appended before an uppercase "Handler" as the name of the function. Example: "tasksHandler".

- The written function must be an `arrow function` declared by `const`.

- The function must be exported as `default`.

```
import ..., { ... } from "...";

const ___Handler = (req, res) => {
  return ---
};

export default ___Handler;
```