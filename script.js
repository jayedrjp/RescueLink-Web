/* =========================================================
   RescueLink — script.js
   স্ক্রিপ্ট <head>-এ লোড হয়, যাতে "js" ক্লাস পেজ দেখানোর আগেই বসে যায়।
   JavaScript বন্ধ থাকলে বা কোনো ত্রুটি হলে কনটেন্ট স্বাভাবিকভাবেই দেখা যাবে।
   ========================================================= */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // রিভিল অ্যানিমেশনের জন্য প্রস্তুতি (IntersectionObserver না থাকলে লুকানো হবে না)
  if ('IntersectionObserver' in window && !reduceMotion) {
    root.classList.add('js');
  }

  var toBangla = function (n) {
    return String(n).replace(/\d/g, function (d) { return '০১২৩৪৫৬৭৮৯'[d]; });
  };


  /* ---------- ভাষা: বাংলা (ডিফল্ট) / English ----------
     বাংলা টেক্সট HTML-এ যেমন আছে তেমনই থাকে; ইংরেজি অনুবাদ নিচের তালিকা থেকে বসে।
     মূল বাংলা টেক্সট প্রতিবার সংরক্ষিত থাকে, তাই বাংলায় ফিরলে হুবহু আগের টেক্সট ফিরে আসে। */
  var I18N = {
  "RescueLink — জরুরি সহায়তা ও নিরাপত্তার মোবাইল অ্যাপ": "RescueLink — Emergency Assistance & Safety Mobile App",
  "মূল বিষয়বস্তুতে যান": "Skip to main content",
  "হোম": "Home",
  "পরিচিতি": "About",
  "ফিচারসমূহ": "Features",
  "যেভাবে কাজ করে": "How It Works",
  "অ্যাপের ঝলক": "App Preview",
  "যোগাযোগ": "Contact",
  "দুর্যোগের সময়,": "In a disaster,",
  "সাহায্য": "help",
  "হোক সহজ": "made simple",
  "সাহায্য হোক সহজ": "help made simple",
  "বন্যা, ঘূর্ণিঝড় বা যেকোনো দুর্যোগে কাছাকাছি নিরাপদ আশ্রয়, জরুরি সেবা এবং প্রয়োজনীয় সহায়তা খুঁজে নিন এক প্ল্যাটফর্মে।": "In floods, cyclones or any other disaster, find nearby safe shelters, emergency services and the help you need — on one platform.",
  "RescueLink ঘুরে দেখুন": "Explore RescueLink",
  "জরুরি পরিস্থিতিতে নিরাপত্তা ও সুরক্ষার জন্য প্রয়োজনীয় সুবিধাসমূহ।": "Essential tools and features for safety and protection during emergencies.",
  "জরুরি SOS": "Emergency SOS",
  "দ্রুত জরুরি সংকেত পাঠিয়ে কাছাকাছি সহায়তা চাওয়ার সহজ ব্যবস্থা।": "Send a quick emergency signal to request assistance when in danger.",
  "নিজের বর্তমান অবস্থান পর্যবেক্ষণ ও আশপাশের নিরাপত্তা কেন্দ্র শনাক্তকরণ।": "View your current live location and identify nearby safety spots.",
  "দুর্যোগ পরিস্থিতিতে নিকটবর্তী নিরাপদ আশ্রয়স্থলের তালিকা ও দূরত্ব সংক্রান্ত তথ্য।": "Find nearby safe shelters sorted by distance during a disaster.",
  "পুলিশ, ফায়ার সার্ভিস, অ্যাম্বুলেন্স ও জাতীয় হেল্পলাইনের দ্রুত যোগাযোগের নম্বর।": "Quick access to contact information for police, fire service, ambulance, and helplines.",
  "স্বেচ্ছাসেবী নেটওয়ার্ক": "Volunteer network",
  "সংকটকালে স্থানীয় প্রস্তুত স্বেচ্ছাসেবীদের সহযোগিতা পাওয়ার সুযোগ।": "Connect with local volunteer networks standing by to help in crises.",
  "জরুরি যোগাযোগের ব্যক্তিদের তথ্য সংরক্ষণ এবং অবস্থানের গোপনীয়তা নিয়ন্ত্রণ।": "Manage emergency contacts and app privacy or location permissions.",
  "RescueLink একটি মোবাইল প্ল্যাটফর্ম, যা বিপদের সময় জরুরি সহায়তা পেতে এবং আশপাশের নিরাপত্তা-সুবিধা খুঁজে নিতে সাহায্য করে।": "RescueLink is a mobile platform that helps you get emergency assistance and find safety facilities nearby when you are in danger.",
  "ABOUT RESCUELINK": "ABOUT RESCUELINK",
  "RescueLink সম্পর্কে": "About RescueLink",
  "বাংলাদেশজুড়ে জরুরি সহায়তার একটি সংযুক্ত ডিজিটাল নেটওয়ার্ক।": "A connected digital network for emergency assistance across Bangladesh.",
  "দুর্যোগের সময় মানুষের পাশে দাঁড়াতে এবং দ্রুত জরুরি সহায়তা পৌঁছে দিতে RescueLink নাগরিক ও স্বেচ্ছাসেবকদের সংযুক্ত করে।": "RescueLink connects citizens and volunteers to stand by people during disasters and deliver swift emergency assistance.",
  "দুর্যোগের সময় মানুষের পাশে দাঁড়াতে এবং দ্রুত জরুরি সহায়তা পৌঁছে দিতে RescueLink কাজ করে একটি সংযুক্ত সহায়তা নেটওয়ার্ক হিসেবে।": "RescueLink operates as a connected support network standing by people during disasters and delivering swift emergency assistance.",
  "জেলা": "Districts",
  "সারা বাংলাদেশ": "All of Bangladesh",
  "ব্যবহারকারী": "Users",
  "স্বেচ্ছাসেবক": "Volunteers",
  "মানচিত্রে বাংলাদেশের প্রশাসনিক বিভাগ ও জেলাসমূহ": "Administrative divisions and districts of Bangladesh on map",
  "জরুরি মুহূর্তে, আপনার পাশে।": "By your side when disaster strikes.",
  "RescueLink একটি জরুরি সহায়তা প্ল্যাটফর্ম, যা বিপদের সময় মানুষকে প্রয়োজনীয় সহায়তা পেতে, নিজের অবস্থান জানাতে এবং উদ্ধার কার্যক্রমে সমন্বয় করতে সাহায্য করে।": "RescueLink is an emergency assistance platform that helps people receive essential aid, share their location, and coordinate rescue efforts during disasters.",
  "৬৪ জেলা কভারেজ": "64 Districts Coverage",
  "দুর্যোগে জরুরি নেটওয়ার্ক": "Disaster Emergency Network",
  "দেশব্যাপী জরুরি নেটওয়ার্ক": "Nationwide Emergency Network",
  "মানচিত্রে বাংলাদেশের জরুরি নেটওয়ার্ক": "Emergency Network on Map of Bangladesh",
  "জরুরি পরিস্থিতিতে সঠিক নম্বর, কাছের আশ্রয়কেন্দ্র বা নিজের অবস্থান জানানোর উপায় খুঁজতে গিয়ে মূল্যবান সময় নষ্ট হয়। RescueLink অবস্থান শেয়ার, কাছের আশ্রয়কেন্দ্র ও জরুরি সেবার তথ্য এক জায়গায় এনে সংকটকালে দ্রুত সঠিক সিদ্ধান্ত নিতে সাহায্য করে।": "In an emergency, valuable time is lost looking for the right number, the nearest shelter or a way to share your location. RescueLink brings location sharing, nearby shelters and emergency service information together in one app to help you make quick, informed decisions.",
  "ফিচারসমূহ দেখুন": "Explore features",
  "RescueLink সম্পর্কে জানুন": "Learn about RescueLink",
  "RescueLink একটি মোবাইল অ্যাপ, যা বিপদের সময় জরুরি সহায়তা পেতে এবং আশপাশের নিরাপত্তা-সুবিধা খুঁজে নিতে সাহায্য করে।": "RescueLink is a mobile app that helps you get emergency assistance and find safety facilities nearby when you are in danger.",
  "জরুরি পরিস্থিতিতে সঠিক নম্বর, কাছের আশ্রয়কেন্দ্র বা নিজের অবস্থান জানানোর উপায় খুঁজতে গিয়ে মূল্যবান সময় নষ্ট হয়। RescueLink এই সুবিধাগুলো এক অ্যাপে একসঙ্গে রাখে।": "In an emergency, valuable time is lost looking for the right number, the nearest shelter or a way to share your location. RescueLink brings these together in one app.",
  "সমস্যাটা কী": "What's the problem",
  "জরুরি যোগাযোগ, আশ্রয়কেন্দ্র ও অবস্থানের তথ্য আলাদা আলাদা জায়গায় ছড়িয়ে থাকে।": "Emergency contacts, shelter details and location information are scattered across different places.",
  "কেন গুরুত্বপূর্ণ": "Why it matters",
  "সহজে পাওয়া তথ্য বিপদের সময় শান্ত থেকে দ্রুত সিদ্ধান্ত নিতে সাহায্য করে।": "Information that is easy to find helps you stay calm and decide quickly when you are in danger.",
  "কীভাবে সাহায্য করে": "How it helps",
  "অবস্থান শেয়ার, কাছের আশ্রয়কেন্দ্র ও জরুরি সেবার তথ্য — সবই এক অ্যাপে।": "Location sharing, nearby shelters and emergency service information — all in one app.",
  "কীভাবে RescueLink আপনাকে সাহায্য করে": "How RescueLink helps you",
  "সাহায্য চাওয়া থেকে সহায়তা পাওয়া পর্যন্ত পুরো পথটি এক জায়গায়।": "The whole journey from asking for help to receiving support, in one place.",
  "ধাপ ১": "Step 1",
  "ধাপ ২": "Step 2",
  "ধাপ ৩": "Step 3",
  "ধাপ ৪": "Step 4",
  "সাহায্যের অনুরোধ করুন": "Request help",
  "SOS পাঠান বা প্রয়োজনীয় সহায়তার অনুরোধ জমা দিন।": "Send an SOS or submit a request for the assistance you need.",
  "স্বেচ্ছাসেবীদের সঙ্গে যুক্ত হোন": "Connect with volunteers",
  "কাছাকাছি স্বেচ্ছাসেবীরা আপনার প্রয়োজন অনুযায়ী পাশে দাঁড়াতে পারবেন।": "Nearby volunteers can stand by you based on what you need.",
  "প্রয়োজনীয় সহায়তা পান": "Receive support",
  "অনুরোধের অগ্রগতি দেখুন এবং উপলভ্য সহায়তা গ্রহণ করুন।": "Follow your request's progress and receive the support that is available.",
  "সহজ কয়েকটি ধাপে RescueLink-এর উপলভ্য সুবিধাগুলো ব্যবহার করুন।": "Use the features available in RescueLink in a few simple steps.",
  "অ্যাপটি খুলুন": "Open the app",
  "মোবাইল অ্যাপ থেকে উপলভ্য জরুরি ও নিরাপত্তাসংক্রান্ত সুবিধাগুলো দেখুন।": "Browse the emergency and safety features available in the mobile app.",
  "প্রয়োজনীয় সুবিধা বেছে নিন": "Choose the feature you need",
  "আপনার পরিস্থিতি অনুযায়ী উপযুক্ত ফিচার নির্বাচন করুন।": "Select the feature that suits your situation.",
  "অবস্থান বা জরুরি তথ্য দেখুন": "View location or emergency information",
  "অ্যাপের উপলভ্য সুবিধা অনুযায়ী অবস্থান শেয়ার করুন অথবা কাছাকাছি নিরাপত্তাসংক্রান্ত তথ্য খুঁজুন।": "Share your location or look up nearby safety information, depending on the features available in the app.",
  "প্রয়োজনীয় তথ্য ব্যবহার করুন": "Use the information you need",
  "উপলভ্য আশ্রয়কেন্দ্র, জরুরি সেবার যোগাযোগের তথ্য অথবা অন্যান্য প্রাসঙ্গিক রিসোর্স দেখুন।": "View available shelters, emergency service contact details or other relevant resources.",
  "এক নজরে RescueLink": "RescueLink at a glance",
  "দেখে নিন RescueLink মোবাইল অ্যাপের বিভিন্ন স্ক্রিন ও ব্যবহারকারীর অভিজ্ঞতা।": "Take a look at the different screens and the user experience of the RescueLink mobile app.",
  "হোম স্ক্রিন": "Home screen",
  "SOS বোতাম ও প্রধান সুবিধা": "SOS button and main features",
  "জরুরি SOS স্ক্রিন": "Emergency SOS screen",
  "জরুরি সংকেত শুরু করুন": "Start an emergency signal",
  "মানচিত্র ও অবস্থান": "Map & location",
  "আপনার অবস্থান ও আশপাশ": "Your location and surroundings",
  "কাছাকাছি আশ্রয়কেন্দ্র": "Nearby shelters",
  "দূরত্ব অনুযায়ী তালিকা": "List sorted by distance",
  "জরুরি সেবার তথ্য": "Emergency services",
  "পুলিশ, ফায়ার সার্ভিসসহ আরও": "Police, fire service and more",
  "প্রোফাইল ও সেটিংস": "Profile & settings",
  "যোগাযোগ ও অনুমতি": "Contacts and permissions",
  "আপনার কথা আমাদের জানান": "Tell us what you think",
  "RescueLink নিয়ে প্রশ্ন, মতামত বা কোনো সমস্যা থাকলে লিখুন। আপনার বার্তা অ্যাপটিকে আরও ভালো করতে সাহায্য করবে।": "Write to us with a question, feedback or any problem about RescueLink. Your message helps make the app better.",
  "ইমেইল": "Email",
  "কপি": "Copy",
  "আপনি লিখতে পারেন": "You can write to us about",
  "অ্যাপ সম্পর্কে প্রশ্ন": "Questions about the app",
  "মতামত ও পরামর্শ": "Feedback and suggestions",
  "সমস্যা বা ত্রুটি জানানো": "Reporting a problem or bug",
  "সহযোগিতার প্রস্তাব": "Partnership proposals",
  "এটি জরুরি সেবার লাইন নয়": "This is not an emergency line",
  "বার্তা পাঠান": "Send message",
  "আমাদের বার্তা পাঠান": "Send us a message",
  "আপনার নাম": "Your name",
  "আপনার ইমেইল": "Your email",
  "বিষয়": "Subject",
  "আপনার বার্তা": "Your message",
  "জরুরি সহায়তা, কাছাকাছি নিরাপদ আশ্রয় এবং পাশে দাঁড়াতে প্রস্তুত মানুষের সঙ্গে যুক্ত হওয়ার বিশ্বস্ত প্ল্যাটফর্ম।": "Your trusted platform for emergency assistance, nearby safe shelters, and connecting with people ready to help.",
  "জরুরি মুহূর্তে অবস্থান শেয়ার, কাছাকাছি নিরাপদ আশ্রয় ও জরুরি সেবার তথ্য — এক মোবাইল অ্যাপে।": "Your trusted platform for emergency assistance, nearby safe shelters, and connecting with people ready to help.",
  "দ্রুত লিংক": "Quick links",
  "RescueLink সরকারি জরুরি সেবার বিকল্প নয়।": "RescueLink is not a substitute for government emergency services.",
  "RescueLink একটি জরুরি সহায়তাভিত্তিক মোবাইল অ্যাপ। এর ফিচার, অবস্থানভিত্তিক সুবিধা এবং জরুরি সেবার তথ্য সম্পর্কে জানুন।": "RescueLink is a mobile app for emergency assistance. Learn about its features, location-based tools and emergency service information.",
  "জরুরি মুহূর্তে অবস্থান শেয়ার, কাছাকাছি নিরাপদ আশ্রয় ও জরুরি সেবার তথ্য — এক অ্যাপে।": "Share your location, find nearby safe shelters and emergency service information — in one app.",
  "RescueLink — হোমে যান": "RescueLink — go to home",
  "মেনু খুলুন": "Open menu",
  "মেনু বন্ধ করুন": "Close menu",
  "প্রধান মেনু": "Main menu",
  "ভাষা বাছাই করুন": "Choose language",
  "RescueLink অ্যাপের মানচিত্র স্ক্রিন, যেখানে ব্যবহারকারীর অবস্থান ও কাছাকাছি আশ্রয়কেন্দ্র চিহ্নিত": "RescueLink app map screen showing the user's location and nearby shelters",
  "অ্যাপের স্ক্রিন": "App screens",
  "হোম স্ক্রিন: SOS বোতাম, কাছাকাছি আশ্রয় ও জরুরি সেবার শর্টকাট": "Home screen: SOS button, nearby shelters and emergency service shortcuts",
  "জরুরি SOS স্ক্রিন: সংকেত শুরু করতে চেপে ধরার বোতাম": "Emergency SOS screen: press-and-hold button to start a signal",
  "মানচিত্র স্ক্রিন: নিজের অবস্থান ও আশপাশের আশ্রয়কেন্দ্র": "Map screen: your location and nearby shelters",
  "কাছাকাছি আশ্রয়কেন্দ্রের তালিকা, দূরত্ব অনুযায়ী সাজানো": "List of nearby shelters, sorted by distance",
  "জরুরি সেবার তথ্য: পুলিশ, ফায়ার সার্ভিস, অ্যাম্বুলেন্স ও জাতীয় হেল্পলাইন": "Emergency service information: police, fire service, ambulance and national helplines",
  "প্রোফাইল ও সেটিংস: জরুরি যোগাযোগ ও অবস্থানের অনুমতি": "Profile and settings: emergency contacts and location permission",
  "আগের স্ক্রিন": "Previous screen",
  "পরের স্ক্রিন": "Next screen",
  "ইমেইল ঠিকানা কপি করুন": "Copy email address",
  "জরুরি পরিস্থিতির সতর্কতা": "Emergency warning",
  "যেমন: রিয়া আহমেদ": "e.g. Ria Ahmed",
  "এখানে লিখুন…": "Write here…",
  "ফুটার মেনু": "Footer menu",
  "দ্রুত লিংক মেনু": "Quick links menu",
  "তথ্য মেনু": "Information menu",
  "তথ্য": "Information",
  "Information": "Information",
  "সাধারণ জিজ্ঞাসা": "FAQs",
  "FAQs": "FAQs",
  "গোপনীয়তা নীতি": "Privacy Policy",
  "Privacy Policy": "Privacy Policy",
  "শর্তাবলী": "Terms & Conditions",
  "Terms & Conditions": "Terms & Conditions",
  "অ্যাপ ডাউনলোড": "Download App",
  "Download App": "Download App",
  "আপনার মোবাইল ডিভাইসে RescueLink ডাউনলোড করুন।": "Get RescueLink on your mobile device.",
  "Get RescueLink on your mobile device.": "Get RescueLink on your mobile device.",
  "Google Play-তে RescueLink অ্যাপ পান": "Get it on Google Play",
  "Get it on Google Play": "Get it on Google Play",
  "আপনার নাম লিখুন।": "Please enter your name.",
  "সঠিক ইমেইল ঠিকানা লিখুন।": "Please enter a valid email address.",
  "বার্তা লিখুন।": "Please write a message.",
  "অনুগ্রহ করে লাল চিহ্নিত ঘরগুলো ঠিক করুন।": "Please fix the fields marked in red.",
  "আপনার ইমেইল অ্যাপে বার্তাটি তৈরি হয়েছে। সেখান থেকে “পাঠান” চাপুন।": "Your message is ready in your email app. Press “Send” there.",
  "কপি হয়েছে": "Copied",
  "RescueLink অ্যাপ, সেবা ও সহায়তা সংক্রান্ত বহুল জিজ্ঞাসিত প্রশ্ন ও উত্তর।": "Frequently asked questions and answers about RescueLink app, services and assistance.",
  "RescueLink ব্যবহারকারীদের ব্যক্তিগত তথ্য ও অবস্থানের গোপনীয়তা রক্ষায় আমাদের নীতি ও প্রতিশ্রুতি।": "Our policy and commitment to protecting user personal information and location privacy.",
  "ব্যবহারের শর্তাবলী": "Terms & Conditions",
  "RescueLink প্ল্যাটফর্ম, মোবাইল অ্যাপ্লিকেশন ও জরুরি নেটওয়ার্ক ব্যবহারের সাধারণ নীতিমালা।": "General terms and conditions for using RescueLink platform, mobile application and emergency network.",

  /* --- সাধারণ সংখ্যা (Digits for Badges) --- */
  "১": "1",
  "২": "2",
  "৩": "3",
  "৪": "4",
  "৫": "5",
  "৬": "6",

  /* --- সাধারণ জিজ্ঞাসা (FAQs Page) --- */
  "সাধারণ জিজ্ঞাসা (FAQs) — RescueLink": "Frequently Asked Questions (FAQs) — RescueLink",
  "RescueLink অ্যাপ, জরুরি SOS, আশ্রয়কেন্দ্র, স্বেচ্ছাসেবী নেটওয়ার্ক ও সেবাসমূহ সংক্রান্ত সাধারণ জিজ্ঞাসা ও উত্তর।": "Frequently asked questions and answers about RescueLink app, emergency SOS, shelters, volunteer network, and services.",
  "RescueLink-এ কীভাবে অ্যাকাউন্ট খুলব এবং কারা এটি ব্যবহার করতে পারবেন?": "How do I create an account on RescueLink and who can use it?",
  "যেকোনো বাংলাদেশি নাগরিক একটি সক্রিয় মোবাইল নম্বর দিয়ে RescueLink-এ বিনামূল্যে অ্যাকাউন্ট তৈরি করতে পারেন। অ্যাপটি ইনস্টল করে আপনার নাম ও ফোন নম্বর প্রদান করলে একটি যাচাইকরণ কোড (OTP) পাঠানো হবে। কোডটি নিশ্চিত করার পর সাধারণ ব্যবহারকারী হিসেবে জরুরি সহায়তা পাওয়া যাবে অথবা প্রোফাইল থেকে স্বেচ্ছাসেবী হিসেবে নিবন্ধন করা যাবে।": "Any Bangladeshi citizen can create a free RescueLink account using an active mobile number. After installing the app and providing your name and phone number, a verification code (OTP) will be sent. Once verified, you can access emergency assistance as a regular user or register as a volunteer from your profile.",
  "জরুরি SOS বোতাম কীভাবে কাজ করে এবং কখন এটি ব্যবহার করা উচিত?": "How does the Emergency SOS button work and when should it be used?",
  "বন্যা, ঘূর্ণিঝড়, অগ্নিকাণ্ড বা যেকোনো শারীরিক বিপদের মুহূর্তে অ্যাপের লাল রঙের SOS বোতামটি ৩ সেকেন্ড চেপে ধরে রাখলে তাৎক্ষণিক সংকেত সক্রিয় হয়। আপনার বর্তমান অবস্থান স্বয়ংক্রিয়ভাবে নিকটবর্তী সক্রিয় উদ্ধারকর্মী, স্থানীয় স্বেচ্ছাসেবক এবং আপনার সংরক্ষিত জরুরি পরিচিতিদের কাছে পাঠানো হয়। এটি শুধুমাত্র প্রকৃত জীবন-বিপদ পরিস্থিতিতে ব্যবহারের জন্য।": "In moments of flood, cyclone, fire, or physical danger, pressing and holding the red SOS button for 3 seconds activates an instant distress signal. Your current location is automatically transmitted to nearby active rescue workers, local volunteers, and your designated emergency contacts. It is strictly meant for genuine life-threatening emergencies.",
  "দুর্যোগ পরিস্থিতিতে নিকটবর্তী নিরাপদ আশ্রয়কেন্দ্র কীভাবে খুঁজে পাব?": "How can I find nearby safe shelters during a disaster?",
  "অ্যাপের ‘কাছাকাছি আশ্রয়কেন্দ্র’ ট্যাবে প্রবেশ করলে আপনার জিপিএস অবস্থানের ভিত্তিতে নিকটতম নিরাপদ সাইক্লোন শেল্টার, বন্যা আশ্রয়কেন্দ্র ও কমিউনিটি সেন্টারের তালিকা প্রদর্শিত হবে। প্রতিটি কেন্দ্রের দূরত্ব, আনুমানিক ধারণক্ষমতা, সুপেয় পানির সুবিধা এবং সেখানে পৌঁছানোর নিরাপদ রুট ম্যাপে দেখতে পারবেন।": "Opening the 'Nearby Shelters' tab displays a list of the closest safe cyclone shelters, flood shelters, and community centers based on your GPS location. You can view each shelter's distance, estimated capacity, drinking water facilities, and safe route on the map.",
  "RescueLink থেকে কী কী সরকারি জরুরি সেবায় যোগাযোগ করা যায়?": "Which government emergency services can be contacted from RescueLink?",
  "অ্যাপের ‘জরুরি সেবার তথ্য’ বিভাগে জাতীয় জরুরি সেবা ৯৯৯, ফায়ার সার্ভিস নিয়ন্ত্রণ কক্ষ, পুলিশ কন্ট্রোল রুম, নিকটস্থ অ্যাম্বুলেন্স সেবা, দুর্যোগ ব্যবস্থাপনা অধিদপ্তর (১০৯০) এবং নারী ও শিশু নির্যাতন প্রতিরোধ হেল্পলাইনের (১০৯) সরাসরি কল করার সুবিধা রয়েছে। নম্বরগুলো ইন্টারনেট সংযোগ ছাড়াও অফলাইনে দেখা যায়।": "The 'Emergency Services' section provides one-tap direct calling to the National Emergency Hotline 999, Fire Service control room, Police control room, nearest ambulance services, Department of Disaster Management (1090), and Women & Child Helpline (109). These contact numbers remain accessible offline without internet connection.",
  "RescueLink-এ স্বেচ্ছাসেবক হিসেবে কীভাবে যুক্ত হওয়া যায়?": "How can I join RescueLink as a volunteer?",
  "প্রোফাইল সেটিংস থেকে ‘স্বেচ্ছাসেবক হিসেবে যোগ দিন’ অপশনটি নির্বাচন করুন। আপনার জাতীয় পরিচয়পত্র (NID) বা শিক্ষার্থী আইডি এবং প্রাথমিক স্বাস্থ্যসেবা/উদ্ধার অভিজ্ঞতার তথ্য জমা দিন। আমাদের সমন্বয় টিম তথ্য যাচাই করার পর আপনাকে স্থানীয় স্বেচ্ছাসেবী নেটওয়ার্কে যুক্ত করবে, যাতে দুর্যোগে নিজ এলাকার মানুষের পাশে দাঁড়াতে পারেন।": "Select 'Join as a Volunteer' from your profile settings. Submit your National ID (NID) or Student ID alongside any first aid or rescue experience. Once our coordination team verifies your information, you will be connected to the local volunteer network to support people in your community during disasters.",
  "আমার অবস্থানের তথ্য কি সব সময় ট্র্যাক করা হয়?": "Is my location tracked all the time?",
  "না। RescueLink কখনোই ব্যবহারকারীর অজান্তে বা অপ্রয়োজনে অবস্থান ট্র্যাক করে না। কেবল আপনি যখন সক্রিয়ভাবে মানচিত্র দেখেন, আশ্রয়কেন্দ্র খোঁজেন বা জরুরি SOS পাঠান, তখনই আপনার সম্মতিতে সাময়িক অবস্থান ব্যবহৃত হয়। আপনি যেকোনো সময় ফোনের সেটিংস অথবা অ্যাপের ‘প্রোফাইল ও সেটিংস’ থেকে অবস্থানের অনুমতি বন্ধ করতে পারেন।": "No. RescueLink never tracks user location unknowingly or unnecessarily. Your temporary location is only accessed with your permission when you actively view the map, search for shelters, or trigger an emergency SOS. You can disable location permissions at any time from your device settings or via 'Profile & Settings' in the app.",

  /* --- গোপনীয়তা নীতি (Privacy Policy Page) --- */
  "গোপনীয়তা নীতি (Privacy Policy) — RescueLink": "Privacy Policy — RescueLink",
  "সংগৃহীত তথ্য ও ডেটা": "Information & Data Collected",
  "ব্যবহারকারীর অ্যাকাউন্ট তৈরি ও জরুরি সেবার সঠিক সমন্বয়ের জন্য আমরা ব্যবহারকারীর নাম, সক্রিয় ফোন নম্বর, ইমেইল ঠিকানা এবং মনোনীত জরুরি যোগাযোগের ব্যক্তিদের তথ্য সংগ্রহ করি। কোনো বাণিজ্যিক বিজ্ঞাপন বা প্রচারণামূলক উদ্দেশ্যে অতিরিক্ত তথ্য চাওয়া হয় না।": "To create user accounts and properly coordinate emergency assistance, we collect the user's name, active phone number, email address, and nominated emergency contacts. No excess information is ever requested for commercial advertising or promotional purposes.",
  "অবস্থান তথ্যের (Location) ব্যবহার": "Use of Location Data",
  "RescueLink একটি অবস্থানভিত্তিক জীবনরক্ষাকারী সেবা। ব্যবহারকারী যখন জরুরি SOS সিগন্যাল প্রেরণ করেন বা কাছের আশ্রয়কেন্দ্র খোঁজেন, তখন সুনির্দিষ্ট জিপিএস (GPS) অবস্থান ব্যবহৃত হয়। সার্বক্ষণিক বা অপ্রয়োজনে ব্যবহারকারীর অবস্থান রেকর্ড বা সংরক্ষণ করা হয় না।": "RescueLink is a location-based lifesaving service. Precise GPS location is accessed only when a user sends an emergency SOS signal or searches for nearby shelters. User location is never recorded or stored continuously or unnecessarily.",
  "তথ্যের নিরাপত্তা ও এনক্রিপশন": "Data Security & Encryption",
  "আপনার সমস্ত ব্যক্তিগত তথ্য ও জরুরি বার্তা শিল্পমান অনুযায়ী আধুনিক SSL/TLS এনক্রিপশন প্রোটোকলের মাধ্যমে সুরক্ষিত থাকে। অননুমোদিত প্রবেশাধিকার রোধে আমাদের ডেটাবেস সার্বক্ষণিক পর্যবেক্ষণ ও নিরাপত্তা প্রাচীর (Firewall) দ্বারা সুরক্ষিত।": "All your personal details and emergency messages are safeguarded using modern, industry-standard SSL/TLS encryption protocols. Our databases are continuously monitored and shielded by firewalls to prevent unauthorized access.",
  "তৃতীয় পক্ষের সঙ্গে তথ্য শেয়ারিং": "Third-Party Information Sharing",
  "আমরা কোনো বাণিজ্যিক প্রতিষ্ঠান, বিপণন সংস্থা বা বিজ্ঞাপনদাতার কাছে ব্যবহারকারীর ব্যক্তিগত তথ্য বিক্রয় বা হস্তান্তর করি না। কেবল জরুরি জীবনরক্ষার প্রয়োজনে সরকারি ফায়ার সার্ভিস, পুলিশ কন্ট্রোল রুম বা অনুমোদিত উদ্ধারকারী দলের সঙ্গে অবস্থান শেয়ার করা হয়।": "We do not sell, trade, or transfer users' personal information to commercial entities, marketing agencies, or advertisers. Location data is shared exclusively with official Fire Service units, Police control rooms, or accredited rescue teams during critical life-saving emergencies.",
  "ব্যবহারকারীর নিয়ন্ত্রণ ও তথ্য অপসারণ": "User Control & Data Deletion",
  "ব্যবহারকারী যেকোনো সময় তাঁর জরুরি পরিচিতি তালিকা হালনাগাদ করতে পারেন এবং অ্যাপের অনুমতি পরিবর্তন করতে পারেন। আপনি চাইলে": "Users can update their emergency contact list and modify app permissions at any time. If you wish, you can contact",
  "ঠিকানায় যোগাযোগ করে আপনার অ্যাকাউন্ট ও সংশ্লিষ্ট সমস্ত ডেটা স্থায়ীভাবে মুছে ফেলার আবেদন জানাতে পারেন।": "to request the permanent deletion of your account and all associated data.",
  "নীতিমালা হালনাগাদ": "Policy Updates",
  "নিরাপত্তা মান ও দেশের প্রচলিত আইনের সাথে সামঞ্জস্য রেখে RescueLink প্রয়োজনবোধে এই গোপনীয়তা নীতি হালনাগাদ করতে পারে। নীতিমালায় কোনো তাৎপর্যপূর্ণ পরিবর্তন আনা হলে অ্যাপ নোটিফিকেশন বা ওয়েবসাইটের মাধ্যমে তা স্পষ্টভাবে অবহিত করা হবে।": "In accordance with evolving security standards and national laws, RescueLink may update this Privacy Policy as necessary. Any significant changes will be clearly announced via in-app notifications or through our website.",

  /* --- ব্যবহারের শর্তাবলী (Terms & Conditions Page) --- */
  "ব্যবহারের শর্তাবলী (Terms & Conditions) — RescueLink": "Terms & Conditions — RescueLink",
  "RescueLink প্ল্যাটফর্ম, মোবাইল অ্যাপ্লিকেশন ও জরুরি নেটওয়ার্ক ব্যবহারের সাধারণ নীতিমালা ও শর্তাবলী।": "General terms, conditions, and policies for using RescueLink platform, mobile application, and emergency network.",
  "শর্তাবলীর গ্রহণযোগ্যতা ও অ্যাকাউন্ট": "Acceptance of Terms & Account",
  "RescueLink ব্যবহার করার মাধ্যমে আপনি এই শর্তাবলীতে সম্মতি প্রদান করছেন। অ্যাকাউন্ট খোলার সময় সঠিক ও সত্য তথ্য প্রদান করা বাধ্যতামূলক। অ্যাকাউন্টের মাধ্যমে সংঘটিত যেকোনো কার্যকলাপের দায়ভার সংশ্লিষ্ট ব্যবহারকারীর ওপর বর্তাবে।": "By using RescueLink, you agree to comply with these terms. Providing accurate and truthful information during registration is mandatory. Users bear full responsibility for all activities conducted through their accounts.",
  "জরুরি SOS ব্যবহারে দায়িত্বশীলতা": "Responsible Use of Emergency SOS",
  "জরুরি SOS বা উদ্ধার অনুরোধ শুধুমাত্র বাস্তব জীবন-সংকটে ও প্রাকৃতিক দুর্যোগের জরুরি প্রয়োজনে ব্যবহারযোগ্য। কোনোপ্রকার কৌতুক, অসত্য সংকেত বা বিভ্রান্তি সৃষ্টির উদ্দেশ্যে SOS পাঠানো সম্পূর্ণ নিষিদ্ধ এবং এর জন্য অ্যাকাউন্ট বাতিলসহ দেশের প্রচলিত আইনে ব্যবস্থা নেওয়া হতে পারে।": "Emergency SOS and rescue requests are strictly reserved for genuine life-threatening crises and natural disasters. Sending false alerts, prank signals, or intentional disruptions is strictly prohibited and will lead to account termination as well as legal prosecution under national laws.",
  "স্বেচ্ছাসেবকদের আচরণবিধি": "Volunteer Code of Conduct",
  "RescueLink নেটওয়ার্কে যুক্ত স্বেচ্ছাসেবকগণ নিঃস্বার্থ মানবিক সেবায় নিয়োজিত। কোনো স্বেচ্ছাসেবক উদ্ধারকাজের বিনিময়ে অর্থ বা অনৈতিক সুবিধা দাবি করতে পারবেন না। যেকোনো অসদাচরণের অভিযোগের ক্ষেত্রে সংশ্লিষ্ট স্বেচ্ছাসেবকের সদস্যপদ অবিলম্বে বাতিল করা হবে।": "Volunteers registered with the RescueLink network are dedicated to selfless humanitarian service. Volunteers may not demand payment or unethical benefits in exchange for rescue assistance. Any reported misconduct will result in immediate revocation of volunteer membership.",
  "সেবার সীমাবদ্ধতা ও দায়িত্ব অস্বীকার": "Service Limitations & Disclaimers",
  "RescueLink একটি সহায়ক ডিজিটাল প্ল্যাটফর্ম যা নাগরিক ও স্বেচ্ছাসেবকদের যুক্ত করতে কাজ করে। এটি সরকারি জরুরি হটলাইন ৯৯৯, সামরিক বাহিনী বা ফায়ার সার্ভিসের বিকল্প নয়। প্রাকৃতিক চরম দুর্যোগে মোবাইল নেটওয়ার্ক বিভ্রাটের কারণে সেবা সাময়িক ব্যাহত হলে কর্তৃপক্ষ দায়ী থাকবে না।": "RescueLink is a supportive digital platform that connects citizens and volunteers. It is not a replacement for official national emergency services 999, the military, or the fire brigade. The platform is not liable for temporary service interruptions caused by telecommunication outages during extreme natural disasters.",
  "নিষিদ্ধ কার্যকলাপ": "Prohibited Activities",
  "প্ল্যাটফর্ম ব্যবহার করে কোনো বেআইনি প্রচার, হয়রানিমূলক বার্তা প্রেরণ, অন্যের পরিচয় নকল করা, ক্ষতিকর সফটওয়্যার ছড়ানো বা প্ল্যাটফর্মের নিরাপত্তা বিঘ্নিত করার চেষ্টা করা কঠোরভাবে নিষিদ্ধ।": "Using the platform for unlawful promotion, sending harassing messages, impersonating others, distributing harmful software, or attempting to compromise platform security is strictly prohibited.",
  "আইনগত এখতিয়ার ও বিরোধ নিষ্পত্তি": "Jurisdiction & Dispute Resolution",
  "এই শর্তাবলী গণপ্রজাতন্ত্রী বাংলাদেশের প্রচলিত আইন দ্বারা পরিচালিত হবে। প্ল্যাটফর্মের ব্যবহার সম্পর্কিত যেকোনো আইনি বিরোধ বাংলাদেশের উপযুক্ত আদালতের এখতিয়ারাধীন নিষ্পত্তিযোগ্য হবে।": "These terms and conditions are governed by the laws of the People's Republic of Bangladesh. Any legal disputes arising from the use of the platform shall fall under the exclusive jurisdiction of the competent courts of Bangladesh."
};
  var I18N_HTML = {
    "emergency": "If you are in danger, don't wait after writing in this form. Call the national emergency service <a href=\"tel:999\"><b>999</b></a> directly.",
    "privacy-card-5": "Users can update their emergency contact list and modify app permissions at any time. If you wish, you can contact <a href=\"mailto:privacy@rescuelink.example\">privacy@rescuelink.example</a> to request the permanent deletion of your account and all associated data."
  };

  var lang = 'bn';
  var LANG_KEY = 'rescuelink-lang';
  var langListeners = [];
  var textStore = new WeakMap();
  var attrStore = new WeakMap();
  var htmlStore = new WeakMap();
  var metaStore = new WeakMap();
  var TEXT_SKIP = '[data-no-i18n-text], [data-i18n-html], [data-bn], script, style';
  var ATTRS = ['aria-label', 'placeholder', 'alt', 'title'];

  function norm(s) { return s.replace(/\s+/g, ' ').trim(); }
  // বাংলা মূল টেক্সট দিলে বর্তমান ভাষার টেক্সট ফেরত দেয়
  function t(bn) { return lang === 'en' && I18N[bn] ? I18N[bn] : bn; }
  function num(n) { return lang === 'bn' ? toBangla(n) : String(n); }
  // যে টেক্সট স্ক্রিপ্ট নিজে বসায় (ত্রুটি, স্ট্যাটাস, "কপি") — ভাষা বদলালে নিজে থেকেই অনুবাদ হয়
  function setDyn(el, bn) {
    if (!bn) { el.textContent = ''; el.removeAttribute('data-bn'); return; }
    el.setAttribute('data-bn', bn);
    el.textContent = t(bn);
  }

  function translateTextNodes(next) {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var node;
    while ((node = walker.nextNode())) {
      var parent = node.parentElement;
      if (!parent || parent.closest(TEXT_SKIP)) continue;
      var orig = textStore.get(node);
      if (orig === undefined) {
        var key0 = norm(node.nodeValue);
        if (!key0 || !I18N[key0]) continue;
        orig = node.nodeValue;
        textStore.set(node, orig);
      }
      if (next === 'en') {
        var m = orig.match(/^(\s*)([\s\S]*?)(\s*)$/);
        node.nodeValue = m[1] + (I18N[norm(orig)] || m[2]) + m[3];
      } else {
        node.nodeValue = orig;
      }
    }
  }

  function translateAttributes(next) {
    var sel = ATTRS.map(function (a) { return '[' + a + ']'; }).join(',');
    document.querySelectorAll(sel).forEach(function (el) {
      if (el.id === 'menu-toggle' || el.id === 'gallery-current') return; // এগুলো স্ক্রিপ্ট নিজে সামলায়
      var saved = attrStore.get(el);
      if (!saved) { saved = {}; attrStore.set(el, saved); }
      ATTRS.forEach(function (a) {
        if (!el.hasAttribute(a)) return;
        if (saved[a] === undefined) {
          if (!I18N[norm(el.getAttribute(a))]) return;
          saved[a] = el.getAttribute(a);
        }
        el.setAttribute(a, next === 'en' ? I18N[norm(saved[a])] : saved[a]);
      });
    });
  }

  function translateHtmlBlocks(next) {
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      if (!htmlStore.has(el)) htmlStore.set(el, el.innerHTML);
      var en = I18N_HTML[el.getAttribute('data-i18n-html')];
      el.innerHTML = next === 'en' && en ? en : htmlStore.get(el);
    });
  }

  function translateHead(next) {
    var pairs = [[document.querySelector('title'), null]];
    document.querySelectorAll('meta[name="description"], meta[property="og:title"], meta[property="og:description"]')
      .forEach(function (m) { pairs.push([m, 'content']); });
    pairs.forEach(function (p) {
      var el = p[0], attr = p[1];
      if (!el) return;
      if (!metaStore.has(el)) metaStore.set(el, attr ? el.getAttribute(attr) : el.textContent);
      var orig = metaStore.get(el);
      var val = next === 'en' && I18N[norm(orig)] ? I18N[norm(orig)] : orig;
      if (attr) el.setAttribute(attr, val); else el.textContent = val;
    });
  }

  function setLang(next, save) {
    lang = next === 'en' ? 'en' : 'bn';
    root.lang = lang;
    translateHead(lang);
    translateTextNodes(lang);
    translateAttributes(lang);
    translateHtmlBlocks(lang);
    document.querySelectorAll('[data-bn]').forEach(function (el) { el.textContent = t(el.getAttribute('data-bn')); });
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      var on = b.getAttribute('data-lang') === lang;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', String(on));
    });
    langListeners.forEach(function (fn) { fn(); });
    if (save) { try { window.localStorage.setItem(LANG_KEY, lang); } catch (e) {} }
  }

  function initLang() {
    var saved = null;
    try { saved = window.localStorage.getItem(LANG_KEY); } catch (e) {}
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.addEventListener('click', function () {
        var next = b.getAttribute('data-lang');
        if (next !== lang) setLang(next, true);
      });
    });
    if (saved === 'en') setLang('en', false); // নইলে বাংলাই থাকে
  }

  document.addEventListener('DOMContentLoaded', function () {
    initLang();
    initHeader();
    initMobileMenu();
    initActiveLinks();
    initReveal();
    initGallery();
    initStatsAnimation();
    initFaqAccordion();
    initYear();
    initContact();
  });

  /* ---------- হেডার: স্ক্রল করলে সীমারেখা ও ছায়া ---------- */
  function initHeader() {
    var header = document.getElementById('site-header');
    if (!header) return;
    var ticking = false;
    function update() {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }

  /* ---------- মোবাইল মেনু ---------- */
  function initMobileMenu() {
    var toggle = document.getElementById('menu-toggle');
    var nav = document.getElementById('primary-nav');
    if (!toggle || !nav) return;

    function setOpen(open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', t(open ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন'));
    }
    langListeners.push(function () { setOpen(nav.classList.contains('is-open')); });
    setOpen(false);
    toggle.addEventListener('click', function () {
      setOpen(!nav.classList.contains('is-open'));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setOpen(false);
        toggle.focus();
      }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 760) setOpen(false);
    });
  }

  /* ---------- সক্রিয় নেভ লিংক ---------- */
  function initActiveLinks() {
    var links = Array.prototype.slice.call(document.querySelectorAll('.primary-nav .nav-link'));
    if (!links.length || !('IntersectionObserver' in window)) return;
    var map = {};
    links.forEach(function (a) {
      var href = a.getAttribute('href') || '';
      var hashIdx = href.indexOf('#');
      if (hashIdx !== -1) map[href.slice(hashIdx + 1)] = a;
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) { a.classList.remove('is-active'); a.removeAttribute('aria-current'); });
        var active = map[entry.target.id];
        if (active) { active.classList.add('is-active'); active.setAttribute('aria-current', 'true'); }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    Object.keys(map).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }

  /* ---------- স্ক্রল-ট্রিগার রিভিল (একবারই চলে) ---------- */
  function initReveal() {
    if (!root.classList.contains('js')) return;
    var items = document.querySelectorAll('.reveal');

    // গ্রিডের ভেতরের কার্ড ও ধাপ একটু পর পর দেখাবে
    document.querySelectorAll('[data-stagger]').forEach(function (group) {
      group.querySelectorAll('.reveal').forEach(function (el, i) {
        el.style.setProperty('--stagger', (i % 3) * 90 + 'ms');
      });
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        el.classList.add('is-visible');
        observer.unobserve(el);
        // রিভিল শেষে ডিলে সরিয়ে দিই, যাতে হোভার ট্রানজিশন দেরি না করে
        window.setTimeout(function () { el.style.removeProperty('--stagger'); }, 1000);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    items.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- অ্যাপের ঝলক: গ্যালারি ---------- */
  function initGallery() {
    var tabs = Array.prototype.slice.call(document.querySelectorAll('.gallery-tab'));
    var current = document.getElementById('gallery-current');
    var prevImg = document.getElementById('gallery-prev');
    var nextImg = document.getElementById('gallery-next');
    var count = document.getElementById('gallery-count');
    var frame = current ? current.parentElement : null;
    if (!tabs.length || !current || !frame) return;

    var index = 0;
    var total = tabs.length;

    function wrap(i) { return (i + total) % total; }

    function show(i, moveFocus) {
      index = wrap(i);
      var tab = tabs[index];
      var swap = function () {
        current.src = tab.dataset.src;
        current.alt = t(tab.dataset.alt);
        prevImg.src = tabs[wrap(index - 1)].dataset.src;
        nextImg.src = tabs[wrap(index + 1)].dataset.src;
        frame.classList.remove('is-changing');
      };
      if (reduceMotion) { swap(); } else {
        frame.classList.add('is-changing');
        window.setTimeout(swap, 160);
      }
      tabs.forEach(function (t, j) {
        t.setAttribute('aria-selected', String(j === index));
        t.tabIndex = j === index ? 0 : -1;
      });
      count.textContent = num(index + 1) + ' / ' + num(total);
      if (moveFocus) tab.focus();
    }

    tabs.forEach(function (tab, i) {
      tab.setAttribute('role', 'tab');
      tab.addEventListener('click', function () { show(i); });
    });

    document.getElementById('gallery-prev-btn').addEventListener('click', function () { show(index - 1); });
    document.getElementById('gallery-next-btn').addEventListener('click', function () { show(index + 1); });

    if (prevImg && prevImg.parentElement) {
      prevImg.parentElement.addEventListener('click', function () { show(index - 1); });
    }
    if (nextImg && nextImg.parentElement) {
      nextImg.parentElement.addEventListener('click', function () { show(index + 1); });
    }

    tabs[0].parentElement.addEventListener('keydown', function (e) {
      var key = e.key;
      if (key === 'ArrowDown' || key === 'ArrowRight') { e.preventDefault(); show(index + 1, true); }
      else if (key === 'ArrowUp' || key === 'ArrowLeft') { e.preventDefault(); show(index - 1, true); }
      else if (key === 'Home') { e.preventDefault(); show(0, true); }
      else if (key === 'End') { e.preventDefault(); show(total - 1, true); }
    });

    show(0);
    langListeners.push(function () {
      current.alt = t(tabs[index].dataset.alt);
      count.textContent = num(index + 1) + ' / ' + num(total);
    });
  }


  /* ---------- এফএকিউ অ্যাকর্ডিয়ন (FAQ Accordion) ---------- */
  function initFaqAccordion() {
    var items = document.querySelectorAll('.faq-item');
    if (!items.length) return;
    items.forEach(function (item) {
      item.addEventListener('toggle', function () {
        if (item.open) {
          items.forEach(function (other) {
            if (other !== item && other.open) other.open = false;
          });
        }
      });
    });
  }

  /* ---------- যোগাযোগ ফর্ম ---------- */
  function initContact() {
    var form = document.getElementById('contact-form');
    if (!form) return;
    var to = form.getAttribute('data-email');
    var status = document.getElementById('form-status');
    var fields = ['name', 'email', 'message'];
    var msgs = {
      name: 'আপনার নাম লিখুন।',
      email: 'সঠিক ইমেইল ঠিকানা লিখুন।',
      message: 'বার্তা লিখুন।'
    };

    function setError(id, text) {
      var input = document.getElementById('cf-' + id);
      var err = document.getElementById('cf-' + id + '-err');
      input.parentElement.classList.toggle('has-error', !!text);
      input.setAttribute('aria-invalid', text ? 'true' : 'false');
      setDyn(err, text);
    }
    function check(id) {
      var v = document.getElementById('cf-' + id).value.trim();
      var ok = id === 'email' ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) : v.length > 0;
      setError(id, ok ? '' : msgs[id]);
      return ok;
    }
    fields.forEach(function (id) {
      var el = document.getElementById('cf-' + id);
      el.addEventListener('blur', function () { check(id); });
      el.addEventListener('input', function () {
        if (el.parentElement.classList.contains('has-error')) check(id);
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status.classList.remove('is-error');
      setDyn(status, '');
      var valid = fields.map(check).every(Boolean);
      if (!valid) {
        setDyn(status, 'অনুগ্রহ করে লাল চিহ্নিত ঘরগুলো ঠিক করুন।');
        status.classList.add('is-error');
        var bad = form.querySelector('.has-error input, .has-error textarea');
        if (bad) bad.focus();
        return;
      }
      var name = document.getElementById('cf-name').value.trim();
      var email = document.getElementById('cf-email').value.trim();
      var topicSel = document.getElementById('cf-topic');
      var topic = topicSel.options[topicSel.selectedIndex].text;
      var message = document.getElementById('cf-message').value.trim();
      var subject = 'RescueLink — ' + topic;
      var body = message + '\n\n— ' + name + '\n' + email;
      window.location.href = 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      setDyn(status, 'আপনার ইমেইল অ্যাপে বার্তাটি তৈরি হয়েছে। সেখান থেকে “পাঠান” চাপুন।');
    });

    var copy = document.getElementById('copy-email');
    var label = document.getElementById('copy-label');
    if (copy) {
      copy.addEventListener('click', function () {
        var done = function () {
          setDyn(label, 'কপি হয়েছে');
          window.setTimeout(function () { setDyn(label, 'কপি'); }, 1800);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(to).then(done, function () {});
        }
      });
    }
  }

  /* ---------- প্ল্যাটফর্ম পরিসংখ্যান কাউন্টার ও ডেটা ফেচ ---------- */
  function fetchPlatformStats() {
    // প্রস্তুতকৃত ডেটা ফেচ হুক (বাস্তব এপিআই / ডাটাবেস এন্ডপয়েন্ট যেমন /api/stats যুক্ত করার জন্য প্রস্তুত)
    return Promise.resolve({
      districts: 64,
      users: 10000,
      volunteers: 500
    });
  }

  function initStatsAnimation() {
    var container = document.querySelector('[data-about-stats]');
    if (!container) return;

    var statEls = Array.prototype.slice.call(container.querySelectorAll('.stat-number'));
    if (!statEls.length) return;

    var animated = false;
    var currentValues = {};

    function formatNumber(val, isBn) {
      var s = val.toLocaleString('en-US');
      return isBn ? toBangla(s) : s;
    }

    function renderStat(el, val) {
      var suffix = el.getAttribute('data-suffix') || '';
      el.textContent = formatNumber(val, lang === 'bn') + suffix;
    }

    function updateAll(isTarget) {
      statEls.forEach(function (el, idx) {
        var target = parseInt(el.getAttribute('data-target'), 10) || 0;
        var val = isTarget ? target : (currentValues[idx] !== undefined ? currentValues[idx] : target);
        renderStat(el, val);
      });
    }

    // ভাষা পরিবর্তন হলে সংখ্যাগুলো নতুন ভাষায় রি-রেন্ডার করা
    langListeners.push(function () {
      updateAll(animated);
    });

    // ডাটাবেস ফেচ হুক কল (প্রয়োজনে টার্গেট আপডেট করার জন্য)
    fetchPlatformStats().then(function (data) {
      if (data && statEls.length >= 3) {
        if (data.districts !== undefined) statEls[0].setAttribute('data-target', data.districts);
        if (data.users !== undefined) statEls[1].setAttribute('data-target', data.users);
        if (data.volunteers !== undefined) statEls[2].setAttribute('data-target', data.volunteers);
        if (animated || reduceMotion) {
          updateAll(true);
        }
      }
    }).catch(function () {});

    function startCount() {
      if (animated) return;
      animated = true;

      if (reduceMotion || !('requestAnimationFrame' in window)) {
        updateAll(true);
        return;
      }

      var duration = 1400; // ms
      var startTime = null;
      var targets = statEls.map(function (el) {
        return parseInt(el.getAttribute('data-target'), 10) || 0;
      });

      function step(now) {
        if (!startTime) startTime = now;
        var elapsed = now - startTime;
        var progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic
        var ease = 1 - Math.pow(1 - progress, 3);

        statEls.forEach(function (el, idx) {
          var current = Math.round(targets[idx] * ease);
          currentValues[idx] = current;
          renderStat(el, current);
        });

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          updateAll(true);
        }
      }

      window.requestAnimationFrame(step);
    }

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            startCount();
            observer.disconnect();
          }
        });
      }, { threshold: 0.25 });
      observer.observe(container);
    } else {
      startCount();
    }
  }

  /* ---------- ফুটারের বছর (ভাষা অনুযায়ী সংখ্যা) ---------- */
  function initYear() {
    var el = document.getElementById('year');
    if (!el) return;
    var set = function () { el.textContent = num(new Date().getFullYear()); };
    set();
    langListeners.push(set);
  }
})();
