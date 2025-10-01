import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./recipe.css";

function Recipe() {
  const [recipe, setRecipe] = useState({});
  const [copied, setCopied] = useState(false);
  const [servings, setServings] = useState(12);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    Axios.get("http://localhost:8000/spring", { withCredentials: true })
      .then((res) => {
        if (res.data && res.data.meals && res.data.meals.length > 0) {
          setRecipe(res.data.meals[0]);
        } else if (res.data && typeof res.data === "object") {
          setRecipe(res.data);
        } else {
          setRecipe({});
        }
      })
      .catch((error) => {
        console.error("Failed to load recipe:", error);
        setRecipe({});
      });
  }, []);

  const copyIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ing = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ing && ing.trim()) {
        const line = `${measure ? measure.trim() + " " : ""}${ing.trim()}`;
        ingredients.push(line);
      }
    }
    if (ingredients.length) {
      navigator.clipboard.writeText(ingredients.join("\n")).catch((e) => {
        console.error("Clipboard write failed", e);
      });
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const printRecipe = () => window.print();

  const changeServings = (newScale) => {
    setScale(newScale);
    setServings(Math.round(12 * newScale));
  };

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const title = recipe?.strMeal || "Recipe";
  const area = recipe?.strArea || "";
  const category = recipe?.strCategory || "";
  const youtube = recipe?.strYoutube || "";
  const thumb = recipe?.strMealThumb || "";
  const youtubeVideoId = getYouTubeVideoId(youtube);

  const steps = recipe.strInstructions
    ? recipe.strInstructions
        .split(/(?:\r?\n){2,}|STEP\s*\d+|(?:\r?\n)/i)
        .map((s) => s.trim())
        .filter((s) => s.length > 0)
    : [];

  return (
    <div className="recipe-page">
      {/* Header */}
      <header className="recipe-header">
        <h1 className="recipe-title">{title}</h1>
        <div className="recipe-rating">
          <div className="stars">
            {"★★★★☆".split("").map((star, i) => (
              <span key={i} className={i < 4 ? "filled" : ""}>
                {star}
              </span>
            ))}
          </div>
          <span className="rating-text">4.6 (16)</span>
        </div>
        <p className="recipe-description">
          {recipe?.strInstructions 
            ? recipe.strInstructions.substring(0, 120) + "..." 
            : "Try this delicious recipe that's perfect for any occasion."}
        </p>
        <div className="recipe-meta">
          <span>By Recipe API</span>
          <span className="separator">•</span>
          <span>Updated {new Date().toLocaleDateString()}</span>
        </div>
        
        <div className="action-buttons">
          <button className="action-btn save-btn">
            <span className="icon">♥</span> SAVE
          </button>
          <button className="action-btn rate-btn">
            <span className="icon">☆</span> RATE
          </button>
          <button onClick={printRecipe} className="action-btn print-btn">
            <span className="icon">🖨</span> PRINT
          </button>
          <button className="action-btn share-btn">
            <span className="icon">↗</span> SHARE
          </button>
        </div>
      </header>

      {/* Hero Image */}
      {thumb && (
        <div className="hero-image-container">
          <img src={thumb} alt={title} className="hero-image" />
        </div>
      )}

      {/* YouTube Video Embed */}
      {youtubeVideoId && (
        <div className="video-container">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeVideoId}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="youtube-iframe"
          ></iframe>
        </div>
      )}

      {/* Time Info Banner */}
      <div className="time-banner">
        <div className="time-item">
          <div className="time-label">Prep Time:</div>
          <div className="time-value">15 mins</div>
        </div>
        <div className="time-item">
          <div className="time-label">Cook Time:</div>
          <div className="time-value">15 mins</div>
        </div>
        <div className="time-item">
          <div className="time-label">Total Time:</div>
          <div className="time-value">30 mins</div>
        </div>
      </div>

      {/* Servings Info */}
      <div className="servings-section">
        <div className="servings-label">Servings:</div>
        <div className="servings-value">{servings}</div>
      </div>

      {/* Scale Buttons */}
      <div className="scale-buttons">
        <button 
          className={scale === 0.5 ? "scale-btn active" : "scale-btn"}
          onClick={() => changeServings(0.5)}
        >
          1/2X
        </button>
        <button 
          className={scale === 1 ? "scale-btn active" : "scale-btn"}
          onClick={() => changeServings(1)}
        >
          ✓ 1X
        </button>
        <button 
          className={scale === 2 ? "scale-btn active" : "scale-btn"}
          onClick={() => changeServings(2)}
        >
          2X
        </button>
      </div>

      <div className="recipe-note">
        <span className="info-icon">ⓘ</span> Original recipe (1X) yields {12} servings
      </div>

      {/* Ingredients Section */}
      <section className="ingredients-section">
        <h2 className="section-title">Ingredients</h2>
        <ul className="ingredients-list">
          {Array.from({ length: 20 }, (_, i) => {
            const idx = i + 1;
            const ingredient = recipe[`strIngredient${idx}`];
            const measure = recipe[`strMeasure${idx}`];
            if (ingredient && ingredient.trim()) {
              return (
                <li key={idx} className="ingredient-item">
                  <input type="checkbox" id={`ing-${idx}`} />
                  <label htmlFor={`ing-${idx}`}>
                    <span className="measure">{measure ? measure.trim() : ""}</span>{" "}
                    {ingredient.trim()}
                  </label>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </section>

      {/* Directions Section */}
      <section className="directions-section">
        <h2 className="section-title">Directions</h2>
        <div className="directions-list">
          {steps.map((step, index) => (
            <div key={index} className="direction-step">
              <div className="step-header">
                <span className="step-number">Step {index + 1}</span>
              </div>
              <p className="step-text">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Actions */}
      <div className="bottom-actions">
        <button onClick={copyIngredients} className="bottom-btn copy-btn">
          {copied ? "✓ Copied!" : "Copy Ingredients"}
        </button>
      </div>
    </div>
  );
}

export default Recipe;