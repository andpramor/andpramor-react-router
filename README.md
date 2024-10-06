# 🚀 React Router From Scratch

In this project, I built a **custom React router** from the ground up! It's a full-fledged routing system that powers Single Page Applications (SPAs) with smooth navigation, just like popular routers. Already tested, now the router will be extracted into an installable package and published to **NPM**.

## 🌟 Features

- **Single Page Application (SPA) Navigation**: Achieve seamless page transitions without reloading the page, giving your app a dynamic feel.
- **Back/Forward Navigation**: Enable navigation through browser history (back/forward buttons), without reloading the page, offering a user-friendly experience.
- **Declarative `<Link />` Component**: The `<Link>` component allows for seamless navigation within the app, similar to React Router. It accepts `to` (the destination path), `target` (e.g., _blank for opening in a new tab), and additional `...props`. While it typically navigates within the app as an SPA, it gracefully handles cases like `target="_blank"` by ignoring SPA behavior. The text passed as children (e.g., `<Link>My text</Link>`) is properly displayed as a regular anchor's content would.
- **Declarative `<Router />` Component**: Define routes declaratively, making routing intuitive and easy to manage within your app. Accepts both an array of routes, with every route being an object with `path` and `Component`, and `<Route />` components passed to Router as children.
- **404 Handling (Default Route)**: Automatically direct users to a 404 page or a default route when a page is not found.
- **Route Parameters**: Pass dynamic data through the URL, allowing for flexible routing patterns (e.g.: `/user/:id`).
- **Declarative `<Route />` Component**: Define specific routes for each page in your app, controlling which components should render based on the URL.
- **Lazy Loading for Routes**: Boost performance by loading route components lazily, only when they’re needed.
- **Testing**: Ensure the router behaves as expected testing its methods with `vitest` and `@testing-library/react`.
- **Publish to NPM**: Package the router and share it with the community by publishing it to **NPM**.

## 🔗 Demo
You can check out a demo project built using this router <a href="https://andrespradomorgaz.com/andpramor-react-router">here</a>.

<strong>The demo project also includes</strong>

- **Internationalization (i18n)**: Supports multiple languages and localization, allowing pages to adapt based on the user's language as determined by the active route. This feature demonstrates the use of route parameters but is not directly related to the router itself and is not included in the NPM package.

## 🛠️ Roadmap

- [x] SPA navigation
- [X] Back/Forward button support
- [x] Declarative `<Link />` component
- [x] Declarative `<Router />` component
- [x] Default route (404 handling)
- [x] Dynamic route parameters
- [x] Declarative `<Route />` component
- [x] Lazy loading for routes
- [x] i18n
- [x] Testing
- [ ] Publish to NPM

## 📦 Installation (Planned)

Once tested, I'll publish it so you're be able to install this router in any React project:
```bash
npm install andpramor-react-router
```

Stay tuned for updates as I continue to build this project from scratch!
