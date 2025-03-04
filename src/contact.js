export default function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = 'Contact Us';
    headline.classList.add('contact-title');

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    // Info Section
    const infoSection = document.createElement('div');
    infoSection.classList.add('contact-info');

    const contactDetails = [
        { icon: '📞', title: 'Phone', info: '(555) 123-4567' },
        { icon: '📧', title: 'Email', info: 'info@labellacucina.com' },
        { icon: '📍', title: 'Address', info: '123 Restaurant St, Foodville, TX 12345' },
        { icon: '⏰', title: 'Hours', info: 'Mon-Sun: 11:00 AM - 10:00 PM' }
    ];

    contactDetails.forEach(detail => {
        const detailDiv = document.createElement('div');
        detailDiv.classList.add('contact-detail');

        const icon = document.createElement('span');
        icon.textContent = detail.icon;
        icon.classList.add('contact-icon');

        const title = document.createElement('h3');
        title.textContent = detail.title;

        const info = document.createElement('p');
        info.textContent = detail.info;

        detailDiv.appendChild(icon);
        detailDiv.appendChild(title);
        detailDiv.appendChild(info);
        infoSection.appendChild(detailDiv);
    });

    // Map placeholder
    const mapSection = document.createElement('div');
    mapSection.classList.add('map-section');
    
    const map = document.createElement('div');
    map.classList.add('map-placeholder');
    map.textContent = 'Map View';

    mapSection.appendChild(map);

    content.appendChild(headline);
    contactContainer.appendChild(infoSection);
    contactContainer.appendChild(mapSection);
    content.appendChild(contactContainer);
}