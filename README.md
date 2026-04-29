# React Project

## Description

This is a React project built using **Vite + TypeScript**.

The project demonstrates reusable components and modern UI development using:

- Tailwind CSS (replacing Bootstrap)
- Material UI (MUI)
- Component-based architecture

---

## 🚀 Features

- Modern Login Page using Tailwind CSS
- Reusable Components (Button, Navbar, Slider)
- Clean and responsive UI
- Organized project structure
- Fast development using Vite

---

## 🛠️ Setup Steps (What we did)

### 1. Create React Project with Vite

```bash
npm create vite@latest
npm install
```

---

### 2. Remove Bootstrap

```bash
npm uninstall bootstrap
```

- Removed Bootstrap imports from project
- Deleted old SCSS styling

---

### 3. Install Tailwind CSS (Vite Plugin)

```bash
npm install -D tailwindcss @tailwindcss/vite
```

---

### 4. Configure Vite

Updated `vite.config.ts`:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

---

### 5. Add Tailwind to CSS

In `src/index.css`:

```css
@import "tailwindcss";
```

---

### 6. Import CSS in Main File

In `main.tsx`:

```ts
import "./index.css";
```

---

### 7. Convert SCSS → Tailwind

- Removed `login.scss`
- Rebuilt UI using Tailwind utility classes
- Kept same design and layoutr

---

## 💡 Why Tailwind CSS?

In this project, Tailwind CSS was used instead of Bootstrap to improve flexibility and performance.

---

### 🔹 Why we installed Tailwind using Vite plugin

We used the **Vite Tailwind plugin (`@tailwindcss/vite`)** because:

- Simpler setup (no complex configuration)
- Avoids common PostCSS and CLI errors
- Direct integration with Vite
- Faster development workflow

---

### 🔹 Why Tailwind instead of Bootstrap?

Tailwind CSS is a **utility-first framework**, which allows building custom designs directly inside JSX without writing separate CSS files.

---

### ⚔️ Tailwind vs Bootstrap

| Feature                   | Bootstrap    | Tailwind                     |
| ------------------------- | ------------ | ---------------------------- |
| Pre-built components      | ✅ Yes       | ❌ No                        |
| Custom design flexibility | ❌ Limited   | ✅ Full control              |
| CSS file size             | ❌ Large     | ✅ Small (only used classes) |
| Development speed         | Medium       | Fast                         |
| Styling approach          | External CSS | Utility classes in JSX       |

---

### 🚀 Benefits in this project

- Faster UI development
- Cleaner and more maintainable code
- No separate CSS files needed
- Fully customizable design
- Smaller CSS size → better performance

---

### 🎯 Conclusion

Tailwind CSS was chosen to build a modern, flexible, and optimized UI while keeping the project simple and maintainable.

---

## 📁 Project Structure

```
src/
│
├── component/
│   ├── myButton/
│   ├── navbar/
│   ├── slider/
│   └── login/
│
├── App.tsx
├── main.tsx
├── index.css
```

---

## ⚙️ Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Material UI (MUI)

---

## 👤 Author

Ahmad Safarjalani
