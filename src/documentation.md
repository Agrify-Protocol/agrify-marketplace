# Documentation

<img width="1440" alt="Screenshot 2024-10-13 at 17 07 35" src="https://github.com/user-attachments/assets/c8eca20f-fc35-4dcd-87fd-f2e1339ef3ad">

## 🌐 Overview

Agrify Marketplace is a platform connecting users with regenerative farm projects, promoting sustainable agriculture. By purchasing carbon credits from these projects, users support farmer resilience, contribute to environmental sustainability, and achieve their carbon offset goals through a transparent and impactful investment process.

## 🌿 What We Do:

We aggregate a variety of regenerative farm projects across different regions, making it easy for users to:

- 🔎 Browse projects and review key details like the project’s state, number of farms, and available credits.
- 💳 Purchase carbon credits using credit cards or by generating an invoice.
- 📈 Track their investments and offset contributions.

### ✨ Features:

- **Produce Collection** 🌱: <br /> Displays projects by state, country, the number of farms, and available carbon credits.
- **Project Showcase** 🛒: <br />
  - Overview: Key insights, about the project, highlights, and gallery.
  - Project Details: In-depth information about the farm’s impact.
  - Storefront: Where users can purchase carbon credits.
  - My Purchases: Overview of the user’s purchases.
- **Profile Section** 👤: <br />
  - Overview: Funds deployed, projects funded, total offsets (tonnes).
  - Projects Funded: A list of projects users have supported.
  - Reports Generated: Detailed reports on the user’s contributions.

## 🛠️ Technologies

- ⚡ Next.js: A React framework for building fast, SEO-optimized web applications.
- 🎨 Chakra UI: A modular component library used to create a consistent design system for the platform.
- 🔧 TypeScript: For static typing and improved code maintainability.

## 🔗 Integration

The app relies on `Axios` for handling HTTP requests. It simplifies making asynchronous calls and managing the responses from the backend API.

- **API Routes**:<br /> All API routes are defined inside `/src/services/api`. These handle the interactions between the frontend and the backend, including fetching project data, processing purchases, and managing user profiles.
- **Axios Instance**:<br /> The Axios instance is set up in `/src/services/axios`, where base configurations, such as base URLs and global headers, are defined for all API calls.

## 🔧 Backend API

Agrify's frontend is powered by a robust backend API that handles various data transactions. For detailed information on the available API endpoints, refer to the Backend Postman Documentation [here](https://www.postman.com/agrify-africa/workspace/74781e95-148f-49ef-817f-b07c06fac35e).

This documentation provides insight into how the platform communicates with the backend to perform key operations.

## 🗂️ Folder Structure

The Agrify Marketplace codebase follows a well-structured and modular approach to ensure maintainability and clarity:<br /><br />
<img width="364" alt="Screenshot 2024-10-13 at 18 00 37" src="https://github.com/user-attachments/assets/09b619e3-646e-481e-9e3a-e7a64e4e07c7"><br />

- 📁 `/public`: Contains all public-facing assets such as icons, the Google Analytics HTML snippet, and other static files.<br />
- 📁 `/src`: The core of the app’s codebase, with the following structure:

  - 📁 `/src/app`: This folder contains all the routes following Next.js conventions. Each route folder contains:
    <br />
    <img width="352" alt="Screenshot 2024-10-13 at 18 05 13" src="https://github.com/user-attachments/assets/4f70f0f9-0c00-44ff-8131-4fa0b86126c6"><br />
    - `/src/app/page.tsx`: The main page component rendered when the user visits that route.
    - `/src/app/types.ts`: **(Optional)** Defines TypeScript types or interfaces for that route.
    - `/src/app/constant.ts`: **(Optional)** Exports constants used in the route. Not every folder has these files; they are only included when necessary.<br /> <br />
  - 📁 `/src/assets`: Stores all the assets used in the app, such as images and icons.<br />
  - 📁 `/src/components`: This folder contains components divided into two main categories:
    - Page-specific Components:<br /> Components related to a specific route. For example, <br /><br />
      <img width="352" alt="Screenshot 2024-10-13 at 18 18 48" src="https://github.com/user-attachments/assets/9df8e4bf-cc3c-4a49-a673-69c51ae4186d"><br /><br />
      The `/auth` route has an `AuthPageComponents` folder containing components specific to the authentication pages.
    - Common Components:<br /> Found in `/src/components/common`, these are reusable components, such as the Navbar, that can be used across different routes.<br />
      <img width="352" alt="Screenshot 2024-10-13 at 18 20 28" src="https://github.com/user-attachments/assets/14d7bc81-dd5b-4b72-9e97-cc65fbdec2e3"><br /><br />
  - 📁 `/src/config`: This directory stores configurations, including the base API URL and other app-wide settings.<br />
  - 📁 `/src/constants`: Contains general constants that can be reused throughout the app.<br /><br />
  - 📁 `/src/context`: Defines context management for different parts of the app. For instance:<br />
    <img width="352" alt="Screenshot 2024-10-13 at 18 24 02" src="https://github.com/user-attachments/assets/89cfabd9-039b-46b0-82e9-d55d12b18135"><br />
    - `/src/context/AuthContext`: Manages authentication-related state and operations, such as login, signup, and user sessions. Each context file might have its constants or types defined locally.<br /><br />
  - 📁 `/src/fonts`: Stores the custom fonts used in the app for styling consistency.<br />
  - 📁 `/src/hooks`: Custom React hooks used in the app for abstracting common logic and state management.<br /><br />
  - 📁 `/src/services`: Custom React hooks used in the app for abstracting common logic and state management.<br />
    <img width="352" alt="Screenshot 2024-10-13 at 18 29 00" src="https://github.com/user-attachments/assets/3b10dd97-f0c7-4d1b-8584-6b6457919e43"><br />
    - `/src/services/api`: Defines the routes for fetching and sending data to the backend.
    - `/src/services/axios`: Contains the Axios instance configuration, including base URL, headers, and interceptors.<br /><br />
  - 📁 `/src/theme`: This folder is used for defining the custom Chakra UI theme, including colors, fonts, and component styles tailored to the app’s design.
  - 📁 `/src/utils`: Contains utility functions that can be used globally within the app. These include functions for formatting dates, handling currency conversions, and more.
