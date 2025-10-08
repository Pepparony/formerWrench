<script>
      // Mobile menu state
  let isOpen = false;
  
  // Toggle mobile menu
  function toggleMenu() {
    isOpen = !isOpen;
    // Prevent scrolling when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  // Close menu on link click
  function handleNavClick() {
    isOpen = false;
    document.body.style.overflow = 'auto';
  }

  // Features for Services Page
  const services = [
    {
      title: "Custom Mechanic Websites",
      description:
        "We design and build professional, high-converting websites tailored specifically for mobile mechanics. Stand out from the crowd and make a lasting impression.",
      image:
        "https://cdn.midjourney.com/a726a906-7a83-4b3c-9b5b-e6ec7f247075/0_0.png",
      benefits: [
        "Mobile-optimized, fast-loading",
        "SEO & Google Business integration",
        "Lead capture forms and chat"
      ]
    },
    {
      title: "Automated Booking & Scheduling",
      description:
        "Stop playing phone tag. Our booking systems let customers schedule jobs directly from your site, with automated reminders and calendar sync.",
      image:
        "https://cdn.midjourney.com/7eab2719-59fb-49d2-a3aa-c281d6bf3e9c/0_0.png",
      benefits: [
        "24/7 online booking",
        "Automatic confirmations & reminders",
        "Reduce no-shows, fill your calendar"
      ]
    },
    {
      title: "Digital Marketing & Lead Generation",
      description:
        "We run targeted ads and local SEO campaigns to get you found by customers who need your services. Turn web visitors into paying jobs.",
      image:
        "https://cdn.midjourney.com/0a66f820-d650-4c0f-b32c-fbf1dc25f108/0_0.png",
      benefits: [
        "Google Ads & Facebook Ads management",
        "Local SEO for mechanics",
        "Monthly reporting and ROI tracking"
      ]
    },
    {
      title: "Reputation & Review Management",
      description:
        "Build trust and credibility with automated review requests and monitoring. We help you get more 5-star reviews and respond to feedback.",
      image:
        "https://cdn.midjourney.com/8f0d5f26-fe2f-46ba-8739-17b5c297abec/0_0.png",
      benefits: [
        "Automated review requests after jobs",
        "Monitor and respond to reviews",
        "Showcase testimonials on your site"
      ]
    },
    {
      title: "Business Consulting & Support",
      description:
        "Get expert advice from mechanics who’ve built successful businesses. We’re here to help you grow, troubleshoot, and scale.",
      image:
        "https://cdn.midjourney.com/40f9f32d-b2f9-4b7d-b707-1ea5855e6f85/0_1.png",
      benefits: [
        "1-on-1 business coaching",
        "24/7 support from real people",
        "Transparent, flexible pricing"
      ]
    },
        // --- New Services ---
    {
      title: "Payment Processing Solutions",
      description:
        "Accept credit cards, Apple Pay, Google Pay, and more—right from your website or on the go. Get paid faster, track invoices, and reduce paperwork.",
      image:
        "https://cdn.midjourney.com/171bfb1c-eb5b-4823-a572-2362171ae3cd/0_3.png",
      benefits: [
        "Seamless online and mobile payments",
        "Automatic receipts & record-keeping",
        "Low transaction fees"
      ]
    },
    {
      title: "Customer Loyalty & Referral Programs",
      description:
        "Turn one-time jobs into repeat business. We set up loyalty programs and referral incentives that keep your phone ringing.",
      image:
        "https://cdn.midjourney.com/d0dbaee2-901c-4b1b-8405-3f49a69c100f/0_3.png",
      benefits: [
        "Automated follow-up messages",
        "Easy-to-use rewards system",
        "Track referrals and repeat jobs"
      ]
    }
  ];

  // How It Works steps
  const steps = [
    {
      title: "1. Free Consultation",
      text: "We get to know your business, goals, and challenges. No obligation, just honest advice from mechanics who’ve been there."
    },
    {
      title: "2. Custom Plan & Demo",
      text: "See exactly how our solutions will work for you. Get a detailed proposal and a live demo of your future website or booking system."
    },
    {
      title: "3. Build & Launch",
      text: "We handle all the tech—design, setup, integrations, and launch. You stay in the loop, but never overwhelmed."
    },
    {
      title: "4. Ongoing Growth & Support",
      text: "We don’t disappear after launch. Get marketing, updates, and real support whenever you need it."
    }
  ];

  // FAQ
  const faqs = [
    {
      q: "How fast can I get my new website and booking system?",
      a: "Most projects launch in 2-3 weeks, depending on your needs. We move fast so you can start getting results ASAP."
    },
    {
      q: "Do I need to know anything about web design?",
      a: "Nope! We handle everything for you, from setup to updates. You can focus on your customers and jobs."
    },
    {
      q: "What if I already have a website?",
      a: "We can upgrade your current site or migrate your info to a new, high-performing platform—no downtime."
    },
    {
      q: "How much does it cost?",
      a: "We offer flat-rate, monthly, and revenue-share options. Book a free call for a personalized quote."
    },
    {
      q: "Is support really 24/7?",
      a: "Yes! Real people, not bots. Call, text, or email us anytime—day or night."
    }
  ];

  // Mini testimonials
  const testimonials = [
    {
      name: "Jake M.",
      text: "I went from 2 jobs a week to fully booked in a month. The booking system is a game changer!",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Samantha T.",
      text: "The team actually understands what mechanics need. My customers love the new site and I get more calls than ever.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Tony R.",
      text: "Support is always there—even on weekends. I feel like I finally have a real business, not just a hustle.",
      image: "https://randomuser.me/api/portraits/men/65.jpg"
    }
  ];
</script>

  
 <div class="w-screen bg-yellow-400 text-white md:flex text-center justify-center items-center p-2 top-0 hidden md:fixed z-100">
  <p class="text-lg tracking-wide">Our operations are now in Charlotte!</p>
</div>
<nav class="flex w-full justify-between md:justify-between py-6 items-center bg-[#edf2f4] px-4 md:px-8 lg:px-16 md:mt-10">
  <!-- Logo Section -->
  <div class="px-4">
    <a href="/" class="w-fit h-fit">
      <img class="w-28 scale-150 hover:scale-135 transition-all duration-200" src="CLTmobile-02.png" alt="Logo">
    </a>
  </div>
  
  <!-- Desktop Navigation Links - Hidden on mobile -->
  <div class="hidden md:flex text-lg space-x-6">
    <a class="transition-all duration-200 underline-offset-8 hover:underline text-lg" href="/about">About Us</a>
    <a class="transition-all duration-200 underline-offset-8 hover:underline text-lg" href="/reviews">Reviews</a>
    <a class="transition-all duration-200 underline-offset-8 hover:underline text-lg" href="/services">Services</a>
    <a class="transition-all duration-200 underline-offset-8 hover:underline text-lg" href="/contact">Contact</a>
    <a class="transition-all duration-200 underline-offset-8 hover:underline text-lg" href="/training">Training</a>
  </div>
  
  <!-- Desktop Phone Number - Hidden on mobile -->
  <div class="hidden md:flex justify-end text-lg items-center space-x-2">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 12C22 10.6868 21.7413 9.38647 21.2388 8.1731C20.7362 6.95996 19.9997 5.85742 19.0711 4.92896C18.1425 4.00024 17.0401 3.26367 15.8268 2.76123C14.6136 2.25854 13.3132 2 12 2V4C13.0506 4 14.0909 4.20703 15.0615 4.60889C16.0321 5.01099 16.914 5.60034 17.6569 6.34326C18.3997 7.08594 18.989 7.96802 19.391 8.93848C19.7931 9.90918 20 10.9495 20 12H22Z" fill="currentColor" />
      <path d="M2 10V5C2 4.44775 2.44772 4 3 4H8C8.55228 4 9 4.44775 9 5V9C9 9.55225 8.55228 10 8 10H6C6 14.4182 9.58173 18 14 18V16C14 15.4478 14.4477 15 15 15H19C19.5523 15 20 15.4478 20 16V21C20 21.5522 19.5523 22 19 22H14C7.37259 22 2 16.6274 2 10Z" fill="currentColor" />
      <path d="M17.5433 9.70386C17.8448 10.4319 18 11.2122 18 12H16.2C16.2 11.4485 16.0914 10.9023 15.8803 10.3928C15.6692 9.88306 15.3599 9.42017 14.9698 9.03027C14.5798 8.64014 14.1169 8.33081 13.6073 8.11963C13.0977 7.90869 12.5515 7.80005 12 7.80005V6C12.7879 6 13.5681 6.15527 14.2961 6.45679C15.024 6.7583 15.6855 7.2002 16.2426 7.75732C16.7998 8.31445 17.2418 8.97583 17.5433 9.70386Z" fill="currentColor" />
    </svg>
    <a href="/">704-444-4444</a>
  </div>
  
  <!-- Mobile Menu Button - Only visible on mobile -->
  <button class="md:hidden p-2 rounded-lg hover:bg-gray-100" on:click={toggleMenu}>
    {#if !isOpen}
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    {:else}
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    {/if}
  </button>
</nav>

<!-- Mobile Menu Dropdown - Fixed position, slides down when active -->
{#if isOpen}
  <div class="fixed inset-x-0 z-40 bg-yellow-500 md:hidden" style="top: 80px;">
    <div class="flex flex-col px-6 py-8 space-y-6">
      <!-- Mobile Navigation Links -->
      <a href="/about" class="text-white text-xl font-semibold hover:text-gray-200 transition-colors duration-200" on:click={handleNavClick}>About Us</a>
      <a href="/reviews" class="text-white text-xl font-semibold hover:text-gray-200 transition-colors duration-200" on:click={handleNavClick}>Reviews</a>
      <a href="/services" class="text-white text-xl font-semibold hover:text-gray-200 transition-colors duration-200" on:click={handleNavClick}>Services</a>
      <a href="/contact" class="text-white text-xl font-semibold hover:text-gray-200 transition-colors duration-200" on:click={handleNavClick}>Contact Us</a>
      <a href="/training" class="text-white text-xl font-semibold hover:text-gray-200 transition-colors duration-200" on:click={handleNavClick}>Training</a>

      <!-- Mobile Phone Number -->
      <div class="flex items-center space-x-2 pt-6">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12C22 10.6868 21.7413 9.38647 21.2388 8.1731C20.7362 6.95996 19.9997 5.85742 19.0711 4.92896C18.1425 4.00024 17.0401 3.26367 15.8268 2.76123C14.6136 2.25854 13.3132 2 12 2V4C13.0506 4 14.0909 4.20703 15.0615 4.60889C16.0321 5.01099 16.914 5.60034 17.6569 6.34326C18.3997 7.08594 18.989 7.96802 19.391 8.93848C19.7931 9.90918 20 10.9495 20 12H22Z" fill="white" />
          <path d="M2 10V5C2 4.44775 2.44772 4 3 4H8C8.55228 4 9 4.44775 9 5V9C9 9.55225 8.55228 10 8 10H6C6 14.4182 9.58173 18 14 18V16C14 15.4478 14.4477 15 15 15H19C19.5523 15 20 15.4478 20 16V21C20 21.5522 19.5523 22 19 22H14C7.37259 22 2 16.6274 2 10Z" fill="white" />
          <path d="M17.5433 9.70386C17.8448 10.4319 18 11.2122 18 12H16.2C16.2 11.4485 16.0914 10.9023 15.8803 10.3928C15.6692 9.88306 15.3599 9.42017 14.9698 9.03027C14.5798 8.64014 14.1169 8.33081 13.6073 8.11963C13.0977 7.90869 12.5515 7.80005 12 7.80005V6C12.7879 6 13.5681 6.15527 14.2961 6.45679C15.024 6.7583 15.6855 7.2002 16.2426 7.75732C16.7998 8.31445 17.2418 8.97583 17.5433 9.70386Z" fill="white" />
        </svg>
        <a href="/" class="text-white text-xl" on:click={handleNavClick}>704-444-4444</a>
      </div>
      
      <!-- Mobile CTA Button -->
      <a href="/contact" class="mt-6 rounded-xl w-fit px-8 py-3 bg-white text-[#55a630] text-bold text-xl flex justify-center items-center transition-all duration-100 hover:bg-gray-100" on:click={handleNavClick}>
        <p class="mr-2">Partner With Us</p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z" fill="currentColor" />
        </svg>
      </a>
    </div>
  </div>
{/if}
<!-- Hero Section -->
<section class="w-full flex flex-col items-center justify-center py-12 sm:py-20 bg-yellow-50 px-4 sm:px-8">
  <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-black leading-tight mb-4">
    Our <span class="text-yellow-500">Services</span> for Mobile Mechanics
  </h1>
  <svg class="w-1/2 sm:w-1/3 md:w-1/4 mb-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 20">
    <path d="M 10,12 Q 150,6 290,12" stroke="#000" stroke-width="1.5" fill="none" />
  </svg>
  <p class="max-w-2xl text-center text-lg sm:text-xl text-gray-700 mb-8">
    Everything you need to grow your mobile mechanic business, built by people who understand your world. From websites to marketing to support, we handle it all—so you can focus on fixing cars and making money.
  </p>
  <a href="/contact" class="inline-flex items-center rounded-xl px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-xl transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5">
    <span class="mr-2">Book Your Free Consultation</span>
    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z" fill="currentColor"/>
    </svg>
  </a>
</section>

<!-- Services List -->
<section class="w-full flex flex-col items-center justify-center py-12 sm:py-20 px-4 sm:px-8 bg-white my-24">
  <div class="flex flex-col space-y-16 w-full max-w-6xl">
    {#each services as service, i}
      <div class="flex flex-col md:flex-row {i % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-10 md:gap-16">
        <!-- Image -->
        <div class="w-full md:w-1/2 flex justify-center">
          <img class="rounded-2xl shadow-lg w-full md:w-96 h-64 object-cover" src={service.image} alt={service.title} />
        </div>
        <!-- Text -->
        <div class="w-full md:w-1/2 flex flex-col space-y-4">
          <h2 class="text-2xl sm:text-3xl font-bold text-black">{service.title}</h2>
          <p class="text-lg sm:text-xl text-gray-700">{service.description}</p>
          <ul class="space-y-2 pt-2">
            {#each service.benefits as benefit}
              <li class="flex items-center">
                <span class="w-7 h-7 rounded-full bg-yellow-400 flex items-center justify-center mr-2">
                  <svg class="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span class="text-gray-700 text-base sm:text-lg">{benefit}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- How It Works Section -->
<section class="w-full flex flex-col items-center py-16 bg-gray-50 px-4 sm:px-8">
  <h2 class="text-3xl sm:text-4xl font-bold text-center text-black mb-4">
    How It Works
  </h2>
  <svg class="w-1/3 mb-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 20">
    <path d="M 10,12 Q 150,6 290,12" stroke="#000" stroke-width="1.5" fill="none" />
  </svg>
  <div class="flex flex-col md:flex-row gap-8 max-w-5xl w-full">
    {#each steps as step}
      <div class="flex-1 bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
        <h3 class="text-xl font-bold mb-2 text-yellow-500">{step.title}</h3>
        <p class="text-gray-700 text-base">{step.text}</p>
      </div>
    {/each}
  </div>
</section>

<!-- FAQ Section -->
<section class="w-full flex flex-col items-center py-16 bg-white px-4 sm:px-8">
  <h2 class="text-3xl sm:text-4xl font-bold text-center text-black mb-4">
    Frequently Asked Questions
  </h2>
  <svg class="w-1/3 mb-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 20">
    <path d="M 10,12 Q 150,6 290,12" stroke="#000" stroke-width="1.5" fill="none" />
  </svg>
  <div class="max-w-3xl w-full space-y-4">
    {#each faqs as faq}
      <details class="bg-gray-100 rounded-xl p-4">
        <summary class="font-bold text-lg cursor-pointer text-yellow-600">{faq.q}</summary>
        <p class="mt-2 text-gray-700">{faq.a}</p>
      </details>
    {/each}
  </div>
</section>

<!-- Mini Testimonials Section -->
<section class="w-full flex flex-col items-center py-16 bg-yellow-50 px-4 sm:px-8">
  <h2 class="text-3xl sm:text-4xl font-bold text-center text-black mb-4">
    Mechanics Love Our Service
  </h2>
  <svg class="w-1/3 mb-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 20">
    <path d="M 10,12 Q 150,6 290,12" stroke="#000" stroke-width="1.5" fill="none" />
  </svg>
  <div class="flex flex-col md:flex-row gap-8 max-w-5xl w-full">
    {#each testimonials as t}
      <div class="flex-1 bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
        <img src={t.image} alt={t.name} class="w-16 h-16 rounded-full mb-3 border-2 border-yellow-400" />
        <p class="text-lg text-gray-800 mb-2 italic">"{t.text}"</p>
        <p class="font-bold text-yellow-700">{t.name}</p>
      </div>
    {/each}
  </div>
</section>

<!-- Final CTA Section -->
<section class="w-full flex flex-col items-center py-16 bg-yellow-500 px-4 sm:px-8">
  <h2 class="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
    Ready to Get Started?
  </h2>
  <p class="text-lg sm:text-xl text-white text-center mb-6 max-w-2xl">
    Book a free, no-pressure call and see how easy it is to grow your mobile mechanic business with FormerWrench.
  </p>
  <a href="/contact" class="inline-flex items-center rounded-xl px-8 py-3 bg-white hover:bg-yellow-100 text-yellow-600 font-bold text-xl transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5">
    <span class="mr-2">Book My Free Consultation</span>
    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z" fill="currentColor"/>
    </svg>
  </a>
</section>
          <footer class="w-screen bg-black text-white">
            <!-- Top Section with Columns -->
            <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
              <!-- Column 1: About -->
              <div class="flex flex-col space-y-6">
                <img src="CLTmobile-02-Photoroom-removebg-preview.png" alt="FormerWrench" class="h-10 sm:h-24 mb-2 max-w-[125px]">
                <div class="flex space-x-4">
                  <a href="https://facebook.com" class="text-white hover:text-white hover:opacity-80 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg> *
                  </a>
                  <a href="https://instagram.com" class="text-white hover:text-white hover:opacity-80 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg> *
                  </a>
                  <a href="https://linkedin.com" class="text-white hover:text-white hover:opacity-80 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                    </svg> *
                  </a>
                </div>
              </div>
          
              <!-- Column 2: Quick Links -->
              <div class="flex flex-col space-y-4">
                <h3 class="text-lg sm:text-xl font-bold mb-2">Quick Links</h3>
                <a href="/" class="text-white text-opacity-90 hover:text-opacity-100 transition-opacity text-base sm:text-lg">Home</a>
                <a href="/about" class="text-white text-opacity-90 hover:text-opacity-100 transition-opacity text-base sm:text-lg">About Us</a>
                <a href="/services" class="text-white text-opacity-90 hover:text-opacity-100 transition-opacity text-base sm:text-lg">Our Services</a>
                <a href="/careers" class="text-white text-opacity-90 hover:text-opacity-100 transition-opacity text-base sm:text-lg">Careers</a>
                <a href="/contact" class="text-white text-opacity-90 hover:text-opacity-100 transition-opacity text-base sm:text-lg">Contact Us</a>
              </div>
          
              <!-- Column 3: Services -->
              <div class="flex flex-col space-y-4">
                <h3 class="text-lg sm:text-xl font-bold mb-2">Our Services</h3>
                <a href="/services/enforcement" class="text-white text-opacity-90 hover:text-opacity-100 transition-opacity text-base sm:text-lg">Advertising</a>
                <a href="/services/training" class="text-white text-opacity-90 hover:text-opacity-100 transition-opacity text-base sm:text-lg">Web Development</a>
                <a href="/services/technology" class="text-white text-opacity-90 hover:text-opacity-100 transition-opacity text-base sm:text-lg">Customer Support</a>
                <a href="/services/signage" class="text-white text-opacity-90 hover:text-opacity-100 transition-opacity text-base sm:text-lg">Lead nurturing</a>
              </div>
          
              <!-- Column 4: Contact -->
              <div class="flex flex-col space-y-4">
                <h3 class="text-lg sm:text-xl font-bold mb-2">Contact Us</h3>
                <p class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span class="text-white text-opacity-90 text-base sm:text-lg">4612 gilead st<br>Charlotte, NC 28217</span>
                </p>
                <p class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span class="text-white text-opacity-90 text-base sm:text-lg">(704) 444-4444</span>
                </p>
                <p class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span class="text-white text-opacity-90 text-base sm:text-lg">info@formerwrench.com</span>
                </p>
                <div class="pt-4">
                  <h4 class="text-base sm:text-lg font-semibold mb-3">Operating Hours</h4>
                  <p class="text-white text-opacity-90 text-base sm:text-lg">Daily: 7:00 AM - 8:00 PM</p>
                  <p class="text-white text-opacity-90 text-base sm:text-lg">24/7 Client Support Available</p>
                </div>
              </div>
            </div>
          
            <!-- Bottom Section with Copyright -->
            <div class="w-full bg-black py-6">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center">
                <p class="text-white text-opacity-90 text-center md:text-left mb-4 md:mb-0 text-sm sm:text-base">© 2025 LineGo Parking. All rights reserved.</p>
                <div class="flex flex-wrap justify-center gap-4 sm:gap-6">
                  <a href="/privacy" class="text-white text-opacity-90 hover:text-opacity-100 transition-opacity text-sm sm:text-base">Privacy Policy</a>
                  <a href="/terms" class="text-white text-opacity-90 hover:text-opacity-100 transition-opacity text-sm sm:text-base">Terms of Service</a>
                  <a href="/sitemap" class="text-white text-opacity-90 hover:text-opacity-100 transition-opacity text-sm sm:text-base">Sitemap</a>
                </div>
              </div>
            </div>
          </footer>
