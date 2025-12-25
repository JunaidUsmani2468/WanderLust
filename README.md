# WanderLust 🧭 – Unleash Your Journey 🗺️

WanderLust is a hotel booking web application that allows users to easily browse through various listings and reserve accommodations. It provides a clean interface for travelers to discover unique places to stay and allows hosts to list their properties for rent.

This is my first major fullstack project where I handled both the frontend and backend development. It is built as a functional clone of Airbnb and is designed with a responsive layout to ensure a seamless experience on both mobile phones and desktop computers.

## 🚀 Live Demo

Click here to explore unique stays and start your journey! 👉 [ **[ CLICK HERE ]** ]( https://wanderlust-du5m.onrender.com )

> 💡 **Pro Tip:** Login is hassle-free! You don't need a real email ID—just create a dummy account to test features like adding reviews. 😜
>
> 😎 **Try this:** Visit the app both as a **Guest** and while **Logged In**. The interface is smart enough to detect your status and completely adapts the User Menu and features accordingly!

## 🌟 Beyond the Tutorial
While this project was initially inspired by a tutorial, I have significantly expanded its capabilities, design, and architecture to build a more robust production-ready application. Here are the major custom implementations:

| Feature | Description |
| :--- | :--- |
| **🗺️ Map Integration** | Replaced Mapbox with **Leaflet.js & Nominatim** (OpenStreetMap) to keep the project 100% free and open-source. |
| **🎨 Landing Page** | Designed a completely unique **Home Page** with modern aesthetics and dynamic animations. |
| **🔍 Smart Search** | Built a robust search logic that intelligently parses City and Country names from user queries. |
| **👥 User Menu** | A smart, conditional dropdown menu that changes based on authentication state (Guest vs. User). |
| **🧑‍💻 Animated Logo** | Highly styled, custom logo using SVG icons with CSS animations to create a dynamic and engaging visual identity. |
| **⭐ Rating System** | **Pure JS & CSS** rating logic. No external libraries used for maximum performance. |
| **🏷️ Filters** | Implemented category-based filtering (e.g., Farms, Pools, Arctic) for easy discovery. |
| **⚖️ Legal Pages** | Added professional **Privacy & Terms** pages ("Junaid Advocate" edition 😉). |

#### 🗺️ Why Leaflet & Nominatim?
* **The Challenge:** The original tutorial relied on Mapbox, which now requires credit card details for API access.
* **My Solution:** I completely re-engineered the geolocation system using **Leaflet.js** for rendering and **OpenStreetMap (Nominatim API)** for geocoding. This ensures the project remains 100% free and open-source without sacrificing interactive map functionality.

## 📸 Screenshots

| **Immersive Home Page** |
|:---:|
| <img src="./public/assets/home-page.png" width="100%" alt="Home Page"> |
| *Custom designed landing page with dynamic animations* |

| **Interactive Maps (Leaflet)** | **User Dashboard & Menu** |
|:---:|:---:|
| <img src="./public/assets/map-view.png" width="100%" alt="Map View"> | <img src="./public/assets/user-menu.png" width="100%" alt="User Menu"> |
| *Open-source map implementation using Leaflet.js* | *Dynamic user controls and clean UI* |

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, JavaScript (ES6+), Bootstrap, EJS (Embedded JavaScript templates).
* **Backend:** Node.js, Express.js.
* **Database:** MongoDB, Mongoose.
* **Authentication:** Passport.js (Local Strategy).
* **Maps:** Leaflet.js, OpenStreetMap API.
* **Cloud Storage:** Cloudinary (for image storage).

## 📚 Learning Outcomes

Building this project as my first full-stack application helped me understand:
1.  **MVC Architecture:** Structuring code into Models, Views, and Controllers.
2.  **RESTful Routing:** creating proper CRUD operations.
3.  **Database Relationships:** Linking Users, Listings, and Reviews in MongoDB.
4.  **Middleware:** Handling authentication and server-side validation.
5.  **API Integration:** Working with Geocoding APIs and Map rendering.

## 🙏 Acknowledgements

This project was initially built under the guidance of **Shradha Khapra (Apna College)**.

A huge thank you to Shradha Ma'am for her incredible teaching style. Her "Sigma Batch" tutorials provided the foundation upon which I built this enhanced version. Her guidance gave me the confidence to debug errors, implement new libraries (like Leaflet), and finally call myself a **Full Stack Developer**.
