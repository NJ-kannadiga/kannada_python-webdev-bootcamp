# HTML Fundamentals

## Introduction to HTML and Web Development
### What is HTML?
HTML (HyperText Markup Language) is a standard markup language used to create web pages.

### Why Use HTML?
HTML is the foundation of web development, providing structure and organization to web content.

### What Can We Use Instead?
There are no direct alternatives to HTML, but other technologies like XML, XHTML, and HTML5 offer variations and extensions.

---

## Document Object Model (DOM)
### What is DOM?
The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the structure of a document as a tree of nodes.

### How Does DOM Work?
- The DOM allows developers to interact with and manipulate the structure and content of a web page.
- When a web browser loads an HTML document, it creates a DOM tree in memory.
- The DOM tree is a hierarchical representation of the document's structure.

### Basic DOM Structure:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Welcome to My Webpage</h1>
    <p>This is a paragraph of text.</p>
  </body>
</html>
```

### DOM Tree Structure
- **Document Node:** The root node of the DOM tree.
- **Element Nodes:** Represent HTML elements (e.g., `<html>`, `<body>`, `<p>`).
- **Text Nodes:** Represent text content within HTML elements.
- **Attribute Nodes:** Represent attributes of HTML elements.

### How Does DOM Run in the Browser?
1. **HTML Document Loading:** The browser loads an HTML document.
2. **DOM Tree Creation:** The browser creates a DOM tree in memory, representing the document's structure.
3. **JavaScript Execution:** The browser executes JavaScript code, which can interact with the DOM tree.
4. **DOM Manipulation:** JavaScript code can manipulate the DOM tree, adding, removing, or modifying nodes.
5. **Browser Rendering:** The browser renders the updated DOM tree, displaying the changes to the user.

---

## HTML Tags

### 1. Headings
```html
<h1>Main heading</h1>
<h2>Subheading</h2>
<h3>Sub-subheading</h3>
```

### 2. Text Elements
```html
<p>This is a paragraph of text.</p>
<span>This text is inside a span element.</span>
<p>This is a paragraph of text.<br>This is a new line.</p>
<hr>
```

### 3. Lists
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
</ol>
```

### 4. Links and Images
```html
<a href="https://www.example.com">Visit Example.com</a>
<img src="image.jpg" alt="An image on the webpage">
```

### 5. Tables
```html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John Doe</td>
    <td>30</td>
  </tr>
</table>
```

### 6. Forms
```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name"><br><br>
  <input type="submit" value="Submit">
</form>
```

### 7. Semantic Elements
```html
<header>
  <h1>Welcome to My Webpage</h1>
</header>
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
  </ul>
</nav>
<main>
  <section>
    <article>
      <p>Article content here...</p>
    </article>
  </section>
</main>
<footer>
  <p>Footer content here...</p>
</footer>
```

### 8. Multimedia Elements
```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
</audio>
<video width="320" height="240" controls>
  <source src="video.mp4" type="video/mp4">
</video>
```

### 9. Interactive Elements
```html
<button>Click Me</button>
<details>
  <summary>More Info</summary>
  <p>Additional information...</p>
</details>
```

---

## Homework
1. Focus on the DOM and understand its role in web development.
2. Using all HTML tags, create a webpage or a photo gallery.
3. The next class will cover CSS, where we will learn how to style the webpage.
4. Who will explain the DOM? Make sure to understand its structure and how it interacts with the content on a webpage.

