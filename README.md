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

### Integrating Sanity with Next.js

1. **Installing Dependencies in my-blog**  
   Inside my-blog folder, I ran:
   npm install next-sanity @sanity/image-url

2. **Configuring the Sanity Client**  
   I created my-blog/src/sanity/client.js and imageURL.js:

3. **Fetching Data in Next.js Pages**  
   I used GROQ queries in my Next.js pages (e.g., Home, Movies, Games) to dynamically fetch and display content. For example, in my-blog/src/app/page.jsx, I fetch all media items and apply a genre filter.

### Running and Testing Locally

1. **Clone the Repository**  
   git clone <repository-url>
   cd cms-practice

2. **Install Dependencies for my-blog**  
   cd my-blog
   npm install

3. **Create Environment Variables**  
   Inside my-blog folder, I ran:
   NEXT_PUBLIC_SANITY_PROJECT_ID=y2oj2zi4
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2023-03-25

   # For a private dataset, add:

   # NEXT_PUBLIC_SANITY_TOKEN=your_generated_token_here

4. **Run the Development Server**  
   npm run dev

5. **Run the Development Server**  
   Checked http://localhost:3000 to ensure that the homepage loads dynamic media content and that filtering works as expected.

### Deployment

1. **eploying my-blog on Vercel**  
   I connected the my-blog repository to Vercel and added the necessary environment variables in Vercel’s project settings (using the same keys as in my .env.local file). After deploying, I verified that the media content loads correctly in production.

2. **Sanity Studio**  
   I can run the studio-my-blog project locally for content management or deploy it separately if needed.

### Deployment

Next.js – React framework for server-side rendering and routing.
Tailwind CSS – Utility-first CSS framework for styling.
next-sanity – Sanity client for Next.js integration.
@sanity/image-url – Library to build image URLs from Sanity image objects.
Framer Motion – Library for smooth animations and transitions.

### Conclusion

This assignment helped me practice on how to integrated a headless CMS with Next.js application.
By leveraging Sanity for content management and Tailwind CSS for responsive design, I built a dynamic media showcase that displays movies and games with smooth animations and transitions. The separation of the web application (my-blog) and the CMS (studio-my-blog) provides a clean and maintainable folder structure.
