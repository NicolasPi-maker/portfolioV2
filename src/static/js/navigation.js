window.onload = () => {
    // Get all nav items
    const navBar = document.getElementById('navbar');
    const navItems = document.getElementsByClassName('nav-item');

    let route = document.location.hash;

    // Set active class on page load
    const setActiveClass = (hash) => {
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].classList.remove('active');
            if (navItems[i].children[0].href.includes(hash)) {
                navItems[i].classList.add('active');
            }
        }
    };

    // Set default active class if no anchor is present in url
    if (!route) {
        navItems[0].classList.add('active');
    } else {
        setActiveClass(route);
    }

    // Set active class on click on anchor link
    let onNavigation = false;
    // Add event listener to each nav item to set active class on click
    Array.from(navItems).forEach((item, i) => {
        navItems[i].addEventListener('click', () => {
            setActiveClass(navItems[i].children[0].hash);
            onNavigation = true;
        });
    });

    let lastScrollY = window.scrollY;
    let scrollTimeout;
    let opacityNavTimeout;
    window.addEventListener('scroll', () => {
        navBar.classList.add('active-nav');
        if (opacityNavTimeout) {
            clearTimeout(opacityNavTimeout);
        }
        let scrollY = window.scrollY;

        // If position is not the same as last scroll position, set lastScrollY to current scroll position and reset timeout
        if (scrollY !== lastScrollY) {
            lastScrollY = scrollY;

            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }

            scrollTimeout = setTimeout(() => {
                opacityNavTimeout = setTimeout(() => {
                    navBar.classList.remove('active-nav');
                },1500)

                onNavigation = false;
            }, 100);
        }
    });

    const desktopNavItems = document.getElementsByClassName('desktop-nav-item');
    Array.from(desktopNavItems).forEach(item => {
        item.addEventListener('click', () => {
            onNavigation = true;
        })
    })


    // Get all links to sections from bottom nav bar
    const homeSection = document.getElementById('home');
    const aboutSection = document.getElementById('about');
    const workSection = document.getElementById('work');
    const engagementsSection = document.getElementById('engagements');
    const contactSection = document.getElementById('contact');

    // Set anchor to the url on scroll to trigger active class on nav items

    const updateHashWithoutScrolling = (hash) => {
        history.replaceState(null, null, hash);
    }
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !onNavigation) {
                updateHashWithoutScrolling(`#${entry.target.id}`);
                setActiveClass(document.location.hash);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.3,
    });

    observer.observe(homeSection);
    observer.observe(aboutSection);
    observer.observe(workSection);
    observer.observe(engagementsSection);
    observer.observe(contactSection);
};