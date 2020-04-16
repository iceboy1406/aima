// Preloader
let preloader = document.querySelector('.preloader');
let website = document.querySelector('.website');
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        preloader.classList.add('zoomOutRight');
        website.style = '';
        document.querySelector('#home .jumbotron .word').classList.add('rollIn-left');
        document.querySelector('#home .jumbotron .image').classList.add('rollIn-right');
    }, 5000);
});
window.addEventListener('load', () => {
        preloader.classList.add('zoomOutRight');
        website.style = '';
        document.querySelector('#home .jumbotron .word').classList.add('rollIn-left');
        document.querySelector('#home .jumbotron .image').classList.add('rollIn-right');

});
let toggle = document.querySelector('.togle-nav');
let mobnav = document.querySelector('.mobile-nav');
let nav = document.querySelector('nav');
toggle.addEventListener('click', () => {
    mobnav.classList.toggle('hidden');
    mobnav.classList.toggle('show');
});

// Nav when body onscroll => Memberi shadow
window.addEventListener('scroll', () => {

    if (document.documentElement.scrollTop > 70) {
        nav.classList.add('shadow-lg');
        nav.style.transition = '.3s ease-in-out';
    } else {
        nav.classList.remove('shadow-lg');
    }
});

// Efek Animasi pada saat scroll ke bawah
let dd = document.documentElement;
window.addEventListener('scroll', () => {
    // Bagian ---Mengapa harus punya webste
    let listAlasan = document.querySelectorAll('.list-alasan');
    for (l of listAlasan) {
        if (dd.scrollTop > l.offsetTop - 300) {
            l.classList.add('zoomInUp');
        }
    }
    // Bagian ---Tentang Perusahaan Kami
    let tentangImg = document.querySelector('.tentang-img');
    let tentangWord = document.querySelector('.tentang-word');
    let tentang = document.querySelector('.tentang');
    if (dd.scrollTop > tentang.offsetTop - 250) {
        tentangImg.classList.add('bounceInLeft');
        tentangWord.classList.add('bounceInRight');

    }
    // Bagian --Mengapa Memilih Layanan Kami
    let memilih = document.querySelector('.memilih');
    if (dd.scrollTop > memilih.offsetTop - 350) {
        memilih.classList.add('bounceInUp');

    }
    // Bagian --Portfolio(karya)
    let karyaImg = document.querySelectorAll('.karya img');
    for (k of karyaImg) {
        if (dd.scrollTop > k.offsetTop - 350) {
            k.classList.add('bounceInUp');
        }
    }
    // Bagian --Price(harga)
    let harga = document.querySelector('.harga');
    let hargaCard = document.querySelectorAll('.harga .bg-white');
    if (dd.scrollTop > harga.offsetTop - 350) {
        for (c of hargaCard) {
            c.classList.add('bounceInUp');
        }
    }
});
// Counter Up Animation
let counterUp = document.getElementById('counterUp');
let angka = 0;
window.addEventListener('scroll', () => {
    //agar function hanya dijalankan satu kali
    if (angka == 0) {
        //function akan dijalankan saat scroll kebawah melebihi div counter
        if (document.documentElement.scrollTop > counterUp.offsetTop - 300) {
            function counter(id, start, end, duration) {
                let obj = document.getElementById(id),
                    curent = start,
                    range = end - start,
                    increment = end > start ? 1 : -1,
                    step = Math.floor(duration / range),
                    timer = setInterval(() => {
                        curent += increment;
                        obj.textContent = curent;
                        if (curent == end) {
                            clearInterval(timer);
                        }
                    }, step)

            }
            counter("count1", 0, 40, 4500);
            counter("count2", 0, 70, 4300);
            counter("count3", 0, 15, 4500);
            //ketika angka di ++ maka nilainya !=0 sehingga function hanya akan berjalan satu kali
            angka++;
        }
    }

});

// Nav Active
const nav_link = document.querySelectorAll('.nav-link');
const mob_nav_link = document.querySelectorAll('.mobile-nav-link');
const span_link = document.querySelectorAll('.mobile-nav-link .link');
const section = {
    home: document.querySelector('#home'),
    about: document.querySelector('#about'),
    portfolio: document.querySelector('#portfolio'),
    price: document.querySelector('#price'),
    contact: document.querySelector('#contact')
};
window.addEventListener('scroll', () => {
    for (s in section) {
        if (document.documentElement.scrollTop > section[s].offsetTop - 70 && document.documentElement.scrollTop < section[s].offsetTop + section[s].clientHeight) {
            for (n of nav_link) {
                const target = n.textContent.toLowerCase();
                n.classList.remove('nav-link-active');
                if (target == s) {
                    n.classList.add('nav-link-active');
                }
            }
            for (m of mob_nav_link) {
                const targets = m.textContent.toLowerCase();
                m.classList.remove('mobile-nav-link-active');
                if (targets == s) {
                    m.classList.add('mobile-nav-link-active');
                }
            }

        }
    }
});
// Slider
const SlideContainer = document.querySelector('.super-container');
const SlideContent = document.querySelectorAll('.content');

// Button
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

// Counter
let counters = 1;
let size = SlideContent[0].offsetWidth;
SlideContainer.style.transform = 'translateX(' + (-size * counters) + 'px)';

next.addEventListener('click', () => {
    if (counters >= SlideContent.length - 1) return;
    SlideContainer.style.transition = 'transform 0.8s ease-in-out';
    counters++;
    SlideContainer.style.transform = 'translateX(' + (-size * counters) + 'px)';
    console.log(-size * counters);
});
prev.addEventListener('click', () => {
    if (counters <= 0) return;
    SlideContainer.style.transition = 'transform 0.6s ease-in-out';
    counters--;
    SlideContainer.style.transform = 'translateX(' + (-size * counters) + 'px)';
});

SlideContainer.addEventListener('transitionend', () => {
    console.log(SlideContent[counters]);
    if (SlideContent[counters].id === 'lastClone') {
        SlideContainer.style.transition = "none";
        counters = SlideContent.length - 2;
        SlideContainer.style.transform = 'translateX(' + (-size * counters) + 'px)';
    }
    if (SlideContent[counters].id === 'firstClone') {
        SlideContainer.style.transition = "none";
        counters = SlideContent.length - counters;
        SlideContainer.style.transform = 'translateX(' + (-size * counters) + 'px)';
    }
});
