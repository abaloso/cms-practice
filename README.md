# CMS Practice - Next.js & Sanity Integration

This repository demonstrates a headless CMS integration using Next.js for the web application and Sanity for content management. The repository is organized into two main projects:

- **my-blog**: A Next.js web application that fetches and displays media content (movies and games) from Sanity.
- **studio-my-blog**: A Sanity Studio project used to manage and update the media content.

Both projects utilize Tailwind CSS for styling and Framer Motion for smooth transitions and animations. The web application is deployed on Vercel, and environment variables are used to securely configure the Sanity client.

## Table of Contents

- [Design Choices](#design-choices)
- [Implementation Approach](#implementation-approach)
- [Setting Up Sanity CMS](#setting-up-sanity-cms)
- [Integrating Sanity with Next.js](#integrating-sanity-with-nextjs)
- [Running and Testing Locally](#running-and-testing-locally)
- [Deployment](#deployment)
- [Dependencies](#dependencies)
- [Conclusion](#conclusion)

## Design Choices

- **Responsive Layout**: The Next.js application is built with a mobile-first approach using Tailwind CSS. The navigation adapts for small screens with an animated hamburger menu.
- **Dynamic Content**: Content for movies and games is managed via Sanity CMS, allowing for real-time updates without redeploying the web application.
- **Smooth Transitions**: Framer Motion is used for smooth page transitions and animations.
- **Separation of Concerns**: The web application and the content management system are maintained in separate folders for clarity and maintainability.

## Implementation Approach

### Frontend (my-blog)

- **Next.js App Router**: Provides file-based routing and server-side rendering.
- **Tailwind CSS**: Used for utility-first styling and ensuring a responsive design.
- **Framer Motion**: Enables smooth animations for page transitions and interactive components.
- **Sanity Integration**: The `next-sanity` client and `@sanity/image-url` are used to fetch and display dynamic media content.

### Headless CMS (studio-my-blog)

- **Sanity CMS**: Manages the content for movies and games.
- **Schemas**: A unified media schema (or separate schemas if desired) defines the structure for documents, including fields such as title, slug, media type, image, categories, and content.

## Setting Up Sanity CMS

1. **Create a Sanity Project**

   - Sign up at [Sanity.io](https://www.sanity.io/) and create a new project (e.g., with ID `y2oj2zi4`).
   - Use the free tier for initial development.

2. **Define Schemas**

   - In `studio-my-blog/schemas/`, create your media schema (for movies and games). For example, a unified schema in `media.js`:

3. **Populate Content**
   - Run `sanity start` inside the `studio-my-blog` folder to launch Sanity Studio.
   - Add several documents for movies and games with proper images and categories.

## Integrating Sanity with Next.js

1. **Install Dependencies in my-blog**
   ```bash
   npm install next-sanity @sanity/image-url
   ```
