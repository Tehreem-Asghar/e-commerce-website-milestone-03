 const products = [
  {
    id : 1 ,
    title : 'SAMSUNG Galaxy S24+ Plus Cell Phone, 256GB AI Smartphone, Unlocked Android, 50MP Camera, Fastest Processor, Long Battery Life, US Version, 2024, Onyx Black',
    price : '790.02',
    star : 5,
    review : 450,
    image : '/images/phonesImage/SAMSUNG Galaxy S24+ Plus.jpg',
    about : 'The Samsung S24 Series offers Circle & Search for quick answers by circling items on your screen. With Live Translate, communicate in different languages instantly. Note Assist organizes and summarizes notes effortlessly. Edit photos with Generative Edit to enhance them with ease. Capture stunning shots using the 50MP camera and enjoy seamless performance with the Snapdragon 8 Gen 3. Chat Assist improves your writing with tone suggestions. The larger, brighter display adjusts for eye comfort, while Dual Recording captures both action and reactions. Super Fast Charging ensures you never miss a moment.'
  },
  {
    id : 2 ,
    title : 'Motorola  razr+ | 2023 | Unlocked | Made for US 8/256 | 32 MPCamera |Blue, 73.95x170.83x6.99mm',
    price : '524.69',
    star : 4,
    review : 300,
    image : '/images/phonesImage/Motorola.jpg',
    about : 'The Moto Razr offers a large, smart external display, letting you interact without opening the phone. Its iconic flip design comes in trendy colors with soft vegan leather. Capture creatively with Flex View for hands-free selfies and camcorder-style videos. The 50MP AI-powered camera system includes a 2x telephoto lens. Enjoy powerful performance with the Snapdragon 8s Gen 3 and speeds up to 3GHz. With a 4000mAh battery, you get all-day life, and 45W TurboPower charging gives you a full days power in just 12 minutes.'
  },
  
  {
    id : 3 ,
    title : 'A14 Promax 5G Unlocked Cell Phones Android 13 Smartphone with 6.8" FHD Screen Mobile Phones 50MP+13MP 6800 mAh Dual SIM Face ID Snapdragon 8cen2 Android Phone(Blue)',
    price : `120.99 `,
    star : 5,
    review : 350,
    image : '/images/phonesImage/A14 Promax.jpg',
    about : 'The A14 Promax Android 13 smartphone features a sleek Dynamic Island design for a stylish look. Capture stunning photos with its 50MP + 24MP dual rear cameras and enjoy long-lasting power with the 6800mAh battery. With 256GB storage and 8GB RAM, you can store everything you need and multitask smoothly. Powered by the Snapdragon 8cen2 chipset, it ensures high performance and efficiency. The 6.7" FHD screen delivers stunning visuals for an immersive viewing experience.'
  },
  {
    id : 4,
    title : 'SAMSUNG Galaxy S23 Ultra Series AI Phone, Unlocked Android Smartphone, 256GB Storage, 8GB RAM, 200MP Camera, Night Mode, Long Battery Life, S Pen, US Version, 2023, Green',
    price : '23.68',
    star : 4.4,
    review : 300,
    image : '/images/phonesImage/SAMSUNG Galaxy S23.jpg',
    about : 'The Galaxy S23 Ultra uses AI for advanced search, real-time translation, note formatting, and effortless photo editing. Capture stunning low-light photos with Night Mode and create crystal-clear content with the 200MP camera. Shoot smooth videos with Video Stabilization, and use the built-in S Pen for writing, drawing, and snapping photos. Powered by the fastest mobile processor and a 5,000mAh battery, it ensures seamless multitasking and long battery life. With 256GB of storage, you’ll never run out of space. Easily switch video calls between your Tab and phone with Google Meet.'
  },
  {
    id : 5,
    title : 'OnePlus 12,16GB RAM+512GB,Dual-SIM,Unlocked Android Smartphone,Supports 50W Wireless Charging,Latest Mobile Processor,Advanced Hasselblad Camera,5400 mAh Battery,2024,Flowy Emerald',
    price : '738.04',
    star : 3.7,
    review : 350,
    image : '/images/phonesImage/OnePlus 12.jpg',
    about : 'The OnePlus 12 comes with 6 months of Google One and 3 months of YouTube Premium (for new accounts). Powered by the Snapdragon 8 Gen 3 and up to 16GB RAM, it offers top-notch performance with a Dual Cryo-velocity VC cooling system. The 2K 120Hz Super Fluid Display with 4500 nits peak brightness ensures vibrant viewing anywhere. Its Trinity Engine optimizes performance with features like RAM-Vita and HyperTouch. The 4th Gen Hasselblad Camera System includes a 50MP primary, 64MP 3x Periscope, and 48MP Ultra-Wide camera with advanced color science.'
  },
  {
    id : 6,
    title : 'Google Pixel 8 - Unlocked Android Smartphone with Advanced Pixel Camera, 24-Hour Battery, and Powerful Security - Hazel - 128 GB',
    price : '483.78',
    star : 3,
    review : 450,
    image : '/images/phonesImage/Google Pixel 8.jpg',
    about : 'The Google Pixel 8, powered by the Tensor G3 chip, offers advanced AI for cutting-edge photo and video features. It’s an unlocked 5G phone compatible with major carriers. The upgraded camera delivers vivid colors, and the 6.2-inch Actua display offers smooth performance. Its Adaptive Battery lasts over 24 hours, or up to 72 hours with Extreme Battery Saver. Pixel 8 includes emergency detection features and multiple layers of security with Google Tensor G3, VPN by Google One, and Titan M2. Switching to Pixel is easy, with quick data transfer from your old phone.'
  },
  {
    id : 7,
    title : 'Motorola Edge+ | 2023 | Unlocked | Made for US 8/512 | 50 MPCamera | Intersteller Black, 161.16x74x8.59',
    price : '399.95',
    star : 4.8,
    review : 400,
    image : '/images/phonesImage/Motorola Edge+.jpg',
    about : 'The Motorola Edge Plus (2023) is compatible with T-Mobile 5G, Verizon 5G, and major 4G U.S. carriers. It features a stunning quad-curved endless edge design for beauty and comfort. Powered by the Snapdragon 8 Gen 2, it delivers top-tier performance. The triple high-res cameras and telephoto lens capture brilliant photos, while the IP68 rating offers protection from dust and water. With up to 68W fast charging, enjoy days of battery life. The 6.67" pOLED 165Hz display and Dolby Atmos audio provide an immersive experience. Wi-Fi hotspot and Ready For features offer extra connectivity.'
  },
  {
    id : 8,
    title : 'Nokia C21 Plus | Android 11 (Go Edition) | Unlocked GSM Smartphone | 2-Day Battery | Dual SIM | 2/64GB | 6.52-Inch Screen | Cyan | Not Compatible with Verizon or AT&T',
    price : '69.17',
    star : 2,
    review : 250,
    image : '/images/phonesImage/Nokia C21 Plus.jpg',
    about : 'This phone is compatible with GSM carriers like T-Mobile, Boost, Metro, Mint, and H2O Wireless, but not with AT&T, Verizon, or their subsidiaries. It features a 6.5" HD+ display, a sleek 8.5mm thin design, and a 13MP dual-camera with panorama and beautification modes. It runs a clean OS with 2 years of quarterly security updates, biometric fingerprint, and AI face unlock. Enjoy long battery life for fewer recharges and more connectivity.'
  },
  {
    id : 9,
    title : 'Oppo A58 - 6.72" Inch Display - 8GB RAM - 128GB ROM',
    price : '162.23',
    star : 5,
    review : 430,
    image : '/images/phonesImage/OPPO-A58.jpg',
    about : 'The Oppo A58 features a 6.72-inch IPS LCD display with a 90Hz refresh rate, providing a smooth viewing experience. It runs on Android 13 and is powered by the Helio G85 octa-core processor. With 8GB of RAM and 128GB of internal storage, it offers ample memory and storage capacity. The phone is equipped with a 50 MP main camera and a 2 MP secondary camera, along with an 8 MP front camera for selfies. Its 5000 mAh non-removable battery supports 33W fast charging, ensuring long-lasting usage and quick power-ups. The device also includes side-mounted fingerprint and face unlock features for enhanced security. It comes with a 1-year brand warranty and is PTA approved.'
  },

  {
    id : 10,
    title : 'Oppo Reno 11F 5G RAM 8 GB ROM 256 GBScreen Type AMOLED, 1B colors, 120Hz, HDR10+, 500 nits (typ), 900 nits (HBM), 1100 nits (peak Front Camera 32 MP Back Camera 64 MP + 8 MP + 2 MP Battery Type 5000 mAh',
    price : '288.19 ',
    star : 2.8,
    review : 480,
    image : '/images/phonesImage/OPPO-Reno-11.jpg',
    about : 'The Oppo Reno 11F 5G, running on Android 14 with ColorOS 14, boasts a sleek design measuring 161.1 x 74.7 x 7.5 mm and weighing 177 grams. It features a stunning 6.7-inch AMOLED display with 120Hz refresh rate, HDR10+, and peak brightness of 1100 nits. Powered by the MediaTek Dimensity 7050 chipset, it offers 8GB of RAM and 256GB of storage, expandable via microSD. The device is equipped with a triple rear camera setup (64 MP wide, 8 MP ultrawide, and 2 MP macro) and a 32 MP front camera. It supports 5G connectivity, Wi-Fi 6, Bluetooth 5.2, and USB Type-C 2.0. The 5000 mAh battery supports 67W fast charging and reverse wired charging.'
  },
  {
    id : 11,
    title : 'Infinix Hot 40 Pro - 8GB Ram 256GB Storage | Non Active | 6.78" 120Hz Display, 108MP Camera, Android 13, 5000mAh Battery | Stereo Speakers, NFC, 33W Fast Charge | Available in Palm Blue, Horizon Gold | Daraz.pk Exclusive',
    price : '145.24 ',
    star : 4,
    review : 450,
    image : '/images/phonesImage/Infinix Hot 40 Pro.jpeg',
    about : 'The Infinix Hot 40 Pro, launching in December 2023, features a sleek design with a 6.78-inch Full HD+ IPS LCD display, offering a 120Hz refresh rate and peak brightness of 500 nits. Powered by the MediaTek Helio G99 chipset with 8GB of RAM and up to 256GB of storage, this device supports microSD expansion. It boasts a high-resolution 108MP main camera, accompanied by a 2MP macro lens and an 0.08MP auxiliary lens, and a 32MP front camera. Running on Android 13 with XOS 13.5, the phone offers 5000mAh battery capacity with 33W fast charging, stereo speakers, NFC, and a fingerprint sensor. Available in Palm Blue and Horizon Gold, it supports dual SIM functionality and features a side-mounted fingerprint sensor, stereo speakers, and USB Type-C connectivity.'
  },
  {
    id : 12,
    title : 'Redmi 12 - 6.79" Inch Display - 8GB RAM - 128GB & 256GB ROM ROM',
    price : '132.65 ',
    star : 4.2,
    review : 399,
    image : '/images/phonesImage/Redmi 12.jpeg',
    about : 'The Redmi 12 offers an impressive 6.79-inch PLS LCD display with a smooth 90Hz refresh rate, providing a visually rich and fluid experience. Powered by the Android 13 operating system, this smartphone ensures a seamless and up-to-date user interface. It comes with 8GB of RAM and offers two storage options, 128GB and 256GB, making it perfect for multitasking and storing all your apps and media. The device features an octa-core MediaTek Helio G88 processor for fast and efficient performance. Photography enthusiasts will enjoy the triple camera setup, which includes a 50 MP main camera, an 8 MP ultrawide lens, and a 2 MP macro lens. For selfies, there an 8 MP front camera. The Redmi 12 also includes a side-mounted fingerprint sensor and FaceUnlock for enhanced security. Its 5000 mAh non-removable battery, coupled with 18W fast charging, ensures you stay powered throughout the day. Additionally, the phone is PTA approved, making it compliant with local regulations.'
  },
  {
    id : 13,
    title : 'ZAGG InvisibleShield Fusion Curve Screen Protector for Samsung Galaxy S23 Ultra, Made with Hybrid Polymer, Perfect Fit, HD Clarity, Compatible with Biometric Fingerprint Scanner, Easy to Install',
    price : '59.99',
    star : 3.5,
    review : 306,
    image : '/images/phonesImage/ZAGG.jpg',
    about : 'The Zagg InvisibleShield Fusion Curve Screen Protector for the Samsung Galaxy S23 is a durable and rigid accessory made from a flexible hybrid polymer. This design effectively absorbs and disperses impact forces while maintaining the integrity of your phones curved screen. Compatible with the devices ultrasonic fingerprint scanner, it allows for easy biometric access without any interference. The protector features a special coating that prevents degradation, ensuring it stays in pristine condition over time. With HD clarity and a smooth, silky finish, it mimics the original screens look and feel while providing excellent protection. Installation is hassle-free, thanks to the included EZ Apply installation tray and tabs, allowing for a bubble-free application.'
  },
  {
    id : 14,
    title : 'MOSNOVO Case for Samsung Galaxy S23 Plus, [Buffertech 6.8ft Military-Grade Drop Protection] [Anti Peel Off Tech] Clear TPU Bumper Phone Case Cover Design - Vintage Collage Art',
    price : '30.99',
    star : 4.8,
    review : 2039,
    image : '/images/phonesImage/MOSNOVO.jpg',
    about : 'The case designed for the Samsung Galaxy S23 Plus (6.6" display) features innovative Buffertech Shock-Absorbent material, co-molded with dual-layer protection that combines a TPU bumper with a hard back panel. This design effectively safeguards against scratches, bumps, and more. Proven in laboratory tests, it withstands drops from up to 6.6 feet, absorbing 95% of impact energy and exceeding Military Grade Drop Protection standards. The raised and beveled edges offer additional protection for the touchscreen and camera lens. This case is also wireless charging compatible and provides an anti-slip, easy grip design, complete with holes for charms or lanyards. Available in a wide range of colors and prints, it combines style with protection, allowing you to express your unique personality while ensuring your device stays safe. Enjoyed by celebrities and influencers alike, this case invites you to be bold, be you, and be unique.'
  },
  {
    id : 15,
    title : 'elago Compatible with iPhone 16 Pro Case, Premium Liquid Silicone Case, Full Body Protective Cover, Shockproof, Slim Phone Case, Anti-Scratch Soft Microfiber Lining, 6.3 inch (Stone)',
    price : '49',
    star : 4.4,
    review : 239,
    image : '/images/phonesImage/elago.jpg',
    about : 'The Elago silicone case for the iPhone 16 Pro is crafted in-house from the ground up, ensuring a perfect fit and stylish design while providing excellent protection against everyday use. For the past five years, Elagos silicone cases have been top sellers on Amazon, continuously improving with each model to offer more features at a better price. Made from liquid silicone, this case adds a vibrant splash of color while enhancing grip and protection. Its important to note that the grippy texture may attract lint and small particles, but a simple wipe with a damp cloth will keep it clean. This protective cover ensures comprehensive coverage for your iPhone 16 Pro, safeguarding all sides, including the bottom and buttons, while the raised lip protects the screen and camera from scratches. Additionally, the case is compatible with wireless charging. Elago prioritizes design, following the motto of "simple sophistication" to create products that are both useful and stylish. Each product is made with care, reflecting their commitment to quality that you will surely appreciate.'
  },
 ]
export default products