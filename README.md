# 🚀 Dev Stack

### Build Your Ideal Development Stack

Dev Stack is a modern and responsive web application that helps developers explore different technologies and create their own personalized development stack. Users can browse technologies, check their category, difficulty, rating, and add or remove technologies from their stack.

---

## 🛠️ Technologies Used

* ⚛️ **React.js**
* 📘 **TypeScript**
* 🎨 **Tailwind CSS**
* 🌼 **DaisyUI**
* 🔔 **React-Toastify**
* 📦 **JSON**
* ⚡ **Vite**
* 🎯 **React Icons**

---

## ✨ Features

### 1. 🧰 Build Your Own Stack

Explore different development technologies and add your favorite technologies to your personal stack.

### 2. 📱 Fully Responsive Design

The application is responsive and works smoothly on mobile, tablet, and desktop devices with a dedicated mobile navbar.

### 3. 🔔 Interactive User Feedback

React-Toastify provides notifications when technologies are added, removed, duplicated, or when the entire stack is cleared.

---

## 🎯 Additional Features

* 📊 Technology cards with rating, difficulty, category, badge, and description
* 🚫 Prevents duplicate technologies from being added
* ❌ Remove individual technologies from the stack
* 🗑️ Remove all selected technologies at once
* ⏳ Loading spinner while JSON data is loading
* 🎨 Shared orange → pink → violet gradient theme
* 📂 Technology data loaded from a separate JSON file
* 📱 Responsive mobile hamburger navigation
* 🧩 Reusable React components

---


## 👨‍💻 Author

**Sudipto Roy**

Aspiring Full Stack MERN Developer passionate about building modern and responsive web applications.

---

⭐ If you like this project, don't forget to give the repository a star!





........

# React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a way to write HTML-like code inside JavaScript or TypeScript.

I used JSX to create the UI of my Dev Stack project, like technology cards, buttons, headings, and other elements.

For example:

```tsx
<h2>{technology.name}</h2>
<p>{technology.description}</p>
```

JSX makes React code easier to write and understand.

---

## 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component.

State is used to store data that can change inside a component.

In my project, I passed technology data to the TechnologyCard component using props.

```tsx
<TechnologyCard technology={technology} />
```

I used state to store the technologies selected by the user.

---

## 3. What does the useState hook do, and where did you use it in this project?

useState is used to store and update data in a React component.

In my project, I used useState to store the selected technologies for the "Your Stack" section.

```tsx
const [selectedTechnologies, setSelectedTechnologies] = useState<ITechnology[]>([]);
```

When I add or remove a technology, the state is updated.

---

## 4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to run code after a component loads or updates.

Normally, it can be used to load data when a page starts.

In my current project, I used React's use() API instead of useEffect to load the JSON data because it was easier for me to use.

---

## 5. Why does every item in a .map() list need a unique key prop?

The key helps React identify each item in a list.

In my project, I used the technology id as the key when displaying the technology cards.

```tsx
technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))
```

This helps React know which technology item has changed.

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different things based on a condition.

In my project, I used it in the "Your Stack" section.

If no technology is selected, I show an empty message. If technologies are selected, I show the selected technologies.

```tsx
 {
          selectedTechnologies.length === 0
            ? "No technologies selected yet."
            : `${selectedTechnologies.length} Technology Selected`
  }
```

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can send data to a child component using props.

In my project, I passed the technology data to the TechnologyCard component.

```tsx
<TechnologyCard technology={technology} />
```

A child can send an action back to the parent using a function passed through props.

For example:

```tsx
<TechnologyCard onAdd={handleAddToStack} />
```

When the user clicks the "Add to Stack" button, the child calls the function and the parent adds the technology to the stack.

