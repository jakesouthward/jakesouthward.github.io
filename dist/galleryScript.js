document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector('.gallery');

    // Array of image file names
    var pics = ["2016-03-04 20.34.53.jpg",
"2010-03-06 05.19.53.jpg",
"2010-03-06 05.22.25.jpg",
"2010-06-14 08.13.29.jpg",
"2010-08-03 06.01.26.jpg",
"2011-01-29 16.41.53.jpg",
"2011-05-30 09.24.05.jpg",
"2011-06-07 18.50.13.jpg",
"2011-07-06 17.23.35.jpg",
"2011-08-20 17.59.00.jpg",
"2011-09-01 09.04.07.jpg",
"2011-09-07 10.54.14.jpg",
"2011-09-13 20.18.12.jpg",
"2011-11-20 06.15.12.jpg",
"2011-11-20 06.17.27.jpg",
"2011-12-31 17.25.55.jpg",
"2012-03-04 11.01.47.jpg",
"2012-03-04 12.14.30.jpg",
"2012-03-04 16.37.15.jpg",
"2012-03-04 16.52.04.jpg",
"2012-03-04 19.25.34.jpg",
"2012-03-24 16.35.01.jpg",
"2012-03-25 15.46.19.jpg",
"2012-05-01 18.19.32.jpg",
"2012-05-10 18.17.13.jpg",
"2012-05-21 17.37.08.jpg",
"2012-06-26 13.10.25.jpg",
"2012-06-26 19.00.37.jpg",
"2012-07-15 16.04.41.jpg",
"2012-07-28 07.22.56 copy.jpg",
"2012-07-28 07.22.56.jpg",
"2012-10-06 10.12.55.jpg",
"2012-10-31 07.44.11.jpg",
"2012-10-31 18.32.47.jpg",
"2012-12-23 16.06.47.jpg",
"2012-12-24 19.46.32.jpg",
"2012-12-27 16.51.02.jpg",
"2012-12-29 15.46.41.jpg",
"2013-01-01 15.15.26.jpg",
"2013-02-02 12.04.22.jpg",
"2013-02-02 12.20.00.jpg",
"2013-02-04 20.16.02.jpg",
"2013-02-10 12.20.04.jpg",
"2013-03-03 15.50.02.jpg",
"2014-08-30 13.45.04.jpg",
"2014-09-26 15.44.14.jpg"]

    // Loop through the images array and create img elements
    pics.forEach(image => {
        const img = document.createElement('img');
        const a = document.createElement('a');
        img.src = 'dist/assets/pics/' + image; 
        a.href = 'dist/assets/pics/' + image; 
        img.class = 'block h-full w-full object-cover object-center opacity-0 animate-fade-in transition duration-500 transform scale-100 hover:scale-110'
        gallery.appendChild(img);
        gallery.append(a);
    });
});