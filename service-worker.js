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
    "revision": "f475cc2c01e9637de1f5fe187a097f8b"
  },
  {
    "url": "assets/css/0.styles.2017b6c0.css",
    "revision": "1cd18b8621eb8d5b66682f03c47fdce2"
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
    "url": "assets/js/13.d03103f5.js",
    "revision": "9a3282a9420437e23b2434945e7d212a"
  },
  {
    "url": "assets/js/14.d53cfe54.js",
    "revision": "b54e4a03c46231c1dcdcd27a4eb81c8f"
  },
  {
    "url": "assets/js/15.b2ddc597.js",
    "revision": "fd562f303a7cca31063688c6b132fe8d"
  },
  {
    "url": "assets/js/16.f7f87edc.js",
    "revision": "c1b3fd9b408f28e9c96e469712ba555e"
  },
  {
    "url": "assets/js/17.0ae4abe8.js",
    "revision": "04d3b5cb40fc0623a43e02b8d051a6be"
  },
  {
    "url": "assets/js/18.5576ac01.js",
    "revision": "adea670198821697a24061b8c78b8322"
  },
  {
    "url": "assets/js/19.807e5a3d.js",
    "revision": "6ba33ab2bdcec3a06b18d58e888dedf7"
  },
  {
    "url": "assets/js/2.e7222af6.js",
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
    "url": "assets/js/22.74848a19.js",
    "revision": "04367ea79497dd7ba04346269c69f877"
  },
  {
    "url": "assets/js/23.97b1b9aa.js",
    "revision": "b2f95fbf3940dc5e01ece1b3e321e81f"
  },
  {
    "url": "assets/js/24.b0d99c66.js",
    "revision": "4eb56e79874ef70bcd8ebc13387152bf"
  },
  {
    "url": "assets/js/25.029ae193.js",
    "revision": "f589cab11a3fd42d2fa61346c37c8349"
  },
  {
    "url": "assets/js/26.b68a8599.js",
    "revision": "5540f4693901495f8339afdb567cec33"
  },
  {
    "url": "assets/js/27.59be212f.js",
    "revision": "fb9d5000558df249c22eaf3c1960b862"
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
    "url": "assets/js/3.11cc5ff7.js",
    "revision": "1b3f75a922d4a555ff75ea3a8c4bfed5"
  },
  {
    "url": "assets/js/4.513fc39d.js",
    "revision": "9d1e5b9455731dcc61ea02f6b57e4039"
  },
  {
    "url": "assets/js/5.4f1c39be.js",
    "revision": "73e10c778125db781827d1b4bd156f0a"
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
    "url": "assets/js/app.2ff1d9f5.js",
    "revision": "8577d3a87d375780ea69a9306a23225f"
  },
  {
    "url": "base/assertions.html",
    "revision": "a1ac935a6a8e7170624e99070d5579b2"
  },
  {
    "url": "base/character_classes.html",
    "revision": "1b9be7d2be6f101b67143735faf2dfa1"
  },
  {
    "url": "base/character_ranges.html",
    "revision": "e72162d38b849134a672626b132015ef"
  },
  {
    "url": "base/escape.html",
    "revision": "ea436539610bbb7e264912be4d372dc2"
  },
  {
    "url": "base/groups.html",
    "revision": "5bd60307812046a5221150184b08cca1"
  },
  {
    "url": "base/quantifiers.html",
    "revision": "5600bdc6dd603bf61dfceb018de1373b"
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
    "revision": "ee4e2d565bcf87e1f5d293b819ffa693"
  },
  {
    "url": "others/greeding.html",
    "revision": "35d6103f1c0940f01df5362f4506ea99"
  },
  {
    "url": "problem/extracting_log_data.html",
    "revision": "2457b64b6aa6c745257eb8424c4011fa"
  },
  {
    "url": "problem/extracting_url_data.html",
    "revision": "0dc104572e275e771531b5a46ba5b074"
  },
  {
    "url": "problem/matching_decimal_numbers.html",
    "revision": "627746d7a203375d54ba2bfd5c2b7e34"
  },
  {
    "url": "problem/matching_emails.html",
    "revision": "61f9bb6d149656a51496f6b5f36a32ac"
  },
  {
    "url": "problem/matching_filenames.html",
    "revision": "dd2ba2caba8201f6265fc27310f72162"
  },
  {
    "url": "problem/matching_html.html",
    "revision": "566207e1883416b3d6b6dfc0755cce18"
  },
  {
    "url": "problem/matching_phone_numbers.html",
    "revision": "7c654a84e25385cf44c5d86a3440e1ee"
  },
  {
    "url": "problem/others.html",
    "revision": "a63f96d1adc9e8bb3fac7c29bf4bc6ff"
  },
  {
    "url": "problem/trimming_whitespace.html",
    "revision": "bbe5bdc093f5951df6ccdf6813cc372f"
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
