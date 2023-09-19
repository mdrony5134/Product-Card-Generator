import { useState } from "react";

 const CardGenerator = () => {
    const [cards, setCards] = useState([])
    const [image, setImage] = useState('')
    const [heading, setHeading] = useState('')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')

const generateCard = () =>{
    if(image && heading && title && price && category){
        const newCard = {
            image,
            heading,
            title,
            price,
            category,
        }
        setCards([...cards, newCard])
        console.log(setCards);
        setImage('')
        setHeading('')
        setTitle('')
        setPrice('')
        setCategory('')
    }
}
 
const renderCardsCategory = (category) =>{
    return cards
                .filter((card)=> card.category === category)
                .map(({image, heading, title, price}, index) => (
                <div key={index} className="card">
                    <img src={image}/>
                    <div className="card-details">
                        <h3>{heading}</h3>
                        <p>{title}</p>
                        <span>{price}</span>
                    </div>
                </div>
                ))
}


    return (
        <div>
            <div className="card-generator">
                <div className="form">
                    <h2>Create a Product Card</h2>
                <input 
                    type="file" 
                    onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]), console.log(e.target.files))}
                    accept="image/*"
                />

                <input 
                type="text" 
                placeholder="Heading"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                />

                <input 
                type="text" 
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />

                <input 
                type="text" 
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                />

                <label>
                    {/* Select Category: */}
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Select Category</option>
                    <option value="Men's T-shirt">Men's T-shirt</option>
                    <option value="Men's Pant">Men's Pant</option>
                    <option value="Kid's Dress">Kids Dress</option>
                    </select>
                </label>
                <button onClick={generateCard}>Generate Card</button>
                </div>
            </div>

        <h1>Product Catagories</h1>
{/* men's t-shirt section */}

        <div className="product-section">
            <h2>Men's T-shirt</h2>
            <div className="cards-container">
               { renderCardsCategory("Men's T-shirt")}
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