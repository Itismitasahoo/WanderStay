# WanderStay

WanderStay is a full-stack accommodation listing platform inspired by Airbnb. It allows users to discover, create, and manage property listings through a responsive and user-friendly interface. The application features secure authentication, cloud-based image uploads, interactive maps, reviews, favorites, and destination search.

🔗 Live Demo: https://wanderstay-h7ql.onrender.com/listings

---

## Project Overview

The primary objective of WanderStay is to simulate the core functionality of a real-world accommodation marketplace while following industry-standard web development practices.

The application allows authenticated users to publish property listings with categories, upload images, manage their own listings, write reviews, maintain a personalized favorites collection, and search destinations efficiently. Users can also filter listings by categories to quickly discover properties matching their interests. The project is designed with a scalable MVC architecture and integrates cloud services for media storage and database management.

---

## Key Features

## Key Features

- **User Authentication:** Secure registration, login, and session management using Passport.js.
- **Listing Management:** Create, view, edit, and delete property listings.
- **Image Uploads:** Upload and manage listing images using Cloudinary.
- **Category-Based Browsing:** Explore properties across categories such as Rooms, Mountains, Iconic Cities, Castles, Camping, Farms, Arctic, Domes, and Boats.
- **Destination Search:** Search listings by destination with autocomplete suggestions.
- **Interactive Maps:** Explore property locations through interactive maps.
- **Favorites:** Save properties to a personalized favorites list and manage saved listings.
- **Recently Viewed:** Keep track of recently visited properties and revisit them from a dedicated page.
- **Reviews and Ratings:** Share experiences and rate properties.
- **Authorization:** Restrict listing management and protected actions to authorized users.
- **Light and Dark Mode:** Switch between themes with preferences saved in the browser.
- **Responsive Design:** Enjoy a responsive interface across devices using Bootstrap.
- **Flash Messages:** Receive feedback for important actions, errors, and status updates.

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
- User profile dashboard
- Availability calendar
- Host analytics
- Notification system
---

## Author

**Itismita Sahoo**

GitHub: https://github.com/Itismitasahoo

---

## License

This project is intended for educational and portfolio purposes.
