export interface PressRelease {
  slug: string;
  title: string;
  subtitle: string;
  category: 'Press Release' | 'Official Statement' | 'Brand Verification Notice' | 'Company Announcement' | 'Media Information';
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

      <h2 class="text-xl font-bold text-slate-900 mt-8 mb-4">Official Business Identity & Approved Channels</h2>
      <p class="mb-4 text-slate-700">
        To ensure customers receive genuine vehicle rental services, accurate rate quotes, and verified terms, 4WHEELS Rent a Car confirms its official business details:
      </p>

      <ul class="list-disc pl-6 space-y-2 mb-6 text-slate-700">
        <li><strong>Official Name:</strong> 4WHEELS Rent a Car</li>
        <li><strong>Established:</strong> 2008 ("Serving Lahore Since 2008")</li>
        <li><strong>Official Head Office Address:</strong> 5, F1, Block F1, Johar Town Phase 1, Lahore, Pakistan</li>
        <li><strong>Official Phone / Voice Support:</strong> 0321 6616644 / +92 321 6616644</li>
        <li><strong>Official WhatsApp Support:</strong> +92 321 6616644</li>
        <li><strong>Official Email:</strong> 4wheels44@gmail.com</li>
        <li><strong>Official Facebook Page:</strong> <a href="https://www.facebook.com/4wheelrentacar/" target="_blank" rel="noopener noreferrer" class="text-red-600 font-bold hover:underline">facebook.com/4wheelrentacar/</a></li>
        <li><strong>Official Production Website:</strong> https://4wheelsrentacar.pk</li>
      </ul>

      <h2 class="text-xl font-bold text-slate-900 mt-8 mb-4">Brand Clarification & Similar Naming Policy</h2>
      <p class="mb-4 text-slate-700">
        Other businesses or digital properties in Pakistan or online may use similar "4 Wheels", "4Wheels", or "4 Wheel Rent a Car" naming. Similar naming does not establish affiliation with 4WHEELS Rent a Car.
      </p>
      <p class="mb-6 text-slate-700">
        Please verify any claimed branch, franchise, representative, website, or payment instruction directly with official 4WHEELS Rent a Car customer care via <strong>0321 6616644</strong> before completing a transaction.
      </p>

      <h2 class="text-xl font-bold text-slate-900 mt-8 mb-4">Payment & Quotation Verification Guidelines</h2>
      <ol class="list-decimal pl-6 space-y-2 mb-6 text-slate-700">
        <li>Verify that the communication originated from official WhatsApp number <strong>+92 321 6616644</strong> or voice call <strong>0321 6616644</strong>.</li>
        <li>Confirm written quotations for corporate rentals or group transport are sent from <strong>4wheels44@gmail.com</strong>.</li>
        <li>Physical vehicle pickups and fleet inspections take place through our head office in Johar Town Phase 1, Lahore.</li>
      </ol>
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
    summary: '4WHEELS Rent a Car clarifies its official website domain https://4wheelsrentacar.pk and confirms that external domains such as 4wheels.pk are not official websites or properties of 4WHEELS Rent a Car.',
    contentHtml: `
      <p class="lead text-lg font-medium text-slate-800 mb-6">
        <strong>LAHORE, PAKISTAN</strong> — 4WHEELS Rent a Car has released a public clarification regarding its official web presence and digital customer interaction channels.
      </p>

      <h2 class="text-xl font-bold text-slate-900 mt-8 mb-4">Official Website & Search Canonical Standard</h2>
      <p class="mb-4 text-slate-700">
        The official website of 4WHEELS Rent a Car is strictly:
      </p>
      <p class="p-4 bg-slate-100 rounded-lg text-slate-900 font-mono font-bold text-center border border-slate-300 mb-6">
        https://4wheelsrentacar.pk
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
        <li>Check the browser address bar to confirm the domain is <strong>4wheelsrentacar.pk</strong>.</li>
        <li>Verify contact buttons open direct calls to <strong>0321 6616644</strong> or WhatsApp messages to <strong>+92 321 6616644</strong>.</li>
        <li>Access our interactive booking configurator at <a href="/build-your-rental/" class="text-red-600 font-bold hover:underline">/build-your-rental/</a> or Trip Planner at <a href="/trip-planner/" class="text-red-600 font-bold hover:underline">/trip-planner/</a>.</li>
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
        Official quotations include rental duration, start/end dates, selected rental mode (Self-Drive or With Driver), and structured WhatsApp summaries generated from our official website at <a href="/build-your-rental/" class="text-red-600 font-bold hover:underline">/build-your-rental/</a>.
      </p>

      <h2 class="text-xl font-bold text-slate-900 mt-8 mb-4">3. Verify Payment Instructions</h2>
      <p class="mb-4 text-slate-700">
        Please verify booking and payment instructions directly with official 4WHEELS customer care at <strong>0321 6616644</strong> before making any payment. Never transfer funds to unverified personal accounts without official phone verification.
      </p>

      <h2 class="text-xl font-bold text-slate-900 mt-8 mb-4">4. Confirm Head Office Location</h2>
      <p class="mb-6 text-slate-700">
        4WHEELS Rent a Car operates its official head office exclusively at <strong>5, F1, Block F1, Johar Town Phase 1, Lahore</strong>. Any claimed branch or franchise in other cities or areas should be verified via our <a href="/official/" class="text-red-600 font-bold hover:underline">Official Verification Hub</a>.
      </p>
    `
  }
];
