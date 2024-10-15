// Function to shuffle the array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to load images into the gallery
function loadImages() {
    const gallery = document.querySelector('.gallery');

    // Define images and their corresponding links
    const imageList = [
        { src: 'https://www.lhohq.info/graphics/graphic1b.jpg', link: 'index.html' },
        { src: 'http://www.lhohq.info/going-it-alone/PACKETWRENCH.jpg', link: 'index.html' },
        { src: 'https://www.lhohq.info/cinema/projector_icon.gif', link: 'index.html' },
        { src: 'https://www.lhohq.info/graphics/alice_toms_new_car_television_home_dildo.gif', link: 'index.html' },
        { src: 'https://www.lhohq.info/busch_foto/smoke_xxx_chemtrail.gif', link: 'weepingWalksAlone.html' },
        { src: 'https://www.lhohq.info/busch_foto/high-profile-resignations.png', link: 'index.html' },
        { src: 'https://www.lhohq.info/container/how_to_steal_an_election.html', link: 'index.html' },
        { src: 'https://www.lhohq.info/container/multiplepersonalitydisorder.gif', link: 'index.html' },
        { src: 'https://www.lhohq.info/insider_trading/octomom-makeover-lawsuit.png', link: 'index.html' },
        { src: 'https://www.lhohq.info/this_is_money/traffic_shaping_dpi.gif', link: 'index.html' },
        { src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/377f5963-a0e7-42e6-bc1b-f75b3d931793/dfty9qt-9b456b2e-87bb-4028-a41a-37fb731cd423.jpg/v1/fit/w_375,h_484,q_70,strp/scanbeth_by_maxmasuttidrawing_dfty9qt-375w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY1MiIsInBhdGgiOiJcL2ZcLzM3N2YzOTYzLWEwZTctNDJlNi1iYzFiLWY3NWIzZDkzMTc5M1wvZGZ0eTlxdC05YjQ1NmIyZS04N2JiLTQwMjgtYTQxYS0zN2ZiNzMxY2Q0MjMuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.NHvAdOYw2cMqJYQwzhuNSGKNEIsjy47I9vJnNI8h_3Q', link: 'index.html' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB5tV8h8EOZ3PMmN4Z6ogJF_fMKt7cnHJ4pA&s', link: 'index.html' },
        { src: 'https://vapor95.com/cdn/shop/articles/ARTIST_SPOTLIGHT_Hysterical_Meloncholy.jpg?v=1718134326', link: 'index.html' },
        { src: 'https://freight.cargo.site/i/b3985274bc8c0ba056c16b860dbfeed09542ba4569ec2177733bbf54946a4916/9082fcac9ad9d19894a0869ddbe752f7.png', link: 'index.html' },
        { src: 'https://piratesoftware.wiki/w/images/piratesoftware/0/0b/Thor.png', link: 'index.html' },
        { src: 'image12.jpg', link: 'index.html' },
        { src: 'image12.jpg', link: 'index.html' },
        { src: 'image12.jpg', link: 'index.html' },
    ];


    const shuffledImages = shuffleArray(imageList);
    shuffledImages.forEach(item => {
        const anchor = document.createElement('a');
        anchor.href = item.link;

        const img = document.createElement('img');
        img.src = item.src;
        anchor.appendChild(img);

        gallery.appendChild(anchor); 
    });
}


window.onload = function() {
    loadImages();
};
