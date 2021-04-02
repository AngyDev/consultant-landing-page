class Slideshow {
    constructor() {
        this.slideIndex = 1;
        this.data = [];
        this.getData();
    }

    /**
     * Gets data from fetch
     */
    async getData() {
        try {
            const response = await fetch("https://605a21feb11aba001745da26.mockapi.io/api/v1/comments");

            if (response.status != 200) {
                var responseError = 'Something is wrong! Status Code: ' + response.status;
                this.showError(responseError);
            }

            this.data = await response.json();
            console.log(this.data);

            if (this.data.length > 0) {
                this.showData();
            } else {
                this.showError("The response is empty");
            }
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * Show the error on the page
     * @param {String} error 
     */
    showError(error) {
        const div = document.createElement("div");
        div.innerHTML = error;

        document.getElementById("slideshow-wrapper").appendChild(div);
    }

    /**
     * Create html slideshow
     * @param {Object} commentData 
     * @returns slide html element
     */
    createSlideshowItem(commentData) {

        const slide = document.createElement("div");
        slide.className = "slideshow__slide";

        const comment = document.createElement("p");
        comment.className = "slideshow__text";
        comment.innerHTML = commentData.comment;
        slide.appendChild(comment);

        const div = document.createElement("div");
        div.className = "flex flex-row align-center";

        const profileImage = document.createElement("img");
        profileImage.setAttribute("src", commentData.profile_image);
        profileImage.setAttribute("alt", "Profile Image");
        div.appendChild(profileImage);

        const profileText = document.createElement("div");
        profileText.className = "profile__text flex flex-col";
        div.appendChild(profileText);

        const profileName = document.createElement("span");
        profileName.className = "slideshow__text slideshow__text--profile";
        profileName.innerHTML = commentData.name;
        profileText.appendChild(profileName);

        const profileRating = document.createElement("span");
        profileRating.className = "slideshow__text slideshow__text--rating";
        profileRating.innerHTML = commentData.rating;
        profileText.appendChild(profileRating);

        const divProfile = document.createElement("div");
        divProfile.className = "flex flex-row align-center";
        profileText.appendChild(divProfile);

        const ratingStar = document.createElement("img");
        ratingStar.setAttribute("src", "./images/slideshow-stars.png");
        ratingStar.setAttribute("alt", "Stars Image");
        divProfile.appendChild(ratingStar);

        const ratingNumStars = document.createElement("span");
        ratingNumStars.className = "slideshow__text slideshow__text--star";
        ratingNumStars.innerHTML = commentData.number_star + "stars";
        divProfile.appendChild(ratingNumStars);

        slide.appendChild(div);

        return slide;
    }

    /**
     * Shows data in the page
     */
    showData() {
        this.data.forEach(item => {
            const slideshowItem = this.createSlideshowItem(item);

            document.getElementById("slideshow-wrapper").appendChild(slideshowItem);

        });

        this.showSlides(this.slideIndex);

    }

    /**
     * Shows slide
     * @param {Number} n 
     */
    showSlides(n) {
        const slides = document.getElementsByClassName("slideshow__slide");

        console.log(slides);

        if (n > slides.length) {
            this.slideIndex = 1
        }
        if (n < 1) {
            this.slideIndex = slides.length
        }
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[this.slideIndex - 1].style.display = "block";
    }

    /**
     * Change the slide with prev or next button
     * @param {Number} n 
     */
    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }
}

const slideshow = new Slideshow();

const nextButton = document.getElementById("next-btn");

nextButton.addEventListener('click', () => {
    slideshow.plusSlides(1);
});