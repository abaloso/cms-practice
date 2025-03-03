# CMS Practice - Next.js & Sanity Integration

Welcome to my CMS Practice project! In this repository, I integrate a headless CMS (Sanity) with a Next.js web application. I built this project to dynamically fetch and display media content (movies and games) using Sanity for content management and Next.js for the frontend. The repository is organized into two main parts:

- **my-blog**: My Next.js web application that fetches and displays media content from Sanity.
- **studio-my-blog**: My Sanity Studio project where I manage and update the media content.

I use Tailwind CSS for styling and Framer Motion for smooth transitions and animations. The web application is deployed on Vercel, and I use environment variables to securely configure the Sanity client.

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

I aimed to create a dynamic media showcase that displays movies and games, with content managed via Sanity. My key design choices included:

- **Responsive Layout:** I built the Next.js application with a mobile-first approach using Tailwind CSS. The navigation adapts to different screen sizes with a hamburger menu on smaller devices.
- **Dynamic Content:** I fetch content from Sanity, which allows me to update the media without redeploying the site.
- **Smooth Transitions:** I used Framer Motion to create smooth page transitions and animations, enhancing the overall user experience.
- **Clean and Minimal UI:** I focused on a simple, modern design that keeps the user experience straightforward and enjoyable.

## Implementation Approach

### Frontend (my-blog)

- I used the Next.js App Router for file-based routing and server-side rendering.
- I styled the project with Tailwind CSS for a responsive design.
- I implemented animations using Framer Motion.
- I integrated Sanity using the `next-sanity` client and `@sanity/image-url` to fetch and display dynamic media content.

### Headless CMS (studio-my-blog)

- I set up Sanity CMS to manage my media content.
- I defined a unified media schema (or separate schemas if needed) to structure my documents for movies and games.
- I used Sanity Studio to add, update, and manage my media content.

## Setting Up Sanity CMS

1. **Creating the Sanity Project:**  
   I signed up at [Sanity.io](https://www.sanity.io/) and created a new project (with project ID `y2oj2zi4`). I used the free tier for initial development.

2. **Defining Schemas:**  
   In the `studio-my-blog/schemas/` folder, I created a media schema (in `media.js`) to structure my documents.
