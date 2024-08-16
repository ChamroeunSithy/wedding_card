'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "7e5733a3d4f2233e41bdbdb7e698c79d",
"index.html": "c6d3ef513b0760da607c281907e5b0be",
"/": "c6d3ef513b0760da607c281907e5b0be",
"main.dart.js": "da0f744454bc8b74f4eec60a34eeed3a",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "363f5a38752dad4b167596e599653678",
"assets/AssetManifest.json": "5388c8d6ec297665e668d2fce869d8a8",
"assets/NOTICES": "091ce2d56bca3bbf96a7480ae79fb50e",
"assets/FontManifest.json": "2b293a80c08ea952cb8b8b9654efe1f4",
"assets/AssetManifest.bin.json": "de78fcd68be4419e31df3157cfbf51af",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/khmer_fonts/lib/src/fonts/Bokor/Bokor-Regular.ttf": "4656ee73ac424c47d093c9fb4eaee38c",
"assets/packages/khmer_fonts/lib/src/fonts/Kdam_Thmor/KdamThmor-Regular.ttf": "c26639aa19970301edbbf223c0e58200",
"assets/packages/khmer_fonts/lib/src/fonts/Hanuman/Hanuman-Regular.ttf": "67891d541e5cac9a5c4d468c2ed8cee7",
"assets/packages/khmer_fonts/lib/src/fonts/Hanuman/Hanuman-Bold.ttf": "5d5a1c3671ac57370761afbaf4308204",
"assets/packages/khmer_fonts/lib/src/fonts/Moul/Moul-Regular.ttf": "fc76d9be66cf44cebb70bae887c6adb4",
"assets/packages/khmer_fonts/lib/src/fonts/Preahvihear/Preahvihear-Regular.ttf": "f842aeace321c7f3ed05b9bce5ce3a8d",
"assets/packages/khmer_fonts/lib/src/fonts/Dangrek/Dangrek-Regular.ttf": "9761a03bae69841be9456f1a7b458047",
"assets/packages/khmer_fonts/lib/src/fonts/Metal/Metal-Regular.ttf": "e8109e53d77851064d2cb396c364c35b",
"assets/packages/khmer_fonts/lib/src/fonts/Nokora/Nokora-Regular.ttf": "34cad2904a238d9e4131d3c7b979bba5",
"assets/packages/khmer_fonts/lib/src/fonts/Nokora/Nokora-Bold.ttf": "bcb93d326c0b1c3d0ddd94791efede7f",
"assets/packages/khmer_fonts/lib/src/fonts/Moulpali/Moulpali-Regular.ttf": "b6f1fb7292636a37cfa175713037aa17",
"assets/packages/khmer_fonts/lib/src/fonts/Odor_Mean_Chey/OdorMeanChey-Regular.ttf": "888d830d45a4a285063097648b356758",
"assets/packages/khmer_fonts/lib/src/fonts/Content/Content-Bold.ttf": "cbd836605feb85369a3752cdf2b50bbe",
"assets/packages/khmer_fonts/lib/src/fonts/Content/Content-Regular.ttf": "d299148e167ea7591f150cfa2f8170d2",
"assets/packages/khmer_fonts/lib/src/fonts/Bayon/Bayon-Regular.ttf": "0d3182adbebb6fc2243122a553b6faf6",
"assets/packages/khmer_fonts/lib/src/fonts/Chenla/Chenla-Regular.ttf": "d2443adf905ab998fb3e4ad32f42faab",
"assets/packages/khmer_fonts/lib/src/fonts/Taprom/Taprom-Regular.ttf": "634d67e0b022341f0606acc1192bf7f3",
"assets/packages/khmer_fonts/lib/src/fonts/Battambang/Battambang-Bold.ttf": "02e3f317944b254e7909a0167631ac97",
"assets/packages/khmer_fonts/lib/src/fonts/Battambang/Battambang-Regular.ttf": "0af38f10ae3edd149636b62c628fc6e5",
"assets/packages/khmer_fonts/lib/src/fonts/Angkor/Angkor-Regular.ttf": "317e1e298aaa9650d1ec73bb19a48e64",
"assets/packages/khmer_fonts/lib/src/fonts/Khmer/Khmer-Regular.ttf": "e5278e93ad8cb71cb0bf8dc88186cb60",
"assets/packages/khmer_fonts/lib/src/fonts/Fasthand/Fasthand-Regular.ttf": "376427f0755459620a6c34763ec3e2f2",
"assets/packages/khmer_fonts/lib/src/fonts/Suwannaphum/Suwannaphum-Regular.ttf": "93fb4089b3626602469aba2cb0d78efe",
"assets/packages/khmer_fonts/lib/src/fonts/Freehand/Freehand-Regular.ttf": "dabc069df2a03655d3cca73529b71cc7",
"assets/packages/khmer_fonts/lib/src/fonts/Siemreap/Siemreap-Regular.ttf": "a0225d821ae388e76736a07a836a0cd5",
"assets/packages/khmer_fonts/lib/src/fonts/Koulen/Koulen-Regular.ttf": "ab810ff609031f784159e0b30a87bd3e",
"assets/packages/khmer_fonts/lib/src/fonts/Kantumruy/Kantumruy-Bold.ttf": "ae1fb765ff23d28d817efe3d2c1db866",
"assets/packages/khmer_fonts/lib/src/fonts/Kantumruy/Kantumruy-Light.ttf": "1f4045e5110db471ec79b0d662625e7e",
"assets/packages/khmer_fonts/lib/src/fonts/Kantumruy/Kantumruy-Regular.ttf": "e8e6d0e3c3758b072e15cccf70774f77",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "420ac67786ea398c624eb78b656cbdf5",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/background/gaden_flower_left_frame.mp4": "ca81f905da94572caad0bc7bedda7c26",
"assets/assets/background/groomandbride.mp4": "3da2e473498e6a6267bc5c58a0339ae9",
"assets/assets/background/gadan_flower.mp4": "b23ce5a4ed81dd71534531e56b4227c2",
"assets/assets/background/blue_frame.mp4": "f800c902ea245937e382be19364f9f3a",
"assets/assets/background/wedding_card_invitaion.mov": "d2567313c34c5044e06c1f9f48bbae0c",
"assets/assets/background/flower_frame.mp4": "84bdadaa209c142a1c69ac8d14301061",
"assets/assets/background/wedding_card.mp4": "6ce77c3ecd637042cbbb6205b8fe208c",
"assets/assets/background/3d_kbach.mp4": "c51bd834cf4ff294be51baa6d2672ebd",
"assets/assets/background/wedding_card_invitaion.mp4": "672288a387ff215a1154b0941061340c",
"assets/assets/background/3d_kbach.mov": "05922c15966d01ef796d1ed96a721692",
"assets/assets/music/beautifulInWhite.mp3": "410a727ddf8d37cab5ef6008e155182c",
"assets/assets/image/map.png": "b2c1cf2a920fcdf8dafe00438eca20b1",
"assets/assets/image/background_blur.png": "8c115117d7074cbc3a0b3535f6b6aa6a",
"assets/assets/image/background.png": "c740517c7fa87d006eeb68a80b039c82",
"assets/assets/image/image_GB.avif": "2ad62cf60725fe8d60fbb59aa8c169a8",
"assets/assets/image/s&v.png": "68ac4bf5c0d6a2f81934b7c21ebb12ea",
"assets/assets/image/prewedding/pre_wedding_3.jpg": "b122ab2875d57588a409a83118ec79ce",
"assets/assets/image/prewedding/pre_wedding_2.jpg": "c0f8475e0a59b8f7caf02ee33e27bd03",
"assets/assets/image/prewedding/pre_wedding_1.jpg": "9769d304206228486c70da09eaec3d93",
"assets/assets/image/prewedding/pre_wedding_5.jpg": "e3db69993bdcb82fc57c9a5390b656df",
"assets/assets/image/prewedding/pre_wedding_4.jpg": "5ab45f9ab6385998618facbdb24cf2f4",
"assets/assets/image/prewedding/pre_wedding_6.jpg": "a8a3e7f92dc5bd991eda3c544e9d791a",
"assets/assets/image/prewedding/pre_wedding_7.jpg": "472bdc7c7d11c03b6092bec3f3fe51ad",
"assets/assets/first_element/card.png": "fadd7049d89365ff8e97435e3f9988f2",
"assets/assets/first_element/invitaiontext.png": "e6a66b447366274a9b9198d0946d48a0",
"assets/assets/first_element/qraba.png": "726e71e7878f73055e3d75931026de0b",
"assets/assets/first_element/groom%2520and%2520bride.png": "25b49a139a33e3f61c7acddf3745c1dc",
"assets/assets/first_element/name.png": "658e76b10fbc117e6b620f7a8c7e7210",
"assets/assets/first_element/Subtract.png": "422fa953ed12ad52f4ce31c5c047ee8f",
"assets/assets/font/Angkor.ttf": "c211c833b4b306c1fc26aa2b24076496",
"assets/assets/font/Kh-Ang-Bokor-New-Version-2.00.ttf": "e897aba4111263aadd702049e62fa81c",
"assets/assets/font/Kh-Ang-Chittbous.ttf": "28e58e38f924a3fac2f31ae860402e16",
"assets/assets/font/Kh-Ang-Moul-Seda.ttf": "e6e64e5bd49970edf0a3a58efd3247fe",
"assets/assets/icon/medium-volume.png": "23f9962a6089786e82c2564eb68d1251",
"assets/assets/icon/volume-mute.png": "9d38ffc16be7df185340af11bc43d406",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
