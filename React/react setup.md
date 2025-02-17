### **Basic React Setup & Project Creation**  

#### **1️⃣ Install Node.js (Stable Version)**
- Download and install **Node.js (LTS version)** from:  
  🔗 [https://nodejs.org/](https://nodejs.org/)  
- Verify installation:  
  ```sh
  node -v  # Check Node.js version
  npm -v   # Check npm version
  ```

---

#### **2️⃣ Create a React Project**
You can use either **Vite** (fast & optimized) or **Create React App (CRA)**.

#### **👉 Option 1: Using Vite (Recommended)**
```sh
npm create vite@latest my-app --template react
cd my-app
npm install
```
Then, start the development server:
```sh
npm run dev
```

---

#### **👉 Option 2: Using Create React App (CRA)**
```sh
npx create-react-app my-app
cd my-app
npm start
```
_(CRA is slower and heavier, so Vite is usually preferred.)_

---

#### **3️⃣ Project Folder Structure**
```
my-app/
│── node_modules/      # Installed dependencies
│── public/            # Static files (index.html, favicon)
│── src/               # Main React source code
│   ├── App.jsx        # Main component
│   ├── index.jsx      # Entry point
│   ├── assets/        # (Optional) Images, icons, etc.
│── package.json       # Project metadata & dependencies
│── vite.config.js     # (Vite specific config)
│── .gitignore         # Files to ignore in Git
```

---

#### **4️⃣ Basic React Component Example**
Modify `src/App.jsx`:
```jsx
function App() {
  return (
    <div>
      <h1>Hello, React! 🚀</h1>
      <p>Welcome to your new React project.</p>
    </div>
  );
}

export default App;
```

---

#### **5️⃣ Run the Project**
```sh
npm run dev   # (For Vite)
# OR
npm start     # (For Create React App)
```
Your project will be available at:  
👉 `http://localhost:5173` (Vite) or `http://localhost:3000` (CRA)

---

💡 **That's it! You now have a basic React setup ready to go.**  
