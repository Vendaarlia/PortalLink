
# PORTAL LINK
This project is a web application for managing user profiles, allowing users to create, edit, and publish their profiles. It also provides a public page for each user's profile.

## homepage
![homepage](/public/homepage.png)

## demo
![PortalLink](/public/demo.png)

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
2. Open the clone folder with vscode and open Terminal menu
3. Install dependencies with type this `npm install` on terminal
4. Set up [mongoDB](https://www.mongodb.com) and [Clerk](https://clerk.com)
5. create `.env.local` and insert your keys from Clerk and mongoDB. example ini `.env.example`
6. Run the development server with `npm run dev`

## Usage
1. Register and log in using google or email
2. Navigate to the dashboard to manage and publish your profile
3. Share your public profile page with your friends! `you need to deploy to server/VPS`

## API Endpoints
- `/api/create` - Create or update user profiles
- `/api/get` - Get user profile data
- `/api/page/get` - Get public user profile data

## License
This project is licensed under the GNU GENERAL PUBLIC LICENSE - see the LICENSE.md file for details.