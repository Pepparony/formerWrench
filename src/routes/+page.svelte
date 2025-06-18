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

    // Features data
    const features = [
    {
      title: "Professional Online Presence",
      description: "Stand out from competitors with a website that converts visitors into paying customers",
      image: "https://cdn.midjourney.com/a726a906-7a83-4b3c-9b5b-e6ec7f247075/0_0.png",
      benefits: [
        "Orgnaic search optimized",
        "Captures leads 24/7"
      ],
      imagePosition: "right"
    },
    {
      title: "Streamlined Booking & Scheduling",
      description: "Eliminate phone tag and missed appointments with automated systems that work while you sleep",
      image: "https://cdn.midjourney.com/7eab2719-59fb-49d2-a3aa-c281d6bf3e9c/0_0.png",
      benefits: [
        "no need for calling to booking",
        "Reduce no-shows and keep your calendar full"
      ],
      imagePosition: "left"
    },
    {
      title: "Higher Revenue Per Customer",
      description: "Convert more leads into jobs and turn one-time customers into repeat clients",
      image: "https://cdn.midjourney.com/0a66f820-d650-4c0f-b32c-fbf1dc25f108/0_0.png",
      benefits: [
        "generate referrals and repeat business automatically",
        "close more jobs at higher profit margins"
      ],
      imagePosition: "right"
    }
  ];

// Comparison data
const comparisonRows = [
    {
      category: "Technology Platform",
      lineGo: [
        "Custom build booking software so your customers have a good expierence",
        "Easy to understand and use outreach web service for support needs"
      ],
      lms: [
        "Copy & pasted templates from other industries that do not work",
        "Challenging online support to navigate, leaving you confused and unvalued"
      ]
    },
    {
      category: "Customer Service",
      lineGo: [
        "24/7 support with real human representatives dedicated toward your business",
        "Quick problem solving, becuase you are our priority"
      ],
      lms: [
        "Extremely long response times with little customer dedication",
        "Difficult process with low approval rate and complaints"
      ]
    },
    {
      category: "Revenue & Cost",
      lineGo: [
        "Industry-leading cost or multiple low-risk revenue share options",
        "Transparent reporting with detailed breakdowns of all revenue"
      ],
      lms: [
        "Expensive and confusing, does not lead to large profit increase",
        "Limited financial reporting with minimal transparency"
      ]
    },
  ];
</script>

<head>
  <title>Mobile Mechanic Web Agency | FormerWrench Marketing</title>
</head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<section id="yeah">
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
<section class="flex w-screen justify-center items-center relative bg-grayscale-100 bg-no-repeat bg-cover">
  <div class="relative top-0 w-full h-[425px] sm:h-[400px] md:h-[500px] lg:h-160 overflow-hidden grayscale-50 contrast-80">
    <img class="w-full h-full object-cover" src="u9283747978_focus_more_on_parking_--ar_9151_--profile_bnb5gm7_986a4583-be5e-4d6c-b7cd-71c87266a29f_2.png" alt="">
  </div>
  <div class="flex flex-col w-[90%] sm:w-[80%] md:w-[70%] justify-center items-center text-white font-sans z-20 absolute py-6 sm:py-12 md:py-20 lg:py-35">
    <p class="text-base sm:text-lg uppercase mb-2 sm:mb-4 md:mb-6">Free Consultation</p>
    <h1 class="text-3xl md:text-5xl lg:text-6xl text-center font-bold tracking-wide mb-2 leading-[1.1]">Web Development & Marketing <br>For Mobile Mechanics</h1>
    <svg class="w-[65%] sm:w-[60%] md:w-[55%] mb-2 sm:mb-4 md:mb-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 20">
        <!-- The skinny subtle smile curve for an underline -->
        <path d="M 10,12 Q 150,6 290,12" stroke="#FFFFFF" stroke-width="1.5" fill="none" />
    </svg>
    <p class="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 md:mb-6">Now serving the Charlotte area</p>
    <a href="/contact" class="mb-3 sm:mb-4 md:mb-5 rounded-xl w-fit px-6 sm:px-10 md:px-15 py-2 sm:py-2.5 md:py-3 bg-yellow-500 text-bold text-lg sm:text-xl md:text-2xl flex justify-center items-center transition-all duration-100 hover:opacity-90 text-white">
      <p class="mr-2">Schedule Your Consultation</p>
      <svg width="20" height="20" sm:width="22" sm:height="22" md:width="24" md:height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z" fill="currentColor"/>
      </svg>
    </a>
    <p class="text-base sm:text-lg md:text-xl">100% Money back guarantee</p>
  </div>
</section>
<section class="w-full flex flex-col py-12 sm:py-16 md:py-20 lg:py-24 space-y-6 sm:space-y-8 md:space-y-10 justify-center items-center px-4 sm:px-6">
  <h1 class="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-[1.1]">Build a mechanic business <br class="hidden sm:block"> that you're <b class="text-yellow-500">proud of</b></h1>
  
  <p class="text-base sm:text-lg text-gray-700 text-center leading-[1.5] max-w-4xl">
    We build websites, booking systems, 
    <br class="hidden md:block">and marketing campaigns that actually understand your business
    <br class="hidden md:block">- because we've been in your shoes 
  </p>
  
  <div class="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 w-full sm:w-[90%] md:w-[85%] lg:w-[78%]">
    <div class="bg-gray-200 rounded-2xl px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12 space-y-4 w-full md:w-1/3 mb-6 md:mb-0">
      <img class="rounded-2xl scale-80 mx-auto" src="https://cdn.midjourney.com/8f0d5f26-fe2f-46ba-8739-17b5c297abec/0_0.png" alt="">
      <h2 class="text-xl sm:text-2xl font-bold text-center">Developers Who Understand Mobile Mechanic Businesses</h2>
      <p class="text-base sm:text-lg text-gray-700">Unlike generic web agencies, we know the difference between diagnostics and estimates, understand your scheduling challenges, and build systems that work for how mechanics actually operate.</p>
    </div>
    
    <div class="bg-gray-200 rounded-2xl px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12 space-y-4 w-full md:w-1/3">
      <img class="rounded-2xl scale-80 mx-auto" src="https://cdn.midjourney.com/40f9f32d-b2f9-4b7d-b707-1ea5855e6f85/0_1.png" alt="">
      <h2 class="text-xl sm:text-2xl font-bold text-center">Fully Booked Calendar <br>Creates Increased Revenue</h2>
      <p class="text-base sm:text-lg text-gray-700">Our booking systems and marketing strategies help mobile mechanics go from struggling income to consistent $6K-8K monthly revenue. Stop chasing customers and start having them call you instead.</p>
    </div>
    
    <div class="bg-gray-200 rounded-2xl px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12 space-y-4 w-full md:w-1/3">
      <img class="rounded-2xl scale-80 mx-auto" src="https://cdn.midjourney.com/171bfb1c-eb5b-4823-a572-2362171ae3cd/0_3.png" alt="">
      <h2 class="text-xl sm:text-2xl font-bold text-center">Smoother Expierence creates <br>Happy Customers</h2>
      <p class="text-base sm:text-lg text-gray-700">Professional websites, automated booking confirmations, and seamless payment processing make you look like the established professional you are - not just another guy with tools in his truck. We understand what your reputation means.</p>
    </div>
  </div>
  
  <a href="/engagedcontact" class="mt-4 sm:mt-6 mb-3 sm:mb-5 rounded-xl w-fit px-8 sm:px-10 md:px-15 py-2 sm:py-3 bg-yellow-500 text-bold text-xl sm:text-2xl flex justify-center items-center transition-all duration-100 hover:opacity-90 text-white shadow shadow-[#55a360]">
    <p class="mr-2">Partner With Us</p>
    <svg width="20" height="20" sm:width="22" sm:height="22" md:width="24" md:height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z" fill="currentColor"/>
    </svg>
  </a>
  
  <p class="text-lg sm:text-xl text-gray-700 text-center">
    We'll provide all of the software and any day 
    <br class="hidden sm:block"> to day operations to keep you fully booked.
  </p>
</section>

<!-- Promise Results Section -->
<section class="w-screen flex justify-center items-center px-4 sm:px-6 py-8 sm:py-12">
  <div class="flex flex-col bg-yellow-200 w-full sm:w-[90%] md:w-4/5 justify-evenly items-center py-8 sm:py-12 md:py-16 rounded-2xl">
    <div class="flex flex-col md:flex-row w-[90%] md:w-[85%] justify-center md:justify-evenly items-center px-4 sm:px-8 md:px-16 lg:px-36 space-y-6 md:space-y-0 md:space-x-4">
      <div class="w-40 md:w-auto">
        <img class="w-full md:w-150 rounded-full" src="https://cdn.midjourney.com/d0dbaee2-901c-4b1b-8405-3f49a69c100f/0_3.png" alt="">
      </div>
      <div class="flex flex-col space-y-4 sm:space-y-6 text-center md:text-left ml-16">
        <h1 class="text-3xl md:text-4xl font-bold text-left">100% Promised Results!</h1>
        <p class="text-lg md:text-xl text-left">With our services we can assure an increase in revenue, and a decrease in complaints, all in writing.</p>
      </div>
    </div>
  </div>
</section>
<section class="w-screen flex flex-col justify-center items-center py-12 md:py-16 space-y-8 md:space-y-12">
  <h1 class="text-center font-bold text-4xl sm:text-5xl md:text-6xl leading-tight md:leading-[1.1] tracking-wide px-4">
    The Only <b class="text-yellow-500">Mobile Mechanic</b> <br class="hidden sm:block" /> Full Web Agency
  </h1>
  <div class="flex flex-col space-y-12 md:space-y-16 w-[90%] md:w-[85%] lg:w-[75%]">
    {#each features as feature, i}
      <!-- Feature Row -->
      <div class="flex flex-col {i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between gap-8 md:gap-0">
        <!-- Text Content -->
        <div class="flex flex-col space-y-4 w-full md:w-1/2 {i % 2 !== 0 ? 'md:pl-10' : 'md:pr-10'}">
          <h2 class="text-2xl sm:text-3xl font-bold tracking-wide">{feature.title}</h2>
          <p class="text-lg sm:text-xl text-gray-700">{feature.description}</p>
          
          <!-- Benefits -->
          <div class="flex flex-col space-y-3 pt-4">
            {#each feature.benefits as benefit}
              <div class="flex space-x-3 items-center">
                <div class="w-8 h-8 rounded-full bg-yellow500 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="#eab308">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <p class="text-gray-700 text-base sm:text-lg">{benefit}</p>
              </div>
            {/each}
          </div>
        </div>
        
        <!-- Image -->
        <div class="w-full md:w-1/2 flex justify-center">
          <img class="rounded-2xl shadow-lg w-full md:h-80 object-cover" src={feature.image} alt={feature.title}>
        </div>
      </div>
    {/each}
  </div>

  <a href="/engagedcontact" class="mt-8 md:mt-16 rounded-xl w-fit px-8 sm:px-15 py-2 sm:py-3 bg-yellow-500 text-bold text-xl sm:text-2xl flex justify-center items-center transition-all duration-100 hover:opacity-90 text-white shadow shadow-yellow-500"> 
    <p class="mr-2">Schedule Your Free Consultation</p>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      >
      <path
      d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
      fill="currentColor"
      />
    </svg>
  </a>
</section>
<section class="w-screen flex flex-col justify-center items-center py-12 md:py-20 bg-gray-50">
  <h1 class="text-center font-bold text-4xl sm:text-5xl md:text-6xl leading-tight md:leading-[1.1] tracking-wide mb-2 px-4">
    How We <b class="text-yellow-500">Outperform</b> <br/> The Competition
  </h1>
  
  <svg class="w-[40%] sm:w-[30%] md:w-[20%] mb-4 sm:mb-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 20">
    <!-- The skinny subtle smile curve for an underline -->
    <path d="M 10,12 Q 150,6 290,12" stroke="#171717" stroke-width="1.5" fill="none" />
  </svg>
  
  <p class="text-center text-lg sm:text-xl text-gray-700 mb-8 md:mb-16 max-w-3xl px-4">
    See how FormerWrench compares to other web agency offers. View the benefits of picking people who were once in your shoes.
  </p>
  
  <!-- Mobile View (Accordion style) -->
  <div class="w-[90%] md:hidden flex flex-col space-y-4">
    <!-- Company Header (Mobile) -->
    <div class="flex w-full gap-2">
      <div class="w-1/2">
        <div class="bg-gray-700 rounded-t-xl w-full py-4 flex justify-center">
          <img class="h-16" src="CLTmobile-02-Photoroom-removebg-preview.png" alt="LineGo Parking Logo">
        </div>
        <div class="bg-white p-4 rounded-b-xl shadow-md w-full flex justify-center items-center">
          <h3 class="text-xl font-bold text-gray-800">FormerWrench</h3>
        </div>
      </div>
      <div class="w-1/2">
        <div class="bg-gray-700 rounded-t-xl w-full py-4 flex justify-center">
          <img class="h-16" src="https://cdn.midjourney.com/3f3b6d8a-bdfb-48cc-82cf-6ba6ff11c3bc/0_3.png" alt="Other Agency logo Logo">
        </div>
        <div class="bg-white p-4 rounded-b-xl shadow-md w-full flex justify-center items-center">
          <h3 class="text-xl font-bold text-gray-800">Other Agencies</h3>
        </div>
      </div>
    </div>

    <!-- Accordion Categories (Mobile) -->
    {#each comparisonRows as row, i}
      <details class="bg-white rounded-xl shadow-sm overflow-hidden">
        <summary class="bg-gray-100 p-4 font-bold text-gray-800 text-lg cursor-pointer">
          {row.category}
        </summary>
        <div class="p-4 flex flex-col space-y-6">
          <div class="border-b pb-4">
            <h4 class="font-semibold text-lg mb-3">FormerWrench</h4>
            {#each row.lineGo as point}
              <div class="flex items-start mb-3">
                <div class="w-6 h-6 rounded-full bg-yellow500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <p class="text-gray-700 ml-3 text-base">{point}</p>
              </div>
            {/each}
            
            {#if row.hasRating}
              <div class="flex justify-center mt-4">
                <div class="flex text-yellow-500">
                  {#each Array(5) as _, j}
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  {/each}
                </div>
              </div>
            {/if}
          </div>

          <div>
            <h4 class="font-semibold text-lg mb-3">Other Agencies</h4>
            {#each row.lms as point}
              <div class="flex items-start mb-3">
                <div class="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </div>
                <p class="text-gray-700 ml-3 text-base">{point}</p>
              </div>
            {/each}
            
            {#if row.hasRating}
              <div class="flex justify-center mt-4">
                <div class="flex text-yellow-500">
                  {#each Array(3) as _, j}
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  {/each}
                  {#each Array(2) as _, j}
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  {/each}
                </div>
              </div>
            {/if}
          </div>
        </div>
      </details>
    {/each}
  </div>
  
  <!-- Desktop View (Table style) -->
  <div class="hidden md:block w-[90%] lg:w-4/5 flex flex-col">
    <!-- Table Header -->
    <div class="flex w-full mb-8">
      <div class="w-1/3"></div>
      <div class="w-1/3 flex flex-col items-center">
        <div class="bg-gray-700 rounded-t-xl w-full py-6 flex justify-center">
          <img class="h-24" src="CLTmobile-02-Photoroom-removebg-preview.png" alt="LineGo Parking Logo">
        </div>
        <div class="bg-white p-6 rounded-b-xl shadow-md w-full flex justify-center items-center">
          <h3 class="text-2xl font-bold text-gray-800">FormerWrench</h3>
        </div>
      </div>
      <div class="w-1/3 flex flex-col items-center">
        <div class="bg-gray-700 rounded-t-xl w-full py-6 flex justify-center">
          <img class="h-24" src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/si59g2074fkq6hmw1poe" alt="LMS Parking Logo">
        </div>
        <div class="bg-white p-6 rounded-b-xl shadow-md w-full flex justify-center items-center">
          <h3 class="text-2xl font-bold text-gray-800">Other Agencies</h3>
        </div>
      </div>
    </div>
    
    <!-- Comparison Rows -->
    <div class="flex flex-col space-y-8">
      {#each comparisonRows as row}
        <div class="flex w-full bg-white rounded-xl shadow-sm overflow-hidden">
          <div class="w-1/3 bg-gray-100 p-6 flex items-center">
            <h3 class="text-xl font-bold text-gray-800">{row.category}</h3>
          </div>
          <div class="w-1/3 p-6 border-r border-gray-200">
            {#each row.lineGo as point, i}
              <div class="flex items-start {i !== 0 ? 'mt-3' : ''}">
                <div class="w-8 h-8 rounded-full bg-yellow500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="#eab308">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <p class="text-gray-700 ml-3">{point}</p>
              </div>
            {/each}
            
            {#if row.hasRating}
              <div class="flex justify-center mt-6">
                <div class="flex text-yellow-500">
                  {#each Array(5) as _, i}
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  {/each}
                </div>
              </div>
            {/if}
          </div>
          <div class="w-1/3 p-6">
            {#each row.lms as point, i}
              <div class="flex items-start {i !== 0 ? 'mt-3' : ''}">
                <div class="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </div>
                <p class="text-gray-700 ml-3">{point}</p>
              </div>
            {/each}
            
            {#if row.hasRating}
              <div class="flex justify-center mt-6">
                <div class="flex text-yellow-500">
                  {#each Array(3) as _, i}
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  {/each}
                  {#each Array(2) as _, i}
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  {/each}
                </div>
              </div>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Peace of Mind Section -->
<section class="flex flex-col w-screen justify-center items-center py-12 sm:py-16 md:py-20 px-4 sm:px-6">
  <h1 class="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-wide">Get <b class="text-yellow-500">Peace of Mind</b> <br class="hidden sm:block"> With FormerWrench</h1>
  
  <svg class="w-[40%] sm:w-[30%] md:w-[20%] mb-4 sm:mb-6 md:mb-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 20">
    <!-- The skinny subtle smile curve for an underline -->
    <path d="M 10,12 Q 150,6 290,12" stroke="#171717" stroke-width="1.5" fill="none" />
  </svg>
  
  <p class="text-center mb-4 sm:mb-6 md:mb-8 text-base sm:text-lg">
    Consistent leads, professional systems, and reliable
    <br class="hidden md:block"> support from people who understand the mobile mechanic business inside and out
  </p>
  
  <img class="w-full sm:w-[85%] md:w-[75%] rounded-2xl mb-4 sm:mb-6 md:mb-8 h-auto md:h-95 grayscale-35" src="u9283747978_A_male_service_technician_smiling_while_holding_a_728f2b8f-5851-421b-9b31-374e2e5a6c39_1.png" alt="">
  
  <div class="grid grid-cols-1 sm:grid-cols-2 w-full sm:w-[85%] md:w-[75%] gap-4 mb-4 sm:mb-6 md:mb-8">
    <div class="bg-gray-200 rounded-xl p-4 sm:p-6 space-y-4 sm:space-y-6 md:space-y-8">
      <h1 class="text-2xl sm:text-3xl font-bold tracking-wide">100% Free Consultation</h1>
      <ol class="decoration space-y-4 sm:space-y-6 md:space-y-8">
        <li class="text-gray-700 text-base sm:text-lg"> 
          <b class="font-bold text-gray-700 text-lg sm:text-xl">- Expert Assessment:</b> 
          Discover how our tailored web services can address your businesses needs, and a diagnositc of whats limiting you currently.
        </li>
        <li class="text-gray-700 text-base sm:text-lg"> 
          <b class="font-bold text-gray-700 text-lg sm:text-xl">- Custom Action Plan:</b> 
          Receive a comprehensive analysis of your current web infrastructure and specific recommeded next steps to help you grow.
        </li>
        <li class="text-gray-700 text-base sm:text-lg"> 
          <b class="font-bold text-gray-700 text-lg sm:text-xl">- Cost-Benefit Analysis:</b> 
          Learn exactly how our proven system increases revenue while reducing headaches with detailed ROI projections.
        </li>
      </ol>
    </div>
    
    <div class="bg-gray-200 rounded-xl p-4 sm:p-6 space-y-4 sm:space-y-6 md:space-y-8">
      <h1 class="text-2xl sm:text-3xl font-bold tracking-wide">Make More, and Hear Less</h1>
      <ol class="decoration space-y-4 sm:space-y-6 md:space-y-8">
        <li class="text-gray-700 text-base sm:text-lg"> 
          <b class="font-bold text-gray-700 text-lg sm:text-xl">- Fair Cost / Revenue Split:</b> 
          Contact us to find out more about our transparent cost. If you decide to do revemue share, we can assure you a fair, and market leading revenue share to increase your income.
        </li>
        <li class="text-gray-700 text-base sm:text-lg"> 
          <b class="font-bold text-gray-700 text-lg sm:text-xl">- Less Customer Complaints:</b> 
          With our streamlined, and simple software, we can promise a more organized schedule and less customer complaints.
        </li>
        <li class="text-gray-700 text-base sm:text-lg"> 
          <b class="font-bold text-gray-700 text-lg sm:text-xl">- You're In Full Control:</b> 
          Take full control of how we do your web services, have a voice in operations, volume, customer profiles and any other aspects of your mobile mechanic business.
        </li>
      </ol>
    </div>
    
    <div class="bg-gray-200 rounded-xl p-4 sm:p-6 space-y-4 sm:space-y-6 md:space-y-8">
      <h1 class="text-2xl sm:text-3xl font-bold tracking-wide">24/7 Customer Support</h1>
      <ol class="decoration space-y-4 sm:space-y-6 md:space-y-8">
        <li class="text-gray-700 text-base sm:text-lg"> 
          <b class="font-bold text-gray-700 text-lg sm:text-xl">- Always Available:</b> 
          Our dedicated support team remains accessible day and night, ensuring you're never expierencing issues with your business.
        </li>
        <li class="text-gray-700 text-base sm:text-lg"> 
          <b class="font-bold text-gray-700 text-lg sm:text-xl">- Fast & Reliable:</b> 
          Rapid response times and effective problem solving from our knowledgeable web development specialists whenever you need assistance.
        </li>
        <li class="text-gray-700 text-base sm:text-lg"> 
          <b class="font-bold text-gray-700 text-lg sm:text-xl">- No Robots:</b> 
          Connect with real human experts who understand your specific challenges and provide personalized solutions to your problem every time.
        </li>
        <div class="flex flex-wrap gap-1 items-center mt-4">
          <img class="rounded-full w-10 h-10 sm:w-12 sm:h-12 border border-white border-2" src="https://cdn.midjourney.com/45915a17-634c-4a72-b12b-8b172d9c0293/0_3.png" alt="">
          <img class="rounded-full w-10 h-10 sm:w-12 sm:h-12 border border-white border-2" src="https://cdn.midjourney.com/082e0ebe-1754-4f12-aa4a-5fc05c464f2f/0_1.png" alt="">
          <img class="rounded-full w-10 h-10 sm:w-12 sm:h-12 border border-white border-2" src="https://cdn.midjourney.com/082e0ebe-1754-4f12-aa4a-5fc05c464f2f/0_2.png" alt="">
          <p class="text-yellow-500 ml-2 sm:ml-6 text-xl sm:text-2xl md:text-3xl">We're here to help!</p>
        </div>
      </ol>
    </div>
    
    <div class="bg-gray-200 rounded-xl p-4 sm:p-6 space-y-4 sm:space-y-6 md:space-y-8">
      <h1 class="text-2xl sm:text-3xl font-bold tracking-wide text-center">Estimated Increased Revenue</h1>
      <h2 class="line-through text-center text-3xl sm:text-4xl">$2,680</h2>
      <h2 class="text-yellow-500 text-center text-5xl sm:text-7xl md:text-9xl">$6,472</h2>
      <p class="text-gray-700 text-base sm:text-lg text-center">Per month after payment and all cost!</p>
    </div>
  </div>
  
   <a href="/engagedcontact" class="mt-4 sm:mt-6 mb-3 sm:mb-5 rounded-xl w-fit px-8 sm:px-10 md:px-15 py-2 sm:py-3 bg-yellow-500 text-bold text-xl sm:text-2xl flex justify-center items-center transition-all duration-100 hover:opacity-90 text-white shadow shadow-[#55a360]">
    <p class="mr-2">Partner With Us</p>
    <svg width="20" height="20" sm:width="22" sm:height="22" md:width="24" md:height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z" fill="currentColor"/>
    </svg>
  </a>
</section>
<!-- Testimonials Section -->
<section class="flex flex-col w-screen justify-center items-center space-y-8 sm:space-y-10 md:space-y-12 py-10 sm:py-12 md:py-16 bg-gray-50 px-4 sm:px-6">
  <h1 class="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center tracking-wide leading-[1.1] text-gray-900">
    What Our <b class="text-yellow-500">Customers</b> <br class="hidden sm:block"> Have To Say
  </h1>
  
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-auto w-full sm:w-[90%] lg:w-[75%] gap-4 sm:gap-6 overflow-hidden">
    <!-- Image 1 with Play Button -->
    <div class="hidden md:relative group overflow-hidden h-60 sm:h-72 md:h-80">
      <img class="rounded-xl w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
           src="https://media.istockphoto.com/id/1435069363/photo/portrait-of-cheerful-happy-young-man-with-in-casual-white-t-shirt-at-home.jpg?s=612x612&w=0&k=20&c=zuJ77L0XqtZX2ddjH-DzYnEsisQMeJO-ZBgA_pk3p7o=" alt="">
      <div class="absolute inset-0 flex items-center justify-center">
        <button class="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 sm:p-4 transition-all duration-300 transform hover:scale-110 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-8 sm:w-8 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>*
        </button>
      </div>
    </div>
    
    <!-- Image 2 with Play Button -->
    <div class="hidden md:relative group overflow-hidden h-60 sm:h-72 md:h-80">
      <img class="rounded-xl w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
           src="https://media.istockphoto.com/id/1355480439/photo/smiling-man-having-video-call-from-home.jpg?s=612x612&w=0&k=20&c=k4AtJeY_sE7ZBR5ThpuYjIMJGE9hQoLapDnCAkFp0EE=" alt="">
      <div class="absolute inset-0 flex items-center justify-center">
        <button class="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 sm:p-4 transition-all duration-300 transform hover:scale-110 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-8 sm:w-8 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>*
        </button>
      </div>
    </div>
    
    <!-- Image 3 with Play Button -->
    <div class="hidden md:relative group overflow-hidden h-60 sm:h-72 md:h-80">
      <img class="rounded-xl w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
           src="https://cdn.midjourney.com/40da6f85-74d2-4665-b216-9ec274088dbd/0_1.png" alt="">
      <div class="absolute inset-0 flex items-center justify-center">
        <button class="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 sm:p-4 transition-all duration-300 transform hover:scale-110 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 sm:h-8 sm:w-8 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>*
        </button>
      </div>
    </div>
    
    <!-- Review Card 1 -->
    <div class="flex flex-col p-4 sm:p-6 md:p-7 rounded-xl border border-gray-300 hover:border-gray-500 shadow-sm hover:shadow-md transition-all duration-300 h-fit space-y-3 sm:space-y-5 bg-white">
      <div class="flex justify-between h-fit">
        <div class="flex space-x-3 sm:space-x-4 text-gray-700 text-base sm:text-lg md:text-xl items-center">
          <img class="rounded-full w-10 h-10 sm:w-12 sm:h-12 object-cover shadow" src="https://cdn.midjourney.com/9ff1c5d2-7e42-4fb1-aeb5-41ea6d78f1da/0_2.png" alt="">
          <div class="flex flex-col">
            <p class="font-medium">Gaby L.</p>
          </div>
        </div>
        <div class="flex flex-col items-end">
          <div class="flex text-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p class="text-gray-500 text-sm sm:text-base">Jan 2025</p>
        </div>
      </div>
      <h1 class="font-bold text-gray-800 text-lg sm:text-xl">Simple and Fair!</h1>
      <p class="text-gray-700 text-base sm:text-lg md:text-xl">"Their approach made implementing the software painless for me and my customers"</p>
    </div>
    
    <!-- Review Card 2 -->
    <div class="flex flex-col p-4 sm:p-6 md:p-7 rounded-xl border border-gray-300 hover:border-gray-500 shadow-sm hover:shadow-md transition-all duration-300 h-fit space-y-3 sm:space-y-5 bg-white">
      <div class="flex justify-between h-fit">
        <div class="flex space-x-3 sm:space-x-4 text-gray-700 text-base sm:text-lg md:text-xl items-center">
          <img class="rounded-full w-10 h-10 sm:w-12 sm:h-12 object-cover shadow" src="https://cdn.midjourney.com/9ff1c5d2-7e42-4fb1-aeb5-41ea6d78f1da/0_3.png" alt="">
          <div class="flex flex-col">
            <p class="font-medium">Sidney A.</p>
          </div>
        </div>
        <div class="flex flex-col items-end">
          <div class="flex text-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p class="text-gray-500 text-sm sm:text-base">Aug 2024</p>
        </div>
      </div>
      <h1 class="font-bold text-gray-800 text-lg sm:text-xl">Helped Increase My Revenue!</h1>
      <p class="text-gray-700 text-base sm:text-lg md:text-xl">"Helped increase my revenue quickly, giving me more quality customers and less headache from customers"</p>
    </div>
    
    <!-- Review Card 3 -->
    <div class="flex flex-col p-4 sm:p-6 md:p-7 rounded-xl border border-gray-300 hover:border-gray-500 shadow-sm hover:shadow-md transition-all duration-300 h-fit space-y-3 sm:space-y-5 bg-white">
      <div class="flex justify-between h-fit">
        <div class="flex space-x-3 sm:space-x-4 text-gray-700 text-base sm:text-lg md:text-xl items-center">
          <img class="rounded-full w-10 h-10 sm:w-12 sm:h-12 object-cover shadow" src="https://cdn.midjourney.com/4d841c7a-3528-49f8-8223-004f950c3fbb/0_3.png" alt="">
          <div class="flex flex-col">
            <p class="font-medium">Justin G.</p>
          </div>
        </div>
        <div class="flex flex-col items-end">
          <div class="flex text-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p class="text-gray-500 text-sm sm:text-base">Dec 2024</p>
        </div>
      </div>
      <h1 class="font-bold text-gray-800 text-lg sm:text-xl">Fast and Dependable!</h1>
      <p class="text-gray-700 text-base sm:text-lg md:text-xl">"Fast and dependable whenever issues arise. Their team responds quickly and resolves problems effectively."</p>
    </div>
  </div>
</section>

<section class="flex flex-col w-screen justify-center items-center space-y-8 py-16 bg-gray-50">
  <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-center leading-tight sm:leading-[1.1]">
    Meet Our Agents and <br class="hidden sm:block" /> The Executives
  </h1>
  <p class="text-lg sm:text-xl text-center text-gray-700 px-4 sm:px-0">Our team is eager to know your name!</p>
  
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
          <section class="w-screen flex flex-col justify-center items-center py-20 bg-gray-50">
            <h1 class="text-center font-bold text-6xl leading-[1.1] tracking-wide mb-2">Frequently Asked <b class="text-yellow-500">Questions</b></h1>
            <svg class="w-[20%] mb-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 20">
              <!-- The skinny subtle smile curve for an underline -->
              <path d="M 10,12 Q 150,6 290,12" stroke="#171717" stroke-width="1.5" fill="none" />
            </svg>
            <p class="text-center text-xl text-gray-700 mb-16 max-w-3xl">Everything you need to know about FormerWrench's specific and targeted services</p>
            
            <!-- FAQ Container -->
            <div class="w-[85%] max-w-5xl flex flex-col space-y-6">
              <!-- FAQ Item 1 -->
              <div class="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                <details class="group">
                  <summary class="flex justify-between items-center p-6 cursor-pointer list-none">
                    <h3 class="text-xl font-bold text-gray-800">How quickly will I start seeing more customers?</h3>
                    <span class="text-yellow-500 transition group-open:rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div class="px-6 pb-6">
                    <p class="text-gray-700 text-lg">Most clients see an increase in qualified leads within 12-14 days of launch. Your website and booking system go live within 1 week, and our marketing campaigns typically generate their first leads within the first month. However, the biggest growth usually happens in months 1-3 as everything optimizes.</p>
                  </div>
                </details>
              </div>
          
              <!-- FAQ Item 2 -->
              <div class="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                <details class="group">
                  <summary class="flex justify-between items-center p-6 cursor-pointer list-none">
                    <h3 class="text-xl font-bold text-gray-800">How is FormerWrench different from other marketing agencies?</h3>
                    <span class="text-yellow-500 transition group-open:rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div class="px-6 pb-6">
                    <p class="text-gray-700 text-lg">Unlike generic marketing agencies, FormerWrench was founded by someone who actually ran a successful mobile mechanic business. We understand your specific challenges - from scheduling around weather to explaining diagnostics to customers. We don't just build websites; we build systems that work for how mobile mechanics actually operate.</p>
                  </div>
                </details>
              </div>
          
              <!-- FAQ Item 3 -->
              <div class="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                <details class="group">
                  <summary class="flex justify-between items-center p-6 cursor-pointer list-none">
                    <h3 class="text-xl font-bold text-gray-800">How is FormerWrench different from other marketing agencies?</h3>
                    <span class="text-yellow-500 transition group-open:rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div class="px-6 pb-6">
                    <p class="text-gray-700 text-lg">Unlike generic marketing agencies, FormerWrench was founded by someone who actually ran a successful mobile mechanic business. We understand your specific challenges - from scheduling around weather to explaining diagnostics to customers. We don't just build websites; we build systems that work for how mobile mechanics actually operate.</p>
                  </div>
                </details>
              </div>
          
              <!-- FAQ Item 4 -->
              <div class="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                <details class="group">
                  <summary class="flex justify-between items-center p-6 cursor-pointer list-none">
                    <h3 class="text-xl font-bold text-gray-800">What is your pricing?</h3>
                    <span class="text-yellow-500 transition group-open:rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div class="px-6 pb-6">
                    <p class="text-gray-700 text-lg">Our setup fee is $1,497 (one-time) which includes your complete website, booking system, and initial optimization. Then it's $497/month for ongoing marketing management, lead generation, and support. No hidden fees, no long-term contracts, and no surprises. You can cancel anytime after the initial 90-day period.</p>
                  </div>
                </details>
              </div>
          
              <!-- FAQ Item 5 -->
              <div class="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                <details class="group">
                  <summary class="flex justify-between items-center p-6 cursor-pointer list-none">
                    <h3 class="text-xl font-bold text-gray-800"> Do you guarantee results, and what if it doesn't work?</h3>
                    <span class="text-yellow-500 transition group-open:rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div class="px-6 pb-6">
                    <p class="text-gray-700 text-lg">Yes, we offer a 90-day money-back guarantee. If you don't see a significant increase in qualified leads and bookings within 90 days, we'll refund every penny you've paid. We're confident in our system because it's the same one that built our founder's mobile mechanic business to $10K+ monthly.</p>
                  </div>
                </details>
              </div>
              </div>
        
          
            <!-- Bottom CTA -->
            <div class="w-full flex flex-col items-center mt-16 space-y-6">
              <h2 class="text-3xl font-bold text-center">Still Have Questions?</h2>
              <p class="text-xl text-gray-700 text-center max-w-3xl">We are ready to answer any questions you might have about implementing FormerWrench solutions for your business.</p>
              <a href="/engagedcontact" class="rounded-xl w-fit px-20 py-3 bg-yellow-500 text-bold text-2xl md:text-3xl flex justify-center items-center transition-all duration-100 hover:opacity-90 text-white shadow shadow-yellow-500">
                <p class="mr-2">Contact Us Today</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z" fill="currentColor"/>
                </svg>
              </a>
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
                <p class="text-white text-opacity-90 text-center md:text-left mb-4 md:mb-0 text-sm sm:text-base">© 2025 FomerWrench Marketing. All rights reserved.</p>
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
  #yeah {
    overflow-x: hidden;
  width: 100%;
  max-width: 100%;
  }
</style>