// ==============================
// 1. Dynamic Header Color on Scroll
// ==============================

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    
    // الأقسام ذات الخلفيات الداكنة (مثل الهيرو، الأساليب، والفوتر)
    const darkSections = document.querySelectorAll('.hero, .styles, footer');
    
    let isDark = false;

    darkSections.forEach(function (section) {
        const rect = section.getBoundingClientRect();
        // التأكد مما إذا كان الهيدر يتقاطع مع قسم داكن
        if (rect.top <= 80 && rect.bottom >= 80) {
            isDark = true;
        }
    });

    if (isDark) {
        header.classList.add('dark-header');
        header.classList.remove('light-header');
    } else {
        header.classList.add('light-header');
        header.classList.remove('dark-header');
    }
});

// تشغيل الحدث فوراً عند تحميل الصفحة لضبط اللون المناسب
window.dispatchEvent(new Event('scroll'));


// ==============================
// 2. Navigation Interaction (Clean & Direct URLs)
// ==============================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        const targetId = link.getAttribute("href");

        if (targetId && targetId.startsWith("#")) {
            event.preventDefault(); // منع الانتقال المفاجئ المباشر

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });

                // تحديث الـ URL بنظافة في شريط العنوان بنفس اسم القسم (#about, #gallery, إلخ)
                window.location.hash = targetId;
            }
        }

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});


// ==============================
// 3. Share Your Art Form
// ==============================

const artForm = document.getElementById("artForm");
const communityGallery = document.getElementById("communityGallery");

if (artForm) {
    artForm.addEventListener("submit", function (event) {

        event.preventDefault(); // منع إعادة تحميل الصفحة ومنع ظهور علامة الاستفهام ?

        const artistName = document.getElementById("artistName").value.trim();
        const artTitle = document.getElementById("artTitle").value.trim();
        const artDescription = document.getElementById("artDescription").value.trim();
        const artImageInput = document.getElementById("artImage");
        const artImage = artImageInput ? artImageInput.files[0] : null;

        // Check required information
        if (!artistName || !artTitle || !artImage) {
            alert("Please complete your name, artwork title, and choose an image.");
            return;
        }

        // Check image type
        if (!artImage.type.startsWith("image/")) {
            alert("Please choose a valid image file.");
            return;
        }

        const reader = new FileReader();

        reader.onload = function () {

            // Create artwork card
            const artCard = document.createElement("div");
            artCard.classList.add("art-card");

            // Create image
            const image = document.createElement("img");
            image.src = reader.result;
            image.alt = artTitle;

            // Create title
            const title = document.createElement("h3");
            title.textContent = artTitle;

            // Create description
            const description = document.createElement("p");
            description.textContent = artDescription || "A beautiful artwork shared with our community.";

            // Create artist name
            const artist = document.createElement("small");
            artist.textContent = "Shared by " + artistName;

            // Add elements to card
            artCard.appendChild(image);
            artCard.appendChild(title);
            artCard.appendChild(description);
            artCard.appendChild(artist);

            // Add card to Community Art
            if (communityGallery) {
                communityGallery.appendChild(artCard);
            }

            // Clear form
            artForm.reset();

            // Success message
            alert("Your artwork has been shared successfully! 🎨");

            // تنظيف شريط العنوان والـ URL من أي كويري أو علامات زيادة
            if (window.history && window.history.replaceState) {
                window.history.replaceState(null, "", window.location.pathname + "#community");
            }

            // Scroll to the new artwork
            artCard.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        };

        // Read selected image
        reader.readAsDataURL(artImage);

    });
}


// ==============================
// 4. Contact Form
// ==============================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {

        event.preventDefault(); // منع إعادة التحميل وظهور علامة الاستفهام ?

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Check fields
        if (!name || !email || !message) {
            alert("Please complete all fields.");
            return;
        }

        // Simple email validation
        if (!email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email address.");
            return;
        }

        // Success message
        alert("Thank you, " + name + "! Your message has been sent successfully. 🤍");

        // Clear form
        contactForm.reset();

        // تنظيف شريط العنوان والـ URL
        if (window.history && window.history.replaceState) {
            window.history.replaceState(null, "", window.location.pathname + "#contact");
        }

    });
}


// ==============================
// 5. Gallery Image Interaction
// ==============================

const galleryImages = document.querySelectorAll(
    ".gallery img, .featured-image img, .about-image img"
);

galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        // Open image in a new tab
        window.open(image.src, "_blank");

    });

});