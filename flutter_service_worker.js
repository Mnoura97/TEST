'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "14dc7a6aed6020e9ed30998c5227ed4e",
"assets/AssetManifest.bin.json": "c5d9897a504bb70c0769fbeae31d013f",
"assets/AssetManifest.json": "22fb376413a8fd95480918577d520719",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "2cd0afcb83d16419cc58d0679811f109",
"assets/lib/Animation/1.json": "6607f93fe9a759cfb6f7c0ffab8318bf",
"assets/lib/Animation/10.json": "4af5fbece3f2ca303428bfe5661d872b",
"assets/lib/Animation/11.json": "38bfad35ee3d6a7d259595014f9bd8da",
"assets/lib/Animation/12.json": "4af5fbece3f2ca303428bfe5661d872b",
"assets/lib/Animation/13.json": "c389b1e360fe9063798109afc6875c88",
"assets/lib/Animation/2.json": "e041fa14d27485d2c044e42d4985c556",
"assets/lib/Animation/3.json": "05fb7331f780f6c1ba50694fdabdfb37",
"assets/lib/Animation/4.json": "d3bd8be0438f7475168417bc799b12c9",
"assets/lib/Animation/5.json": "e428163605de1e002269157c96ae6c10",
"assets/lib/Animation/6.json": "4fc14891394252df86b94e35c487f4cc",
"assets/lib/Animation/7.json": "34d9e795f76927c0759e428e03982351",
"assets/lib/Animation/8.json": "f70bd7f04b3300e11ce5b0304d05df6f",
"assets/lib/Animation/9.json": "658c8e423ef02f8e99cc14aa75dd2608",
"assets/lib/Images/abhishek-hajare-pvpugAWd6_g-unsplash.jpg": "8aca217098010376b8d4789af6f17a7e",
"assets/lib/Images/b1.jpg": "b531fa38d141f4bffe683e6b03c15e65",
"assets/lib/Images/b2.jpg": "6b07e27ed133b8799232da185fddbd70",
"assets/lib/Images/beerP.png": "e8a4242d3401ef69c7c9d604d33b3cca",
"assets/lib/Images/bo1.jpg": "8fd20f915c5e0fb0ed182c9dfda3dc29",
"assets/lib/Images/bo2.png": "ad0d76d750fca633c7ff933327d3e7d8",
"assets/lib/Images/coctailP.png": "60fd804e680778a3347b81f9eba627ca",
"assets/lib/Images/facebook.png": "8c89ef8ab45d47ae9a954822532889f7",
"assets/lib/Images/google.png": "ca2f7db280e9c773e341589a81c15082",
"assets/lib/Images/Mboa_logo.png": "892a542128480d3eef36b9dfbfd4c918",
"assets/lib/Images/p1.jpg": "6c0bce27fe435cd7988889e003c15f38",
"assets/lib/Images/p2.jpg": "553ae6df1e6883c8b209af9afb03931d",
"assets/lib/Images/pizzaP.png": "a3570c72dbfa426314567e68be888750",
"assets/lib/Images/poissonP.png": "5d81a82ab6f5c39cdd5992ce2047af66",
"assets/lib/Images/pouletP.png": "078180fb77df60bd047a545730ff4a59",
"assets/lib/Images/robin-stickel-tzl1UCXg5Es-unsplash.jpg": "cce3d4dabd84240ac1017cf50445f940",
"assets/lib/Images/sodaP.png": "958ba4f8af7b934061c1590ac5c7755d",
"assets/lib/Images/tacoP.png": "9f801dda53bad631495ff5a1128831ff",
"assets/lib/Images/teaP.png": "df205a561fc2538b215f197f39b6758b",
"assets/lib/Images/test1.jpg": "553ae6df1e6883c8b209af9afb03931d",
"assets/lib/Images/test2.jpg": "cce3d4dabd84240ac1017cf50445f940",
"assets/lib/Images/waterP.png": "0d61c68579587314aa0b673f55fc5220",
"assets/NOTICES": "ef5e4cfe297583a94f5994509fdfc772",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "d1a198627cb8584bf4653b7220c93171",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ba55d238f918afc4568b0092da5d596a",
"/": "ba55d238f918afc4568b0092da5d596a",
"main.dart.js": "b0c962aedcda6c19ad5963400429ae2f",
"manifest.json": "c4ac302aa37f859e9a11c1f8b2aa4308",
"version.json": "6d91760d048e9465fcea625c5cd69610"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
