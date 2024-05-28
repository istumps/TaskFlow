# TaskFlow

A TaskFlow is a task management tool heavily inspired by Trello, where users can organize projects via workspaces, boards, lists, and cards. It tracks activities with audit logs and manages collaboration through member roles, enhancing team coordination and project oversight.

<img src="https://github.com/istumps/TaskFlow/assets/90006484/90fd3c74-7ba2-473f-87fa-1219386f6619" alt="Resized Image" width="500">
<img src="https://github.com/istumps/TaskFlow/assets/90006484/8585e43f-9f62-4d59-8c97-833c8704044b" alt="Resized Image" width="500">

## Getting Started

1. Visit the [TaskFlow Website](task-flow-alpha.vercel.app).
2. Sign up or log in to explore the tools.
3. Enjoy 5 free boards under the Free tier, or upgrade to the Pro tier for unlimited boards.

## Pro Tier

- The Pro tier is available at no cost as part of my development exercise with Stripe.
- Users can simulate a subscription using dummy credit card details provided in the sign-up flow.
    - Credit Card #: 4242 4242 4242 4242; Credit Card Month/Year: 04/24; CVV: 424; Address: 4242 Fun, San Francisco, CA 94014;


## Technologies Used

### Frontend

- TypeScript
- React
- Next.js
- shadcnUI & TailwindCSS


### Backend


- Prisma
- MySQL

### Authentication

- Clerk (for credential management with email + Google sign-in support)


### Payments

- Stripe (for handling subscriptions and payment processes)

## Features

- Organizations / Workspaces: Support for multiple organizations and workspaces, enabling teams to collaborate efficiently.
- Board Creation: Users can create boards to organize their tasks and projects.
- Unsplash API Integration: Utilizes Unsplash API to provide random beautiful cover images for boards.
- Activity Log: Maintains an activity log for the entire organization to track changes and updates.
- Board Management: Includes features for renaming and deleting boards.
List Management: Users can create lists, rename, delete, drag & drop reorder, and copy lists.
- Card Management: Supports card creation with features like description, rename, delete, drag & drop reorder, and copy.
- Card Activity Log: Keeps a detailed log of activities related to each card.
Board Limits: Enforces a board limit for every organization.
- UI/UX: Features a responsive and visually appealing interface built with shadcnUI & TailwindCSS.
