# MySocials

MySocials is an open-source link-in-bio tool designed to simplify the management of social media links. Built with Next.js, Shadcn, and MongoDB, this project provides a seamless way to share multiple links using a single landing page.

## Preview

- Homepage

![MySocials Preview](/public/homepage.png)

- User Page

![MySocials Preview](/public/demo.png)

## Features

- **Customizable Profiles:** Create personalized profiles with unique backgrounds, colors, and profile pictures.
- **Multiple Links:** Add and manage multiple social media links in one place.
- **Analytics:** Not avilabe for now but i will add it in serval days.
- **Responsive Design:** Ensures compatibility and optimal viewing across various devices.

## Technologies Used

- **Next.js:** Utilized for building a fast and scalable React-based web application.
- **Shadcn:** Helps in styling and designing user interfaces effectively.
- **MongoDB:** Stores and manages user data and link information.

## Installation

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/r2hu1/mysocials.git`
2. Install dependencies: `npm install`
3. Set up MongoDB and configure the connection string in the application.
4. Create a `.env.local` file
5. Add mongodb and clerk's environment variables
7. Start the development server: `npm run dev`

## Usage

1. After setting up the project locally, access the application at `localhost:3000`.
2. Create an account or log in.
3. Customize your profile, add social media links, and save changes.
4. Share your unique MySocials link with your audience.






# Project README

## Description
This project is a web application for managing user profiles, allowing users to create, edit, and publish their profiles. It also provides a public page for each user's profile.

## Features
- User profile management
- Profile publishing
- Public user profile page
- Integration with Clerk for user authentication

## Tech Stack
- Next.js for frontend
- Tailwind CSS for styling
- Clerk for user authentication
- MongoDB for data storage
- Lucide-React for icons

## Installation
1. Clone the repository
2. Install dependencies with `npm install`
3. Set up (mongoDB)[] and (Clerk)[]
4. Run the development server with `npm run dev`

## Usage
1. Register and log in using Clerk authentication
2. Navigate to the dashboard to manage and publish your profile
3. Visit your public profile page

## API Endpoints
- `/api/create` - Create or update user profiles
- `/api/get` - Get user profile data
- `/api/page/get` - Get public user profile data

## Contributors
- [Your Name]
- [Your Colleague's Name]

## License
This project is licensed under the [License Name] License - see the LICENSE.md file for details.