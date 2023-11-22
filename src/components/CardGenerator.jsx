import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// yup schema
const schema = yup.object({
  image: yup.mixed().required("Image is required"),
  heading: yup.string().required("Heading is required!"),
  title: yup.string().required("Title is required!"),
  price: yup
    .number("Price must be number")
    .positive("Filled positive number!")
    .required("Price is required"),
  category: yup.string().required("Category is required!"),
});

const CardGenerator = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [cards, setCards] = useState(() => {
    const storedCards = localStorage.getItem("generatedCards");
    return storedCards ? JSON.parse(storedCards) : [];
  });

  const [editIndex, setEditIndex] = useState(-1);

  const editCard = (index) => {
    setEditIndex(index);
    const nextIndex = index + 1 < cards.length ? index + 1 : 0; // Selects the next card in the array or goes to the first card if at the end
    const cardToEdit = cards[nextIndex];
    reset({
        image: { files: [cardToEdit.image] },
        heading: cardToEdit.heading,
        title: cardToEdit.title,
        price: cardToEdit.price,
        category: cardToEdit.category,
    });
};

  // Update local storage whenever 'cards' state changes
  useEffect(() => {
    localStorage.setItem("generatedCards", JSON.stringify(cards));
  }, [cards]);

  const onSubmit = (data) => {
    const updatedCard = {
      ...data,
      image: URL.createObjectURL(data.image[0]),
      date: new Date().toISOString(),
  };
  const updatedCards = [...cards];
  
  if (editIndex !== -1) {
      updatedCards.splice(editIndex, 1, updatedCard);  
      setCards(updatedCards);
      setEditIndex(-1);
      reset();
  } else {
      setCards([...cards, updatedCard]);
      reset();
  }
  
  };

  const deleteProduct = (category, index) => {
    const updatedCards = cards.filter(
      (card) => !(card.category === category && cards.indexOf(card) === index)
    );
    setCards(updatedCards);
  };

  const renderCardsCategory = (category) => {
    return cards
      .filter((card) => card.category === category)
      .map(({ image, heading, title, price }, index) => (
        <div key={index} className="card">
          <img src={image} />
          <div className="card-details">
            <h3>{heading}</h3>
            <p>{title}</p>
            <span>{price} TK</span>
            <div className="card-buttons">
              <button onClick={() => deleteProduct(category, index)}>
                Delete
              </button>
              <button onClick={() => editCard(index)}>Edit</button>
            </div>
          </div>
        </div>
      ));
  };

  return (
    <div>
      <div className="card-generator">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <h2>Create a Product Card</h2>
          <input
            type="file"
            accept="image/*"
            {...register("image", { required: false })}
          />
          {!!errors.image && <FormError {...{ err: errors?.image?.message }} />}

          <input type="text" placeholder="Heading" {...register("heading")} />
          {!!errors?.heading && (
            <FormError {...{ err: errors?.heading?.message }} />
          )}

          <input type="text" placeholder="Title" {...register("title")} />
          {!!errors.title && <FormError {...{ err: errors?.title?.message }} />}

          <input type="text" placeholder="Price" {...register("price")} />
          {!!errors.price && <FormError {...{ err: errors?.price?.message }} />}

          <label>
            <select {...register("category")}>
              <option value="">Select Category</option>
              <option value="Men's T-shirt">Men's T-shirt</option>
              <option value="Men's Pant">Men's Pant</option>
              <option value="Kid's Dress">Kids Dress</option>
            </select>
          </label>

          {!!errors.category && (
            <FormError {...{ err: errors?.category?.message }} />
          )}

          <button type="submit">
            {editIndex !== -1 ? "Update Card" : "Generate Card"}
          </button>
        </form>
      </div>

      <h1>Product Catagories</h1>
      {/* men's t-shirt section */}

      <div className="product-section">
        <h2>Men's T-shirt</h2>
        <div className="cards-container">
          {renderCardsCategory("Men's T-shirt")}
        </div>
      </div>
      {/* Men's pant section */}

      <div className="product-section">
        <h2>Men's Pant</h2>
        <div className="cards-container">
          {renderCardsCategory("Men's Pant")}
        </div>
      </div>

      {/* Kids dress section */}

      <div className="product-section">
        <h2>Kid's Dress</h2>
        <div className="cards-container">
          {renderCardsCategory("Kid's Dress")}
        </div>
      </div>
    </div>
  );
};

export default CardGenerator;
export const FormError = ({ err }) => <div className="error">{err}</div>;
