# React Form Actions Demo

A modern React application demonstrating how to build forms using **React 19 Form Actions** and **useActionState** with
TypeScript.

## ✨ Features

- React 19 Form Actions
- useActionState for form state management
- TypeScript
- Tailwind CSS
- Form validation
- Image upload
- User creation
- Pagination
- Loading states
- Error handling
- Context API for global state management
- Responsive UI

---

## 🛠️ Technologies

- React 19
- TypeScript
- Tailwind CSS
- Context API
- DummyJSON API
- React Icons
- Sonner (Toast Notifications)

---

## 📂 Project Structure

```
src/
│
├── components/
├── store/
├── types/
├── utils/
├── hooks/
└── assets/
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/your-repository.git
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

---

## 📋 Form Workflow

This project uses **React Form Actions** instead of traditional `onSubmit` handlers.

1. User fills out the form.
2. The form submits using the `action` prop.
3. `useActionState` receives the submitted `FormData`.
4. Data is parsed into a user object.
5. Validation is performed.
6. Validation errors are returned back to the form if any exist.
7. If validation succeeds:
    - The user is sent to the API.
    - The local state is updated.
    - A success toast is displayed.

---

## 🔍 Validation

The project validates:

- First name
- Last name
- Username
- Email
- Gender
- Birth date
- Profile image

Validation errors are displayed next to each input.

---

## 📄 Pagination

The user list supports pagination with:

- Previous / Next buttons
- Dynamic page numbers
- Ellipsis (`...`) for large datasets

---

## 🔔 Notifications

The project uses **Sonner** to display:

- Success messages
- Error messages
- Loading notifications

---

## 📦 API

This project uses the DummyJSON API.

```
POST /users/add
GET /users
```

> **Note:** DummyJSON is a mock API. Newly created users are not permanently stored on the server, so the application
> updates the local state after a successful request.

---

## 🎯 What I Learned

- React 19 Form Actions
- useActionState
- Working with FormData
- Custom validation
- Context API
- Async actions
- Pagination logic
- TypeScript with React
- File uploads
- Clean component architecture

---

## 📜 License

This project is open source and available under the MIT License.
Made by Massomeh :)
