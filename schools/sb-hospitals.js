/* Hospitals and freestanding ERs serving the 10 Sean & Barb markets
   (Orange + Seminole counties). Verified via Google Places, July 2026.
   type: "hospital" = acute-care hospital campus, "er" = freestanding ER.
   Hospital-attached ERs are covered by their hospital pin and not duplicated.
   Urgent care centers (Centra Care, MD Now) are intentionally excluded.
   Single source for the map hospital layer sitewide. */
window.SB_HOSPITALS = [
{"name":"AdventHealth Orlando","system":"AdventHealth","type":"hospital","address":"601 E Rollins St, Orlando, FL 32803","lat":28.5751,"lng":-81.3697,"phone":"(407) 303-5600"},
{"name":"Orlando Health Orlando Regional Medical Center","system":"Orlando Health","type":"hospital","address":"52 W Underwood St, Orlando, FL 32806","lat":28.5265,"lng":-81.3779,"phone":"(321) 841-5111"},
{"name":"Orlando Health Arnold Palmer Hospital for Children","system":"Orlando Health","type":"hospital","address":"92 W Miller St, Orlando, FL 32806","lat":28.5237,"lng":-81.3798,"phone":"(407) 649-9111"},
{"name":"Orlando Health Winnie Palmer Hospital for Women & Babies","system":"Orlando Health","type":"hospital","address":"83 W Miller St, Orlando, FL 32806","lat":28.5244,"lng":-81.3793,"phone":"(321) 841-5274"},
{"name":"Orlando Health Dr. P. Phillips Hospital","system":"Orlando Health","type":"hospital","address":"9400 Turkey Lake Rd, Orlando, FL 32819","lat":28.4292,"lng":-81.4785,"phone":"(407) 351-8500"},
{"name":"Orlando Health Horizon West Hospital","system":"Orlando Health","type":"hospital","address":"17000 Porter Rd, Winter Garden, FL 34787","lat":28.4583,"lng":-81.6337,"phone":"(407) 407-0000"},
{"name":"Orlando Health Health Central Hospital","system":"Orlando Health","type":"hospital","address":"10000 W Colonial Dr, Ocoee, FL 34761","lat":28.5498,"lng":-81.5279,"phone":"(407) 296-1000"},
{"name":"Orlando Health Lake Mary Hospital","system":"Orlando Health","type":"hospital","address":"380 Rinehart Rd, Lake Mary, FL 32746","lat":28.7684,"lng":-81.3494,"phone":"(407) 767-1200"},
{"name":"Orlando Health South Seminole Hospital","system":"Orlando Health","type":"hospital","address":"555 W State Rd 434, Longwood, FL 32750","lat":28.6990,"lng":-81.3528,"phone":"(407) 767-5888"},
{"name":"AdventHealth East Orlando","system":"AdventHealth","type":"hospital","address":"7727 Lake Underhill Rd, Orlando, FL 32822","lat":28.5404,"lng":-81.2804,"phone":"(407) 303-8110"},
{"name":"AdventHealth Winter Park","system":"AdventHealth","type":"hospital","address":"200 N Lakemont Ave, Winter Park, FL 32792","lat":28.5984,"lng":-81.3269,"phone":"(407) 646-7000"},
{"name":"AdventHealth Altamonte Springs","system":"AdventHealth","type":"hospital","address":"601 E Altamonte Dr, Altamonte Springs, FL 32701","lat":28.6657,"lng":-81.3694,"phone":"(407) 303-2200"},
{"name":"AdventHealth Winter Garden","system":"AdventHealth","type":"hospital","address":"2000 Fowler Grove Blvd, Winter Garden, FL 34787","lat":28.5243,"lng":-81.5893,"phone":"(407) 614-0500"},
{"name":"UCF Lake Nona Hospital","system":"HCA Florida","type":"hospital","address":"6700 Lake Nona Blvd, Orlando, FL 32827","lat":28.3679,"lng":-81.2857,"phone":"(689) 216-8000"},
{"name":"Oviedo Medical Center","system":"HCA Florida","type":"hospital","address":"8300 Red Bug Lake Rd, Oviedo, FL 32765","lat":28.6580,"lng":-81.2281,"phone":"(407) 890-2273"},
{"name":"HCA Florida Lake Monroe Hospital","system":"HCA Florida","type":"hospital","address":"1401 W Seminole Blvd, Sanford, FL 32771","lat":28.8147,"lng":-81.2836,"phone":"(407) 321-4500"},
{"name":"Nemours Children's Hospital, Florida","system":"Nemours","type":"hospital","address":"6535 Nemours Pkwy, Orlando, FL 32827","lat":28.3765,"lng":-81.2724,"phone":"(407) 567-4000"},
{"name":"Orlando VA Medical Center","system":"VA","type":"hospital","address":"13800 Veterans Way, Orlando, FL 32827","lat":28.3660,"lng":-81.2760,"phone":"(407) 631-1000"},
{"name":"Orlando Health Emergency Room - Randal Park","system":"Orlando Health","type":"er","address":"10155 Dowden Rd, Orlando, FL 32832","lat":28.4293,"lng":-81.2320,"phone":"(321) 842-2280"},
{"name":"AdventHealth Lake Nona ER","system":"AdventHealth","type":"er","address":"10080 Lake Nona Blvd, Orlando, FL 32827","lat":28.4040,"lng":-81.2454,"phone":"(321) 340-4100"},
{"name":"AdventHealth Meadow Woods ER","system":"AdventHealth","type":"er","address":"12242 S Orange Ave, Orlando, FL 32824","lat":28.3887,"lng":-81.3758,"phone":"(407) 502-4301"},
{"name":"HCA Florida Downtown Emergency","system":"HCA Florida","type":"er","address":"719 Peachtree Rd, Orlando, FL 32804","lat":28.5538,"lng":-81.3845,"phone":"(689) 344-5900"},
{"name":"HCA Florida Millenia Emergency","system":"HCA Florida","type":"er","address":"4056 Millenia Blvd, Orlando, FL 32839","lat":28.4914,"lng":-81.4277,"phone":"(407) 393-9800"},
{"name":"HCA Florida Baldwin Park Emergency","system":"HCA Florida","type":"er","address":"2361 N Semoran Blvd, Orlando, FL 32807","lat":28.5781,"lng":-81.3085,"phone":"(407) 677-2400"},
{"name":"HCA Florida West Orange Emergency","system":"HCA Florida","type":"er","address":"1320 Daniels Rd, Winter Garden, FL 34787","lat":28.5486,"lng":-81.5835,"phone":"(689) 407-3900"},
{"name":"AdventHealth Four Corners ER","system":"AdventHealth","type":"er","address":"17430 Bali Blvd, Winter Garden, FL 34787","lat":28.3475,"lng":-81.6492,"phone":"(863) 422-5582"},
{"name":"AdventHealth Oviedo ER","system":"AdventHealth","type":"er","address":"8100 Red Bug Lake Rd, Oviedo, FL 32765","lat":28.6571,"lng":-81.2387,"phone":"(407) 977-2320"},
{"name":"AdventHealth Lake Mary ER","system":"AdventHealth","type":"er","address":"950 Rinehart Rd, Lake Mary, FL 32746","lat":28.7834,"lng":-81.3483,"phone":"(321) 363-0400"}
];
