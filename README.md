# Capstone 2 Project - Enjoy the Outdoors 🌄

Welcome to my project for Capstone 2, **Enjoy the Outdoors**, a retro-inspired digital experience celebrating the beauty and adventure of nature. This project brings together pages on National Parks, Mountains, Books, Events, Photos, and a Photo Gallery to create a visually engaging and interactive web interface. Each section is designed with a mix of nostalgia and modern functionality to immerse users in nature-inspired content.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Screenshots & Showcase](#screenshots--showcase)
- [Code Highlights](#code-highlights)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Credits](#credits)

---

## Project Overview
This project captures the essence of nature’s wilderness through interactive and stylized web elements. Built with a brutalist aesthetic, **Enjoy the Outdoors** includes sections on National Parks, Mountain Peaks, curated Books, Events, a Photo Gallery, and more. Users can navigate these sections via a retro Windows-inspired interface, complete with draggable windows and nostalgic icons.

---

## Features
- **National Parks Page**: Users can explore parks by location and type, view detailed park info, and enjoy a vintage-inspired map layout.
- **Mountains Page**: Provides mountain details like elevation and difficulty, along with sunrise and sunset info to help hikers plan adventures.
- **Books Page**: A collection of stories and guides featuring notable figures in nature. Users can preview each book in an interactive, scrollable format.
- **Events Page**: Showcases flyers for workshops and events with a community-centered approach. Each flyer offers a description window to more detailed event information.
- **Photo Gallery**: A curated visual experience capturing nature’s beauty, from serene landscapes to dramatic wildlife shots.


---

## Screenshots & Showcase

**Project Overview Section**  
![Project Overview](./assets/index.gif)

**National Parks Page**  
![National Parks Page](./assets/national_parks.gif)

**Mountains Page**  
![Mountains Page](./assets/mountains.gif)

**Photos**  
![Photos Page](./assets/photos.gif)

**Gallery**  
![Gallery Page](./assets/gallery.gif)

**Books Page (Preview Mode)**  
![Books Page](./assets/books.gif)

**Events Flyers**  
![Events Flyers](./assets/events.gif)

**About Page**  
![About Page](./assets/about.gif)

**Guestbook**  
![Guestbook](./assets/guestbook.gif)



---

## Code Highlights

### 1. National Parks Page - JavaScript for Park Filtering

The National Parks page allows users to filter parks by location and type using dropdowns. Here’s a snippet of the code that populates the dropdowns and filters park data dynamically:

```javascript
// Populate location and park type dropdowns
const populateDropdowns = () => {
  const locations = document.getElementById("location-dropdown");
  const parkTypes = document.getElementById("park-type-dropdown");

  // Populate location options
  locationsArray.forEach(location => {
    const option = document.createElement("option");
    option.text = location;
    locations.add(option);
  });

  // Populate park types
  parkTypesArray.forEach(type => {
    const option = document.createElement("option");
    option.text = type;
    parkTypes.add(option);
  });
};

// Filter parks based on selected options
const filterParks = () => {
  const selectedLocation = document.getElementById("location-dropdown").value;
  const selectedType = document.getElementById("park-type-dropdown").value;

  const filteredParks = parksArray.filter(park => {
    return (park.location === selectedLocation || selectedLocation === "") &&
           (park.type === selectedType || selectedType === "");
  });

  displayParks(filteredParks);
};
```

### 2. Mountains Page - Sunrise and Sunset Info

```javascript
const displaySunriseSunset = async (lat, lng) => {
  try {
    const data = await getSunsetForMountain(lat, lng);
    if (data.status === "OK") {
      let { sunrise, sunset } = data.results;

      // Convert times from 12-hour format to 24-hour for UTC parsing
      const sunriseUTC = new Date(`1970-01-01T${convertTo24HourFormat(sunrise)}Z`);
      const sunsetUTC = new Date(`1970-01-01T${convertTo24HourFormat(sunset)}Z`);

      // Convert to EST for display
      const options = {
        timeZone: "America/New_York",
        hour12: true,
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      };

      const sunriseEST = new Intl.DateTimeFormat("en-US", options).format(sunriseUTC);
      const sunsetEST = new Intl.DateTimeFormat("en-US", options).format(sunsetUTC);

      mountainInfoContainer.innerHTML = `<p>Sunrise: ${sunriseEST}, Sunset: ${sunsetEST}</p>`;
    }
  } catch (error) {
    console.error("Error fetching sunrise/sunset:", error);
  }
};

```

### 3. Books Page - Interactive Book Preview

The Books page features a preview mode where users can view books by double-clicking on a book cover. Each book has its own set of pages that load dynamically when selected:

```javascript
function loadBookContent(book) {
  const bookContentWindow = document.getElementById("book-content-area");
  const booksData = {
    'denali': {
      description: `<h2>Denali</h2><p>An inspiring journey...</p>`,
      images: [
        "../denali/editorial_1.jpg",
        "../denali/editorial_2.jpg",
        // Add all images
      ]
    },
    // More book objects here...
  };

  // Load book description and images
  const selectedBook = booksData[book];
  bookContentWindow.innerHTML = selectedBook.description;
  selectedBook.images.forEach(img => {
    const imgElem = document.createElement("img");
    imgElem.src = img;
    bookContentWindow.appendChild(imgElem);
  });
}
```

### 4. Events Page - Dynamic Flyer Display

The Events page displays upcoming workshops and community events through dynamically loaded flyers. Each flyer provides a summary with links for more information:

```html
<div class="event-flyer" onclick="openEvent('wildroots')">
  <img src="./images/flyers/wildroots.png" alt="Wildroots Flyer">
  <p><strong>Wildroots Workshop</strong> - Join us for an immersive nature experience.</p>
</div>
```

```javascript
function openEvent(eventId) {
  const eventDetails = {
    wildroots: {
      title: "Wildroots Workshop",
      description: "An immersive experience in conservation...",
      date: "August 5th, 2024",
    },
    // Add more events
  };

  const selectedEvent = eventDetails[eventId];
  alert(`${selectedEvent.title}\n\n${selectedEvent.description}\n\nDate: ${selectedEvent.date}`);
}
```

---

## Technologies Used
- **HTML5**: Structuring and building the layout of the pages.
- **CSS3**: Styling and adding animations for a retro and brutalist feel.
- **JavaScript**: Functionality, interactivity, and data handling for the different pages.
- **jQuery UI**: Making windows draggable and creating an OS-inspired feel.
- **Google Fonts**: Custom typography with the "Inter" font for a modern aesthetic. Also includes "Helvetica Neue" (**GOATED FONT**).
- **GIFs**: Nostalgic and dope GIFs to enhance the retro vibe of the project.

---

## Setup
1. Clone the repository:  
   ```bash
   git clone hhttps://github.com/thounny/capstone-2
   ```
2. Navigate to the project directory:
   ```bash
   cd capstone-2
   ```
3. Open `index.html` in your browser to view the project.

---

## Author

![Logo](./assets/index_dwn.gif)

**Thounny Keo**  
Creative Developer & Designer  
Frontend Development Student | Year Up United

---

![Miku](./assets/miku.gif)

Feel free to explore the project and leave feedback on the Guestbook page. Enjoy the adventure in digital nature! 🌲🌄
---





## PAGE VISITS:

![counter](https://count.getloli.com/@thounny?name=thounny&theme=booru-koe&padding=7&offset=0&align=top&scale=1&pixelated=1&darkmode=auto)