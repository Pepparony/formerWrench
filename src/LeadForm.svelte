<script>
  import axios from 'axios';

  // Form data
  let name = '';
  let businessName = '';
  let email = '';
  let privacyAccepted = false;

  // Form state
  let isSubmitting = false;
  let submitSuccess = false;

  // Error state
  let errors = {
    name: '',
    businessName: '',
    email: '',
    privacy: '',
    general: ''
  };

  // Validation functions
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validateForm() {
    // Reset errors
    errors = {
      name: '',
      businessName: '',
      email: '',
      privacy: '',
      general: ''
    };

    let isValid = true;

    // Validate name
    if (!name.trim()) {
      errors.name = 'Please enter your name';
      isValid = false;
    } else if (name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
      isValid = false;
    }

    // Validate business name
    if (!businessName.trim()) {
      errors.businessName = 'Please enter your business name';
      isValid = false;
    }

    // Validate email
    if (!email.trim()) {
      errors.email = 'Please enter your email address';
      isValid = false;
    } else if (!validateEmail(email.trim())) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Validate privacy checkbox
    if (!privacyAccepted) {
      errors.privacy = 'Please accept the privacy policy';
      isValid = false;
    }

    return isValid;
  }

  // Clear individual field errors on input
  function clearFieldError(fieldName) {
    errors[fieldName] = '';
  }

  // Form submission handler
  async function handleSubmit() {
    if (!validateForm()) {
      return;
    }

    isSubmitting = true;
    errors.general = '';

    try {
      const response = await axios.post('https://api-holden-gerlachs-projects.vercel.app/', {
        name: name.trim(),
        businessName: businessName.trim(),
        email: email.trim()
      });

      if (response.status === 200) {
        submitSuccess = true;
        // Redirect to thank you page after a brief delay
        setTimeout(() => {
          window.location.href = '/thank-you';
        }, 1000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      if (error.response?.data?.message) {
        errors.general = error.response.data.message;
      } else {
        errors.general = 'Something went wrong. Please try again.';
      }
    } finally {
      isSubmitting = false;
    }
  }
</script>

<!-- Form Component Template -->
<form class="rounded-xl bg-gray-200 flex flex-col py-10 px-5 space-y-6 md:w-full" on:submit|preventDefault={handleSubmit}>
  {#if submitSuccess}
    <!-- Success Message -->
    <div class="text-center py-6 px-4 bg-green-100 rounded-xl mb-4">
      <div class="text-green-600 text-2xl font-bold mb-2">Success!</div>
      <div class="text-green-700">Thank you! Check your email for the training video.</div>
    </div>
  {:else}
    <!-- Form Fields -->
    <p class="text-center text-lg">Provide your email</p>
    <h2 class="text-center font-bold text-2xl mb-12">Get instant free access to simple strategies</h2>
    
    <!-- Name Field -->
    <div class="space-y-1">
      <input 
        class="text-center border rounded-xl p-5 text-start text-lg w-full {errors.name ? 'border-red-500' : 'border-yellow-500'}" 
        type="text" 
        bind:value={name}
        on:input={() => clearFieldError('name')}
        placeholder="Your name"
        disabled={isSubmitting}
      />
      {#if errors.name}
        <div class="text-red-500 text-sm">{errors.name}</div>
      {/if}
    </div>

    <!-- Business Name Field -->
    <div class="space-y-1">
      <input 
        class="text-center border rounded-xl p-5 text-start text-lg w-full {errors.businessName ? 'border-red-500' : 'border-yellow-500'}" 
        type="text" 
        bind:value={businessName}
        on:input={() => clearFieldError('businessName')}
        placeholder="Your business's name"
        disabled={isSubmitting}
      />
      {#if errors.businessName}
        <div class="text-red-500 text-sm">{errors.businessName}</div>
      {/if}
    </div>

    <!-- Email Field -->
    <div class="space-y-1">
      <input 
        class="text-center border rounded-xl p-5 text-start text-lg w-full {errors.email ? 'border-red-500' : 'border-yellow-500'}" 
        type="email" 
        bind:value={email}
        on:input={() => clearFieldError('email')}
        placeholder="Your e-mail address"
        disabled={isSubmitting}
      />
      {#if errors.email}
        <div class="text-red-500 text-sm">{errors.email}</div>
      {/if}
    </div>

    <!-- Privacy Checkbox -->
    <div class="flex space-x-4 px-4">
      <input 
        type="checkbox" 
        bind:checked={privacyAccepted}
        on:change={() => clearFieldError('privacy')}
        disabled={isSubmitting}
      />
      <label>I accept the <a href="/privacy" class="underline">privacy policy</a></label>
    </div>
    {#if errors.privacy}
      <div class="text-red-500 text-sm px-4">{errors.privacy}</div>
    {/if}

    <!-- General Error Message -->
    {#if errors.general}
      <div class="text-red-500 text-sm text-center bg-red-50 p-3 rounded">{errors.general}</div>
    {/if}

    <!-- Submit Button -->
    <button 
      type="submit"
      class="bg-yellow-500 text-white py-3 rounded-xl text-2xl transition-opacity {isSubmitting ? 'opacity-60 cursor-not-allowed' : 'hover:bg-yellow-600'}"
      disabled={isSubmitting}
    >
      {isSubmitting ? 'Sending...' : 'Start growing today'}
    </button>
  {/if}
</form>

<style>
  input:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  .border-red-500 {
    transition: border-color 0.3s ease;
  }
</style>