
## 🐍 **Python Roadmap - From Basics to Advanced**

---

### 📚 **1. Introduction to Python**
- **What is Python?**
  - High-level, interpreted, and dynamically typed programming language.
  - Easy to read and write, used for web development, data analysis, AI, and more.
  
- **Setting Up Python:**
  - Download and install Python from [python.org](https://www.python.org/downloads/).
  - Check installation:  
    ```
    python --version
    ```
  - IDE Options: VS Code, PyCharm, Jupyter Notebook.

- **Basic Syntax:**
  ```python
  print("Hello, World!")  # Output: Hello, World!
  ```
  - **Comments**:  
    `# Single-line comment`  
    `''' Multi-line comment '''`

---

### 📊 **2. Variables and Data Types**
- **Variables**: Containers to store data.
  ```python
  x = 10  # Integer
  name = "Chandu"  # String
  pi = 3.14  # Float
  is_active = True  # Boolean
  ```
  - Dynamic typing: No need to declare data type.
  
- **Data Types:**
  - **int**: Integer (e.g., `5`, `-10`)
  - **float**: Decimal (e.g., `3.14`, `-0.5`)
  - **str**: String (e.g., `"hello"`)
  - **bool**: Boolean (`True`, `False`)
  - **type()**: Check variable type.
  
- **Input/Output:**
  ```python
  name = input("Enter your name: ")
  print("Hello,", name)
  ```

---

### 🔁 **3. Control Structures**
- **If-Else Conditions:**
  ```python
  age = 18
  if age >= 18:
      print("Adult")
  else:
      print("Minor")
  ```
  
- **Logical Operators:** `and`, `or`, `not`
  
- **Loops:**
  - **for loop**: Iterate over a sequence.
    ```python
    for i in range(5):
        print(i)
    ```
  - **while loop**: Repeat while a condition is true.
    ```python
    x = 0
    while x < 5:
        print(x)
        x += 1
    ```
    
- **Loop Control Statements:**
  - `break`: Exit loop.
  - `continue`: Skip iteration.
  - `pass`: Placeholder.

---

### 📦 **4. Data Structures**
- **Lists**: Ordered, mutable collection.
  ```python
  fruits = ["apple", "banana", "cherry"]
  print(fruits[0])  # Access by index
  fruits.append("mango")  # Add item
  ```
  
- **Tuple**: Ordered, immutable collection.
  ```python
  point = (3, 4)
  print(point[0])
  ```
  
- **Set**: Unordered, unique items.
  ```python
  nums = {1, 2, 3, 4}
  nums.add(5)
  ```
  
- **Dictionary**: Key-value pairs.
  ```python
  person = {"name": "Chandu", "age": 25}
  print(person["name"])
  ```

---

### 📘 **5. Functions**
- **Defining Functions:**
  ```python
  def greet(name):
      return f"Hello, {name}"
  
  print(greet("Chandu"))
  ```
  
- **Arguments and Return Values:**
  - Positional: Based on order.
  - Keyword: Use parameter names.
  - Default: Set a default value.

- **Lambda Function (Anonymous Function):**
  ```python
  square = lambda x: x * x
  print(square(5))  # Output: 25
  ```

---

### 📂 **6. File Handling**
- **Read/Write Files:**
  ```python
  with open('data.txt', 'r') as file:
      print(file.read())
  
  with open('output.txt', 'w') as file:
      file.write("Hello, Python!")
  ```

---

### 🧱 **7. Object-Oriented Programming (OOP)**
- **Class and Object:**
  ```python
  class Person:
      def __init__(self, name, age):
          self.name = name
          self.age = age
  
      def greet(self):
          print(f"Hello, I am {self.name}")
  
  p = Person("Chandu", 25)
  p.greet()
  ```
  
- **OOP Concepts:**
  - **Inheritance**: Deriving a class from another class.
  - **Polymorphism**: Methods behaving differently in child classes.
  - **Encapsulation**: Hiding data using private attributes (`__var`).

---

### 🌐 **8. Working with External Libraries**
- **Install Packages**:
  ```
  pip install requests
  ```
  
- **Useful Libraries**:
  - `requests` – API interaction
  - `pandas` – Data manipulation
  - `matplotlib` – Data visualization
  - `numpy` – Numerical computing

---

### 🌍 **9. Web Development (Flask Example)**
- **Basic Flask App:**
  ```
  pip install Flask
  ```
  ```python
  from flask import Flask
  
  app = Flask(__name__)
  
  @app.route('/')
  def home():
      return "Hello, Flask!"
  
  app.run(debug=True)
  ```

---

### 🛠️ **10. Advanced Topics**
- **Exception Handling:**
  ```python
  try:
      x = 10 / 0
  except ZeroDivisionError:
      print("Can't divide by zero!")
  finally:
      print("Done!")
  ```

- **Database (SQLite Example):**
  ```python
  import sqlite3
  
  conn = sqlite3.connect('test.db')
  c = conn.cursor()
  c.execute('CREATE TABLE users (id INT, name TEXT)')
  conn.commit()
  conn.close()
  ```
  
- **Unit Testing:**
  ```python
  import unittest
  
  def add(a, b):
      return a + b
  
  class TestAdd(unittest.TestCase):
      def test_add(self):
          self.assertEqual(add(2, 3), 5)
  
  unittest.main()
  ```

---

### 🚀 **11. Final Projects Ideas**
1. **Weather App** (using APIs)
2. **To-Do List** (with CRUD operations)
3. **Web Scraper** (with `requests`, `BeautifulSoup`)
4. **Portfolio Website** (using Flask or Django)

---

