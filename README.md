# @ngrx example application

Example application utilizing @ngrx libraries, showcasing common patterns and best practices. Try it on [StackBlitz](https://ngrx.github.io/platform/stackblitz.html).

This app is a book collection manager. The user can authenticate, use the Google Books API to search for
books and add them to their collection. This application utilizes [@ngrx/store](https://ngrx.io/guide/store) to manage
the state of the app and to cache requests made to the Google Books API;
[@ngrx/effects](https://ngrx.io/guide/effects) to isolate side effects; [@angular/router](https://angular.dev/guide/routing) to manage navigation between routes; [@angular/material](https://github.com/angular/material2) to provide design and styling.

Built with [@angular/cli](https://github.com/angular/angular-cli)

### Included

- [@ngrx/store](https://ngrx.io/guide/store) - RxJS powered state management for Angular apps, inspired by Redux
- [@ngrx/effects](https://ngrx.io/guide/effects) - Side effect model for @ngrx/store
- [@ngrx/router-store](https://ngrx.io/guide/router-store) - Bindings to connect the Angular Router to @ngrx/store
- [@ngrx/entity](https://ngrx.io/guide/entity) - Entity State adapter for managing record collections.
- [@ngrx/store-devtools](https://ngrx.io/guide/store-devtools) - Instrumentation for @ngrx/store enabling time-travel debugging
- [@angular/router](https://angular.dev/guide/routing) - Angular Router
- [@angular/material](https://material.angular.io) - Angular Material
- [jest](https://jestjs.io) - JavaScript test runner with easy setup, isolated browser testing and snapshot testing

### Quick start

Clone this repository

```bash

# Go to root directory
cd reading-journal

# Install the dependencies
pnpm install

# Start the server
pnpm exec nx serve
```

Navigate to [http://localhost:4200/](http://localhost:4200/) in your browser. To log in, the username and password is `test`.

_NOTE:_ The above setup instructions assume you have added local npm bin folders to your path.
If this is not the case you will need to install the Angular CLI globally.

### Try it on StackBlitz

Try the example-app on [StackBlitz](https://ngrx.github.io/platform/stackblitz.html).
