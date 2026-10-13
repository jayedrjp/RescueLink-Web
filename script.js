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

  document.addEventListener('DOMContentLoaded', function () {
    initHeader();
    initMobileMenu();
    initActiveLinks();
    initReveal();
    initGallery();
    initYear();
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
      toggle.setAttribute('aria-label', open ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন');
    }
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
    links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });

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
        current.alt = tab.dataset.alt;
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
      count.textContent = toBangla(index + 1) + ' / ' + toBangla(total);
      if (moveFocus) tab.focus();
    }

    tabs.forEach(function (tab, i) {
      tab.setAttribute('role', 'tab');
      tab.addEventListener('click', function () { show(i); });
    });

    document.getElementById('gallery-prev-btn').addEventListener('click', function () { show(index - 1); });
    document.getElementById('gallery-next-btn').addEventListener('click', function () { show(index + 1); });

    tabs[0].parentElement.addEventListener('keydown', function (e) {
      var key = e.key;
      if (key === 'ArrowDown' || key === 'ArrowRight') { e.preventDefault(); show(index + 1, true); }
      else if (key === 'ArrowUp' || key === 'ArrowLeft') { e.preventDefault(); show(index - 1, true); }
      else if (key === 'Home') { e.preventDefault(); show(0, true); }
      else if (key === 'End') { e.preventDefault(); show(total - 1, true); }
    });

    show(0);
  }

  /* ---------- ফুটারের বছর (বাংলা সংখ্যায়) ---------- */
  function initYear() {
    var el = document.getElementById('year');
    if (el) el.textContent = toBangla(new Date().getFullYear());
  }
})();
