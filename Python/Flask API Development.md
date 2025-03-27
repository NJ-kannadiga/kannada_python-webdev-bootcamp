
## **1️⃣ Introduction to Flask**
Flask is a lightweight and flexible Python web framework used to build web applications and RESTful APIs. It provides essential tools to create web routes, handle HTTP requests, and integrate databases.

### **Why Flask?**
- Simple and easy to learn
- Lightweight and fast
- Supports RESTful APIs
- Built-in development server & debugger
- Flexible and scalable

---

## **2️⃣ Function-Based Flask API**
A function-based approach maps each route directly to a function.

### **Code: Function-Based API**
```python
from flask import Flask, request, jsonify

app = Flask(__name__)

data = []  # Storage for data

@app.route('/get-data', methods=['GET'])
def get_data():
    """Handles GET request"""
    return jsonify({"message": "Success", "data": data})

@app.route('/add-data', methods=['POST'])
def add_data():
    """Handles POST request"""
    new_data = request.json
    data.append(new_data)
    return jsonify({"message": "Data added successfully", "data": new_data})

if __name__ == "__main__":
    app.run(debug=True)
```

### **Explanation**
- `@app.route('/get-data', methods=['GET'])` → Defines a GET route.
- `@app.route('/add-data', methods=['POST'])` → Defines a POST route.
- Each function handles one API route separately.

---

## **3️⃣ Class-Based Flask API**
A class-based approach organizes related API functions into a class.

### **Code: Class-Based API**
```python
from flask import Flask, request, jsonify

app = Flask(__name__)

class APIHandler:
    data = []  # Storage for data

    @staticmethod
    def get_data():
        """Handles GET request"""
        return jsonify({"message": "Success", "data": APIHandler.data})

    @staticmethod
    def add_data():
        """Handles POST request"""
        new_data = request.json
        APIHandler.data.append(new_data)
        return jsonify({"message": "Data added successfully", "data": new_data})

# Define Routes
app.add_url_rule('/get-data', view_func=APIHandler.get_data, methods=['GET'])
app.add_url_rule('/add-data', view_func=APIHandler.add_data, methods=['POST'])

if __name__ == "__main__":
    app.run(debug=True)
```

### **Explanation**
- API logic is inside a class (`APIHandler`).
- Static methods (`@staticmethod`) define API actions.
- `app.add_url_rule()` is used instead of `@app.route()`.

---

## **4️⃣ Function-Based vs. Class-Based Comparison**
| Feature | Function-Based | Class-Based |
|---------|--------------|-------------|
| **Structure** | Uses functions for routes | Uses a class for organizing routes |
| **Reusability** | Less reusable | More reusable (good for OOP) |
| **Scalability** | Best for small apps | Better for large apps |
| **Code Organization** | Functions are separate | Related logic is grouped in a class |
| **Ease of Use** | Simple and easy | Slightly complex but more structured |

### **When to Use Which?**
✅ **Function-Based:** Ideal for small projects or simple APIs.
✅ **Class-Based:** Recommended for large applications with multiple endpoints.

---

## **5️⃣ Advantages of Flask**
1. **Lightweight:** Minimal dependencies and fast performance.
2. **Easy to Learn:** Simple syntax and intuitive structure.
3. **Flexible:** Allows custom configurations and integrations.
4. **Scalable:** Suitable for small and large projects.
5. **RESTful API Support:** Enables API development for mobile and web apps.
6. **Extensible:** Can integrate with SQL databases, authentication systems, and more.

---

## **6️⃣ Running the Flask App**
To run the Flask app, execute the following command in your terminal:
```bash
python app.py
```
This will start a development server, and you can test the API endpoints using Postman or a web browser.

---

## **7️⃣ Summary**
- Flask provides an easy way to create APIs.
- Function-based APIs are good for small projects.
- Class-based APIs are more structured and scalable.
- Flask is lightweight, flexible, and widely used in web development.

---


