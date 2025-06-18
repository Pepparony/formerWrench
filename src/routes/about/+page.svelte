<script>
    // Mobile menu state and functions (copied from your homepage for consistency)
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
    
  // Team members data
   const teamMembers = [
    {
      name: "Icaro Da Silva",
      title: "Chief Marketing Officer",
      bio: "Icaro brings over years of experience in digital marketing and brand development, helping our clients reach their target audiences effectively.",
      image: "IMG_0352.jpeg"
    },
    {
      name: "Renald Dwight",
      title: "Co-Founder",
      bio: "After expierencing the problems plauging the automotive industry, Rendald created FormerWrench, with making a difference at the center of his values.",
      image: "IMG_0362.jpeg"
    },
    {
      name: "Holden Gerlach",
      title: "CEO & Founder",
      bio: "Former mobile mechanic, dedicated to making the industy benefitial to everyone, Holden started FormerWrench with one simple vision in mind; changing the game.",
      image: "IMG_0215.jpeg"
    }
  ];

    
   const values = [
  {
    title: "Experience",
    description: "We understand mobile mechanic challenges because we've lived them. Our approach prioritizes real-world solutions over theoretical marketing tactics.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>`
  },
  {
    title: "Results",
    description: "We focus on measurable outcomes - more customers, higher revenue, and professional credibility. Our success is measured by your business growth.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>`
  },
  {
    title: "Partnership",
    description: "We treat every mechanic as a partner, not just a client. Your success is our success, and we're invested in your long-term growth and prosperity.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 5V3a1 1 0 011-1h8a1 1 0 011 1v2h3a1 1 0 011 1v1a1 1 0 01-1 1v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8a1 1 0 01-1-1V6a1 1 0 011-1h3zM9 4.5v.5h6v-.5M9 12l2 2 4-4" /></svg>`
  },
  {
    title: "Transparency",
    description: "We believe in clear communication and honest pricing. No hidden fees, no confusing contracts - just straightforward solutions that work.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>`
  },
  {
    title: "Innovation",
    description: "We constantly improve our systems and strategies to stay ahead of industry changes, ensuring our mechanics always have a competitive advantage.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>`
  },
  {
    title: "Quality",
    description: "We deliver professional-grade websites, systems, and marketing that reflect the skilled craftsmanship our mechanic partners bring to their work.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>`
  }
];
    
 // Milestones
const milestones = [
  {
    year: "2022",
    title: "Mobile Mechanic Success",
    description: "Holden Gerlach built and operated a successful mobile mechanic business, developing the strategies that would become FormerWrench's foundation.",
    image: "https://cdn.midjourney.com/c6e3bd56-a152-4183-9bcb-b387c4131add/0_2.png"
  },
  {
    year: "2024",
    title: "System Development",
    description: "Began developing the complete mobile mechanic growth system, combining proven marketing strategies with industry-specific expertise.",
    image: "https://cdn.midjourney.com/02896e4d-124f-4669-aded-14e1436fdfd0/0_0.png"
  },
  {
    year: "2025",
    title: "Company Founded",
    description: "FormerWrench officially launched with a mission to help mobile mechanics transform their businesses from feast-or-famine to fully booked.",
    image: "https://cdn.midjourney.com/c15577f4-f824-48ed-b5d7-88a7836cfbfb/0_2.png"
  },
  {
    year: "2025",
    title: "Platform Launch",
    description: "Launched our comprehensive mobile mechanic marketing platform, including website development, booking systems, and customer acquisition tools.",
    image: "https://cdn.midjourney.com/45915a17-634c-4a72-b12b-8b172d9c0293/0_3.png"
  },
  {
    year: "2025",
    title: "Nationwide Expansion",
    description: "Opened services nationwide, bringing proven mobile mechanic growth strategies to mechanics across the country.",
    image: "https://cdn.midjourney.com/af4a2b62-29c9-4ab1-98e3-0bcdcb8878a8/0_1.png"
  }
];
  </script>
  
  <head>
    <title>About Us | FomerWrench</title>
  </head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <section id="about-page">
  
    <div class="w-screen bg-yellow-400 text-white md:flex text-center justify-center items-center p-2 top-0 hidden md:fixed z-100">
  <p class="text-lg tracking-wide">Our operations are now in Charlotte!</p>
</div>
<nav class="flex w-full justify-between md:justify-between py-6 items-center bg-[#edf2f4] px-4 md:px-8 lg:px-16 mt-10">
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
    <a href="/">704-309-6194</a>
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
  <div class="fixed inset-x-0 z-40 bg-[#55a630] md:hidden" style="top: 80px;">
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
        <a href="/" class="text-white text-xl" on:click={handleNavClick}>704-309-6194</a>
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
  <section class="flex w-full justify-center items-center relative bg-yellow-500 md:py-24">
  <!-- Content Container -->
  <div class="relative z-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col justify-center items-center w-full self-center text-center">
    <div class="">
      <!-- Small Header Text -->
      <p class="text-sm sm:text-base md:text-lg font-medium uppercase mb-2 sm:mb-3 md:mb-4 text-black tracking-wide font-inter">
        Web Development & Marketing for Mobile Mechanics
      </p>
      
        <h1 class="text-3xl md:text-5xl lg:text-7xl font-bold tracking-wide mb-4">About FormerWrench</h1>

      
      <!-- Subheadline -->
      <p class="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 text-black leading-relaxed max-w-3xl font-inter">
        Founded by a former mobile mechanic who built his own $8K+ monthly business, FormerWrench combines real-world industry experience with proven digital marketing strategies to help mobile mechanics across the country build the professional, profitable businesses they deserve.
      </p>
      
      <!-- CTA Button -->
      <a href="/contact" class="inline-flex items-center rounded-xl px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-3.5 md:py-4 bg-gray-500 hover:bg-gray-700 text-white font-bold text-base sm:text-lg md:text-xl transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 font-inter">
        <span class="mr-2">Schedule a Consultation</span>
        <svg class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z" fill="currentColor"/>
        </svg>
      </a>
    </div>
  </div>
</section>
    <!-- Our Story Section -->
    <section class="w-full py-12 sm:py-16 md:py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex flex-col md:flex-row items-center gap-12">
          <!-- Image -->
          <div class="w-full md:w-1/2">
            <img src="https://cdn.midjourney.com/af4a2b62-29c9-4ab1-98e3-0bcdcb8878a8/0_1.png" alt="FormerWrench Story" class="rounded-xl shadow-lg w-full h-auto">
          </div>
          
          <!-- Content -->
          <div class="w-full md:w-1/2 space-y-6">
            <h2 class="text-3xl md:text-4xl font-bold">Our Story</h2>
            <p class="text-lg text-gray-700">
   FormerWrench was founded in 2024 by Holden Gerlach after experiencing firsthand the challenges of running a mobile mechanic business. He witnessed how talented mechanics struggled with inconsistent income, poor online presence, and competing against platforms that took 30-40% of every job.
</p>
<p class="text-lg text-gray-700">
  Starting with his own mobile mechanic business, Holden developed a systematic approach that focused on professional online presence, automated booking systems, and targeted customer acquisition. The results were immediate: consistent $6K-8K monthly revenue, professional credibility, and customers calling him instead of the other way around.
</p>
<p class="text-lg text-gray-700">
  Today, FormerWrench helps mobile mechanics throughout the country, but our mission remains the same: to transform mobile mechanic businesses from feast-or-famine income into thriving, professional operations that mechanics can be proud of.
</p>
            <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
              <a href="/contact" class="rounded-xl px-8 py-3 bg-yellow-500 text-bold text-xl text-white flex items-center justify-center transition-all duration-100 hover:opacity-90 shadow shadow-[#55a360]">
                <span>Contact Us</span>
              </a>
              <a href="/services" class="rounded-xl px-8 py-3 bg-white border border-yellow-500 text-yellow-500 text-bold text-xl flex items-center justify-center transition-all duration-100 hover:bg-gray-50">
                <span>Services</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <!-- Mission & Values Section -->
    <section class="w-full py-12 sm:py-16 md:py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Mission & <b class="text-yellow-500">Values</b></h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Our mission is to transform parking enforcement from a source of conflict into a service that builds community and creates order through fairness, transparency, and technology.
          </p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each values as value}
            <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <div class="w-14 h-14 rounded-full bg-[#eab308] flex items-center justify-center mb-4">
                {@html value.icon}
              </div>
              <h3 class="text-xl font-bold mb-2">{value.title}</h3>
              <p class="text-gray-700">{value.description}</p>
            </div>
          {/each}
        </div>
      </div>
    </section>
  
    <!-- Our Journey Timeline -->
    <section class="w-full py-12 sm:py-16 md:py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our <b class="text-yellow-500">Journey</b></h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            The story of FormerWrench's growth and evolution as we've worked to transform parking enforcement.
          </p>
        </div>
        
        <div class="space-y-12 relative">
          <!-- Timeline Line -->
          <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
          
          {#each milestones as milestone, i}
            <div class="flex flex-col md:flex-row md:items-center">
              <!-- Year Marker -->
              <div class="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500 text-white font-bold text-xl absolute left-1/2 transform -translate-x-1/2 z-10">
                {milestone.year}
              </div>
              
              <!-- Content for even indexes (left side on desktop) -->
              {#if i % 2 === 0}
                <div class="md:w-1/2 md:pr-16 md:text-right mb-8 md:mb-0">
                  <div class="md:hidden text-[#55a630] font-bold text-2xl mb-2">{milestone.year}</div>
                  <h3 class="text-2xl font-bold mb-2">{milestone.title}</h3>
                  <p class="text-gray-700">{milestone.description}</p>
                </div>
                <div class="md:w-1/2 md:pl-16">
                  <img src={milestone.image} alt={milestone.title} class="rounded-xl shadow-md w-full h-auto">
                </div>
              {:else}
                <!-- Content for odd indexes (right side on desktop) -->
                <div class="hidden md:block md:w-1/2 md:pr-16">
                  <img src={milestone.image} alt={milestone.title} class="rounded-xl shadow-md w-full h-auto">
                </div>
                <div class="md:w-1/2 md:pl-16">
                  <div class="md:hidden text-[#55a630] font-bold text-2xl mb-2">{milestone.year}</div>
                  <h3 class="text-2xl font-bold mb-2">{milestone.title}</h3>
                  <p class="text-gray-700">{milestone.description}</p>
                </div>
                <div class="md:hidden mt-4">
                  <img src={milestone.image} alt={milestone.title} class="rounded-xl shadow-md w-full h-auto">
                </div>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    </section>
  
    <!-- Team Section -->
    <section class="flex flex-col w-full justify-center items-center space-y-8 py-16 bg-gray-50">
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-center leading-tight sm:leading-[1.1]">
        Meet Our <b class="text-yellow-500">Team</b>
      </h2>
      <p class="text-lg sm:text-xl text-center text-gray-700 px-4 sm:px-0">The dedicated professionals behind FormerWrench's success</p>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-1 w-[90%] lg:w-[75%] gap-4 sm:gap-6 overflow-hidden">
        {#each teamMembers as member, i}
          <!-- Team Member Card -->
          <div class="relative group overflow-hidden h-96 sm:h-110 md:h-130 rounded-xl">
            <img 
              class="w-full h-full object-cover transition-all duration-300 brightness-60 md:brightness-100 md:group-hover:scale-105 md:group-hover:brightness-50" 
              src={member.image} 
              alt={member.name}
            />
            <!-- Overlay content that appears on hover -->
            <div class="absolute inset-0 flex flex-col md:items-center justify-end md:justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 px-4 sm:px-6 text-left md:text-center py-4 md:py-0">
              <h3 class="text-white text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{member.name}</h3>
              <p class="text-white text-base sm:text-lg font-medium mb-2 sm:mb-4">{member.title}</p>
              <p class="text-white text-sm sm:text-base">{member.bio}</p>
            </div>
          </div>
        {/each}
      </div>
    </section>
  
    <!-- Stats Section -->
    <section class="w-full py-12 sm:py-16 md:py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">FormerWrench <b class="text-yellow-500">By The Numbers</b></h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Our impact so far, and we're just getting started.
          </p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Stat 1 -->
          <div class="bg-gray-50 rounded-xl p-6 text-center">
            <div class="text-5xl font-bold text-yellow-500 mb-2">25+</div>
            <h3 class="text-xl font-bold mb-2">Mechcanics Served</h3>
            <p class="text-gray-700">Across the nation, from coast to coast</p>
          </div>
          
          <!-- Stat 2 -->
          <div class="bg-gray-50 rounded-xl p-6 text-center">
            <div class="text-5xl font-bold text-yellow-500 mb-2">60K+</div>
            <h3 class="text-xl font-bold mb-2">Increased revenue</h3>
            <p class="text-gray-700">For a more profiable business</p>
          </div>
          
          <!-- Stat 3 -->
          <div class="bg-gray-50 rounded-xl p-6 text-center">
            <div class="text-5xl font-bold text-yellow-500 mb-2">97%</div>
            <h3 class="text-xl font-bold mb-2">Client Satisfaction</h3>
            <p class="text-gray-700">Through personal help and relaitonships from our team</p>
          </div>
          
          <!-- Stat 4 -->
          <div class="bg-gray-50 rounded-xl p-6 text-center">
            <div class="text-5xl font-bold text-yellow-500 mb-2">4.8/5</div>
            <h3 class="text-xl font-bold mb-2">Customer Rating</h3>
            <p class="text-gray-700">Based on mechanic and their customers feedback</p>
          </div>
        </div>
      </div>
    </section>
  
    <!-- Testimonial Banner -->
    <section class="w-full flex justify-center items-center px-4 sm:px-6 py-12 sm:py-16">
      <div class="flex flex-col bg-yellow-200 w-full sm:w-[90%] md:w-4/5 justify-evenly items-center py-8 sm:py-12 md:py-16 rounded-2xl">
        <div class="w-[90%] md:w-[85%] flex flex-col items-center space-y-6 text-center px-4">
          <img src="heard.svg" alt="FormerWrench Logo" class="h-16 sm:h-20 mb-4">
          <div class="flex text-yellow-500 mb-2">
            {#each Array(5) as _, i}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            {/each}
          </div>
          <p class="text-xl md:text-2xl font-medium italic">"Working with FormerWrench has completely transformed my mobile mechanic business, the increase in income without the added complaints / headaches was the best part of the entire service, would definitely recommend!"</p>
          <div class="flex items-center space-x-3">
            <img class="w-12 h-12 rounded-full object-cover" src="https://cdn.midjourney.com/9ff1c5d2-7e42-4fb1-aeb5-41ea6d78f1da/0_2.png" alt="Property Manager">
            <div>
              <p class="font-bold">John Williams</p>
              <p class="text-gray-700">Mobile mechanic</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <!-- Community Commitment Section -->
    <section class="w-full py-12 sm:py-16 md:py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex flex-col md:flex-row-reverse items-center gap-12">
          <!-- Image -->
          <div class="w-full md:w-1/2">
            <img src="https://cdn.midjourney.com/8f0d5f26-fe2f-46ba-8739-17b5c297abec/0_0.png" alt="Community Commitment" class="rounded-xl shadow-lg w-full h-auto">
          </div>
          
          <!-- Content -->
          <div class="w-full md:w-1/2 space-y-6">
            <h2 class="text-3xl md:text-4xl font-bold">Our Mechanic Commitment</h2>
            <p class="text-lg text-gray-700">
              At FormerWrench, we believe that our success is tied to the mechanics we serve. That's why we're committed to ensuring a favorable expierence through various initiatives:
            </p>
            
            <ul class="space-y-4">
              <li class="flex items-start space-x-3">
                <div class="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold">Local Expertise</h3>
                  <p class="text-gray-700">We seek local expertise for each client we take on. Adding to their personalization and success.</p>
                </div>
              </li>
              
              <li class="flex items-start space-x-3">
                <div class="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
  <h3 class="font-bold">Scalability</h3>
  <p class="text-gray-700">Our systems grow with your business, handling increased bookings and customer volume as you expand.</p>
</div>
              </li>
              
              <li class="flex items-start space-x-3">
                <div class="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold">Mechanic Education</h3>
                  <p class="text-gray-700">We keep all clients in the loop of development, advertising and fullfilment, we value your feedback.</p>
                </div>
              </li>
            </ul>
            
            <a href="/contact" class="mt-6 inline-block rounded-xl px-8 py-3 bg-yellow-500 text-bold text-xl text-white flex items-center transition-all duration-100 hover:opacity-90 shadow shadow-yellow-500 flex-row">
              <span class="mr-2">Partner With Us</span>
              <svg width="150" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  
<section class="w-full bg-white py-16 sm:py-20">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
    <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your <b class="text-yellow-500">Mobile Mechanic Business?</b></h2>
    <p class="text-lg text-gray-700 max-w-3xl mb-10">
      Join the mobile mechanics who are building professional, profitable businesses with our proven growth system.
    </p>
    
    <div class="flex flex-col sm:flex-row gap-4 sm:gap-6">
      <a href="/contact" class="rounded-xl px-8 py-3 bg-yellow-500 text-bold text-xl text-white flex items-center justify-center transition-all duration-100 hover:opacity-90 shadow shadow-[#55a360]">
        <span class="mr-2">Schedule Your Free Strategy Call</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z" fill="currentColor"/>
        </svg>
      </a>
      
      <a href="tel:7043096194" class="rounded-xl px-8 py-3 bg-white border border-yellow-500 text-yellow-500 text-bold text-xl flex items-center justify-center transition-all duration-100 hover:bg-gray-50">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Call Us: (704) 309-6194
      </a>
    </div>
  </div>
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
                  <span class="text-white text-opacity-90 text-base sm:text-lg">(704) 309-6194</span>
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
  </section>
  
  <style>
    #about-page {
      overflow-x: hidden;
      width: 100%;
      max-width: 100%;
    }
  </style>