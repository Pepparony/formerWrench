<script>
  import axios from "axios";

  // Mobile menu state
  let isOpen = false;

  // Toggle mobile menu
  function toggleMenu() {
    isOpen = !isOpen;
    // Prevent scrolling when menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  // Close menu on link click
  function handleNavClick() {
    isOpen = false;
    document.body.style.overflow = "auto";
  }

  // Form data
  let formData = {
    name: "",
    email: "",
    phone: "",
    business: "",
    residents: "",
    notes: "",
  };

  // Form state
  let isSubmitting = false;
  let formSubmissionError = null;
  let formSubmitted = false;

  // Form submission
  async function handleSubmit() {
    try {
      isSubmitting = true;
      formSubmissionError = null;

      // Parse for backend expectations based on provided code
      const formattedData = {
        form_response: {
          answers: [
            { type: "text", text: formData.name, field: { ref: "name" } },
            { type: "email", email: formData.email, field: { ref: "email" } },
            {
              type: "phone_number",
              phone_number: formData.phone,
              field: { ref: "phone" },
            },
            {
              type: "text",
              text: formData.business,
              field: { ref: "business" },
            },
            { type: "text", text: formData.notes, field: { ref: "notes" } },
          ],
        },
      };

      // Send data to backend endpoint
      const response = await axios.post(
        "https://api-omega-ochre.vercel.app/leadfromwebsite",
        formattedData
      );

      console.log("Form submitted successfully:", response.data);

      // Show success state
      formSubmitted = true;

      // Reset form
      formData = {
        name: "",
        email: "",
        phone: "",
        business: "",
        notes: "",
      };
    } catch (error) {
      console.error("Error submitting form:", error);
      formSubmissionError =
        "There was a problem submitting the form. Please try again or contact us directly.";
    } finally {
      isSubmitting = false;
    }
  }
</script>

<head>
  <title>Partner With Us | FormerWrench Marketing</title>
</head>
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
/>
<section id="contact-page">
  <div
    class="w-screen bg-yellow-400 text-white flex text-center justify-center items-center absolute p-2 top-0 fixed z-100"
  >
    <p class="text-lg tracking-wide">Our operations are now in Charlotte!</p>
  </div>

  <nav
    class="flex w-full justify-between md:justify-between py-6 items-center bg-[#edf2f4] px-4 md:px-8 lg:px-16 md:mt-10"
  >
    <!-- Logo Section -->
    <div class="px-4">
      <a href="/" class="w-fit h-fit">
        <img
          class="w-28 scale-150 hover:scale-135 transition-all duration-200"
          src="CLTmobile-02.png"
          alt="Logo"
        />
      </a>
    </div>

    <!-- Desktop Navigation Links - Hidden on mobile -->
    <div class="hidden md:flex text-lg space-x-6">
      <a
        class="transition-all duration-200 underline-offset-8 hover:underline text-lg"
        href="/about">About Us</a
      >
      <a
        class="transition-all duration-200 underline-offset-8 hover:underline text-lg"
        href="/reviews">Reviews</a
      >
      <a
        class="transition-all duration-200 underline-offset-8 hover:underline text-lg"
        href="/services">Services</a
      >
      <a
        class="transition-all duration-200 underline-offset-8 hover:underline text-lg"
        href="/contact">Contact</a
      >
      <a
        class="transition-all duration-200 underline-offset-8 hover:underline text-lg"
        href="/training">Training</a
      >
    </div>

    <!-- Desktop Phone Number - Hidden on mobile -->
    <div class="hidden md:flex justify-end text-lg items-center space-x-2">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 12C22 10.6868 21.7413 9.38647 21.2388 8.1731C20.7362 6.95996 19.9997 5.85742 19.0711 4.92896C18.1425 4.00024 17.0401 3.26367 15.8268 2.76123C14.6136 2.25854 13.3132 2 12 2V4C13.0506 4 14.0909 4.20703 15.0615 4.60889C16.0321 5.01099 16.914 5.60034 17.6569 6.34326C18.3997 7.08594 18.989 7.96802 19.391 8.93848C19.7931 9.90918 20 10.9495 20 12H22Z"
          fill="currentColor"
        />
        <path
          d="M2 10V5C2 4.44775 2.44772 4 3 4H8C8.55228 4 9 4.44775 9 5V9C9 9.55225 8.55228 10 8 10H6C6 14.4182 9.58173 18 14 18V16C14 15.4478 14.4477 15 15 15H19C19.5523 15 20 15.4478 20 16V21C20 21.5522 19.5523 22 19 22H14C7.37259 22 2 16.6274 2 10Z"
          fill="currentColor"
        />
        <path
          d="M17.5433 9.70386C17.8448 10.4319 18 11.2122 18 12H16.2C16.2 11.4485 16.0914 10.9023 15.8803 10.3928C15.6692 9.88306 15.3599 9.42017 14.9698 9.03027C14.5798 8.64014 14.1169 8.33081 13.6073 8.11963C13.0977 7.90869 12.5515 7.80005 12 7.80005V6C12.7879 6 13.5681 6.15527 14.2961 6.45679C15.024 6.7583 15.6855 7.2002 16.2426 7.75732C16.7998 8.31445 17.2418 8.97583 17.5433 9.70386Z"
          fill="currentColor"
        />
      </svg>
      <a href="/">704-309-6194</a>
    </div>

    <!-- Mobile Menu Button - Only visible on mobile -->
    <button
      class="md:hidden p-2 rounded-lg hover:bg-gray-100"
      on:click={toggleMenu}
    >
      {#if !isOpen}
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      {:else}
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      {/if}
    </button>
  </nav>

  <!-- Mobile Menu Dropdown - Fixed position, slides down when active -->
  {#if isOpen}
    <div
      class="fixed inset-x-0 z-40 bg-yellow-500 md:hidden"
      style="top: 80px;"
    >
      <div class="flex flex-col px-6 py-8 space-y-6">
        <!-- Mobile Navigation Links -->
        <a
          href="/about"
          class="text-white text-xl font-semibold hover:text-gray-200 transition-colors duration-200"
          on:click={handleNavClick}>About Us</a
        >
        <a
          href="/reviews"
          class="text-white text-xl font-semibold hover:text-gray-200 transition-colors duration-200"
          on:click={handleNavClick}>Reviews</a
        >
        <a
          href="/services"
          class="text-white text-xl font-semibold hover:text-gray-200 transition-colors duration-200"
          on:click={handleNavClick}>Services</a
        >
        <a
          href="/contact"
          class="text-white text-xl font-semibold hover:text-gray-200 transition-colors duration-200"
          on:click={handleNavClick}>Contact Us</a
        >
        <a
          href="/training"
          class="text-white text-xl font-semibold hover:text-gray-200 transition-colors duration-200"
          on:click={handleNavClick}>Training</a
        >

        <!-- Mobile Phone Number -->
        <div class="flex items-center space-x-2 pt-6">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 12C22 10.6868 21.7413 9.38647 21.2388 8.1731C20.7362 6.95996 19.9997 5.85742 19.0711 4.92896C18.1425 4.00024 17.0401 3.26367 15.8268 2.76123C14.6136 2.25854 13.3132 2 12 2V4C13.0506 4 14.0909 4.20703 15.0615 4.60889C16.0321 5.01099 16.914 5.60034 17.6569 6.34326C18.3997 7.08594 18.989 7.96802 19.391 8.93848C19.7931 9.90918 20 10.9495 20 12H22Z"
              fill="white"
            />
            <path
              d="M2 10V5C2 4.44775 2.44772 4 3 4H8C8.55228 4 9 4.44775 9 5V9C9 9.55225 8.55228 10 8 10H6C6 14.4182 9.58173 18 14 18V16C14 15.4478 14.4477 15 15 15H19C19.5523 15 20 15.4478 20 16V21C20 21.5522 19.5523 22 19 22H14C7.37259 22 2 16.6274 2 10Z"
              fill="white"
            />
            <path
              d="M17.5433 9.70386C17.8448 10.4319 18 11.2122 18 12H16.2C16.2 11.4485 16.0914 10.9023 15.8803 10.3928C15.6692 9.88306 15.3599 9.42017 14.9698 9.03027C14.5798 8.64014 14.1169 8.33081 13.6073 8.11963C13.0977 7.90869 12.5515 7.80005 12 7.80005V6C12.7879 6 13.5681 6.15527 14.2961 6.45679C15.024 6.7583 15.6855 7.2002 16.2426 7.75732C16.7998 8.31445 17.2418 8.97583 17.5433 9.70386Z"
              fill="white"
            />
          </svg>
          <a href="/" class="text-white text-xl" on:click={handleNavClick}
            >704-309-6194</a
          >
        </div>

        <!-- Mobile CTA Button -->
        <a
          href="/contact"
          class="mt-6 rounded-xl w-fit px-8 py-3 bg-white text-[#55a630] text-bold text-xl flex justify-center items-center transition-all duration-100 hover:bg-gray-100"
          on:click={handleNavClick}
        >
          <p class="mr-2">Partner With Us</p>
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
      </div>
    </div>
  {/if}
  <!-- Hero Section -->
  <section
    class="flex w-full justify-center items-center relative bg-grayscale-100 bg-no-repeat bg-cover"
  >
    <div
      class="relative top-0 w-full h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden grayscale-20 contrast-80"
    >
      <img
        class="w-full h-full object-cover"
        src="u9283747978_fill_image_--ar_21_--v_6.1_a300e883-0190-4cdd-8095-68d6f15f28b1_3.png"
        alt="LineGo Parking"
      />
    </div>
    <div
      class="flex flex-col justify-center items-center text-white font-sans z-20 absolute py-6 sm:py-12 md:py-20"
    >
      <h1
        class="text-3xl md:text-5xl lg:text-6xl text-center font-bold tracking-wide mb-2 leading-[1.1]"
      >
        Partner With Us
      </h1>
      <svg
        class="w-[65%] sm:w-[60%] md:w-[55%] mb-2 sm:mb-4 md:mb-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 20"
      >
        <path
          d="M 10,12 Q 150,6 290,12"
          stroke="#FFFFFF"
          stroke-width="1.5"
          fill="none"
        />
      </svg>
      <p
        class="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 md:mb-6 text-center max-w-3xl"
      >
        Gain the advantages of having your web development services done by
        someone who was once in your shoes full time.
      </p>
      <a
        href="/engagedcontact"
        class="mb-3 sm:mb-4 md:mb-5 rounded-xl w-fit px-6 sm:px-10 md:px-15 py-2 sm:py-2.5 md:py-3 bg-gray-600 text-bold text-lg sm:text-xl md:text-2xl flex justify-center items-center transition-all duration-100 hover:bg-gray-500 text-white"
      >
        <p class="mr-2">Schedule Your Consultation</p>
        <svg
          width="20"
          height="20"
          sm:width="22"
          sm:height="22"
          md:width="24"
          md:height="24"
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
    </div>
  </section>

  <!-- Why Partner With Us Section -->
  <section
    class="w-full flex flex-col py-12 sm:py-16 md:py-20 space-y-8 sm:space-y-10 md:space-y-12 justify-center items-center px-4 sm:px-6"
  >
    <h2
      class="text-3xl sm:text-4xl md:text-5xl font-bold text-center leading-[1.1]"
    >
      Why Partner With <b class="text-yellow-500">FormerWrench?</b>
    </h2>

    <p
      class="text-base sm:text-lg text-gray-700 text-center leading-[1.5] max-w-4xl"
    >
      We're dedicated to growing your mobile mechanic business that the owner,
      and customers benefit from. Our unique approach combines cutting-edge
      technology with amazing customer service.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
      <!-- Card 1 -->
      <div
        class="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
      >
        <div
          class="rounded-full bg-yellow-500 w-14 h-14 flex items-center justify-center mb-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 class="text-xl font-bold mb-2">Increased Revenue</h3>
        <p class="text-gray-700">
          Our fair pricing model and market knowledge lead to substantial
          revenue increases for your business.
        </p>
      </div>

      <!-- Card 2 -->
      <div
        class="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
      >
        <div
          class="rounded-full bg-yellow-500 w-14 h-14 flex items-center justify-center mb-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 class="text-xl font-bold mb-2">Happier Customers</h3>
        <p class="text-gray-700">
          Our customer-oriented approach means fewer complaints and higher
          satisfaction scores for your work.
        </p>
      </div>

      <!-- Card 3 -->
      <div
        class="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
      >
        <div
          class="rounded-full bg-yellow-500 w-14 h-14 flex items-center justify-center mb-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>
        <h3 class="text-xl font-bold mb-2">Worry-Free Management</h3>
        <p class="text-gray-700">
          We handle all aspects of marketing and web developement, from outreach
          to technology, so you can focus on reparing cars.
        </p>
      </div>
    </div>
  </section>

  <!-- What To Expect Section -->
  <section class="w-full py-12 sm:py-16 md:py-20 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <h2
        class="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12"
      >
        What To <b class="text-yellow-500">Expect</b>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <!-- Left Column -->
        <div class="flex flex-col space-y-6">
          <div class="flex items-start space-x-4">
            <div
              class="bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1"
            >
              <span class="text-white font-bold">1</span>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Free Consultation</h3>
              <p class="text-gray-700">
                We'll assess your businesses needs and develop a customized
                plan.
              </p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div
              class="bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1"
            >
              <span class="text-white font-bold">2</span>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Implementation</h3>
              <p class="text-gray-700">
                We will set up all necessary digital systems, and provide
                educational materials for you.
              </p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div
              class="bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1"
            >
              <span class="text-white font-bold">3</span>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Results</h3>
              <p class="text-gray-700">
                Using our knowledge of the automotive repair industry, you will
                start seeing results quickly.
              </p>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="flex flex-col space-y-6">
          <div class="flex items-start space-x-4">
            <div
              class="bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1"
            >
              <span class="text-white font-bold">4</span>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Customer Support</h3>
              <p class="text-gray-700">
                24/7 support for both business owners and customers ensures
                quick resolution of any issues.
              </p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div
              class="bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1"
            >
              <span class="text-white font-bold">5</span>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Transparent Reporting</h3>
              <p class="text-gray-700">
                Regular reports provide insights on your business activity,
                customer acquisition, and revenue generation.
              </p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div
              class="bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1"
            >
              <span class="text-white font-bold">6</span>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Ongoing Optimization</h3>
              <p class="text-gray-700">
                We continuously refine our approach based on data and feedback
                to improve results over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonial Banner -->
  <section
    class="w-full flex justify-center items-center px-4 sm:px-6 py-12 sm:py-16"
  >
    <div
      class="flex flex-col bg-yellow-200 w-full sm:w-[90%] md:w-4/5 justify-evenly items-center py-8 sm:py-12 md:py-16 rounded-2xl"
    >
      <div
        class="w-[90%] md:w-[85%] flex flex-col items-center space-y-6 text-center px-4"
      >
        <div class="flex text-yellow-500 mb-2">
          {#each Array(5) as _, i}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          {/each}
        </div>
        <p class="text-xl md:text-2xl font-medium italic">
          "FomerWrench transformed our mobile mechanic business. We have never
          had more customers and dealt with less complaints. Amazing company!"
        </p>
        <div class="flex items-center space-x-3">
          <img
            class="w-12 h-12 rounded-full object-cover"
            src="https://cdn.midjourney.com/9ff1c5d2-7e42-4fb1-aeb5-41ea6d78f1da/0_2.png"
            alt="Property Manager"
          />
          <div>
            <p class="font-bold">Marcus Johnson</p>
            <p class="text-gray-700">Mobile mechanic, Worthwell auto</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Form Section - Modified with Axios -->
  <section class="w-full py-12 sm:py-16 md:py-20 bg-gray-50">
    <div class="max-w-5xl mx-auto px-4 sm:px-6">
      <div class="flex flex-col md:flex-row justify-between items-start gap-12">
        <!-- Contact Info -->
        <div class="w-full md:w-1/3 space-y-8">
          <div>
            <h2 class="text-3xl sm:text-4xl font-bold mb-6">
              Get In <b class="text-yellow-500">Touch</b>
            </h2>
            <p class="text-gray-700 mb-8">
              Ready to transform your business? Complete the form and we'll set
              up your free consultation.
            </p>
          </div>

          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div>
                <h3 class="font-bold">Phone</h3>
                <p class="text-gray-700">(704) 309-6194</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <h3 class="font-bold">Email</h3>
                <p class="text-gray-700">info@formerwrench.com</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <h3 class="font-bold">Office</h3>
                <p class="text-gray-700">
                  4612 Gilead st. APT 430<br />Charlotte, NC 28217
                </p>
              </div>
            </div>
          </div>

          <div class="pt-4">
            <p class="font-bold mb-2">Office Hours</p>
            <p class="text-gray-700">Monday - Friday: 8:00 AM - 8:00 PM</p>
            <p class="text-gray-700">24/7 Client Support Available</p>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="w-full md:w-2/3 bg-white rounded-xl shadow-md p-6 sm:p-8">
          {#if formSubmitted}
            <!-- Success Message -->
            <div class="text-center py-8">
              <div
                class="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-4">Thank You!</h3>
              <p class="text-lg text-gray-700 mb-6">
                Your request has been successfully submitted. A member of our
                team will contact you shortly to arrange your free consultation.
              </p>
              <button
                on:click={() => (formSubmitted = false)}
                class="px-6 py-3 bg-yellow-500 text-white rounded-xl font-bold hover:bg-opacity-90 transition-all"
              >
                Submit Another Request
              </button>
            </div>
          {:else}
            <h3 class="text-2xl font-bold mb-6">Partner With Us</h3>

            {#if formSubmissionError}
              <div
                class="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg"
              >
                {formSubmissionError}
              </div>
            {/if}

            <form on:submit|preventDefault={handleSubmit} class="space-y-6">
              <!-- Name -->
              <div>
                <label for="name" class="block text-gray-700 font-medium mb-2"
                  >Full Name*</label
                >
                <input
                  type="text"
                  id="name"
                  bind:value={formData.name}
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="John Smith"
                />
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-gray-700 font-medium mb-2"
                  >Email Address*</label
                >
                <input
                  type="email"
                  id="email"
                  bind:value={formData.email}
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>

              <!-- Phone -->
              <div>
                <label for="phone" class="block text-gray-700 font-medium mb-2"
                  >Phone Number*</label
                >
                <input
                  type="tel"
                  id="phone"
                  bind:value={formData.phone}
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>

              <!-- Property Name -->
              <div>
                <label
                  for="business"
                  class="block text-gray-700 font-medium mb-2"
                  >Business Name*</label
                >
                <input
                  type="text"
                  id="business"
                  bind:value={formData.business}
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="C&U mobile repair"
                />
              </div>

              <!-- Additional Notes -->
              <div>
                <label for="notes" class="block text-gray-700 font-medium mb-2"
                  >Additional Notes</label
                >
                <textarea
                  id="notes"
                  bind:value={formData.notes}
                  rows="4"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Tell us about your current situation and challenges if applicable..."
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                class="w-full bg-yellow-500 text-white font-bold py-3 px-6 rounded-xl hover:bg-opacity-90 transition-colors duration-300 shadow-md"
                disabled={isSubmitting}
              >
                {#if isSubmitting}
                  <div class="flex items-center justify-center">
                    <svg
                      class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </div>
                {:else}
                  Schedule Your Free Consultation
                {/if}
              </button>

              <p class="text-sm text-gray-600 text-center">
                We respect your privacy. Your information will never be shared
                with third parties.
              </p>
            </form>
          {/if}
        </div>
      </div>
    </div>
  </section>
  <footer class="w-screen bg-black text-white">
    <!-- Top Section with Columns -->
    <div
      class="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12"
    >
      <!-- Column 1: About -->
      <div class="flex flex-col space-y-6">
        <img
          src="CLTmobile-02-Photoroom-removebg-preview.png"
          alt="FormerWrench"
          class="h-10 sm:h-24 mb-2 max-w-[125px]"
        />
        <div class="flex space-x-4">
          <a
            href="https://facebook.com"
            class="text-white hover:text-white hover:opacity-80 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
              />
            </svg> *
          </a>
          <a
            href="https://instagram.com"
            class="text-white hover:text-white hover:opacity-80 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
            </svg> *
          </a>
          <a
            href="https://linkedin.com"
            class="text-white hover:text-white hover:opacity-80 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
              />
            </svg> *
          </a>
        </div>
      </div>

      <!-- Column 2: Quick Links -->
      <div class="flex flex-col space-y-4">
        <h3 class="text-lg sm:text-xl font-bold mb-2">Quick Links</h3>
        <a
          href="/"
          class="text-white text-opacity-90 hover:text-opacity-100 transition-opacity text-base sm:text-lg"
          >Home</a
        >
        <a
          href="/about"
          class="text-white text-opacity-90 hover:text-opacity-100 transition-opacity text-base sm:text-lg"
          >About Us</a
        >
        <a
          href="/services"
          class="text-white text-opacity-90 hover:text-opacity-100 transition-opacity text-base sm:text-lg"
          >Our Services</a
        >
        <a
          href="/careers"
          class="text-white text-opacity-90 hover:text-opacity-100 transition-opacity text-base sm:text-lg"
          >Careers</a
        >
        <a
          href="/contact"
          class="text-white text-opacity-90 hover:text-opacity-100 transition-opacity text-base sm:text-lg"
          >Contact Us</a
        >
      </div>

      <!-- Column 3: Services -->
      <div class="flex flex-col space-y-4">
        <h3 class="text-lg sm:text-xl font-bold mb-2">Our Services</h3>
        <a
          href="/services/enforcement"
          class="text-white text-opacity-90 hover:text-opacity-100 transition-opacity text-base sm:text-lg"
          >Advertising</a
        >
        <a
          href="/services/training"
          class="text-white text-opacity-90 hover:text-opacity-100 transition-opacity text-base sm:text-lg"
          >Web Development</a
        >
        <a
          href="/services/technology"
          class="text-white text-opacity-90 hover:text-opacity-100 transition-opacity text-base sm:text-lg"
          >Customer Support</a
        >
        <a
          href="/services/signage"
          class="text-white text-opacity-90 hover:text-opacity-100 transition-opacity text-base sm:text-lg"
          >Lead nurturing</a
        >
      </div>

      <!-- Column 4: Contact -->
      <div class="flex flex-col space-y-4">
        <h3 class="text-lg sm:text-xl font-bold mb-2">Contact Us</h3>
        <p class="flex items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span class="text-white text-opacity-90 text-base sm:text-lg"
            >4612 gilead st<br />Charlotte, NC 28217</span
          >
        </p>
        <p class="flex items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span class="text-white text-opacity-90 text-base sm:text-lg"
            >(704) 309-6194</span
          >
        </p>
        <p class="flex items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-2 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span class="text-white text-opacity-90 text-base sm:text-lg"
            >info@formerwrench.com</span
          >
        </p>
        <div class="pt-4">
          <h4 class="text-base sm:text-lg font-semibold mb-3">
            Operating Hours
          </h4>
          <p class="text-white text-opacity-90 text-base sm:text-lg">
            Daily: 7:00 AM - 8:00 PM
          </p>
          <p class="text-white text-opacity-90 text-base sm:text-lg">
            24/7 Client Support Available
          </p>
        </div>
      </div>
    </div>

    <!-- Bottom Section with Copyright -->
    <div class="w-full bg-black py-6">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center"
      >
        <p
          class="text-white text-opacity-90 text-center md:text-left mb-4 md:mb-0 text-sm sm:text-base"
        >
          © 2025 LineGo Parking. All rights reserved.
        </p>
        <div class="flex flex-wrap justify-center gap-4 sm:gap-6">
          <a
            href="/privacy"
            class="text-white text-opacity-90 hover:text-opacity-100 transition-opacity text-sm sm:text-base"
            >Privacy Policy</a
          >
          <a
            href="/terms"
            class="text-white text-opacity-90 hover:text-opacity-100 transition-opacity text-sm sm:text-base"
            >Terms of Service</a
          >
          <a
            href="/sitemap"
            class="text-white text-opacity-90 hover:text-opacity-100 transition-opacity text-sm sm:text-base"
            >Sitemap</a
          >
        </div>
      </div>
    </div>
  </footer>
</section>

<style>
  #contact-page {
    overflow-x: hidden;
    width: 100%;
    max-width: 100%;
  }
</style>
