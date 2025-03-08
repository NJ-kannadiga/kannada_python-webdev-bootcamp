### 📚 **Python Data Structures: Lists, Tuples, Sets & Dictionaries**

---

## 📌 **1. Lists**
A **list** is an **ordered**, **mutable** (changeable) collection that can hold items of **different data types**.

### ✅ **List Creation**
```python
# Creating lists
fruits = ["apple", "banana", "cherry"]
mixed = [1, "hello", 3.14, True]

# Empty list
empty_list = []
```

### ✅ **Accessing List Elements**
```python
print(fruits[0])  # First item: apple
print(fruits[-1]) # Last item: cherry
```

### ✅ **List Slicing**
```python
print(fruits[0:2])  # Output: ['apple', 'banana']
print(fruits[::-1]) # Reverse list
```

### ✅ **List Methods**
| **Method**       | **Description**                       |
|------------------|---------------------------------------|
| `append()`       | Add an item to the **end**.           |
| `insert()`       | Add item at **specific** position.    |
| `extend()`       | Add multiple items (concatenation).   |
| `pop()`          | Remove item by **index** (default last).|
| `remove()`       | Remove item by **value**.             |
| `index()`        | Find the **index** of an item.        |
| `count()`        | Count occurrences of a value.         |
| `sort()`         | Sort the list (ascending by default). |
| `reverse()`      | Reverse the list.                     |

### 🧑‍💻 **Examples:**
```python
fruits.append("mango")      # ['apple', 'banana', 'cherry', 'mango']
fruits.insert(1, "orange")  # ['apple', 'orange', 'banana', 'cherry']
fruits.pop()                # Removes last item: 'cherry'
fruits.sort()               # Alphabetical order
```

---

## 📌 **2. Tuples**
A **tuple** is an **ordered**, **immutable** (unchangeable) collection.

### ✅ **Tuple Creation**
```python
coordinates = (10, 20, 30)
mixed_tuple = (1, "hello", 3.14)

# Single-element tuple
one_item = (5,)
```

### ✅ **Accessing Tuple Elements**
```python
print(coordinates[0])  # Output: 10
print(coordinates[-1]) # Output: 30
```

### ✅ **Tuple Methods**
| **Method**       | **Description**                     |
|------------------|------------------------------------|
| `count()`        | Count occurrences of an item.      |
| `index()`        | Find the index of an item.         |

### 🧑‍💻 **Examples:**
```python
colors = ("red", "green", "blue")
print(colors.index("green"))  # Output: 1
print(colors.count("red"))    # Output: 1
```

### ✅ **Tuple Packing & Unpacking**
```python
# Packing
person = ("Chandu", 25, "India")

# Unpacking
name, age, country = person
print(name, age, country)  # Output: Chandu 25 India
```

---

## 📌 **3. Sets**
A **set** is an **unordered**, **mutable** collection of **unique** elements.

### ✅ **Set Creation**
```python
# Creating sets
numbers = {1, 2, 3, 4}
empty_set = set()  # NOT empty_set = {} (this is a dictionary)
```

### ✅ **Set Properties**
- **Unordered** – No defined order.
- **Unique** – No duplicate items allowed.

### ✅ **Set Methods**
| **Method**       | **Description**                         |
|------------------|----------------------------------------|
| `add()`          | Add a single item.                     |
| `update()`       | Add multiple items (from a list/tuple). |
| `remove()`       | Remove an item (error if missing).      |
| `discard()`      | Remove an item (no error if missing).   |
| `pop()`          | Remove a **random** item.               |
| `clear()`        | Remove all items.                       |
| `union()`        | Combine sets (no duplicates).           |
| `intersection()` | Common items between sets.              |
| `difference()`   | Items in one set but not in another.    |
| `issubset()`     | Check if a set is a subset.             |
| `issuperset()`   | Check if a set is a superset.           |

### 🧑‍💻 **Examples:**
```python
A = {1, 2, 3}
B = {3, 4, 5}

A.add(6)              # {1, 2, 3, 6}
A.update([7, 8])      # {1, 2, 3, 6, 7, 8}
A.remove(2)           # {1, 3, 6, 7, 8}
print(A.union(B))     # {1, 3, 4, 5, 6, 7, 8}
print(A.intersection(B)) # {3}
print(A.difference(B))   # {1, 6, 7, 8}
```

---

## 📌 **4. Dictionaries**
A **dictionary** is an **unordered**, **mutable** collection of **key-value** pairs.

### ✅ **Dictionary Creation**
```python
# Creating dictionaries
person = {
    "name": "Chandu",
    "age": 25,
    "city": "Hyderabad"
}

# Empty dictionary
empty_dict = {}
```

### ✅ **Accessing Dictionary Elements**
```python
print(person["name"])    # Output: Chandu
print(person.get("age")) # Output: 25 (avoids KeyError if missing)
```

### ✅ **Modifying Dictionary**
```python
person["age"] = 26        # Update value
person["job"] = "Engineer" # Add new key-value
del person["city"]        # Remove key
```

### ✅ **Dictionary Methods**
| **Method**       | **Description**                         |
|------------------|----------------------------------------|
| `keys()`         | Get all keys.                           |
| `values()`       | Get all values.                         |
| `items()`        | Get key-value pairs as tuples.          |
| `get()`          | Get value (returns `None` if missing).  |
| `pop()`          | Remove item by key and return its value.|
| `update()`       | Update dictionary with another dictionary.|
| `clear()`        | Remove all items.                       |

### 🧑‍💻 **Examples:**
```python
# Iterating over a dictionary
for key, value in person.items():
    print(key, ":", value)

# Checking for a key
if "age" in person:
    print("Age exists.")

# Merge dictionaries
extra_info = {"hobby": "painting", "country": "India"}
person.update(extra_info)

print(person)
```

---

### 📊 **Summary Table**
| Feature          | **List**             | **Tuple**          | **Set**            | **Dictionary**          |
|------------------|----------------------|--------------------|--------------------|-------------------------|
| **Order**        | Ordered              | Ordered            | Unordered          | Unordered (Python 3.6+) |
| **Mutability**   | Mutable (changeable) | Immutable          | Mutable            | Mutable                 |
| **Duplicates**   | Allows duplicates    | Allows duplicates  | No duplicates      | Unique keys only        |
| **Access**       | Index-based          | Index-based        | No indexing        | Key-based               |
| **Usage**        | Dynamic lists        | Fixed data         | Unique collections | Mapping relationships   |

