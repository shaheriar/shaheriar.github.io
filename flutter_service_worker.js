'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d89e9d99d2227022f49c60ed1a3714e6",
".git/config": "29e7d9411b7562d3f149af4f846816b7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "794c57823090a5e35254eed971ea038f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9f492bcb52146d1af3a25913a8a3509a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fa370db06da9f210c409fc4a49036ffa",
".git/logs/refs/heads/master": "fa370db06da9f210c409fc4a49036ffa",
".git/logs/refs/remotes/origin/HEAD": "8c9396199134bf61e7472980aadcc93d",
".git/logs/refs/remotes/origin/master": "e361ad3cef61fc9b5e4bd360bacd61d6",
".git/objects/00/0600b05a8afe02ef2bbeb1b843ab374d3436c2": "adf1c1d73c7d398473a64e233ad05464",
".git/objects/10/fcecbf76279faa53f7362bf1c397f27cdb3870": "373ce4cdfb0c364286eaf14b3b9872fe",
".git/objects/18/2a1a3f734fc1b7d712c68b04c29bad9460d6cd": "1bba1f4a35d54be68a427791a2795d4d",
".git/objects/1c/71f0e2a185d0d05adb2ef3dc359e2b4192d0e3": "84874ee2d9ae0136488c249fe4069ea2",
".git/objects/28/46aa56a1667ec89d6813bb1a83cb16d5700d87": "15a08fcfa55c7143c69b838895f16ec9",
".git/objects/2c/71000b217d2dcdb1ab330f9e9fbbc2f09816b9": "eb5064f2f9e52c1cba9d4f4bb02f6663",
".git/objects/31/c6b57869f4a14fda5fdcfed9a4873378142639": "4b883762f2ecc0d2ffc18e7be1cdafe7",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/37/df17e585fe159d67ff1c70be2764b4a8509592": "14b2ddec95d9918c62d491a0996a3435",
".git/objects/3f/f086196b52da10c43acc3bbf8c63c7ba689dc9": "ce66ad1ffb8d295d44b0dbf6bf47a5cd",
".git/objects/41/de371282faa789516c3cfe544cd030012dbfcc": "db453a310930a9dd1e30ca2cbef66631",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/e55644f0e9159833857b8166b6895539a2100f": "c585bffc9d31e92b9015556220e4785c",
".git/objects/50/8f5129957229698e9fdf3ecc68f5596907a2bf": "509f8ee665633a8016f8a0199fe35195",
".git/objects/51/5f5ec3ab42fbe51c0b805baf2cb8e3e5a22cd8": "11185251b3754d1ab2f96ffd6610fcdf",
".git/objects/53/b55c4903e4f74f74fa876edc2ea76b2dc2a9a4": "9f230e32c4e348371b80a1b02de94009",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/83ba2b9157c8c16f1fb5a0ee1ea1880c3e711e": "6a449b9e490dc8741266f6d35fced89c",
".git/objects/5a/bd8206ef6c4a8a333eb08e59389e8aa79174eb": "694bdbb875526b3dc50310ea64d383dd",
".git/objects/61/1ad5cd80d30f232062109f2ec87b9db08a78a4": "123953a7cc326ec8bab33180da323b13",
".git/objects/61/5306057f3656df1e158ecc0f85ad596015114d": "94c4558c5f9d37700d7420a1a24c17f0",
".git/objects/65/9aac4de229e5fe5711ecd982010f4a6df71774": "85bc6a8594c885d1d509b32842767bfa",
".git/objects/68/559b3b377fe3ba470750af88f4cfdd4c771c29": "c4437d085b25eabb18b9b9a5fea2ba0e",
".git/objects/69/60241becf5ad52dc09bff0947b8ad09304836f": "8f07578c915abe59acc25e66be1b70e5",
".git/objects/71/8d2d7ad9be5d670dcdd495a59b1ce4a33213d4": "7f69465191eb2bc680a42871ffc83b37",
".git/objects/74/d32dce4b4eede888bc5bce8d7a49f1fef33d51": "24f9546dbbc54765cdc4092054ca625d",
".git/objects/78/7274a3ddb051b3c08e89f825ea0dfb5145c5cb": "fba4a960e644a5fdfc858ead5ae62259",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/f7f3e8f4248bf7c502958c106d8f5e425a1498": "8c85fe3642b6e470a83a95fbb33b4622",
".git/objects/84/daa59531af59308838670dc8eb8e2005fd3c36": "0cbfed186f572b5897533eb015d792b4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/94/21253b24970eaa82204febd8cbb6d14471a102": "36846613505ebfc1d156dab95c06fcbb",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9f/ba5db99be202e36686d19d6c44e3e940f3f7bb": "6da8bbad7cb24382a6fd1fac63019094",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/c8bb3e52095c37e817068208d1ac6f6d4239e0": "deeaa0d408681ae841410ef073cfab6c",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/600525b2881a3f072eed4e93d79a959d00e739": "d4cd9c9dce19b5733b060cce6dd8509e",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b2/0abb7cbb2903c45280ba3540710669aeb63163": "a629fde4c1b5ed215204db722ee298c4",
".git/objects/b2/5ac374a6a6e59aedd6c85bda15b6558e3d86ad": "05292b60b2b05d670df18f6605d6da63",
".git/objects/b3/62f8471bb957bc8bd4701a3af06113d3016a63": "4284f0d705994bbcf08237d176591e14",
".git/objects/b3/930d0f047184047cb81d620436d91653438b8b": "9d09645a75a5ad76ac1f24061e4d2c60",
".git/objects/b6/28de1855902f589926fd75dea245e8cd979022": "9c1a2d564bc7c5744787ac004fc852b6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/d6471b8742bb5e753bacb3b902a421643d9c4a": "bc5cfafcaaf2609f9be08eb5d68d7a91",
".git/objects/b9/080a2968f3f1a0da46a84a575f98ed77f1500f": "20ffcb99e1b89cc742a85e4548d0aa69",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/1e6f7d603225866bda9a68158093f097f76aaf": "3e0079decc398088233958496eea10b2",
".git/objects/bd/72fd160510da7c0fcb5727f0aac83d3a760674": "f501af4f2d19508f6a16eab5d9e32fdf",
".git/objects/c3/65a2a112c52ab7d8a270e063536c17818678b4": "d9a049b97ab998db41a13cffe867899c",
".git/objects/c4/7cf12568c30385088839675b9951a0bfe0b729": "e65bc1fbf38c8fd791fb09b4b75ea0ba",
".git/objects/c7/3c2764e47703c73bd5164ffe013808c714ae3a": "99635352787bad664e50903645bc8b49",
".git/objects/c8/285582ba4a92de47ba88f2b137d7f11655f2f7": "0022a96499adef51e859e3344f19b473",
".git/objects/ca/2a2a6061684a9f6becd7fb339b45ebbacd06b6": "b64965dc14680ab5333cb36f1f91dff9",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/39f62ead268d16c61ed6e316e3967de3fda874": "429173f282b72eb1371dca512d598610",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/91f12be84820ccae34b4dde6f64141f224096d": "fe7e4b42e51ad51364da5ba01343f567",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/2c66527d6676e3aec38daf261de7f6669abc8b": "2c4a2b3f453af9201b543b733f357a47",
".git/objects/f8/5c757a8883a83506413db8178bd51be363e2a1": "1d727fd3e251ab0a0b31282a7aa89f3b",
".git/objects/fb/df923fca5bb91869b523d67e0ebbfc3bf56643": "5f997ad3db44b7243649c2dfb3cc19a4",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/pack/pack-fb6d498fc9de47e0d858e536ef54a9aa78af08d1.idx": "df0aa65850df7c4f0cd46f47080fa189",
".git/objects/pack/pack-fb6d498fc9de47e0d858e536ef54a9aa78af08d1.pack": "2705252e6911dc536e5e29851a3061a3",
".git/packed-refs": "009769577679d910bf71d5a70bcb96fd",
".git/refs/heads/master": "8d7ad76667543c46bbb7c0219122c046",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "8d7ad76667543c46bbb7c0219122c046",
"android-chrome-192x192.png": "f384514c09356fe6310c5e09c07ae946",
"android-chrome-512x512.png": "11365bcdba6523aea0cab6f4ef841306",
"apple-touch-icon.png": "5a0403952460dde3c13e1047273f9472",
"assets/AssetManifest.json": "30c3ac4e3af78d1dc55d0873ce0b621a",
"assets/assets/data.json": "3de6dee702fec8b0a2ffbb4322b4242f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/github.png": "438c17272c5f0e9f4a6da34d3e4bc5bd",
"assets/images/linkedin.png": "67a1516b3d976882952ab698d760aafe",
"assets/images/wallpaper.png": "0c7243e7e119151cdd0ab57088842a76",
"assets/NOTICES": "a984bc536bcf51a96951bf4214d68acf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon-16x16.png": "04302e49b33624bca430864aecf039e9",
"favicon-32x32.png": "b42d4e341f6f5d47c53da47cc55f9788",
"favicon.ico": "f029f2d619f16335ca061057ce5c25ea",
"favicon.png": "458ff969572f76c31370dde04f675ea3",
"index.html": "331c3aa5dc0f775d468be805151be1f5",
"/": "331c3aa5dc0f775d468be805151be1f5",
"main.dart.js": "26b670b3dca8bc45d78df130fd889098",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"mstile-150x150.png": "144fe218abb49ff78b889a90636c0328",
"site.webmanifest": "b9aa277fcfc34c31db6c7a7ea3469b8c",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
