# 🎬 RateFlix - Movie Rating Aggregator

![Status](https://img.shields.io/badge/Status-Work%20In%20Progress-yellow)
![Development](https://img.shields.io/badge/Development-Active-success)

![CI](https://img.shields.io/badge/CI-no%20status-lightgrey)
![Website](https://img.shields.io/badge/website-down-red)
![Pull Requests](https://img.shields.io/badge/pull%20requests-0%20open-brightgreen)
![Commits](https://img.shields.io/badge/commits-12-blue)
![Contributors](https://img.shields.io/badge/contributors-1-blue)
![License](https://img.shields.io/badge/license-MIT-green)

> 🚧 **Note:** This project is currently under active development. Features and documentation may not be final.

RateFlix is a full-stack web application that aggregates streaming movies and their ratings. Users can search, filter, and maintain their favorite movies list while getting accurate rating information to make informed viewing decisions.

## ✨ Features

- **Movie Information**:
  - Comprehensive movie catalog
  - Real-time rating integration
  - Detailed movie information and descriptions
  - Advanced search and filtering capabilities

- **User Features**:
  - Secure authentication with Clerk
  - Personal favorite movies list
  - Custom movie filtering preferences
  - Responsive and intuitive interface

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)

### Database & Caching
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)

### DevOps
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)

## 📋 Prerequisites

- Node.js (v18 or higher)
- Docker and Docker Compose
- AWS Account (for deployment)
- Clerk API keys
- Movie API credentials

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/rateflix.git
cd rateflix
```

2. Set up environment variables:
Create `.env` files in both client and server directories:

```env
# server/.env
DATABASE_URL="postgresql://user:password@localhost:5432/myapp"
REDIS_URL="redis://localhost:6379"
MOVIE_API_KEY=your_movie_api_key

# client/.env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

3. Start the development environment:
```bash
docker-compose up --build
```

The application will be available at:
- Frontend: http://localhost:80
- Backend: http://localhost:4000
- GraphQL Playground: http://localhost:4000/graphql

## 🏃‍♂️ Development

To run the applications individually:

**Frontend:**
```bash
cd client
npm install
npm run dev
```

**Backend:**
```bash
cd server
npm install
npm run dev
```

## ⚙️ Architecture

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   React     │     │   Express   │     │ PostgreSQL  │
│  Frontend   │────▶│   Backend   │────▶│    Redis    │
└─────────────┘     └─────────────┘     └─────────────┘
       │                   │
       │            ┌──────┴───────┐
       │            │  Movie API   │
       └───────────▶│    Clerk     │
                    └──────────────┘
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Clerk for authentication services
- The open-source community for the amazing tools and libraries
