# ACM Temple University — Frontend

This is the official website for the **Association for Computing Machinery (ACM)** at Temple University, built with **Next.js**. The frontend runs as a standalone static site and does not require a backend to operate.

---

## Purpose

This site serves as the public-facing presence for ACM at Temple University. It displays club information, the member roster, and upcoming events. All content is managed through static data files — no database or CMS is required.

---

## Tech Stack

- **Next.js 15** — React framework
- **React 18** — UI library
- **Bootstrap 5** — CSS framework
- **Reactstrap** — Bootstrap components for React
- **React Icons** — Icon library
- **date-fns** — Date formatting

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`.

### 3. Build for production

```bash
npm run build
npm run start
```

---

## Updating Content

All site content is managed through static files. No backend or database access is needed.

### Members Roster

**File:** `app/_shared/MEMBERS.js`

Add or remove members by editing the `MEMBERS` array. Each member follows this structure:

```js
{
  id: 1,
  firstName: "Jane",
  lastName: "Doe",
  positionName: "President",
  campusEmail: "jane.doe@temple.edu",
}
```

The roster page displays **name and position only**. The email field is stored in the file but is not shown on the site.

---

### Events

**File:** `app/_shared/EVENTS.js`

Add events by adding objects to the `EVENTS` array. Events are automatically sorted into **Current**, **Upcoming**, and **Past** sections based on their date.

Each event follows this structure:

```js
{
  id: 1,                             // unique number, increment for each new event
  Title: "Intro to Web Dev Workshop",
  Date: "2025-09-15T18:00:00",       // ISO 8601 format (YYYY-MM-DDTHH:MM:SS)
  Location: "Room 101, SERC",
  eventUrl: "https://...",           // optional: link to RSVP or event page, defaults to "/"
  eventType: "Workshop",             // optional: defaults to "General"
  club: { Name: "ACM" },             // optional: organizing club name
  coverImage: null,                  // set to null if no image
  Description: [
    { children: [{ text: "A beginner-friendly workshop on web development." }] }
  ],
}
```

To remove an event, delete its entry from the array. Past events will still appear in the Past Events section as long as they remain in the file.

---

## Project Structure

```
app/
├── _components/       # Reusable UI components (navbar, header, cards, etc.)
├── _shared/           # Static data files
│   ├── MEMBERS.js     # Member roster data
│   └── EVENTS.js      # Events data
├── events/            # Events pages
├── members/           # Members roster page
├── page.js            # Homepage
└── layout.js          # Root layout (navbar, footer)
```
