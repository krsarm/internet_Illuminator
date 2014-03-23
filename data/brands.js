var brands = [
{ brand: "Act II", parent: "ConAgra" },
{ brand: "Alexia", parent: "ConAgra" },
{ brand: "Andy Capp's fries", parent: "ConAgra" },
{ brand: "Angela Mia", parent: "ConAgra" },
{ brand: "Award Cuisine", parent: "ConAgra" },
{ brand: "Banquet", parent: "ConAgra" },
{ brand: "Big Mama Sausage", parent: "ConAgra" },
{ brand: "Blue Bonnet", parent: "ConAgra" },
{ brand: "Chef Boyardee", parent: "ConAgra" },
{ brand: "Chiffon margarine", parent: "ConAgra" },
{ brand: "Chun King", parent: "ConAgra" },
{ brand: "ConAgra Mills", parent: "ConAgra" },
{ brand: "Crunch 'n Munch", parent: "ConAgra" },
{ brand: "David Sunflower Seeds", parent: "ConAgra" },
{ brand: "Dennison's", parent: "ConAgra" },
{ brand: "Eagle Mills with Ultragrain", parent: "ConAgra" },
{ brand: "Egg Beaters", parent: "ConAgra" },
{ brand: "Fernando's", parent: "ConAgra" },
{ brand: "Fiddle Faddle", parent: "ConAgra" },
{ brand: "Fleischmann's", parent: "ConAgra" },
{ brand: "Gebhardt", parent: "ConAgra" },
{ brand: "Golden Cuisine", parent: "ConAgra" },
{ brand: "Gulden's", parent: "ConAgra" },
{ brand: "Healthy Choice", parent: "ConAgra" },
{ brand: "Hebrew National", parent: "ConAgra" },
{ brand: "Hunt's", parent: "ConAgra" },
{ brand: "Hunt's Snack Pack", parent: "ConAgra" },
{ brand: "J. Hungerford Smith", parent: "ConAgra" },
{ brand: "J.M. Swank", parent: "ConAgra" },
{ brand: "Jiffy Pop", parent: "ConAgra" },
{ brand: "Kid Cuisine", parent: "ConAgra" },
{ brand: "La Choy", parent: "ConAgra" },
{ brand: "Lamb Weston", parent: "ConAgra" },
{ brand: "Lamb Weston Inland Valley", parent: "ConAgra" },
{ brand: "Lightlife", parent: "ConAgra" },
{ brand: "Luck's Incorporated", parent: "ConAgra" },
{ brand: "Manwich", parent: "ConAgra" },
{ brand: "Marie Callender's", parent: "ConAgra" },
{ brand: "Move Over Butter", parent: "ConAgra" },
{ brand: "Orville Redenbacher's", parent: "ConAgra" },
{ brand: "PAM", parent: "ConAgra" },
{ brand: "Parkay", parent: "ConAgra" },
{ brand: "Patio", parent: "ConAgra" },
{ brand: "Pemmican", parent: "ConAgra" },
{ brand: "Penrose", parent: "ConAgra" },
{ brand: "Poppycock", parent: "ConAgra" },
{ brand: "Ranch Style", parent: "ConAgra" },
{ brand: "Reddi-wip", parent: "ConAgra" },
{ brand: "Ro-Tel", parent: "ConAgra" },
{ brand: "Rosarita", parent: "ConAgra" },
{ brand: "Screaming Yellow Zonkers", parent: "ConAgra" },
{ brand: "Slim Jim", parent: "ConAgra" },
{ brand: "Swiss Miss", parent: "ConAgra" },
{ brand: "Squeez 'N Go", parent: "ConAgra" },
{ brand: "The MAX", parent: "ConAgra" },
{ brand: "Van Camp's", parent: "ConAgra" },
{ brand: "Vogel Popcorn", parent: "ConAgra" },
{ brand: "Wesson", parent: "ConAgra" },
{ brand: "Wolf Brand Chili", parent: "ConAgra" },
{ brand: "Ades or Adez", parent: "Unilever" }, 
{ brand: "Alsa", parent: "Unilever" }, 
{ brand: "Amino", parent: "Unilever" }, 
{ brand: "Amora", parent: "Unilever" }, 
{ brand: "Annapurna", parent: "Unilever" }, 
{ brand: "Becel", parent: "Unilever" }, 
{ brand: "Ben & Jerry's", parent: "Unilever" }, 
{ brand: "Best Foods", parent: "Unilever" }, 
{ brand: "BiFi", parent: "Unilever" }, 
{ brand: "Blue Band", parent: "Unilever" }, 
{ brand: "Bovril", parent: "Unilever" }, 
{ brand: "Breyers", parent: "Unilever" }, 
{ brand: "Brooke Bond", parent: "Unilever" }, 
{ brand: "Bru", parent: "Unilever" }, 
{ brand: "Brummel & Brown", parent: "Unilever" }, 
{ brand: "Bushells", parent: "Unilever" }, 
{ brand: "Calvé", parent: "Unilever" }, 
{ brand: "Chicken Tonight", parent: "Unilever" }, 
{ brand: "Choysa", parent: "Unilever" }, 
{ brand: "Colman's", parent: "Unilever" }, 
{ brand: "Conimex", parent: "Unilever" }, 
{ brand: "Continental", parent: "Unilever" }, 
{ brand: "Country Crock", parent: "Unilever" }, 
{ brand: "Darko (Дарко)", parent: "Unilever" }, 
{ brand: "Delma", parent: "Unilever" }, 
{ brand: "Du Darfst", parent: "Unilever" }, 
{ brand: "Elmlea", parent: "Unilever" }, 
{ brand: "Fanacoa", parent: "Unilever" }, 
{ brand: "Flora", parent: "Unilever" }, 
{ brand: "Fruco", parent: "Unilever" }, 
{ brand: "Fudgsicl", parent: "Unilever" },
{ brand: "Heartbrand", parent: "Unilever" }, 
{ brand: "Hellmann's", parent: "Unilever" }, 
{ brand: "I Can't Believe It's Not Butter", parent: "Unilever" }, 
{ brand: "Imperial Margarine", parent: "Unilever" }, 
{ brand: "Jif Lemon & Lime Juice", parent: "Unilever" },
{ brand: "Kasia", parent: "Unilever" }, 
{ brand: "Kecap Bango", parent: "Unilever" }, 
{ brand: "Kissan", parent: "Unilever" }, 
{ brand: "Klondike", parent: "Unilever" }, 
{ brand: "Knorr (Knorr-Suiza in Argentina)", parent: "Unilever" }, 
{ brand: "Lady's Choice", parent: "Unilever" }, 
{ brand: "Lan-Choo", parent: "Unilever" }, 
{ brand: "Lao Cai Seasoning", parent: "Unilever" },
{ brand: "Lipton", parent: "Unilever" }, 
{ brand: "Lipton Ice Tea", parent: "Unilever" }, 
{ brand: "Lizano Sauce (Salsa Lizano)", parent: "Unilever" }, 
{ brand: "Lyons", parent: "Unilever" }, 
{ brand: "Maille", parent: "Unilever" }, 
{ brand: "Maizena", parent: "Unilever" }, 
{ brand: "Marmite", parent: "Unilever" }, 
{ brand: "McCollins", parent: "Unilever" }, 
{ brand: "Mrs. Filbert's", parent: "Unilever" }, 
{ brand: "Paddle pop", parent: "Unilever" }, 
{ brand: "Peperami", parent: "Unilever" }, 
{ brand: "Pfanni", parent: "Unilever" }, 
{ brand: "PG Tips", parent: "Unilever" }, 
{ brand: "Phase", parent: "Unilever" }, 
{ brand: "Planta", parent: "Unilever" }, 
{ brand: "Popsicle", parent: "Unilever" }, 
{ brand: "Pot Noodle", parent: "Unilever" }, 
{ brand: "Promise", parent: "Unilever" }, 
{ brand: "Ragú", parent: "Unilever" }, 
{ brand: "Rama", parent: "Unilever" }, 
{ brand: "Red Rose Tea", parent: "Unilever" }, 
{ brand: "Royco", parent: "Unilever" }, 
{ brand: "Saga", parent: "Unilever" }, 
{ brand: "Sana", parent: "Unilever" }, 
{ brand: "Sariwangi", parent: "Unilever" }, 
{ brand: "Scottish Blend", parent: "Unilever" }, 
{ brand: "Slim•Fast", parent: "Unilever" }, 
{ brand: "Slotts", parent: "Unilever" }, 
{ brand: "Stork margarine", parent: "Unilever" },
{ brand: "Sunce (Sun)", parent: "Unilever" }, 
{ brand: "Tortex", parent: "Unilever" }, 
{ brand: "Tulipan Margarine", parent: "Unilever" },
{ brand: "Turun sinappi", parent: "Unilever" }, 
{ brand: "Unilever Food Solutions", parent: "Unilever" }, 
{ brand: "Unox", parent: "Unilever" }, 
{ brand: "Vaqueiro", parent: "Unilever" },
{ brand: "Axe Body Spray", parent: "Unilever" },
{ brand: "Blue Band", parent: "Unilever" },
{ brand: "Dove", parent: "Unilever" },
{ brand: "Flora/Becel", parent: "Unilever" },
{ brand: "Heartbrand", parent: "Unilever" },
{ brand: "Hellmann's and Best Foods", parent: "Unilever" },
{ brand: "Knorr", parent: "Unilever" },
{ brand: "Lux soap", parent: "Unilever" },
{ brand: "Omo", parent: "Unilever" },
{ brand: "Rexona", parent: "Unilever" },
{ brand: "Surf", parent: "Unilever" },
{ brand: "Sunsilk", parent: "Unilever" },
{ brand: "A&E", parent: "Disney/Hearst" },
{ brand: "History Channel", parent: "Disney/Hearst" },
{ brand: "H2 Channel", parent: "Disney/Hearst" },
{ brand: "Military History", parent: "Disney/Hearst" },
{ brand: "Crime & Investigation Network", parent: "Disney/Hearst" },
{ brand: "A+E Networks International", parent: "Disney/Hearst" },
{ brand: "A+E Networks Consumer Products", parent: "Disney/Hearst" },
{ brand: "A+E Studios", parent: "Disney/Hearst" },
{ brand: "A&E IndieFilms", parent: "Disney/Hearst" },
{ brand: "A+E Films", parent: "Disney/Hearst" },
{ brand: "A+E Networks Digital", parent: "Disney/Hearst" },
{ brand: "Lifetime Entertainment Services", parent: "Disney/Hearst" },
{ brand: "Lifetime", parent: "Disney/Hearst" },
{ brand: "Lifetime Movie Network", parent: "Disney/Hearst" },
{ brand: "Lifetime Real Women", parent: "Disney/Hearst" },
{ brand: "Lifetime Press", parent: "Disney/Hearst" },
{ brand: "Lifetime Digital", parent: "Disney/Hearst" },
{ brand: "myLifetime.com", parent: "Disney/Hearst" },
{ brand: "LMN.tv", parent: "Disney/Hearst" },
{ brand: "Lifetime Games", parent: "Disney/Hearst" },
{ brand: "Roiworld.com", parent: "Disney/Hearst" },
{ brand: "DressUpChallenge.com", parent: "Disney/Hearst" },
{ brand: "LifetimeMoms.com", parent: "Disney/Hearst" },
{ brand: "MothersClick.com", parent: "Disney/Hearst" },
{ brand: "Dlife TV channel", parent: "Disney" },
{ brand: "UTV Software Communications ", parent: "Disney" },
{ brand: "UTV Communications (USA) LLC", parent: "Disney" },
{ brand: "IG Interactive Entertainment Ltd", parent: "Disney" },
{ brand: "UTV Global Broadcasting Ltd", parent: "Disney" },
{ brand: "UTV TV Content Ltd", parent: "Disney" },
{ brand: "UTV Games Ltd", parent: "Disney" },
{ brand: "First Future Agri & Developers Ltd", parent: "Disney" },
{ brand: "UTV New Media Ltd", parent: "Disney" },
{ brand: "Indiagames Ltd", parent: "Disney" },
{ brand: "Ignition Entertainment Ltd", parent: "Disney" },
{ brand: "True Games Interactive", parent: "Disney" },
{ brand: "Genx Entertainment Ltd", parent: "Disney" },
{ brand: "UTV Entertainment Television Ltd", parent: "Disney" },
{ brand: "UTV Tele-Talkies Ltd", parent: "Disney" },
{ brand: "RB Entertainment Ltd", parent: "Disney" },
{ brand: "Vikatan UTV Content Ltd", parent: "Disney" },
{ brand: "Screenshot Television Ltd.", parent: "Disney" },
{ brand: "El Capitan Theatre", parent: "Disney" },
{ brand: "Times Square Studios", parent: "Disney" },
{ brand: "Silver Creek Pictures", parent: "Disney" },
{ brand: "Catalyst Investments, LLC ", parent: "Disney" },
{ brand: "Reedy Creek Energy Services", parent: "Disney" },
{ brand: "BVCC (Buena Vista Construction Company) ", parent: "Disney" },
{ brand: "Axman Realty Corp.", parent: "Disney" },
{ brand: "Boss Realty", parent: "Disney" },
{ brand: "Commercial Apartment Properties", parent: "Disney" },
{ brand: "The Celebration Co.", parent: "Disney" },
{ brand: "Disney Realty", parent: "Disney" },
{ brand: "Dutchman Realty", parent: "Disney" },
{ brand: "The Dolphin Hotel", parent: "Disney" },
{ brand: "Homestead Homes", parent: "Disney" },
{ brand: "The Little Lake Bryan Co.", parent: "Disney" },
{ brand: "Maple Leaf Commercial Properties", parent: "Disney" },
{ brand: "The Swan Hotel", parent: "Disney" },
{ brand: "Walt Disney Properties Corp.", parent: "Disney" },
{ brand: "Buena Vista Street, Burbank CA", parent: "Disney" },
{ brand: "Pine Woods Properties", parent: "Disney" },
{ brand: "Holmes Houses", parent: "Disney" },
{ brand: "Key Bridge Properties", parent: "Disney" },
{ brand: "Florida properties", parent: "Disney" },
{ brand: "Lake Bryan", parent: "Disney" },
{ brand: "Madeira Land Co.", parent: "Disney" },
{ brand: "Magnolia Creek Development Co.", parent: "Disney" },
{ brand: "New Amsterdam Theatre", parent: "Disney" },
{ brand: "New Amsterdam Development Corp.", parent: "Disney" },
{ brand: "New Amsterdam Theatrical Productions", parent: "Disney" },
{ brand: "Baynote", parent: "Disney" },
{ brand: "EdgeCast", parent: "Disney" },
{ brand: "Elemental Technologies", parent: "Disney" },
{ brand: "EMN8", parent: "Disney" },
{ brand: "Fanzter", parent: "Disney" },
{ brand: "Fastclick", parent: "Disney" },
{ brand: "FreeWheel", parent: "Disney" },
{ brand: "GameSalad", parent: "Disney" },
{ brand: "GoPro", parent: "Disney" },
{ brand: "Greystripe", parent: "Disney" },
{ brand: "Kapow Software", parent: "Disney" },
{ brand: "MediaBank", parent: "Disney" },
{ brand: "MerchantCircle", parent: "Disney" },
{ brand: "Passenger", parent: "Disney" },
{ brand: "Photobucket", parent: "Disney" },
{ brand: "RazorGator", parent: "Disney" },
{ brand: "Vobile", parent: "Disney" },
{ brand: "VoodooVox", parent: "Disney" },
{ brand: "Zettics", parent: "Disney" },
{ brand: "51Fanli", parent: "Disney" },
{ brand: "Bokecc", parent: "Disney" },
{ brand: "Cocoa China", parent: "Disney" },
{ brand: "Gridsum Technology", parent: "Disney" },
{ brand: "Netmovie", parent: "Disney" },
{ brand: "Shangpin", parent: "Disney" },
{ brand: "Troodon", parent: "Disney" },
{ brand: "UUSee", parent: "Disney" },
{ brand: "Yoyi Media", parent: "Disney" },
{ brand: "Animation Collectors", parent: "Disney" },
{ brand: "Berl Holding Co.", parent: "Disney" },
{ brand: "Billy B. Productions", parent: "Disney" },
{ brand: "Bird-In-Hand Woodworks", parent: "Disney" },
{ brand: "Devonson Corp.", parent: "Disney" },
{ brand: "Entertainment Development", parent: "Disney" },
{ brand: "Film Brothers Property Corp.", parent: "Disney" },
{ brand: "From Time to Time", parent: "Disney" },
{ brand: "Hardware Distribution", parent: "Disney" },
{ brand: "Hodi Investments", parent: "Disney" },
{ brand: "Hughes Flying Boat Corp.", parent: "Disney" },
{ brand: "Kelly Management", parent: "Disney" },
{ brand: "One For All Productions", parent: "Disney" },
{ brand: "Stakeout Two Productions", parent: "Disney" },
{ brand: "Theme Park Productions", parent: "Disney" },
{ brand: "Toon Town", parent: "Disney" },
{ brand: "Voice Quality Coordination", parent: "Disney" },
{ brand: "WCO Leisure", parent: "Disney" },
{ brand: "WCO Parent Corp.", parent: "Disney" },
{ brand: "WCO Port Management Corp.", parent: "Disney" },
{ brand: "WCO Port Properties, Ltd.", parent: "Disney" },
{ brand: "WCO Vacationland", parent: "Disney" },
{ brand: "2139 Empire Avenue Corp.", parent: "Disney" },
{ brand: "Alameda Payroll", parent: "Disney" },
{ brand: "Andes Productions", parent: "Disney" },
{ brand: "Blue Note Management Corp.", parent: "Disney" },
{ brand: "Buena Vista Catalog Co.", parent: "Disney" },
{ brand: "BVHV Services", parent: "Disney" },
{ brand: "C.A. Productions", parent: "Disney" },
{ brand: "Disney Computer Magazine Group", parent: "Disney" },
{ brand: "ERS Investment Ltd.", parent: "Disney" },
{ brand: "Heavy Weight", parent: "Disney" },
{ brand: "Indian Warrior Productions", parent: "Disney" },
{ brand: "LBV Services", parent: "Disney" },
{ brand: "Montrose Corp.", parent: "Disney" },
{ brand: "Palm Hospitality Co.", parent: "Disney" },
{ brand: "PNLH Payroll Inc.", parent: "Disney" },
{ brand: "Supercomm International", parent: "Disney" },
{ brand: "Swing Kids Productions", parent: "Disney" },
{ brand: "Walt Disney Theatrical Worldwide", parent: "Disney" },
{ brand: "Wanderlust Productions", parent: "Disney" },
{ brand: "WDT Services", parent: "Disney" },
{ brand: "WDW Services", parent: "Disney" },
{ brand: "Buena Vista Theatrical Ventures", parent: "Disney" },
{ brand: "Before & After Productions", parent: "Disney" },
{ brand: "Buena Vista Laboratories", parent: "Disney" },
{ brand: "Buena Vista Trading Co.", parent: "Disney" },
{ brand: "Disney Interfinance Corp.", parent: "Disney" },
{ brand: "Disney Media Ventures", parent: "Disney" },
{ brand: "Disney Special Programs", parent: "Disney" },
{ brand: "IJR(inactive)", parent: "Disney" },
{ brand: "J.B. Productions", parent: "Disney" },
{ brand: "Merriweather Productions ", parent: "Disney" },
{ brand: "Plymouth Productions", parent: "Disney" },
{ brand: "RCE Services", parent: "Disney" },
{ brand: "The Inn Corp.", parent: "Disney" },
{ brand: "The Quiz Show Co.", parent: "Disney" },
{ brand: "ABC Television Network", parent: "Disney" },
{ brand: "ABC News", parent: "Disney" },
{ brand: "Fusion", parent: "Disney" },
{ brand: "ABC Enterprises, Inc.", parent: "Disney" },
{ brand: "Hulu ", parent: "Disney" },
{ brand: "ABC Entertainment Group", parent: "Disney" },
{ brand: "ABC Digital", parent: "Disney" },
{ brand: "ABC Entertainment", parent: "Disney" },
{ brand: "ABC Studios", parent: "Disney" },
{ brand: "Times Square Studios", parent: "Disney" },
{ brand: "ABC Family Worldwide Inc.", parent: "Disney" },
{ brand: "ABC Family", parent: "Disney" },
{ brand: "ABC Spark ", parent: "Disney" },
{ brand: "ABC Family Digital", parent: "Disney" },
{ brand: "BVS Entertainment", parent: "Disney" },
{ brand: "Saban Entertainment / Fox Kids, Ltd. library", parent: "Disney" },
{ brand: "DePatie-Freleng Enterprises / Marvel Productions, Ltd. library", parent: "Disney" },
{ brand: "WLS-7 ", parent: "Disney" },
{ brand: "KFSN-30 ", parent: "Disney" },
{ brand: "KTRK-13 ", parent: "Disney" },
{ brand: "KABC-7 ", parent: "Disney" },
{ brand: "WABC-7 ", parent: "Disney" },
{ brand: "WPVI-6 ", parent: "Disney" },
{ brand: "WTVD-11 ", parent: "Disney" },
{ brand: "KGO-7 ", parent: "Disney" },
{ brand: "ESPN, Inc.", parent: "Disney" },
{ brand: "ESPN", parent: "Disney" },
{ brand: "ESPN2", parent: "Disney" },
{ brand: "ESPN on ABC ", parent: "Disney" },
{ brand: "ESPN Classic", parent: "Disney" },
{ brand: "ESPNews", parent: "Disney" },
{ brand: "ESPN Deportes", parent: "Disney" },
{ brand: "ESPN Films", parent: "Disney" },
{ brand: "ESPNU", parent: "Disney" },
{ brand: "ESPN Classic", parent: "Disney" },
{ brand: "ESPN Now", parent: "Disney" },
{ brand: "ESPN Plus", parent: "Disney" },
{ brand: "ESPN Original Entertainment", parent: "Disney" },
{ brand: "ESPN Pay-Per-View", parent: "Disney" },
{ brand: "ESPN Regional Television", parent: "Disney" },
{ brand: "ESPN International ", parent: "Disney" },
{ brand: "ESPN America", parent: "Disney" },
{ brand: "ESPN Radio", parent: "Disney" },
{ brand: "Mobile ESPN", parent: "Disney" },
{ brand: "ESPN3", parent: "Disney" },
{ brand: "ESPN The Magazine", parent: "Disney" },
{ brand: "ESPN Home Entertainment", parent: "Disney" },
{ brand: "ESPN Outdoors", parent: "Disney" },
{ brand: "ESPN Digital Center", parent: "Disney" },
{ brand: "DigiSynd", parent: "Disney" },
{ brand: "Disney Family Network", parent: "Disney" },
{ brand: "family.com", parent: "Disney" },
{ brand: "Kaboose.com", parent: "Disney" },
{ brand: "Babyzone.com", parent: "Disney" },
{ brand: "AmazingMoms.com", parent: "Disney" },
{ brand: "Funschool.com", parent: "Disney" },
{ brand: "Zeeks.com", parent: "Disney" },
{ brand: "babble.com", parent: "Disney" },
{ brand: "Disneybaby.com", parent: "Disney" },
{ brand: "Family.com", parent: "Disney" },
{ brand: "Spoonful.com", parent: "Disney" },
{ brand: "Go.com ", parent: "Disney" },
{ brand: "Wondertime.com", parent: "Disney" },
{ brand: "Avalanche Software", parent: "Disney" },
{ brand: "Wideload Games", parent: "Disney" },
{ brand: "Gamestar", parent: "Disney" },
{ brand: "Rocket Pack", parent: "Disney" },
{ brand: "Tapulous", parent: "Disney" },
{ brand: "Starwave Mobile", parent: "Disney" },
{ brand: "Club Penguin", parent: "Disney" },
{ brand: "Star Wars: Attack Squadrons", parent: "Disney" },
{ brand: "Marvel Entertainment", parent: "Disney" },
{ brand: "Cover Concepts, Inc.", parent: "Disney" },
{ brand: "Marvel Characters, Inc.", parent: "Disney" },
{ brand: "Marvel Studios", parent: "Disney" },
{ brand: "Marvel Music", parent: "Disney" },
{ brand: "Marvel Television division", parent: "Disney" },
{ brand: "Marvel Animation", parent: "Disney" },
{ brand: "Marvel Animation Studios", parent: "Disney" },
{ brand: "SH DTV Partners ", parent: "Disney" },
{ brand: "Marvel Film Productions LLC", parent: "Disney" },
{ brand: "MVL Productions LLC", parent: "Disney" },
{ brand: "MVL Film Finance LLC", parent: "Disney" },
{ brand: "MVL Rights, LLC", parent: "Disney" },
{ brand: "Iron Works Productions LLC", parent: "Disney" },
{ brand: "Incredible Productions LLC", parent: "Disney" },
{ brand: "MVL Iron Works Productions Canada, Inc.", parent: "Disney" },
{ brand: "MVL Incredible Productions Canada, Inc. ", parent: "Disney" },
{ brand: "Asgard Productions LLC ", parent: "Disney" },
{ brand: "Green Guy Toons LLC", parent: "Disney" },
{ brand: "Squad Productions LLC ", parent: "Disney" },
{ brand: "MVL Development LLC ", parent: "Disney" },
{ brand: "Marvel Entertainment International Limited ", parent: "Disney" },
{ brand: "Marvel Internet Productions LLC", parent: "Disney" },
{ brand: "Marvel Property, Inc. ", parent: "Disney" },
{ brand: "MRV, Inc.", parent: "Disney" },
{ brand: "MVL International C.V.", parent: "Disney" },
{ brand: "Marvel Custom Solutions", parent: "Disney" },
{ brand: "Marvel Worldwide, Inc.", parent: "Disney" },
{ brand: "Marvel Comics", parent: "Disney" },
{ brand: "Icon Comics", parent: "Disney" },
{ brand: "Ultimate Comics", parent: "Disney" },
{ brand: "Marvel Press", parent: "Disney" },
{ brand: "Marvel Toys division", parent: "Disney" },
{ brand: "Marvel Toys Limited", parent: "Disney" },
];

function replaceWord(){
	for (var i = 0; i < brands.length; i++){
		var brand = brands[i];
		htmlreplace(brand.brand, brand.brand + " (" + brand.parent + ")");
	}
}

function htmlreplace(a, b, element) {    
    if (!element) element = document.body;    
    var nodes = element.childNodes;
    for (var n=0; n<nodes.length; n++) {
        if (nodes[n].nodeType == Node.TEXT_NODE) {
            var r = new RegExp(a, 'g');
            nodes[n].textContent = nodes[n].textContent.replace(r, b);
        } else {
            htmlreplace(a, b, nodes[n]);
        }
    }
}

replaceWord();

