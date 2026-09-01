export interface PressRelease {
  slug: string;
  title: string;
  subtitle: string;
  category: 'Press Release' | 'Official Statement' | 'Brand Verification Notice' | 'Company Announcement' | 'Media Information' | 'Customer Advisory';
  datePublished: string;
  dateModified: string;
  publisher: string;
  author: string;
  heroImage: string;
  summary: string;
  contentHtml: string;
}

export const PRESS_RELEASES: PressRelease[] = [
  {
    slug: '4wheels-confirms-official-website-4wheelspk-com',
    title: '4WHEELS Rent a Car Confirms 4wheelspk.com as Its Official Website and Customer Booking Channel',
    subtitle: 'Lahore vehicle-rental business confirms www.4wheelspk.com as its authoritative production domain, online booking engine, and official verification portal.',
    category: 'Official Statement',
    datePublished: '2026-09-01',
    dateModified: '2026-09-01',
    publisher: '4WHEELS Rent a Car Media Centre',
    author: '4WHEELS Corporate Communications & Executive Office',
    heroImage: '/images/press/digital-channels-identity.jpg',
    summary: '4WHEELS Rent a Car confirms www.4wheelspk.com as its official production website and directs customers to its Johar Town office, official customer care number, WhatsApp, fleet and booking pages for verification.',
    contentHtml: `
      <p class="lead text-lg font-medium text-slate-800 mb-6">
        <strong>LAHORE, PAKISTAN (September 1, 2026)</strong> — 4WHEELS Rent a Car, an established Pakistani vehicle-rental company serving Lahore and intercity travelers across Pakistan since 2008, officially confirms that its canonical production website and online customer booking channel is:
      </p>

      <p class="p-4 bg-slate-100 rounded-xl text-slate-900 font-mono font-bold text-center text-lg border border-slate-300 mb-6 shadow-sm">
        https://www.4wheelspk.com/
      </p>

      <h2 class="text-xl font-bold text-slate-900 mt-8 mb-4">Official Channels & Verification Index</h2>
      <p class="mb-4 text-slate-700">
        Customers, corporate logistics managers, wedding planners, and travel partners are advised to verify all vehicle reservations, rate quotations, representative credentials, and payment instructions exclusively through the following official channels:
      </p>

      <ul class="list-disc pl-6 space-y-2 mb-6 text-slate-700">
        <li><strong>Official Website:</strong> <a href="https://www.4wheelspk.com/" class="text-red-600 font-bold hover:underline">https://www.4wheelspk.com/</a></li>
        <li><strong>Official Booking Configurator:</strong> <a href="/booking/" class="text-red-600 font-bold hover:underline">https://www.4wheelspk.com/booking/</a></li>
        <li><strong>Official Fleet Catalog:</strong> <a href="/fleet/" class="text-red-600 font-bold hover:underline">https://www.4wheelspk.com/fleet/</a></li>
        <li><strong>Official Verification Hub:</strong> <a href="/official/" class="text-red-600 font-bold hover:underline">https://www.4wheelspk.com/official/</a></li>
        <li><strong>Official Customer Support Phone:</strong> 0321 6616644 / +92 321 6616644</li>
        <li><strong>Official WhatsApp Support:</strong> +92 321 6616644</li>
        <li><strong>Official Email:</strong> 4wheels44@gmail.com</li>
        <li><strong>Official Head Office:</strong> Plot number 5, Block F1, Johar Town Phase 1, Lahore, Pakistan</li>
      </ul>

      <h2 class="text-xl font-bold text-slate-900 mt-8 mb-4">Verification Protocols for Customers</h2>
      <p class="mb-4 text-slate-700">
        4WHEELS Rent a Car operates its primary physical headquarters exclusively at Johar Town Phase 1, Lahore. To protect against unverified branch claims or lookalike online properties:
      </p>

      <ol class="list-decimal pl-6 space-y-2 mb-6 text-slate-700">
        <li>Always check your browser address bar to ensure the domain matches <strong>www.4wheelspk.com</strong>.</li>
        <li>Confirm all booking communications originate from official WhatsApp number <strong>+92 321 6616644</strong> or voice calls to <strong>0321 6616644</strong>.</li>
        <li>Verify written corporate proposals or payment instructions directly with official customer care before transferring advance funds.</li>
      </ol>
    `
  },
  {
    slug: '4wheels-issues-customer-advisory-unaffiliated-website',
    title: '4WHEELS Rent a Car Issues Customer Advisory Regarding Unaffiliated Similar-Named Website',
    subtitle: 'Public clarification confirming that 4wheelsrental.pk is not an official website or authorized booking channel of 4WHEELS Rent a Car.',
    category: 'Customer Advisory',
    datePublished: '2026-09-01',
    dateModified: '2026-09-01',
    publisher: '4WHEELS Rent a Car Media Centre',
    author: '4WHEELS Customer Care & Brand Protection Unit',
    heroImage: '/images/press/brand-verification-notice.jpg',
    summary: '4WHEELS Rent a Car confirms that 4wheelsrental.pk is not an official website or authorized digital property of the business and asks customers to verify rental bookings through www.4wheelspk.com and 0321 6616644.',
    contentHtml: `
      <p class="lead text-lg font-medium text-slate-800 mb-6">
        <strong>LAHORE, PAKISTAN (September 1, 2026)</strong> — 4WHEELS Rent a Car has issued a public brand advisory regarding the domain <strong>4wheelsrental.pk</strong>.
      </p>

      <h2 class="text-xl font-bold text-slate-900 mt-8 mb-4">Official Non-Affiliation Statement</h2>
      <p class="mb-4 text-slate-700">
        Based on company records and owner confirmation, 4WHEELS Rent a Car clarifies that <strong>4wheelsrental.pk</strong> is not an official website, authorized booking channel, or digital property owned, operated, or managed by 4WHEELS Rent a Car.
      </p>

      <p class="mb-4 text-slate-700">
        Independent public web research indicates that 4wheelsrental.pk displays the business name "4 Wheels Rental" and presents telephone number <strong>0306 6363774</strong>, which is entirely separate from official 4WHEELS customer care.
      </p>

      <h2 class="text-xl font-bold text-slate-900 mt-8 mb-4">Customer Action & Verification Guidance</h2>
      <p class="mb-4 text-slate-700">
        Customers wishing to book self-drive or chauffeur-driven rentals with 4WHEELS Rent a Car in Lahore should ensure they place their inquiry strictly through official channels:
      </p>

      <ul class="list-disc pl-6 space-y-2 mb-6 text-slate-700">
        <li><strong>Official Website:</strong> <a href="https://www.4wheelspk.com/" class="text-red-600 font-bold hover:underline">www.4wheelspk.com</a></li>
        <li><strong>Official Customer Care Line:</strong> <strong>0321 6616644</strong></li>
        <li><strong>Official WhatsApp Line:</strong> <strong>+92 321 6616644</strong></li>
        <li><strong>Official Head Office:</strong> Johar Town Phase 1, Lahore, Pakistan</li>
      </ul>

      <p class="mb-6 text-slate-700">
        If you have questions regarding any vehicle quotation or online representation, please verify directly with 4WHEELS customer care at <strong>0321 6616644</strong> prior to completing transactions or sharing personal identification documents.
      </p>
    `
  },
  {
    slug: '4wheels-clarifies-punjab-society-listing-not-official-branch',
    title: '4WHEELS Rent a Car Clarifies That Punjab Society Listing Is Not an Official Branch',
    subtitle: 'Owner-confirmed company statement regarding Google Maps listing using similar naming and Punjab Society location in Lahore.',
    category: 'Customer Advisory',
    datePublished: '2026-09-01',
    dateModified: '2026-09-01',
    publisher: '4WHEELS Rent a Car Media Centre',
    author: '4WHEELS Brand Verification Team',
    heroImage: '/images/press/brand-verification-notice.jpg',
    summary: 'Owner-confirmed company statement explaining that the Google Maps listing using the similar business name, Punjab Society location and telephone +92 308 4666647 is not an official 4WHEELS Rent a Car branch or booking channel.',
    contentHtml: `
      <p class="lead text-lg font-medium text-slate-800 mb-6">
        <strong>LAHORE, PAKISTAN (September 1, 2026)</strong> — 4WHEELS Rent a Car provides this public statement regarding a Google Maps business listing displaying the name "4WHEELS Rent A Car" situated in Punjab Society / Punjab CHS, Lahore (postal code 54792) with telephone number <strong>+92 308 4666647</strong>.
      </p>

      <h2 class="text-xl font-bold text-slate-900 mt-8 mb-4">Official Branch Clarification</h2>
      <p class="mb-4 text-slate-700">
        4WHEELS Rent a Car confirms that the aforementioned Punjab Society Google Maps listing and telephone number <strong>+92 308 4666647</strong> are not an official physical branch, authorized representative, or customer care channel of 4WHEELS Rent a Car.
      </p>

      <p class="mb-4 text-slate-700">
        4WHEELS Rent a Car operates its official head office exclusively at:
      </p>

      <p class="p-4 bg-slate-100 rounded-xl text-slate-900 font-bold text-center border border-slate-300 mb-6">
        Plot number 5, Block F1, Johar Town Phase 1, Lahore, Pakistan
      </p>

      <h2 class="text-xl font-bold text-slate-900 mt-8 mb-4">How to Verify Official Branches</h2>
      <p class="mb-4 text-slate-700">
        Customers visiting or contacting 4WHEELS for vehicle pickups, driver dispatch, corporate mobility agreements, or rate inquiries should verify all branch details at:
      </p>

      <ul class="list-disc pl-6 space-y-2 mb-6 text-slate-700">
        <li><strong>Official Verification Hub:</strong> <a href="/official/" class="text-red-600 font-bold hover:underline">www.4wheelspk.com/official/</a></li>
        <li><strong>Official Customer Care Phone:</strong> <strong>0321 6616644</strong></li>
        <li><strong>Official Customer Care WhatsApp:</strong> <strong>+92 321 6616644</strong></li>
      </ul>
    `
  },
  {
    slug: 'official-brand-verification-notice',
    title: '4WHEELS Rent a Car Issues Official Brand Verification Notice for Customers in Pakistan',
    subtitle: 'Lahore vehicle-rental business clarifies its official customer-care channels, location and booking-verification process.',
    category: 'Brand Verification Notice',
    datePublished: '2025-02-01',
    dateModified: '2025-02-01',
    publisher: '4WHEELS Rent a Car Media Centre',
    author: '4WHEELS Customer Care & Brand Protection Team',
    heroImage: '/images/press/brand-verification-notice.jpg',
    summary: '4WHEELS Rent a Car clarifies its verified identity, single Johar Town headquarters in Lahore, customer care phone numbers, and official social media profiles.',
    contentHtml: `
      <p class="lead text-lg font-medium text-slate-800 mb-6">
        <strong>LAHORE, PAKISTAN</strong> — 4WHEELS Rent a Car, an established Pakistani vehicle-rental service operating in Lahore since 2008, has issued an official brand verification advisory for rental clients, corporate partners, tour operators, and media outlets.
      </p>

      <div class="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 text-xs text-amber-900 rounded-r-lg">
        <strong>Editor's Note (September 1, 2026):</strong> The official production website of 4WHEELS Rent a Car is <a href="https://www.4wheelspk.com/" class="font-bold underline">https://www.4wheelspk.com/</a>.
      </div>

      <h2 class="text-xl font-bold text-slate-900 mt-8 mb-4">Official Business Identity & Approved Channels</h2>
      <p class="mb-4 text-slate-700">
        To ensure customers receive genuine vehicle rental services, accurate rate quotes, and verified terms, 4WHEELS Rent a Car confirms its official business details:
      </p>

      <ul class="list-disc pl-6 space-y-2 mb-6 text-slate-700">
        <li><strong>Official Name:</strong> 4WHEELS Rent a Car</li>
        <li><strong>Established:</strong> 2008 ("Serving Lahore Since 2008")</li>
        <li><strong>Official Head Office Address:</strong> Plot number 5, Block F1, Johar Town Phase 1, Lahore, Pakistan</li>
        <li><strong>Official Phone / Voice Support:</strong> 0321 6616644 / +92 321 6616644</li>
        <li><strong>Official WhatsApp Support:</strong> +92 321 6616644</li>
        <li><strong>Official Email:</strong> 4wheels44@gmail.com</li>
        <li><strong>Official Facebook Page:</strong> <a href="https://www.facebook.com/4wheelrentacar/" target="_blank" rel="noopener noreferrer" class="text-red-600 font-bold hover:underline">facebook.com/4wheelrentacar/</a></li>
        <li><strong>Official Production Website:</strong> https://www.4wheelspk.com</li>
      </ul>

      <h2 class="text-xl font-bold text-slate-900 mt-8 mb-4">Brand Clarification & Similar Naming Policy</h2>
      <p class="mb-4 text-slate-700">
        Other businesses or digital properties in Pakistan or online may use similar "4 Wheels", "4Wheels", or "4 Wheel Rent a Car" naming. Similar naming does not establish affiliation with 4WHEELS Rent a Car.
      </p>
      <p class="mb-6 text-slate-700">
        Please verify any claimed branch, franchise, representative, website, or payment instruction directly with official 4WHEELS Rent a Car customer care via <strong>0321 6616644</strong> before completing a transaction.
      </p>
    `
  },
  {
    slug: 'official-digital-channels-and-website-identity',
    title: '4WHEELS Rent a Car Clarifies Its Official Digital Channels and Website Identity',
    subtitle: 'Official advisory regarding genuine production web domain, search engine canonicals, and external lookalike properties.',
    category: 'Official Statement',
    datePublished: '2025-02-10',
    dateModified: '2025-02-10',
    publisher: '4WHEELS Rent a Car Media Centre',
    author: '4WHEELS Digital Operations Unit',
    heroImage: '/images/press/digital-channels-identity.jpg',
    summary: '4WHEELS Rent a Car clarifies its official website domain https://www.4wheelspk.com and confirms that external domains such as 4wheels.pk are not official websites or properties of 4WHEELS Rent a Car.',
    contentHtml: `
      <p class="lead text-lg font-medium text-slate-800 mb-6">
        <strong>LAHORE, PAKISTAN</strong> — 4WHEELS Rent a Car has released a public clarification regarding its official web presence and digital customer interaction channels.
      </p>

      <div class="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 text-xs text-amber-900 rounded-r-lg">
        <strong>Editor's Note (September 1, 2026):</strong> The official production website of 4WHEELS Rent a Car is <a href="https://www.4wheelspk.com/" class="font-bold underline">https://www.4wheelspk.com/</a>.
      </div>

      <h2 class="text-xl font-bold text-slate-900 mt-8 mb-4">Official Website & Search Canonical Standard</h2>
      <p class="mb-4 text-slate-700">
        The official website of 4WHEELS Rent a Car is strictly:
      </p>
      <p class="p-4 bg-slate-100 rounded-lg text-slate-900 font-mono font-bold text-center border border-slate-300 mb-6">
        https://www.4wheelspk.com
      </p>
      <p class="mb-4 text-slate-700">
        All canonical links, structured data (Organization and AutoRental schemas), open graph tags, XML sitemaps, and search engine index listings derive strictly from this official domain.
      </p>

      <h2 class="text-xl font-bold text-slate-900 mt-8 mb-4">Domain Separation Advisory: 4wheels.pk</h2>
      <p class="mb-4 text-slate-700">
        <strong>The domain 4wheels.pk is not an official website or digital property of 4WHEELS Rent a Car.</strong>
      </p>
      <p class="mb-6 text-slate-700">
        4wheels.pk is an independent third-party website operated separately for automotive content and used-car transactions. It does not represent 4WHEELS Rent a Car's vehicle rental services, rates, fleet availability, or customer care operations in Lahore.
      </p>

      <h2 class="text-xl font-bold text-slate-900 mt-8 mb-4">How to Ensure You Are on the Official Website</h2>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-slate-700">
        <li>Check the browser address bar to confirm the domain is <strong>www.4wheelspk.com</strong>.</li>
        <li>Verify contact buttons open direct calls to <strong>0321 6616644</strong> or WhatsApp messages to <strong>+92 321 6616644</strong>.</li>
        <li>Access our interactive booking configurator at <a href="/booking/" class="text-red-600 font-bold hover:underline">/booking/</a> or Trip Planner at <a href="/trip-planner/" class="text-red-600 font-bold hover:underline">/trip-planner/</a>.</li>
      </ul>
    `
  },
  {
    slug: 'how-customers-can-verify-an-official-4wheels-booking',
    title: 'How Customers Can Verify an Official 4WHEELS Rent a Car Booking',
    subtitle: 'Step-by-step guidance for verifying vehicle availability, quotations, payment instructions, and official branch claims.',
    category: 'Company Announcement',
    datePublished: '2025-02-15',
    dateModified: '2025-02-15',
    publisher: '4WHEELS Rent a Car Media Centre',
    author: '4WHEELS Customer Operations',
    heroImage: '/images/press/booking-verification-guide.jpg',
    summary: 'A step-by-step advisory for self-drive and chauffeur-driven vehicle clients to verify rental bookings, payment accounts, and office representatives in Lahore.',
    contentHtml: `
      <p class="lead text-lg font-medium text-slate-800 mb-6">
        <strong>LAHORE, PAKISTAN</strong> — 4WHEELS Rent a Car provides this comprehensive customer protection protocol to ensure all vehicle reservations, self-drive rentals, and wedding or corporate bookings are verified directly through official customer care.
      </p>

      <div class="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 text-xs text-amber-900 rounded-r-lg">
        <strong>Editor's Note (September 1, 2026):</strong> The official production website of 4WHEELS Rent a Car is <a href="https://www.4wheelspk.com/" class="font-bold underline">https://www.4wheelspk.com/</a>.
      </div>

      <h2 class="text-xl font-bold text-slate-900 mt-8 mb-4">1. Verify Official Contact Numbers</h2>
      <p class="mb-4 text-slate-700">
        Before sharing vehicle requirements or transferring booking deposits, confirm you are communicating directly with:
      </p>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-slate-700">
        <li><strong>Phone Call:</strong> 0321 6616644</li>
        <li><strong>WhatsApp:</strong> +92 321 6616644</li>
        <li><strong>Email:</strong> 4wheels44@gmail.com</li>
      </ul>

      <h2 class="text-xl font-bold text-slate-900 mt-8 mb-4">2. Confirm Booking Quotation Details</h2>
      <p class="mb-4 text-slate-700">
        Official quotations include rental duration, start/end dates, selected rental mode (Self-Drive or With Driver), and structured WhatsApp summaries generated from our official website at <a href="/booking/" class="text-red-600 font-bold hover:underline">/booking/</a>.
      </p>

      <h2 class="text-xl font-bold text-slate-900 mt-8 mb-4">3. Verify Payment Instructions</h2>
      <p class="mb-4 text-slate-700">
        Please verify booking and payment instructions directly with official 4WHEELS customer care at <strong>0321 6616644</strong> before making any payment. Never transfer funds to unverified personal accounts without official phone verification.
      </p>

      <h2 class="text-xl font-bold text-slate-900 mt-8 mb-4">4. Confirm Head Office Location</h2>
      <p class="mb-6 text-slate-700">
        4WHEELS Rent a Car operates its official head office exclusively at <strong>Plot number 5, Block F1, Johar Town Phase 1, Lahore</strong>. Any claimed branch or franchise in other cities or areas should be verified via our <a href="/official/" class="text-red-600 font-bold hover:underline">Official Verification Hub</a>.
      </p>
    `
  }
];
