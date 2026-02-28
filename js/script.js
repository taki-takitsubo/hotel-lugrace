{
  //lenis
  const lenis = new Lenis({
      duration: 1.6,
  });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
}
{
  //splide
  if(document.querySelector('.sec--plans__splide')) {
    new Splide(".sec--plans__splide",{
      padding: {
        right: "33.5%"
      },
      gap: 24,
      mediaQuery: "min",
      breakpoints: {
        768: {
          padding: 0,
          perPage: 3,
          focus: 0,
        }
      },
    }).mount();
  }

  if(document.querySelector('.sec--rooms__splide')) {
    new Splide(".sec--rooms__splide",{
      gap: 16,
      arrows: false,
    }).mount();
  }
}
{
  //gsap
  gsap.registerPlugin(SplitText,ScrollTrigger);

  const tl = gsap.timeline();

  tl.from(".mv__img", {
    scale: 1.3,
    ease: "power1.out",
    duration: 2,
  });

  const split = SplitText.create(".mv__txt", { type: "chars", autoSplit: true });
  tl.from(split.chars, {
    duration: 1.5,
    x: 20,
    autoAlpha: 0,
    stagger: 0.05,
  });

  const scrubOptions = {
    scrub: 3,
    start: 'top center',
  }

  tl.to('.sec--brand__img', {
    y:-24,
    scrollTrigger: {
      trigger: '.sec--brand__img-wrapper',
      ...scrubOptions,
    }
  });
  tl.to('.sec--restaurant__img', {
    y:-24,
    scrollTrigger: {
      trigger: '.sec--restaurant__img-wrapper',
      ...scrubOptions,
    }
  });
  tl.to('.sec--hall__img', {
    y:-24,
    scrollTrigger: {
      trigger: '.sec--hall__img-wrapper',
      ...scrubOptions,
    }
  });
  tl.to('.sec--members__img', {
    y:-24,
    scrollTrigger: {
      trigger: '.sec--members__img-wrapper',
      ...scrubOptions,
    }
  });
}
{
  // IntersectionObserver
  {
    const animateItems = document.querySelectorAll(".js-animate"),
    options = {
      root: null,
      rootMargin: "-20%",
      threshold: 0
    },
    observer = new IntersectionObserver(items => {
      items.forEach(e => {
        e.isIntersecting && (e.target.classList.add("js-animate--active"), observer.unobserve(e.target))
      })
    }, options);
    animateItems.forEach(items => observer.observe(items))
  }
}