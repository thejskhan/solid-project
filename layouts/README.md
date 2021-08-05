# `layouts` Directory

## Philosophy

The `layouts` directory is used for containing directories of layouts.

## Structure of layouts

- Each layout must have their own directories.
- Each layout component in their respective directories must be named `index.jsx`.
- Each layout styles must be named after their directory names, following `.modules.scss`.

### Example:

Let's assume that we have a layout named `Default`.

layouts/Default folder must exist.

layouts/Default/index.jsx file must exist.

layouts/Default/Default.module.scss file must exist.