import heroImage from './images/hero.jpg';
export default function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    // Hero section
    const heroSection = document.createElement('div');
    heroSection.classList.add('hero-section');

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to La Bella Cucina';
    headline.classList.add('main-title');

    const image = document.createElement('img');
    image.src = heroImage;
    image.alt = 'La Bella Cucina Restaurant';
    image.classList.add('hero-image');

    // Description section
    const descriptionSection = document.createElement('div');
    descriptionSection.classList.add('description-section');

    const description = document.createElement('p');
    description.textContent = 'Experience the authentic flavors of Italy in the heart of the city. Our master chefs bring generations of culinary expertise to your table.';
    description.classList.add('main-description');

    // Features section
    const featuresSection = document.createElement('div');
    featuresSection.classList.add('features');

    const features = [
        { title: 'Fresh Ingredients', text: 'Locally sourced, organic produce' },
        { title: 'Authentic Recipes', text: 'Traditional Italian cooking methods' },
        { title: 'Cozy Atmosphere', text: 'Perfect for romantic dinners and family gatherings' }
    ];

    features.forEach(feature => {
        const featureDiv = document.createElement('div');
        featureDiv.classList.add('feature');

        const featureTitle = document.createElement('h3');
        featureTitle.textContent = feature.title;

        const featureText = document.createElement('p');
        featureText.textContent = feature.text;

        featureDiv.appendChild(featureTitle);
        featureDiv.appendChild(featureText);
        featuresSection.appendChild(featureDiv);
    });

    // Append all sections
    content.appendChild(headline);
    content.appendChild(image);
    content.appendChild(descriptionSection);
    descriptionSection.appendChild(description);
    content.appendChild(featuresSection);
}