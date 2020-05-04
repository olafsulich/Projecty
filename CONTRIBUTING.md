# Contribution Guidelines

Projecty is an open source project, and contributions of any kind are welcome and appreciated. Open issues, bugs, and enhancements are all listed on the [issues](https://github.com/olafsulich/SocialDev/issues) tab and labeled accordingly. Feel free to open bug tickets and make feature requests.

## Issues

If you encounter a bug, please file a bug report. If you have a feature to request, please open a feature request. If you would like to work on an issue or feature, there is no need to request permission. Please add tests to any new features.

## Pull Requests

In order to create a pull request for Projecty, follow the GitHub instructions for [Creating a pull request from a fork](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork). Please link your pull request to an existing issue.

## Folder Structure

Description of the project files and directories.

```bash
├── public/                    # Files that will write to dist on build
├── src/                       # All SocialDev app source files
│   ├── assets/                # Supplemental assets
│   ├── components/            # Components in Atomic Design System
│       ├── atoms/             # Basic blocks for building bigger parts
│       ├── molecules/         # Many of atoms components connect to each other
│       ├── organisms/         # Biggest one's
│   └── firebase/              # Firebase config and refs files.
│   └── hooks/                 # All of custom Hooks in there
│   └── layout/                # GlobalStyles and theme from Styles Components
│   └── routes/                # Utils routes for React Router
│   └── state/                 # Redux - actions,reducers,store and enums
│   └── templates/             # Templates for further pages
│   └── theme/                 # Global Styles and color utils
│   └── types/                 # Types
│   └── utils/                 # Utilities functions
│   └── views/                 # Pages
│   └── index.js               # Main React file
│   └── setupTests.js          # Tests configuration file
├── .eslintrc                  # Eslint configuration file
├── .gitignore                 # Files ignored by git
├── .prettierrc                # Code convention enforced by Prettier
├── LICENSE                    # License for this open source project
├── package-lock.json          # Package lockfile
├── package.json               # Dependencies and additional information
├── README.md
```

## Scripts

An explanation of the `package.json` scripts.

| Command          | Description                         |
| ---------------- | ----------------------------------- |
| `build`          | Create a production build           |
| `start`          | Start a dev server                  |
| `eject`          | Eject CRA                           |
| `test`           | Run tests in the command line       |
| `netlify:deploy` | Build and deploy project to netlify |

## Technologies

This project is possible thanks to all these open source languages, libraries, and frameworks.

| Tech                                                  | Description                               |
| ----------------------------------------------------- | ----------------------------------------- |
| [React](https://reactjs.org/)                         | Library for building user interfaces      |
| [Typescript](https://www.typescriptlang.org/)         | Javascript superset language              |
| [Redux](https://redux.js.org/)                        | A Predictable State Container for JS Apps |
| [Reach Router](https://reach.tech/router)             | Declarative routing for React             |
| [Firebase](https://firebase.google.com/)              | Google development platform               |
| [Styled Components](https://styled-components.com/)   | Visual primitives for the component age.  |
| [CircleCI](https://circleci.com/)                     | Continuous Integration platform           |
| [Formik](https://jaredpalmer.com/formik/)             | Forms with easy-to-use validation.        |
| [React Testing Library](https://testing-library.com/) | Testing library for React                 |
| [Husky](https://github.com/okonet/lint-staged)        | Pre-commit tool.                          |
| [Lint-staged](https://github.com/okonet/lint-staged)  | Pre-commit tool.                          |
| [Eslint](https://eslint.org/)                         | Javascript Linter                         |
| [Prettier](https://prettier.io/)                      | Code formatter                            |

## Styleguide

Coding conventions are enforced by [ESLint](.eslintrc) and [Prettier](.prettierrc).

- React: functional style with Hooks (no classes)
- `const` preferred over `let`
