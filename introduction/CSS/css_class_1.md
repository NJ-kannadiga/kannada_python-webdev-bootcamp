
---

# **📌 Introduction to CSS**
### **What is CSS?**  
CSS (**Cascading Style Sheets**) is used to style and design HTML elements. It controls the layout, colors, fonts, spacing, and responsiveness of a webpage.

**Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Example</title>
    <style>
        h1 {
            color: blue;
        }
    </style>
</head>
<body>
    <h1>Hello, CSS!</h1>
</body>
</html>
```
---

# **📌 Types of CSS**
### 1️⃣ **Inline CSS**  
CSS is added directly inside an HTML element using the `style` attribute.
```html
<p style="color: red; font-size: 20px;">This is Inline CSS</p>
```

### 2️⃣ **Internal CSS**  
CSS is written inside a `<style>` tag in the `<head>` section of the HTML document.
```html
<head>
    <style>
        p {
            color: green;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <p>This is Internal CSS</p>
</body>
```

### 3️⃣ **External CSS**  
CSS is written in a separate `.css` file and linked to the HTML document.
```css
/* styles.css */
p {
    color: blue;
    font-size: 16px;
}
```
```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <p>This is External CSS</p>
</body>
```
✅ **External CSS is recommended** because it keeps the HTML file clean and allows reusability.

---

# **📌 CSS Selectors**
CSS **selectors** help in styling specific HTML elements.

### 1️⃣ **Universal Selector (`*`)**  
Applies styles to **all** elements in a document.
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

### 2️⃣ **Element Selector (`h1, p, div`)**  
Styles specific HTML tags.
```css
h1 {
    color: blue;
}
p {
    font-size: 18px;
}
```

### 3️⃣ **Class Selector (`.class-name`)**  
Styles elements with a specific class.
```css
.heading {
    color: red;
    font-size: 24px;
}
```
```html
<h1 class="heading">This is a class selector</h1>
```

### 4️⃣ **ID Selector (`#id-name`)**  
Styles a specific element with a unique ID.
```css
#main-title {
    color: green;
    font-weight: bold;
}
```
```html
<h1 id="main-title">This is an ID selector</h1>
```

### 5️⃣ **Grouping Selector (`h1, p, div`)**  
Applies the same styles to multiple elements.
```css
h1, p, div {
    font-family: Arial, sans-serif;
}
```

### 6️⃣ **Attribute Selector**  
Styles elements based on attributes.
```css
input[type="text"] {
    border: 2px solid blue;
}
```
```html
<input type="text" placeholder="Enter your name">
<input type="password" placeholder="Enter password">
```

---

# **📌 CSS Box Model**
The **box model** consists of 4 parts:  

### 🔹 **1. Margin** – Space **outside** the element.  
### 🔹 **2. Border** – A boundary **around** the element.  
### 🔹 **3. Padding** – Space **inside** the element, around content.  
### 🔹 **4. Content** – The actual content inside the element.  

### **Example:**
```css
.box {
    width: 200px;
    height: 100px;
    padding: 20px;
    border: 5px solid black;
    margin: 30px;
    background-color: lightblue;
}
```
```html
<div class="box">This is a box model</div>
```

✅ **Diagram Representation:**
```
| Margin |
| Border |
| Padding |
| Content |
```

---

# **📌 CSS Units**
CSS **units** define measurements like width, height, font size, etc.

### **1️⃣ Absolute Units (Fixed Size)**
- `px` (Pixels) → `width: 100px;` (Doesn’t change)  
- `pt` (Points) → Used in printing  
- `cm, mm, in` (Centimeter, Millimeter, Inch)  

### **2️⃣ Relative Units (Flexible Size)**
- `%` → Relative to parent element
  ```css
  div {
      width: 50%;  /* Takes 50% of the parent width */
  }
  ```
- `em` → Relative to parent font size
  ```css
  p {
      font-size: 1.5em;  /* 1.5 times parent size */
  }
  ```
- `rem` → Relative to root (`html`) font size  
  ```css
  html {
      font-size: 16px;
  }
  p {
      font-size: 2rem; /* 32px (16px * 2) */
  }
  ```
- `vh` (Viewport Height) & `vw` (Viewport Width)  
  ```css
  div {
      width: 50vw; /* 50% of the screen width */
      height: 20vh; /* 20% of the screen height */
  }
  ```

---

✅ **Conclusion:**  
- Use `px` for **fixed sizes**, `%` for **responsive layouts**.  
- Use `rem` instead of `em` for better consistency.  
- Use `vh` and `vw` for **full-screen layouts**.  

---
