# `views` Directory

## Philosophy

The `views` directory is used for containing directories of a view.

## Structure of view

- Each view styles must be named after their page names, following `.modules.scss`.
- Each Sections of a page must have their own folder.
- 

### Example:

Let's assume that we have a page named `signup` with a CTA section and Features section.

views/signup/Signup.module.scss must exist.

views/signup/CTA directory must exist.
views/signup/CTA/index.jsx must exist.
views/signup/CTA/CTA.module.scss must exist.

views/signup/Features directory must exist.
views/signup/Features/index.jsx must exist.
views/signup/Features/Features.module.scss must exist.