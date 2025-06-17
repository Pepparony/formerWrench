<script>
  import axios from 'axios';
  
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
  
  // Form data
  let formData = {
    name: '',
    email: '',
    phone: '',
    property: '',
    residents: '',
    notes: ''
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
      { type: "phone_number", phone_number: formData.phone, field: { ref: "phone" } },
      { type: "text", text: formData.property, field: { ref: "property" } },
      { type: "number", number: formData.residents, field: { ref: "residents" } },
      { type: "text", text: formData.notes, field: { ref: "notes" } }
    ]
  }
};
      
      // Send data to backend endpoint
      const response = await axios.post('https://linego-parking-backend.vercel.app/api', formattedData);

      
      console.log('Form submitted successfully:', response.data);
      
      // Show success state
      formSubmitted = true;
      
      // Reset form
      formData = {
        name: '',
        email: '',
        phone: '',
        property: '',
        residents: '',
        notes: ''
      };
      
    } catch (error) {
      console.error('Error submitting form:', error);
      formSubmissionError = 'There was a problem submitting the form. Please try again or contact us directly.';
    } finally {
      isSubmitting = false;
    }
  }
</script>
  
  <head>
    <title>Partner With Us | FormerWrench Marketing</title>
  </head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <section id="contact-page">

  
     <!-- Contact Form Section - Modified with Axios -->
  <section class="w-full py-12 sm:py-16 md:py-20 bg-gray-50">
    <div class="max-w-5xl mx-auto px-4 sm:px-6">
      <div class="flex flex-col md:flex-row justify-between items-start gap-12">
        <!-- Contact Info -->
        <div class="w-full md:w-1/3 space-y-8">
          <div>
            <h2 class="text-3xl sm:text-4xl font-bold mb-6">Get In <b class="text-yellow-500">Touch</b></h2>
            <p class="text-gray-700 mb-8">Ready to transform your business? Complete the form and we'll set up your free consultation.</p>
          </div>
          
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <h3 class="font-bold">Phone</h3>
                <p class="text-gray-700">(704) 309-6194</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <h3 class="font-bold">Email</h3>
                <p class="text-gray-700">info@formerwrench.com</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h3 class="font-bold">Office</h3>
                <p class="text-gray-700">4612 gilead St. APT 430<br>Charlotte, NC 28217</p>
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
              <div class="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-4">Thank You!</h3>
              <p class="text-lg text-gray-700 mb-6">
                Your request has been successfully submitted. A member of our team will contact you shortly to arrange your free consultation.
              </p>
              <button 
                on:click={() => formSubmitted = false} 
                class="px-6 py-3 bg-yellow-500 text-white rounded-xl font-bold hover:bg-opacity-90 transition-all"
              >
                Submit Another Request
              </button>
            </div>
          {:else}
            <h3 class="text-2xl font-bold mb-6">Partner With Us</h3>
            
            {#if formSubmissionError}
              <div class="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg">
                {formSubmissionError}
              </div>
            {/if}
            
            <form on:submit|preventDefault={handleSubmit} class="space-y-6">
              <!-- Name -->
              <div>
                <label for="name" class="block text-gray-700 font-medium mb-2">Full Name*</label>
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
                <label for="email" class="block text-gray-700 font-medium mb-2">Email Address*</label>
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
                <label for="phone" class="block text-gray-700 font-medium mb-2">Phone Number*</label>
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
                <label for="property" class="block text-gray-700 font-medium mb-2">Business Name*</label>
                <input 
                  type="text" 
                  id="property" 
                  bind:value={formData.property} 
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="C&U mobile repair"
                />
              </div>
              
              <!-- Additional Notes -->
              <div>
                <label for="notes" class="block text-gray-700 font-medium mb-2">Additional Notes</label>
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
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </div>
                {:else}
                  Schedule Your Free Consultation
                {/if}
              </button>
              
              <p class="text-sm text-gray-600 text-center">
                We respect your privacy. Your information will never be shared with third parties.
              </p>
            </form>
          {/if}
        </div>
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
    #contact-page {
      overflow-x: hidden;
      width: 100%;
      max-width: 100%;
    }
  </style>