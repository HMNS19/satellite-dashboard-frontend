# Satellite Dashboard Frontend

This repository contains the frontend for the Trinetra Satellite Monitoring Dashboard. It is built using React.js and communicates with a Flask backend API to display real-time satellite telemetry data.

---

## Technologies Used

- React.js (Create React App)
- Axios
- React Hooks
- HTML5, CSS3, JavaScript (ES6+)

---

## Project Structure

```
frontend/
├── public/
├── src/
│   ├── components/
│   ├── App.jsx
│   └── index.js
├── .env
├── package.json
└── build/ (generated after build)
```

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/satellite-dashboard-frontend.git
cd satellite-dashboard-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm start
```

This will run the application at `http://localhost:3000`.

---

## Building for Production

To generate optimized static files:

```bash
npm run build
```

This creates a `build/` folder ready for deployment on a web server.

---

## API Configuration

Ensure that the base URL in your Axios configuration points to the hosted backend:

```js
const api = axios.create({
  baseURL: 'http://your-backend-url/api'
});
```

---

## Environment Variables

You may configure runtime values using a `.env` file:

```
REACT_APP_API_URL=http://localhost:5000/api
```


