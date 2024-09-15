
let scrollButton = document.getElementById("scroll-button");
let nextPage = document.getElementById('Second-section');

// Event listener for scroll button
scrollButton.addEventListener('click', function() {
    // Scroll smoothly to the next section
    window.scroll({
        top: window.innerHeight, // Scroll down one viewport height
        behavior: 'smooth' // Smooth scroll effect
    });
    console.log("hello");
    
});

// about me 

function togglePopup() {
    const popup = document.getElementById("popup-1");
    popup.classList.toggle("hidden");
    const content = popup.querySelector(".transform");
    content.classList.toggle("scale-100");
}

// Main tech container
let mainTechContainer = document.getElementById('mainTechContainer');
let mainTech = ['Java', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'C'];

mainTech.forEach(function(content) {
    let button = document.createElement('button');
    button.textContent = content;
    button.classList.add("px-4", "py-2", "bg-green-300", "rounded", "hover:bg-green-400", "transition");
    mainTechContainer.appendChild(button);
});

// project 
  // Array of objects containing card details
  const cardData = [
    {
        image: '/assets/project-image/weather.jpg',
        heading: 'weather forecast ',
        description: 'This is the first project description.',
        url: 'https://shaheb746.github.io/Intern-Army-weather-App/'
    },
    {
        image: 'https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        heading: 'blog App',
        description: 'This is the second project description.',
        url: 'https://projectblog.netlify.app/'
    },
    {
        image: 'https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        heading: 'URL-Shortening Page',
        description: 'This is the third project description.',
        url: 'https://shaheb746.github.io/Intern-Army-URL-Shortening-Landing-page/'
    },
    {
        image: 'https://media.istockphoto.com/id/1268465415/photo/quiz-time-concept-speech-bubble-with-pencil-on-yellow-background.jpg?s=2048x2048&w=is&k=20&c=swkm1JC5IZtwEEalRmi7E8-M-uAEd4MSxz2WcaDeiw0=',
        heading: 'Quiz App',
        description: 'This is the fourth project description.',
        url: 'https://shaheb746.github.io/Intern-Army-Quiz-App/'
    }
];

// Function to create a card and append it to the container
function createCard(card) {
    const container = document.getElementById('cardContainer');
    
    // Create card element
    const cardElement = document.createElement('a');
    cardElement.href = card.url
    cardElement.classList.add('bg-white', 'rounded-lg', 'shadow-lg', 'overflow-hidden', 'p-4', 'transition', 'transform', 'hover:scale-105', 'hover:shadow-xl','cursor-pointer');
    cardElement.target = '_blank'

    // Create image
    const image = document.createElement('img');
    image.src = card.image;
    image.classList.add('w-full', 'h-48', 'object-cover', 'rounded-lg');

    // Create heading
    const heading = document.createElement('h2');
    heading.innerText = card.heading;
    heading.classList.add('text-xl', 'font-semibold', 'mt-4', 'mb-2', 'text-center', 'text-black', 'capitalize');

    // Create description
    const description = document.createElement('p');
    description.innerText = card.description;
    description.classList.add('text-gray-600', 'text-center','capitalize');

    // Append the elements to the card
    cardElement.appendChild(image);
    cardElement.appendChild(heading);
    cardElement.appendChild(description);

    // Append the card to the container
    container.appendChild(cardElement);
}

// Loop through the card data and create cards
cardData.forEach(createCard);

//  // technology part 
    let learning = document.querySelector('#language');
        let language = ['java','javaScript', 'sql', 'c', 'node.js', 'python', 'html', 'css'];
        language.forEach(function (lang) {
            let btn = document.createElement('button');
            btn.textContent= lang;
            btn.classList.add("px-4","py-2", "m-2","bg-blue-700", "rounded", "uppercase");
            learning.appendChild(btn);
        });
    // detabase part
    let database = document.querySelector('#database');
        let data = ['mongoDB', 'sql'];
        data.forEach(function (lang) {
            let btn = document.createElement('button');
            btn.textContent= lang;
            btn.classList.add("px-4","py-2", "m-2","bg-blue-700", "rounded", "uppercase");
            database.appendChild(btn);
        });
    // technology part
    let technology = document.querySelector('#technology');
        let logy = ['github','git','figma','canva', 'UI/UX'];
        logy.forEach(function (lang) {
            let btn = document.createElement('button');
            btn.textContent= lang;
            btn.classList.add("px-4","py-2", "m-2","bg-blue-700", "rounded", "uppercase");
            technology.appendChild(btn);
        });
// othet activity part 
// Data: Array of activity cards
const activityPageCards = [
    {
        img: "assets/project-image/workshop.jpg",
        title: "One-Week Hands-on Workshop 'Web Design'",
        description: "As an organizing member of a dynamic web development workshop, I had the privilege of working under the guidance of Neha Chaturvedi Ma'am and collaborating with an incredible team, including seniors Aditya Shrivastav, Samiksha Dubey, Satish Kumar, Palak Choudhary, Kartik Vishwakarma, and colleague Md Taufique Azam. Together, we fostered a culture of knowledge-sharing, teamwork, and innovation, aimed at building a thriving web development community. This experience strengthened my leadership and collaboration skills, emphasizing the power of collective growth.",
        url: "#"
    },
    {
        img: "/assets/project-image/act.jpg",
        title: "Social Midia marketing workshop",
        description: "I had the incredible opportunity to enhance my digital marketing skills through a hands-on social media workshop organized by the E&I Cell at Rabindranath Tagore University and the Institution's Innovation Council. Across three in-depth sessions, I learned practical strategies including creating an Ideal Customer Persona (ICP), running effective Google AdWords campaigns, understanding keywords, and mastering Facebook Ads. A special thanks to Mili Kataria for her invaluable guidance. I'm excited to apply these skills in future projects and proud to have earned a certificate for this enriching experience.",
        url: "#"
    },
    {
        img: "/assets/project-image/image-2.jpg",
        title: "Dream Start-Up Challenge",
        description: "I had the honor of leading and volunteering in the inspiring Dream Start-Up Challenge, where I fully embraced the entrepreneurial journey. This experience allowed me to explore innovative ideas, refine pitching techniques, and sharpen my presentation skills. It was a powerful reminder of the impact collaboration and creative thinking have in driving innovation. I’m grateful for the opportunity to grow as a leader and an entrepreneur.",
        url: "#"
    }
];

// // Function to create a card and append it to the container
function createActivityCard(card) {
    let activityContainer = document.querySelector('#activityCard'); // Container where cards will be appended

    // Create card element
    const activityCard = document.createElement('a');
    activityCard.href = card.url; // Use the URL from the card object
    activityCard.classList.add('bg-white', 'rounded-lg', 'shadow-lg', 'overflow-hidden', 'p-4', 'transition', 'transform', 'hover:scale-105', 'hover:shadow-xl', 'cursor-pointer');
    activityCard.target = '_blank'; // Open link in a new tab

    // Create image
    const image = document.createElement('img');
    image.src = card.img; // Use the image URL from the card object
    image.classList.add('w-full', 'h-48', 'object-cover', 'rounded-lg');

    // Create heading
    const heading = document.createElement('h2');
    heading.innerText = card.title; // Use the title from the card object
    heading.classList.add('text-xl', 'font-semibold', 'mt-4', 'mb-2', 'text-center', 'text-black', 'capitalize');

    // Create description container
    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('text-gray-600', 'text-center', 'capitalize');

    // Create short description
    const shortDescription = document.createElement('p');
    shortDescription.innerText = card.description.slice(0, 100) + "..."; // Show the first 100 characters followed by ellipsis

    // Create full description (hidden by default)
    const fullDescription = document.createElement('p');
    fullDescription.innerText = card.description;
    fullDescription.classList.add('hidden'); // Hidden initially

    // Create "Read More" button
    const readMoreButton = document.createElement('a');
    readMoreButton.innerText = "Read More";
    readMoreButton.classList.add('text-blue-500', 'cursor-pointer', 'ml-2');
    // readMoreButton.href = "https://google.com"
    readMoreButton.addEventListener('click', (event) => {
        event.preventDefault();
        // Toggle the visibility of the full description
        if (fullDescription.classList.contains('hidden')) {
            fullDescription.classList.remove('hidden');
            shortDescription.classList.add('hidden');
            readMoreButton.innerText = "Read Less";
        } else {
            fullDescription.classList.add('hidden');
            shortDescription.classList.remove('hidden');
            readMoreButton.innerText = "Read More";
        }
    });

    // Append elements to the description container
    descriptionContainer.appendChild(shortDescription);
    descriptionContainer.appendChild(fullDescription);
    descriptionContainer.appendChild(readMoreButton);

    // Append the elements to the card
    activityCard.appendChild(image);
    activityCard.appendChild(heading);
    activityCard.appendChild(descriptionContainer);

    // Append the card to the container
    activityContainer.appendChild(activityCard);
}

// Loop through the array and generate cards
activityPageCards.forEach(createActivityCard);



// footer part 
const yearElement = document.getElementById("year");
   const currentYear = new Date().getFullYear();
   yearElement.textContent = currentYear;