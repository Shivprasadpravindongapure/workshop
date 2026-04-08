# FOSSEE Workshop Booking - UI/UX Enhancement

This repository contains the UI/UX enhancement for the FOSSEE Workshop Booking platform. The goal of this redesign was to take the minimal, functional layout and elevate it to a modern, accessible, and performant React application geared primarily toward mobile students.

## Setup Instructions

**Prerequisites:**
- Node.js (v16+)
- Python (v3.8+)

**1. Clone the repository:**
```bash
git clone https://github.com/FOSSEE/workshop_booking.git
cd workshop_booking
```

**2. Start the Backend (Django):**
```bash
# In the project root:
pip install -r requirements.txt
python manage.py runserver
```

**3. Start the Frontend (React):**
```bash
# In the frontend directory:
cd frontend
npm install
npm start
```
The frontend will be bound to `http://localhost:3000`.

---

## Reasoning & Approach

### What design principles guided your improvements?
I focused mainly on keeping the interface simple and easy to use. Since the users are mostly students, the goal was to make sure they can quickly find workshop details and register without confusion. I maintained a clear structure where important information like workshop title, date, and availability is easy to notice. I also avoided using too many colors or elements so that the UI feels clean and not distracting.

### How did you ensure responsiveness across devices?
I followed a mobile-first approach while designing the UI. Initially, I designed everything for small screens and then adjusted layouts for larger screens using responsive utilities. The layout stacks vertically on mobile for better readability and then shifts to multiple columns on bigger screens. Navigation was also kept simple so that it works properly on touch devices without overcrowding.

### What trade-offs did you make between the design and performance?
I avoided adding heavy animations and complex UI effects because they can slow down the application, especially on mobile devices. Instead, I focused on keeping the interface fast and smooth. I used simple components and avoided unnecessary re-renders to maintain performance while still keeping the UI clean and usable.

### What was the most challenging part of the task and how did you approach it?
The most challenging part was designing a UI that looks good while still being simple and accessible. Since I was building the frontend from scratch, I had to ensure that it connects properly with the backend and still remains user-friendly. I handled this by building small reusable components and testing them step by step. I also made sure to use proper HTML structure so that the application remains accessible.

---

## Visual Showcase

> **Note to reviewer:** Please manually place your screenshots here before pushing to GitHub.

### Before
![Before Redesign](./docs/screenshots/before.png)

### After
![After Redesign - Mobile & Desktop Maps](./docs/screenshots/after.png)
