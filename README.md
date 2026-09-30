<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="description" content="Walaa Art Gallery - A collection of artworks and creative ideas">

    <title>Walaa | Art Gallery</title>

    <link rel="icon" href="my icon.jpg">

    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet">
</head>

<body>

    <!-- Navigation -->
    <header>
        <div class="logo">
            <img src="log.png" alt="Walaa Logo">
            <span>WALAA</span>
        </div>
        <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#featured">Featured</a>
            <a href="#styles">Art Styles</a>
            <a href="#share">Share Your Art</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>


    <!-- Hero Section -->
    <section id="home" class="hero">

        <div class="hero-content">

            <p>WELCOME TO</p>

            <h1>WALAA</h1>

            <h2>ART GALLERY</h2>

            <p>
                Where imagination becomes art.
            </p>

            <a href="#gallery" class="button">
                Explore My Art
            </a>
        </div>
    </section>


    <!-- About Section -->
    <section id="about" class="about">

        <div class="about-image">
            <img src="ME.png.jpeg" alt="ME">
        </div>

        <div class="about-text">

            <p class="section-title">ABOUT ME</p>

            <h2>Creativity in Every Detail</h2>

            <p>
                Welcome to my art gallery. This space is a collection
                of my drawings, paintings, ideas, and creative moments.
            </p>

            <p>
                Every artwork has its own story, emotion, and inspiration.
            </p>

        </div>

    </section>


    <!-- Gallery Section -->
    <section id="gallery" class="gallery-section">

        <p class="section-title">MY COLLECTION</p>

        <h2>My Gallery</h2>

        <p class="gallery-intro">
            Explore some of my favorite artworks.
        </p>


        <div class="gallery">

            <div class="art-card">
                <img src="AR.png.jpg" alt="Portrait artwork">
                <h3>Portraits</h3>
                <p>Faces, emotions and expressions.</p>
            </div>


            <div class="art-card">
                <img src="cartoon art.png.png" alt="cartoon artwork">
                <h3>Cartoon</h3>
                <p>Inspired by the beauty around us.</p>
            </div>


            <div class="art-card">
                <img src="SKET.png.jpg" alt="Sketch artwork">
                <h3>Sketches</h3>
                <p>Simple lines with creative ideas.</p>
            </div>


            <div class="art-card">
                <img src="pals.png.jpg" alt="places">
                <h3>Places</h3>
                <p>Different ideas and artistic experiments.</p>
            </div>

        </div>

    </section>


    <!-- Featured Artwork -->
    <section id="featured" class="featured">

        <div class="featured-text">

            <p class="section-title">FEATURED ARTWORK</p>

            <h2>A Piece With a Story</h2>

            <p>
                Art can express feelings that words sometimes cannot.
                This section highlights one of the artworks in the gallery.
            </p>

        </div>

        <div class="featured-image">

            <img src="art2.jpg" alt="Featured artwork">

        </div>

    </section>

    <!-- Art Styles -->
    <section id="styles" class="styles">

        <div class="styles-intro">

            <p class="section-title">MY CREATIVE WORLD</p>

            <h2>Art Styles</h2>

            <p>
                Different styles, same passion.
            </p>

        </div>

        <div class="style-list">

            <div class="style-item">
                <span>◯</span>
                <p>Portraits</p>
            </div>

            <div class="style-item">
                <span>♧</span>
                <p>Nature</p>
            </div>

            <div class="style-item">
                <span>✎</span>
                <p>Sketches</p>
            </div>

            <div class="style-item">
                <span>△</span>
                <p>Creative Works</p>
            </div>

        </div>

    </section>

    <!-- Share Your Art -->
    <section id="share" class="share-section">

        <p class="section-title">YOUR TURN</p>

        <h2>Share Your Art</h2>

        <p>
            Have a drawing or artwork you are proud of?
            Share it with us and become part of our creative community.
        </p>


        <!-- منع إضافة علامة الاستفهام ? لشريط العنوان عند الإرسال -->
        <form id="artForm" action="javascript:void(0);">

            <label for="artistName">Your Name</label>

            <input
                type="text"
                id="artistName"
                placeholder="Enter your name"
                required
            >


            <label for="artTitle">Artwork Title</label>


            <input
                type="text"
                id="artTitle"
                placeholder="Enter artwork title"
                required
            >


            <label for="artDescription">
                Description
            </label>

            <textarea
                id="artDescription"
                placeholder="Tell us something about your artwork..."
            ></textarea>


            <label for="artImage">
                Choose Your Artwork
            </label>

            <input
                type="file"
                id="artImage"
                accept="image/*"
                required
            >


            <button type="submit">
                Share Artwork
            </button>

        </form>

    </section>


    <!-- Community Art -->
    <section id="community" class="community-section">

        <p class="section-title">
            CREATIVE COMMUNITY
        </p>

        <h2>
            Community Art
        </h2>

        <p class="gallery-intro">
            Discover artworks shared by other creative people.
        </p>


        <div id="communityGallery" class="gallery">

            <!-- Shared artworks will appear here -->

        </div>

    </section>


    <!-- Contact -->
    <section id="contact" class="contact">

        <div class="contact-text">

            <p class="section-title">
                LET'S CONNECT
            </p>

            <h2>
                Contact Me
            </h2>

            <p>
                Thank you for visiting my gallery.
                Feel free to get in touch.
            </p>


            <div class="contact-info">

                <p>
                    Instagram: @walaa_736
                </p>

                <p>
                    Email: walaa@gmail.com
                </p>

                <p>
                    Alexandria, Egypt
                </p>

            </div>

        </div>


        <!-- Contact Form -->
        <!-- منع إضافة علامة الاستفهام ? لشريط العنوان عند الإرسال -->
        <form class="contact-form" action="javascript:void(0);">

            <label for="name">
                Your Name
            </label>

            <input
                type="text"
                id="name"
                placeholder="Enter your name"
                required
            >


            <label for="email">
                Your Email
            </label>

            <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
            >


            <label for="message">
                Your Message
            </label>

            <textarea
                id="message"
                placeholder="Write your message..."
                required
            ></textarea>


            <button type="submit">
                Send Message
            </button>

        </form>

    </section>


    <!-- Footer -->
    <footer>

        <p>
            © 2026 Walaa Art Gallery
        </p>

        <p>
            Created with creativity & passion ♡
        </p>

    </footer>


    <!-- JavaScript -->
    <script src="script.js"></script>

</body>

</html># walaa-art-gallery
