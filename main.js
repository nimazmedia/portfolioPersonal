const myCarousel = document.getElementById('myCarousel')
        myCarousel.addEventListener('slid.bs.carousel', function () {
        const activeItem = this.querySelector(".active");
        document.querySelector(".testi-img img").src = activeItem.getAttribute("data-img");
        })