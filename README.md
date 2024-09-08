
# Decarb Earth

[![Live Application](https://img.shields.io/badge/Live-App-blue)](https://denis-decarb-earth.vercel.app/)

This repository contains the source code for **Denis Decarb Earth**, a web application aimed at tackling decarbonization challenges by managing user registration, profiles, and climate data, using modern web development technologies.

## Table of Contents
- [Getting Started](#getting-started)
- [Project Setup](#project-setup)
- [Environment Variables](#environment-variables)
- [Tech Stack](#tech-stack)
- [Live Application](#live-application)
- [License](#license)

## Getting Started

### Prerequisites
Make sure you have the following installed:
- **Node.js**: version 18.x or higher.
- **Yarn**: for package management.
- **Git**: version control to clone the repository.

### Project Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/munaashe/denis-decarb-earth.git
   cd denis-decarb-earth
   ```

2. Install dependencies using Yarn:
   ```bash
   yarn install
   ```

3. Set up the environment variables (see [Environment Variables](#environment-variables)).

4. Run the development server:
   ```bash
   yarn dev
   ```

   The app will be running locally at `http://localhost:3000`.

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
NEXT_PUBLIC_GRAPHQL_URI=https://league-api.staging.decarb.earth/graphql
NEXT_PUBLIC_VERCEL_URL=https://denis-decarb-earth.vercel.app
```

Make sure to replace these with your own values if you're using a different environment or API.

### Building for Production

To build the application for production:

```bash
yarn build
```

You can then start the production server:

```bash
yarn start
```

## Tech Stack

### 1. **Next.js** (v14)
- **Why Next.js?**
  - **SSR and Static Generation**: Next.js allows us to render content either server-side or statically, which improves SEO and initial page load speed.
  - **API Routes**: We can easily create serverless functions to handle our back-end logic (like registration and profile updates).
  - **File-based routing**: Simplifies the structure of the application by organizing routes based on folder structure.

### 2. **Apollo Client** (GraphQL)
- **Why Apollo Client?**
  - **GraphQL Query Language**: Apollo Client provides a powerful API to fetch and manage GraphQL data, enabling real-time data fetching and efficient caching.
  - **State Management**: Apollo also acts as a global state manager to keep the client-side state synchronized with the server data.

### 3. **Tailwind CSS**
- **Why Tailwind CSS?**
  - **Utility-first Framework**: Tailwind allows rapid UI development with utility classes, making it easier to style components without leaving the markup.
  - **Responsive Design**: Built-in classes for different screen sizes enable us to easily implement responsive layouts.
  - **Theme Support**: Perfect for implementing light/dark modes with ease, tailored to our application's needs.

### 4. **Redux Toolkit + Redux Persist**
- **Why Redux Toolkit?**
  - **State Management**: Redux Toolkit simplifies global state management with an easy-to-use API and integrates seamlessly with React.
  - **Reducers and Actions**: It enables us to handle user data and profile updates effectively across components.
- **Why Redux Persist?**
  - **Persist State**: Allows us to persist Redux state (like user data) even after page reloads or closing the browser.

### 5. **Headless UI**
- **Why Headless UI?**
  - **Accessible UI Components**: Provides unstyled, accessible UI primitives that can be styled to match any design, making it easier to create modals, dialogs, etc.
  - **Integration with Tailwind**: Pairs perfectly with Tailwind CSS, allowing us to customize the UI without worrying about accessibility.

### 6. **GraphQL**
- **Why GraphQL?**
  - **Efficient Data Fetching**: With GraphQL, we can specify exactly what data we need, avoiding over-fetching or under-fetching of data from our API.
  - **Schema-first Design**: Allows us to define a strong contract between the client and server, leading to fewer bugs and easier iteration.

### 7. **TypeScript**
- **Why TypeScript?**
  - **Type Safety**: TypeScript ensures we catch errors at compile time rather than runtime, making the app more reliable and maintainable.
  - **Better Development Experience**: With autocompletion, inline documentation, and error checking, TypeScript improves productivity and reduces common mistakes.

### 8. **Vercel**
- **Why Vercel?**
  - **Hosting**: Vercel offers seamless integration with Next.js, with features like automatic deployments, serverless functions, and CDN support out of the box.
  - **Preview Environments**: Every push to the repository creates a unique deployment, making it easy to preview changes before going live.

## Live Application

The application is deployed on Vercel and can be accessed [here](https://denis-decarb-earth.vercel.app/).

