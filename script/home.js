// Function to check if user accepted cookies
function checkCookieConsent() {
    return document.cookie.includes("cookieConsent=accepted");
}

// Function to accept cookies
function acceptCookies() {
    document.cookie = "cookieConsent=accepted; path=/; max-age=604800"; // 7 days
    document.getElementById("cookie-banner").style.display = "none";
}

// Function to track clicks if cookies are accepted
function trackClick(linkName) {
    if (!checkCookieConsent()) {
        alert("Please accept cookies to track navigation activity.");
        return;
    }

    let clicks = getCookie(linkName);
    clicks = clicks ? parseInt(clicks) + 1 : 1;
    document.cookie = `${linkName}=${clicks}; path=/; max-age=604800`; // Store for 7 days

    console.log(`Clicked: ${linkName}, Total Clicks: ${clicks}`);
}

// Function to get cookie value
function getCookie(name) {
    let cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        let [key, value] = cookies[i].split('=');
        if (key === name) {
            return value;
        }
    }
    return null;
}

// Function to find the most clicked link
function findMostClicked() {
    if (!checkCookieConsent()) return;

    let cookies = document.cookie.split('; ');
    let maxClicks = 0;
    let mostClicked = 'None';

    cookies.forEach(cookie => {
        let [key, value] = cookie.split('=');
        if (key !== "cookieConsent" && parseInt(value) > maxClicks) {
            maxClicks = parseInt(value);
            mostClicked = key;
        }
    });

    console.log(`Most Clicked Link: ${mostClicked} (${maxClicks} times)`);
}

// Show cookie banner if cookies not accepted
window.onload = function() {
    if (!checkCookieConsent()) {
        document.getElementById("cookie-banner").style.display = "block";
    } else {
        findMostClicked();
    }
};

// Responsive Menu Toggle
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function changeImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    document.querySelector('.carousel').style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(changeImage, 3000); // Change image every 3 seconds


