# WanderStay

WanderStay is a full-stack web application inspired by Airbnb that enables users to discover, create, and manage property listings through a secure and user-friendly platform. The application incorporates authentication, image management, location mapping, reviews, and personalized favorites to deliver a modern accommodation booking experience.

---

## Project Overview

The primary objective of WanderStay is to simulate the core functionality of a real-world accommodation marketplace while following industry-standard web development practices.

The application allows authenticated users to publish property listings, upload images, manage their own listings, write reviews, maintain a personalized favorites collection, and search destinations efficiently. The project is designed with a scalable MVC architecture and integrates cloud services for media storage and database management.

---

## Key Features

- Secure user authentication using Passport.js
- User registration, login, and session management
- Create, update, and delete property listings
- Cloudinary integration for image uploads
- Destination search functionality
- Interactive location mapping
- Add and remove listings from Favorites
- Review and rating system
- Authorization for listing ownership
- Responsive user interface using Bootstrap
- Flash messaging for user feedback

---

## Technology Stack

### Frontend

- HTML5
- CSS3
- Bootstrap
- EJS
- JavaScript

### Backend

- Node.js
- Express.js

### Database

- MongoDB Atlas
- Mongoose

### Authentication

- Passport.js
- Express Session

### Cloud Services

- Cloudinary
- OpenStreetMap (Nominatim API)

### Deployment

- Render

---

## Project Architecture

```
WanderStay
│
├── controllers
├── models
├── routes
├── public
│   ├── css
│   ├── js
│   └── images
├── views
├── utils
├── cloudConfig.js
├── app.js
└── package.json
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/Itismitasahoo/Explore_Airbnb.git
```

Navigate to the project directory

```bash
cd Explore_Airbnb
```

Install dependencies

```bash
npm install
```

Start the application

```bash
npm start
```

---

## Future Enhancements

The following improvements are planned for future releases.

- Property booking functionality
- Payment gateway integration
- Advanced filtering and sorting
- User profile dashboard
- Availability calendar
- Host analytics
- Notification system
- Dark mode support

---

## Author

**Itismita Sahoo**

GitHub: https://github.com/Itismitasahoo

---

## License

This project is intended for educational and portfolio purposes.
