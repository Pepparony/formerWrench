<!-- Optimized FormerWrench Landing Page -->
<script>
  import LeadForm from '../../LeadForm.svelte'; 
</script>

<svelte:head>
    <title>How I Went From 3 Jobs/Week to Fully Booked | Free Video</title>
    <meta name="description" content="Former mobile mechanic reveals 4 simple strategies that took him from 3 jobs/week to fully booked. Free training video shows you exactly how.">
</svelte:head>


<!-- HERO SECTION - Above the fold -->
<section class="flex flex-col w-full justify-center items-center space-y-8 px-4 py-8">
    <div class="text-center max-w-4xl">
        <h1 class="md:text-6xl text-4xl font-bold text-center leading-tight">How I went from 3 jobs/week to fully booked using 4 simple, easy-to-implement strategies</h1>
        
        <!-- Social Proof Badge -->
        <div class="flex justify-center mt-6 mb-4">
            <div class="bg-yellow-100 border border-yellow-300 rounded-full px-4 py-2">
                <span class="text-yellow-800 text-sm font-semibold"> Used by 150+ mobile mechanics</span>
            </div>
        </div>
        
        <p class="text-center md:text-2xl text-xl text-gray-600 md:mt-6 mt-4 max-w-3xl mx-auto">Enter your email below to watch this free 10-minute training immediately</p>
    </div>
    
    <div class="md:flex space-y-8 md:space-y-0 md:space-x-8 md:w-full md:px-8 max-w-6xl">
        <!-- Video Thumbnail with Play Button -->
        <div class="md:w-3/4 relative">
            <img class="rounded-xl shadow-yellow-500 shadow-lg w-full h-auto" src="https://cdn.midjourney.com/d76ec9ca-8ba9-4e3a-bf77-82ec97bdbba8/0_2.png" alt="Free Training Video">
            <!-- Play Button Overlay -->
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="bg-yellow-500 rounded-full p-4 shadow-lg cursor-pointer hover:bg-yellow-600 transition-colors">
                    <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 5v10l8-5-8-5z"/>
                    </svg>
                </div>
            </div>
            <!-- Video Duration Badge -->
            <div class="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                10:24
            </div>
        </div>
        
        <!-- Form Section -->
        <div class="md:w-3/4">
            <LeadForm/>
        </div>
    </div>
</section>

<!-- BENEFITS SECTION - Condensed -->
<section class="bg-gray-50 w-full py-12">
    <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-8">
            <p class="text-gray-600 text-lg mb-2">Proven strategies to grow your mobile mechanic business</p>
            <h2 class="font-bold text-3xl">What You'll Learn in This Free Training</h2>
        </div>
        
        <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div class="flex items-start space-x-3">
                <div class="bg-yellow-500 rounded-full p-2 mt-1">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </div>
                <div>
                    <h3 class="font-bold text-lg mb-1">The Referral System That Tripled My Business</h3>
                    <p class="text-gray-600">Turn every satisfied customer into 3 new leads using my exact follow-up system.</p>
                </div>
            </div>
            
            <div class="flex items-start space-x-3">
                <div class="bg-yellow-500 rounded-full p-2 mt-1">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </div>
                <div>
                    <h3 class="font-bold text-lg mb-1">Google Business Setup | 10-Minute Walkthrough</h3>
                    <p class="text-gray-600">Step-by-step guide to get found online by customers in your area.</p>
                </div>
            </div>
            
            <div class="flex items-start space-x-3">
                <div class="bg-yellow-500 rounded-full p-2 mt-1">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </div>
                <div>
                    <h3 class="font-bold text-lg mb-1">Customer Qualification Scripts</h3>
                    <p class="text-gray-600">Stop wasting time on tire-kickers and only work with quality customers.</p>
                </div>
            </div>
            
            <div class="flex items-start space-x-3">
                <div class="bg-yellow-500 rounded-full p-2 mt-1">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </div>
                <div>
                    <h3 class="font-bold text-lg mb-1">Pricing Strategy That Doubled My Income</h3>
                    <p class="text-gray-600">How to price your services to maximize profit while staying competitive.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- SOCIAL PROOF SECTION -->
<section class="py-12 bg-white">
    <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-2xl font-bold mb-8">Used by Mobile Mechanics Across the Country</h2>
        
        <div class="grid md:grid-cols-3 gap-6 mb-8">
            <div class="bg-gray-50 p-6 rounded-lg">
                <div class="text-yellow-500 mb-2">★★★★★</div>
                <p class="text-gray-600 mb-3">"Went from 4 jobs a week to booked solid in 2 months. The referral system alone doubled my business."</p>
                <p class="font-semibold">Mike R. - Tampa, FL</p>
            </div>
            
            <div class="bg-gray-50 p-6 rounded-lg">
                <div class="text-yellow-500 mb-2">★★★★★</div>
                <p class="text-gray-600 mb-3">"Finally have customers calling me instead of me chasing them down. Game changer for my business."</p>
                <p class="font-semibold">Sarah T. - Austin, TX</p>
            </div>
            
            <div class="bg-gray-50 p-6 rounded-lg">
                <div class="text-yellow-500 mb-2">★★★★★</div>
                <p class="text-gray-600 mb-3">"The Google Business setup alone brought me 5 new customers in the first month."</p>
                <p class="font-semibold">Carlos M. - Phoenix, AZ</p>
            </div>
        </div>
    </div>
</section>

<!-- ABOUT SECTION - Credibility Builder -->
<section class="bg-gray-50 py-12">
    <div class="max-w-6xl mx-auto px-4">
        <div class="md:flex items-center space-y-8 md:space-y-0 md:space-x-12">
            <div class="md:w-1/2">
                <img class="rounded-xl shadow-lg w-full" src="https://cdn.midjourney.com/329b59e0-5676-4a77-9fc0-22ab0c0ca85c/0_2.png" alt="Holden - Former Mobile Mechanic">
            </div>
            <div class="md:w-1/2">
                <h2 class="text-3xl font-bold mb-4">From Feast-or-Famine to Fully Booked</h2>
                <p class="text-gray-600 text-lg mb-4">
                    I spent 3 years as a mobile mechanic, struggling with inconsistent income and chasing down customers who never called back.
                </p>
                <p class="text-gray-600 text-lg mb-4">
                    Everything changed when I discovered these 4 simple strategies. Within 6 months, I went from 3 random jobs per week to turning away work because I was fully booked.
                </p>
                <p class="text-gray-600 text-lg mb-6">
                    Now I help other mobile mechanics implement these same strategies to grow their businesses without the expensive trial and error I went through.
                </p>
                <div class="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                    <p class="font-semibold text-gray-800">"I know exactly what it's like to be in your shoes - and I know exactly how to get you out."</p>
                    <p class="text-gray-600 mt-2">- Holden, Former Mobile Mechanic</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- FINAL CTA SECTION -->
<section class="bg-yellow-500 py-16">
    <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Mobile Mechanic Business?</h2>
        <p class="text-yellow-100 text-xl mb-8">Get instant access to the free training that's helped 150+ mobile mechanics grow their businesses</p>
        
        <!-- Final Form -->
        <div class="max-w-md mx-auto">
            <LeadForm variant="bottom"/>
        </div>
        
        <p class="text-yellow-100 text-sm mt-4">
            100% Free Training | No Spam | Unsubscribe Anytime
        </p>
    </div>
</section>

<!-- FOOTER -->
<footer class="bg-gray-800 text-white py-8">
    <div class="max-w-4xl mx-auto px-4 text-center">
        <p>&copy; 2025 Former Wrench Marketing. All rights reserved.</p>
        <div class="mt-4 space-x-4">
            <a href="/privacy" class="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="/terms" class="text-gray-400 hover:text-white">Terms of Service</a>
        </div>
    </div>
</footer>