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
    
    // Review data structure
    const propertyManagerReviews = [
      {
        name: "Sarah Johnson",
        position: "Mechanic",
        image: "https://cdn.midjourney.com/9ff1c5d2-7e42-4fb1-aeb5-41ea6d78f1da/0_2.png",
        content: "FormerWrench has completely transformed our parking situation. Since implementing their system, resident complaints have decreased by 85% while our parking revenue has increased. Their resident-first approach truly delivers results.",
        rating: 5,
        date: "January 2025"
      },
      {
        name: "Michael Rodriguez",
        position: "Mobile mechanic",
        image: "https://cdn.midjourney.com/4d841c7a-3528-49f8-8223-004f950c3fbb/0_3.png",
        content: "After years of struggling with predatory enforcement companies, FormerWrench is a breath of fresh air. Their transparent communication and fair policies have made parking management a non-issue for our team. Highly recommend!",
        rating: 5,
        date: "December 2024"
      },
      {
        name: "Jennifer Lee",
        position: "Business owner",
        image: "https://cdn.midjourney.com/9ff1c5d2-7e42-4fb1-aeb5-41ea6d78f1da/0_3.png",
        content: "We manage 6 properties across Charlotte, and FormerWrench has been instrumental in standardizing our parking enforcement with a resident-friendly approach. Their reporting dashboard gives us insights we never had before.",
        rating: 5,
        date: "February 2025"
      }
    ];
    
    const residentReviews = [
      {
        name: "David Wilson",
        position: "customer",
        image: "https://cdn.midjourney.com/082e0ebe-1754-4f12-aa4a-5fc05c464f2f/0_1.png",
        content: "As a resident, I appreciate how FormerWrench handles parking enforcement. Their app is easy to use, and when I accidentally parked in the wrong spot once, they gave me a warning instead of immediately towing my car.",
        rating: 5,
        date: "January 2025"
      },
      {
        name: "Sophia Garcia",
        position: "customer",
        image: "https://cdn.midjourney.com/082e0ebe-1754-4f12-aa4a-5fc05c464f2f/0_2.png",
        content: "The visitor parking registration is so simple with FormerWrench. I can quickly add my guests' vehicles through the app, and their team is always helpful when I call with questions. Fantastic service!",
        rating: 4,
        date: "February 2025"
      },
      {
        name: "Robert Chen",
        position: "customer",
        image: "https://cdn.midjourney.com/3a089f57-4c5f-43e0-9afd-5933363b79b6/0_0.png",
        content: "I've lived in several apartment complexes, and FormerWrench provides the best parking management by far. They're responsive, fair, and the digital permit system means I never have to worry about a physical permit falling off my dashboard.",
        rating: 5,
        date: "November 2024"
      }
    ];
    
    const videoTestimonials = [
      {
        name: "Marcus Johnson",
        position: "mechanic",
        image: "https://media.istockphoto.com/id/1355480439/photo/smiling-man-having-video-call-from-home.jpg?s=612x612&w=0&k=20&c=k4AtJeY_sE7ZBR5ThpuYjIMJGE9hQoLapDnCAkFp0EE=",
        videoThumb: "https://media.istockphoto.com/id/1355480439/photo/smiling-man-having-video-call-from-home.jpg?s=612x612&w=0&k=20&c=k4AtJeY_sE7ZBR5ThpuYjIMJGE9hQoLapDnCAkFp0EE=",
        duration: "2:15"
      },
      {
        name: "Emily Thompson",
        position: "customer",
        image: "https://media.istockphoto.com/id/1435069363/photo/portrait-of-cheerful-happy-young-man-with-in-casual-white-t-shirt-at-home.jpg?s=612x612&w=0&k=20&c=zuJ77L0XqtZX2ddjH-DzYnEsisQMeJO-ZBgA_pk3p7o=",
        videoThumb: "https://media.istockphoto.com/id/1435069363/photo/portrait-of-cheerful-happy-young-man-with-in-casual-white-t-shirt-at-home.jpg?s=612x612&w=0&k=20&c=zuJ77L0XqtZX2ddjH-DzYnEsisQMeJO-ZBgA_pk3p7o=",
        duration: "1:52"
      },
      {
        name: "Tiffany Brooks",
        position: "customer",
        image: "https://cdn.midjourney.com/40da6f85-74d2-4665-b216-9ec274088dbd/0_1.png",
        videoThumb: "https://cdn.midjourney.com/40da6f85-74d2-4665-b216-9ec274088dbd/0_1.png",
        duration: "1:40"
      }
    ];
    
    const reviewStats = [
      { label: "Average Rating", value: "4.8", icon: "star" },
      { label: "Customer Satisfaction", value: "96%", icon: "heart" },
      { label: "Increase in Revenue", value: "81%", icon: "check" },
      { label: "Mechanic Satisfaction", value: "98%", icon: "thumbs-up" }
    ];
    
    // For review filters and categories
    let activeCategory = "all";
    
    function setCategory(category) {
      activeCategory = category;
    }
  </script>
  
  <head>
    <title>Customer Reviews | FormerWrench Development</title>
  </head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <section id="reviews-page">
  
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
    <a class="transition-all duration-200 underline-offset-8 hover:underline text-lg" href="/training">training</a>
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
    <!-- SECTION 1: Hero Section -->
    <section class="flex w-full justify-center items-center relative bg-grayscale-100 bg-no-repeat bg-cover">
      <div class="relative top-0 w-full h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden grayscale-20 contrast-80">
        <img class="w-full h-full object-cover" src="https://cdn.midjourney.com/45915a17-634c-4a72-b12b-8b172d9c0293/0_3.png" alt="FormerWrench Reviews">
      </div>
      <div class="flex flex-col w-[90%] sm:w-[80%] md:w-[70%] justify-center items-center text-white font-sans z-20 absolute py-6 sm:py-12 md:py-20">
        <h1 class="text-3xl md:text-5xl lg:text-6xl text-center font-bold tracking-wide mb-2 leading-[1.1]">What Our <b class="text-yellow-500">Customers</b> Say</h1>
        <svg class="w-[65%] sm:w-[60%] md:w-[55%] mb-2 sm:mb-4 md:mb-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 20">
          <path d="M 10,12 Q 150,6 290,12" stroke="#FFFFFF" stroke-width="1.5" fill="none" />
        </svg>
        <p class="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 md:mb-6 text-center max-w-3xl">
          Read honest feedback from mechanics and their customers about their experience with FormerWrench 
        </p>
      </div>
    </section>
  
    <!-- SECTION 2: Review Stats -->
    <section class="w-full py-12 sm:py-16 md:py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Customer <b class="text-yellow-500">Satisfaction</b></h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            FormerWrench consistently receives top ratings from both mechanics and customers
          </p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {#each reviewStats as stat}
            <div class="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-300">
              <div class="w-16 h-16 rounded-full bg-yellow-500 mx-auto mb-4 flex items-center justify-center">
                {#if stat.icon === 'star'}
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                {:else if stat.icon === 'heart'}
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                  </svg>
                {:else if stat.icon === 'check'}
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                {:else if stat.icon === 'thumbs-up'}
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                {/if}
              </div>
              <h3 class="text-xl font-bold mb-2">{stat.label}</h3>
              <p class="text-4xl font-bold text-yellow-500">{stat.value}</p>
            </div>
          {/each}
        </div>
        
        <!-- Review filter buttons -->
        <div class="flex flex-wrap justify-center gap-4 mb-8">
          <button 
            class="px-6 py-2 rounded-full transition-colors duration-300 {activeCategory === 'all' ? 'bg-yellow-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}"
            on:click={() => setCategory('all')}
          >
            All Reviews
          </button>
          <button 
            class="px-6 py-2 rounded-full transition-colors duration-300 {activeCategory === 'property' ? 'bg-yellow-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}"
            on:click={() => setCategory('property')}
          >
            Mechanics
          </button>
          <button 
            class="px-6 py-2 rounded-full transition-colors duration-300 {activeCategory === 'resident' ? 'bg-yellow-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}"
            on:click={() => setCategory('resident')}
          >
            Customers
          </button>
        </div>
      </div>
    </section>
  
    <!-- SECTION 3: Property Manager Reviews -->
    <section class="w-full py-12 sm:py-16 md:py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Mechanic <b class="text-yellow-500">Testimonials</b></h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Hear from auto repair professionals about their experience with FormerWrench
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          {#each propertyManagerReviews as review}
            <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div class="flex justify-between items-start mb-4">
                <div class="flex space-x-3 items-center">
                  <img class="w-12 h-12 rounded-full object-cover" src={review.image} alt={review.name}>
                  <div>
                    <p class="font-bold">{review.name}</p>
                    <p class="text-sm text-gray-600">{review.position}</p>
                  </div>
                </div>
                <div class="flex text-yellow-500">
                  {#each Array(review.rating) as _, i}
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  {/each}
                </div>
              </div>
              <div class="mb-4 flex-grow">
                <p class="text-gray-700">{review.content}</p>
              </div>
              <div class="text-sm text-gray-500 text-right">
                {review.date}
              </div>
            </div>
          {/each}
        </div>
      </div>
    </section>
  
    <!-- SECTION 5: Video Testimonials -->
    <section class="w-full py-12 sm:py-16 md:py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Video <b class="text-yellow-500">Testimonials</b></h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Watch our customers share their FormerWrench success stories
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          {#each videoTestimonials as video}
            <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <!-- Video Thumbnail with Play Button -->
              <div class="relative cursor-pointer group">
                <img src={video.videoThumb} alt={video.name} class="w-full aspect-video object-cover">
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-4 transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div class="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              
              <!-- Video Info -->
              <div class="p-4">
                <div class="flex items-center space-x-3 mb-2">
                  <img class="w-10 h-10 rounded-full object-cover" src={video.image} alt={video.name}>
                  <div>
                    <p class="font-bold">{video.name}</p>
                    <p class="text-sm text-gray-600">{video.position}</p>
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>
        
        <div class="text-center mt-12">
          <a href="/videos" class="inline-block rounded-xl px-8 py-3 bg-white border border-yellow-500 text-yellow-500 text-bold text-xl transition-all duration-100 hover:bg-gray-50">
            View All Videos
          </a>
        </div>
      </div>
    </section>
  
    <!-- SECTION 6: Featured Review & CTA -->
    <section class="w-full py-16 sm:py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="bg-yellow-200 rounded-2xl overflow-hidden shadow-lg">
          <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-1/2 p-8 sm:p-12">
              <div class="mb-6">
                <img src="heard.svg" alt="FormerWrench Logo" class="h-12 mb-6">
                <div class="flex text-yellow-500 mb-4">
                  {#each Array(5) as _, i}
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  {/each}
                </div>
              </div>
              
              <p class="text-xl md:text-2xl font-medium italic mb-6">"FormerWrench revolutionized our parking situation. Their fair enforcement approach and incredible customer service has transformed what was once a major source of resident complaints into a seamless operation."</p>
              
              <div class="flex items-center space-x-4">
                <img class="w-14 h-14 rounded-full object-cover" src="https://cdn.midjourney.com/9ff1c5d2-7e42-4fb1-aeb5-41ea6d78f1da/0_2.png" alt="Property Manager">
                <div>
                  <p class="font-bold text-lg">William Harris</p>
                  <p class="text-gray-700">Regional Manager, Eastside Properties</p>
                </div>
              </div>
            </div>
            
            <div class="w-full md:w-1/2 bg-yellow-500 p-8 sm:p-12 flex flex-col justify-center">
              <h3 class="text-3xl font-bold text-white mb-4">Ready to transform your parking experience?</h3>
              <p class="text-white text-lg mb-8">Join the growing number of properties that trust FormerWrench for fair, effective parking enforcement.</p>
              
              <div class="space-y-4">
                <a href="/contact" class="block w-full sm:w-auto sm:inline-block rounded-xl px-8 py-3 bg-white text-yellow-500 font-bold text-xl text-center transition-all duration-100 hover:bg-gray-100 shadow">
                  Schedule Your Free Consultation
                </a>
                <a href="/services" class="block w-full sm:w-auto sm:inline-block rounded-xl px-8 py-3 border-2 border-white text-white font-bold text-xl text-center transition-all duration-100 hover:bg-white hover:bg-opacity-10">
                  Explore Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Submit your review -->
        <div class="mt-16 text-center">
          <h3 class="text-2xl font-bold mb-4">Had a great experience with FormerWrench?</h3>
          <p class="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">We'd love to hear about it! Share your experience to help other mechanics make informed decisions.</p>
          <a href="/submit-review" class="inline-block rounded-xl px-8 py-3 bg-yellow-500 text-white font-bold text-xl transition-all duration-100 hover:opacity-90 shadow shadow-[#55a360]">
            Submit Your Review
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