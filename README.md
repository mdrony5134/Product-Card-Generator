# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Product-Card-Generator

The project is a React component called `CardGenerator` that allows users to create product cards with various fields like image, heading, title, price, and category. The component uses the `react-hook-form` library for form management and validation with schema defined using `Yup`.

Key features of the `CardGenerator` component include:

1. Form Validation: It performs client-side form validation using Yup schema validation. Users are required to fill in all fields correctly to create a product card.

2. Image Upload: Users can upload an image for the product card. The image is displayed in the card and stored as a URL.

3. Dynamic Card Generation: When the user submits the form, a new product card is generated and displayed in the corresponding category section.

4. Card Categories: The product cards are categorized into `Men's T-shirt`, `Men's Pant` and  `Kid's Dress` sections based on the selected category.

5. State Management: The component uses the `useState` hook to manage the state of the created product cards, allowing users to see their generated cards.

6. Reset Form: After card creation, the form fields are reset to allow users to create more cards.

7. Error Handling: Validation errors are displayed for each form field, helping users correct their inputs.

Overall, the `CardGenerator` component provides a user-friendly interface for creating and categorizing product cards with real-time validation and dynamic card generation.


![image](https://github.com/mdrony5134/tic-tac-toe/assets/98208421/abbd9cf6-668f-4522-b641-db56d2c4d539)


Live Demo:  https://mdrony5134.github.io/Product-Card-Generator/
