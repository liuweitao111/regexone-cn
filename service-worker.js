/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "627cd1bf3d3e4672dc63d471269ae6cc"
  },
  {
    "url": "assets/css/0.styles.7daeff6a.css",
    "revision": "0f8ade5675ac61d79e5a18349b5ad945"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f9b58b40.js",
    "revision": "f5e515f24961012b5d23df3bcc471db1"
  },
  {
    "url": "assets/js/11.6cb3dfb5.js",
    "revision": "67edac21d25d46002577d984778b6acc"
  },
  {
    "url": "assets/js/12.4c5afa4f.js",
    "revision": "d327852ddf13d730c18f579364ffddec"
  },
  {
    "url": "assets/js/13.62712cfa.js",
    "revision": "89d34ae8f3abc6c4104b83ba5b460320"
  },
  {
    "url": "assets/js/14.4b65d739.js",
    "revision": "1562700b0f0fdf805cfb02b167061ced"
  },
  {
    "url": "assets/js/15.53c98765.js",
    "revision": "be6fceb484b8974dd70d8b1b130141df"
  },
  {
    "url": "assets/js/16.e407fc62.js",
    "revision": "51d6deb5af026d2fdcec147c5e9f619a"
  },
  {
    "url": "assets/js/17.0ae4abe8.js",
    "revision": "04d3b5cb40fc0623a43e02b8d051a6be"
  },
  {
    "url": "assets/js/18.67633f20.js",
    "revision": "4ebebac272f4ad497d765dee0e75f1f0"
  },
  {
    "url": "assets/js/19.807e5a3d.js",
    "revision": "6ba33ab2bdcec3a06b18d58e888dedf7"
  },
  {
    "url": "assets/js/2.6ba0d91b.js",
    "revision": "50edce0b3763dbe1a7fd8ffbe409e044"
  },
  {
    "url": "assets/js/20.b73564a9.js",
    "revision": "a747a576c00fcdd55d5ff893fee2d0a1"
  },
  {
    "url": "assets/js/21.43c597f5.js",
    "revision": "5a5f0dafd2e4139158ef03e3b0973468"
  },
  {
    "url": "assets/js/22.36ff21fd.js",
    "revision": "831092f1359c96e02639d880fc1efd77"
  },
  {
    "url": "assets/js/23.45bd9571.js",
    "revision": "a6ad31f034d632bb1d983e04674eab89"
  },
  {
    "url": "assets/js/24.b0d99c66.js",
    "revision": "4eb56e79874ef70bcd8ebc13387152bf"
  },
  {
    "url": "assets/js/25.8e0f8400.js",
    "revision": "39045fb60b88205b2168fde65c0eb55f"
  },
  {
    "url": "assets/js/26.05121c2c.js",
    "revision": "9f05027ecbe1bea6d52dbd2da59921a3"
  },
  {
    "url": "assets/js/27.3997ab49.js",
    "revision": "9785ec6d0b506b8727421e30d182b59a"
  },
  {
    "url": "assets/js/28.9a057cd3.js",
    "revision": "6040b2f74c4d230c8594cab7d7532a05"
  },
  {
    "url": "assets/js/29.c9051149.js",
    "revision": "2a25c7f0a94ff34e1fb86931177e647e"
  },
  {
    "url": "assets/js/3.1c2ef833.js",
    "revision": "2f9f24192d5676f0524846d3d687f299"
  },
  {
    "url": "assets/js/4.d7136658.js",
    "revision": "aaedc907f0f2b15a071e29623a69c556"
  },
  {
    "url": "assets/js/5.73f9a453.js",
    "revision": "07db3170f58fb997a396eeaefe58cce9"
  },
  {
    "url": "assets/js/6.b8b3cb12.js",
    "revision": "3d4ba759260d9355e54435b4e307e9a5"
  },
  {
    "url": "assets/js/7.132c7047.js",
    "revision": "df0cc5f2ee8b02496d8c85d5c1504dc4"
  },
  {
    "url": "assets/js/8.1e57a761.js",
    "revision": "570e61278ec3ece287f9a24b9b4b4896"
  },
  {
    "url": "assets/js/9.3a61e777.js",
    "revision": "a8339f2502450c937a8cc0579da5d9ac"
  },
  {
    "url": "assets/js/app.0c4bf66d.js",
    "revision": "89786760d6522f2069bf141acee4564c"
  },
  {
    "url": "base/assertions.html",
    "revision": "19db1f11158890a1769fccfbb7920cce"
  },
  {
    "url": "base/character_classes.html",
    "revision": "2389bb8a9fb6effb5dd214a290d6e269"
  },
  {
    "url": "base/character_ranges.html",
    "revision": "1db92de67acb1699f578bcdbc9d3621d"
  },
  {
    "url": "base/escape.html",
    "revision": "332c5a525da827bf17a9b9978bd32501"
  },
  {
    "url": "base/groups.html",
    "revision": "88844129baa975b43d9e1cfd0bf8b3d2"
  },
  {
    "url": "base/quantifiers.html",
    "revision": "c5efef66cf818da10376cbce4fcf5274"
  },
  {
    "url": "favicon.png",
    "revision": "17db595c74835b26223e682aba2d5ea3"
  },
  {
    "url": "images/icons/android-chrome-192x192.png",
    "revision": "552ff8edfba47052338dc4a58e63d7f6"
  },
  {
    "url": "images/icons/android-chrome-384x384.png",
    "revision": "5eb191aa3e9bf682b7aff3fc1e3a5f74"
  },
  {
    "url": "images/icons/apple-touch-icon.png",
    "revision": "6ce4f53fb93110faf7c83db97b6f295e"
  },
  {
    "url": "images/icons/favicon-16x16.png",
    "revision": "01d041cc0495c38223a42bfb7d5e68a1"
  },
  {
    "url": "images/icons/favicon-32x32.png",
    "revision": "bf70a319058f3aa02bc5969e72e1569f"
  },
  {
    "url": "images/icons/mstile-150x150.png",
    "revision": "62551ad7348da00b6f3364c620a8a24d"
  },
  {
    "url": "images/icons/safari-pinned-tab.svg",
    "revision": "3380c219b062ad4274e8ba6ded5876b0"
  },
  {
    "url": "index.html",
    "revision": "18ceff0bb0d355f53415dc3cd707d335"
  },
  {
    "url": "others/greeding.html",
    "revision": "821aa77bb39113024d6ae0e369600d99"
  },
  {
    "url": "problem/extracting_log_data.html",
    "revision": "6f3aaf695a88e2f824b0e3f9c2d77831"
  },
  {
    "url": "problem/extracting_url_data.html",
    "revision": "285069f7a2e0f8f3f51792a668c5b3c5"
  },
  {
    "url": "problem/matching_decimal_numbers.html",
    "revision": "a1a5ba41e138a4bb8711be666f70192c"
  },
  {
    "url": "problem/matching_emails.html",
    "revision": "e577ddfe3fd432c4426899fe81a0e5af"
  },
  {
    "url": "problem/matching_filenames.html",
    "revision": "cce43f1405c6aa6465d76a4f8bc0cd82"
  },
  {
    "url": "problem/matching_html.html",
    "revision": "beb82d71ad3ec117108c2f3ce0a4d163"
  },
  {
    "url": "problem/matching_phone_numbers.html",
    "revision": "458729a87f41ee779c00a012c77c9037"
  },
  {
    "url": "problem/others.html",
    "revision": "b3e38d9d0a1b704cb7167679dc823a53"
  },
  {
    "url": "problem/trimming_whitespace.html",
    "revision": "5f77e0be7284742173b69710fc177c64"
  },
  {
    "url": "pwaicon.png",
    "revision": "91bc81deed905f9d58e183036f2cbfc8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
