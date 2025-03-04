import aboutImage from './images/about.jpg'
export default function loadAbout() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    // Create main headline
    const headline = document.createElement('h1');
    headline.textContent = 'About La Bella Cucina';
    headline.classList.add('about-title');

    // Create about container
    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');

    // Create story section
    const storySection = document.createElement('div');
    storySection.classList.add('story-section');

    const storyImage = document.createElement('img');
    storyImage.src = aboutImage;
    storyImage.alt = 'Our restaurant story';
    storyImage.classList.add('about-image');

    const storyContent = document.createElement('div');
    storyContent.classList.add('story-content');

    const storyTitle = document.createElement('h2');
    storyTitle.textContent = 'Our Story';
    
    const storyText = document.createElement('p');
    storyText.textContent = 'Founded in 1985, La Bella Cucina has been serving authentic Italian cuisine for over three decades. What started as a small family restaurant has grown into one of the city\'s most beloved dining establishments.';

    // Create values section
    const valuesSection = document.createElement('div');
    valuesSection.classList.add('values-section');

    const values = [
        {
            title: 'Quality',
            description: 'We source only the finest ingredients from local suppliers and Italy.'
        },
        {
            title: 'Tradition',
            description: 'Our recipes have been passed down through generations of Italian chefs.'
        },
        {
            title: 'Service',
            description: 'We treat every guest like family, ensuring a warm and memorable dining experience.'
        }
    ];

    const valuesTitle = document.createElement('h2');
    valuesTitle.textContent = 'Our Values';
    valuesTitle.classList.add('values-title');

    const valuesGrid = document.createElement('div');
    valuesGrid.classList.add('values-grid');

    values.forEach(value => {
        const valueCard = document.createElement('div');
        valueCard.classList.add('value-card');

        const valueTitle = document.createElement('h3');
        valueTitle.textContent = value.title;

        const valueDescription = document.createElement('p');
        valueDescription.textContent = value.description;

        valueCard.appendChild(valueTitle);
        valueCard.appendChild(valueDescription);
        valuesGrid.appendChild(valueCard);
    });

    // Create team section
    const teamSection = document.createElement('div');
    teamSection.classList.add('team-section');

    const teamTitle = document.createElement('h2');
    teamTitle.textContent = 'Our Team';

    const teamDescription = document.createElement('p');
    teamDescription.textContent = 'Our talented team of chefs and staff work tirelessly to create an unforgettable dining experience for our guests. Led by Executive Chef Shady Mutethia, our kitchen combines traditional techniques with modern innovation.';

    // Append all elements
    content.appendChild(headline);
    
    storyContent.appendChild(storyTitle);
    storyContent.appendChild(storyText);
    storySection.appendChild(storyImage);
    storySection.appendChild(storyContent);
    aboutContainer.appendChild(storySection);

    valuesSection.appendChild(valuesTitle);
    valuesSection.appendChild(valuesGrid);
    aboutContainer.appendChild(valuesSection);

    teamSection.appendChild(teamTitle);
    teamSection.appendChild(teamDescription);
    aboutContainer.appendChild(teamSection);

    content.appendChild(aboutContainer);
}
