export type ProductInformation = {
  description: string;
  requirementTitle: string;
  requirements: string[];
};

export const productInformation: Record<string, ProductInformation> = {
  // =========================
  // BIRTHDAY GIFTS
  // =========================

  "birthday-customized-photo-frame": {
    description:
      "Turn your favorite memories into a beautiful personalized photo frame, perfect for birthdays and special occasions.",
    requirementTitle: "Photos Required",
    requirements: ["8–12 high-quality photos"],
  },

  "birthday-collage-photo-frame": {
    description:
      "A stunning collage frame that combines your precious moments into one unforgettable gift.",
    requirementTitle: "Photos Required",
    requirements: ["20–40 high-quality photos"],
  },

  "birthday-photo-clock": {
    description:
      "A personalized wall clock featuring your favorite photo to make every moment special.",
    requirementTitle: "Photos Required",
    requirements: ["1 high-quality photo"],
  },

  "birthday-photo-calendar": {
    description:
      "Celebrate every month with a custom calendar filled with your cherished memories.",
    requirementTitle: "Photos Required",
    requirements: [
      "13 photos",
      "1 cover photo",
      "12 monthly photos",
    ],
  },

  "birthday-customized-mugs": {
    description:
      "Enjoy every sip with a personalized birthday mug printed with your favorite photos and message.",
    requirementTitle: "Photos Required",
    requirements: ["3–8 high-quality photos"],
  },

  "birthday-custom-keychains": {
    description:
      "Carry your favorite memories everywhere with a stylish customized photo keychain.",
    requirementTitle: "Photos Required",
    requirements: ["1–2 high-quality photos"],
  },

  "birthday-magazines": {
    description:
      "Surprise your loved one with a personalized birthday magazine filled with photos, memories and heartfelt messages.",
    requirementTitle: "Photos Required",
    requirements: ["15–30 high-quality photos"],
  },

  "birthday-custom-photo-book": {
    description:
      "Preserve your life's best moments in a premium personalized photo book designed to last forever.",
    requirementTitle: "Photos Required",
    requirements: ["20–80 high-quality photos"],
  },

  // =========================
  // ANNIVERSARY GIFTS
  // =========================

  "anniversary-photo-frame": {
    description:
      "Celebrate your love story with a personalized anniversary photo frame that beautifully preserves your most cherished memories.",
    requirementTitle: "Photos Required",
    requirements: ["8–12 high-quality photos"],
  },

  "anniversary-collage-photo-frame": {
    description:
      "A beautiful collage frame that combines your favorite moments together, creating a timeless anniversary keepsake.",
    requirementTitle: "Photos Required",
    requirements: ["20–40 high-quality photos"],
  },

  "anniversary-mosaic-photo-frame": {
    description:
      "A stunning mosaic portrait made from hundreds of your favorite photos, creating a unique and unforgettable masterpiece.",
    requirementTitle: "Photos Required",
    requirements: ["100–300 high-quality photos"],
  },

  "anniversary-photo-wall-collage": {
    description:
      "Transform your wall into a gallery of love with a personalized photo wall collage featuring your precious memories.",
    requirementTitle: "Photos Required",
    requirements: ["20–50 high-quality photos"],
  },

  "photo-wall-collage": {
    description:
      "Transform your wall into a gallery of love with a personalized photo wall collage featuring your precious memories.",
    requirementTitle: "Photos Required",
    requirements: ["20–50 high-quality photos"],
  },

  "anniversary-mugs": {
    description:
      "Celebrate every sip with a customized anniversary mug featuring your favorite photo and heartfelt message.",
    requirementTitle: "Photos Required",
    requirements: ["2–6 high-quality photos"],
  },

  "anniversary-keychains": {
    description:
      "Carry your special moments wherever you go with a personalized anniversary photo keychain.",
    requirementTitle: "Photos Required",
    requirements: ["1–2 high-quality photos"],
  },

  "anniversary-custom-photo-book": {
    description:
      "Relive your beautiful journey together with a premium personalized photo book filled with unforgettable memories.",
    requirementTitle: "Photos Required",
    requirements: ["20–80 high-quality photos"],
  },

  "love-message-frame": {
    description:
      "Express your love with a personalized message frame featuring your favorite photos and a heartfelt quote.",
    requirementTitle: "Photos Required",
    requirements: ["8–15 high-quality photos"],
  },

  // =========================
  // COUPLE GIFTS
  // =========================

  "couple-photo-frame": {
    description:
      "Celebrate your love with a personalized couple photo frame that beautifully showcases your favorite moments together.",
    requirementTitle: "Photos Required",
    requirements: ["8–12 high-quality photos"],
  },

  "customized-couple-mugs": {
    description:
      "Enjoy every coffee together with a customized mug featuring your favorite photo and a special message.",
    requirementTitle: "Photos Required",
    requirements: ["2–6 high-quality photos"],
  },

  "couple-customized-keychains": {
    description:
      "Carry your love wherever you go with a personalized photo keychain made just for you.",
    requirementTitle: "Photos Required",
    requirements: ["1–2 high-quality photos"],
  },

  "love-message-photo-frame": {
    description:
      "Express your feelings with a personalized love message frame featuring your precious memories and heartfelt words.",
    requirementTitle: "Photos Required",
    requirements: ["8–15 high-quality photos"],
  },

  "couple-collage-photo-frame": {
    description:
      "Bring all your special moments together in a beautifully designed personalized collage photo frame.",
    requirementTitle: "Photos Required",
    requirements: ["20–40 high-quality photos"],
  },

  "couple-mosaic-photo-frame": {
    description:
      "Create a breathtaking portrait made from hundreds of your favorite memories, forming one unforgettable masterpiece.",
    requirementTitle: "Photos Required",
    requirements: ["100–300 high-quality photos"],
  },

  "customized-photo-album": {
    description:
      "Preserve every chapter of your love story in a beautifully crafted personalized photo album.",
    requirementTitle: "Photos Required",
    requirements: ["30–100 high-quality photos"],
  },

  "couple-customized-photo-book": {
    description:
      "Relive your journey together with a premium personalized photo book filled with your most cherished moments.",
    requirementTitle: "Photos Required",
    requirements: ["20–80 high-quality photos"],
  },

  "customized-magazines": {
    description:
      "Surprise your loved one with a personalized magazine featuring your love story, photos and heartfelt memories.",
    requirementTitle: "Photos Required",
    requirements: ["15–30 high-quality photos"],
  },

  // =========================
  // CORPORATE GIFTS
  // =========================

  "corporate-customized-mug": {
    description:
      "Personalize your mug with your company logo, brand message or employee name—perfect for corporate gifting and promotions.",
    requirementTitle: "Files Required",
    requirements: ["1 company logo or 1 custom design"],
  },

  "corporate-customized-keychains": {
    description:
      "A premium personalized keychain featuring your company logo or custom branding, ideal for corporate giveaways.",
    requirementTitle: "Files Required",
    requirements: ["1 company logo or 1 custom design"],
  },

  "customized-water-bottle": {
    description:
      "Stay hydrated in style with a personalized water bottle customized with your company logo or employee name.",
    requirementTitle: "Files Required",
    requirements: ["1 company logo or 1 custom design"],
  },

  "corporate-photo-frame": {
    description:
      "A premium frame for displaying certificates, awards, achievements or memorable corporate moments.",
    requirementTitle: "Files Required",
    requirements: ["1 certificate, award design or photo"],
  },

  "logo-printed-keychains": {
    description:
      "Showcase your brand with customized logo-printed keychains, perfect for events, promotions and employee gifts.",
    requirementTitle: "Files Required",
    requirements: ["1 high-resolution company logo"],
  },

  "customized-calendar": {
    description:
      "A personalized desk or wall calendar featuring your company logo, branding and custom artwork.",
    requirementTitle: "Files Required",
    requirements: [
      "1 company logo",
      "13 images are optional",
      "1 cover image and 12 monthly images",
    ],
  },

  "motivational-photo-frame": {
    description:
      "Inspire your workspace with customized motivational frames featuring quotes, company values or achievements.",
    requirementTitle: "Files Required",
    requirements: ["1 custom design or quote artwork"],
  },

  "wall-frames": {
    description:
      "Enhance your office with premium customized wall frames displaying branding, achievements, inspirational quotes or artwork.",
    requirementTitle: "Files Required",
    requirements: [
      "1–10 high-quality images or designs, depending on the layout",
    ],
  },

  // =========================
  // COMBO GIFTS
  // =========================

  "photo-frame-mug-combo": {
    description:
      "A perfect gift combo featuring a personalized photo frame and matching custom mug to celebrate your special moments.",
    requirementTitle: "Photos Required",
    requirements: ["8–12 high-quality photos"],
  },

  "mug-keychains-combo": {
    description:
      "A thoughtful combo of a customized mug and photo keychain, perfect for birthdays, anniversaries and special occasions.",
    requirementTitle: "Photos Required",
    requirements: ["2–6 high-quality photos"],
  },

  "photo-frame-keychains-combo": {
    description:
      "Preserve your favorite memories with a personalized photo frame and matching customized keychain.",
    requirementTitle: "Photos Required",
    requirements: ["8–12 high-quality photos"],
  },

  "mug-greeting-card-combo": {
    description:
      "Make every celebration extra special with a personalized mug paired with a heartfelt customized greeting card.",
    requirementTitle: "Photos Required",
    requirements: ["3–8 high-quality photos"],
  },

  // =========================
  // MUG GIFTS
  // =========================

  "photo-mug": {
    description:
      "Enjoy your favorite drink with a personalized photo mug featuring your cherished memories.",
    requirementTitle: "Photos Required",
    requirements: ["1–3 high-quality photos"],
  },

  "couple-mug-item": {
    description:
      "Celebrate your love with a customized couple mug printed with your favorite photo and names.",
    requirementTitle: "Photos Required",
    requirements: ["1–2 high-quality photos"],
  },

  "magic-mug": {
    description:
      "A heat-sensitive mug that magically reveals your personalized photo when hot water is poured.",
    requirementTitle: "Photos Required",
    requirements: ["1–3 high-quality photos"],
  },

  "name-printed-mugs": {
    description:
      "Customize your mug with your name, initials or a special message for a unique everyday gift.",
    requirementTitle: "Details Required",
    requirements: [
      "No photo is required",
      "1 photo may be provided optionally",
      "Name, initials or custom message",
    ],
  },

  "birthday-mug": {
    description:
      "Make birthdays extra special with a personalized mug featuring memorable photos and heartfelt wishes.",
    requirementTitle: "Photos Required",
    requirements: ["3–8 high-quality photos"],
  },

  "best-friends-mug": {
    description:
      "Celebrate your friendship with a customized mug designed with your favorite memories together.",
    requirementTitle: "Photos Required",
    requirements: ["2–6 high-quality photos"],
  },

  "anniversary-mug": {
    description:
      "Create a meaningful anniversary gift with a personalized mug featuring your favorite couple photos.",
    requirementTitle: "Photos Required",
    requirements: ["2–6 high-quality photos"],
  },

  "magic-mirror": {
    description:
      "A unique LED magic mirror that transforms into a glowing personalized photo display when switched on.",
    requirementTitle: "Photos Required",
    requirements: ["1–2 high-quality photos"],
  },

  // =========================
  // FRAME GIFTS
  // =========================

  "frames-customized-photo-frame": {
    description:
      "Transform your favorite memories into a beautifully personalized photo frame, perfect for every special occasion.",
    requirementTitle: "Photos Required",
    requirements: ["8–12 high-quality photos"],
  },

  "single-photo-frame": {
    description:
      "Showcase your favorite moment in a premium single photo frame with a clean and elegant finish.",
    requirementTitle: "Photos Required",
    requirements: ["1 high-quality photo"],
  },

  "frames-couple-photo-frame": {
    description:
      "Celebrate your love story with a customized couple photo frame featuring your most cherished memories.",
    requirementTitle: "Photos Required",
    requirements: ["6–12 high-quality photos"],
  },

  "family-photo-frame": {
    description:
      "Keep your family's precious moments together in a beautifully designed personalized photo frame.",
    requirementTitle: "Photos Required",
    requirements: ["6–12 high-quality photos"],
  },

  "kids-photo-frame": {
    description:
      "Capture your little one's sweetest memories in a personalized photo frame made to last forever.",
    requirementTitle: "Photos Required",
    requirements: ["8–15 high-quality photos"],
  },

  "friendship-photo-frame": {
    description:
      "Celebrate unforgettable friendships with a customized photo frame filled with your favorite memories together.",
    requirementTitle: "Photos Required",
    requirements: ["8–15 high-quality photos"],
  },

  "birthday-photo-frame": {
    description:
      "Make birthdays unforgettable with a personalized photo frame featuring your happiest celebrations.",
    requirementTitle: "Photos Required",
    requirements: ["8–15 high-quality photos"],
  },

  "frames-anniversary-photo-frame": {
    description:
      "Celebrate your journey together with a personalized anniversary photo frame designed to preserve your love forever.",
    requirementTitle: "Photos Required",
    requirements: ["8–15 high-quality photos"],
  },

  "frames-collage-photo-frame": {
    description:
      "Bring multiple memories together in a stunning collage photo frame that tells your unique story.",
    requirementTitle: "Photos Required",
    requirements: ["20–40 high-quality photos"],
  },

  "frames-mosaic-photo-frame": {
    description:
      "Create a breathtaking portrait using hundreds of your favorite photos, forming one unforgettable masterpiece.",
    requirementTitle: "Photos Required",
    requirements: ["100–300 high-quality photos"],
  },

  // =========================
  // KEYCHAIN GIFTS
  // =========================

  "customized-keychain": {
    description:
      "Carry your favorite memories everywhere with a beautifully customized photo keychain. Perfect for birthdays, anniversaries, couples, friends and special occasions.",
    requirementTitle: "Photos Required",
    requirements: ["1–2 high-quality photos"],
  },

  "name-keychain": {
    description:
      "Personalize a stylish keychain with your name, initials or a short message. A perfect gift for friends, family and loved ones.",
    requirementTitle: "Details Required",
    requirements: ["Name or text up to 20 characters"],
  },

  "photo-keychain": {
    description:
      "Turn your favorite picture into a premium photo keychain that keeps your special moments close every day.",
    requirementTitle: "Photos Required",
    requirements: ["1 high-quality photo"],
  },

  "couple-keychain": {
    description:
      "Celebrate your love with a personalized couple keychain featuring your favorite photo together. A thoughtful gift for anniversaries, Valentine's Day or any special occasion.",
    requirementTitle: "Photos Required",
    requirements: ["1–2 high-quality couple photos"],
  },

  "logo-keychain": {
    description:
      "Promote your business or brand with a premium customized logo keychain. Ideal for corporate gifting, promotions, events and giveaways.",
    requirementTitle: "Files Required",
    requirements: [
      "1 high-quality logo",
      "PNG, SVG, AI, PDF or EPS format is preferred",
    ],
  },

  // =========================
  // CUSTOMIZED T-SHIRTS
  // =========================

  "personalized-tshirt": {
    description:
      "Create a unique personalized T-shirt with your favorite photos, names or special messages. Perfect for birthdays, anniversaries, family gifts and memorable occasions.",
    requirementTitle: "Details Required",
    requirements: [
      "1–6 high-quality photos",
      "Name or custom text is optional",
    ],
  },

  "name-printed-tshirt": {
    description:
      "Customize your T-shirt with your name, favorite quote, logo or any text. A stylish and personalized gift for every occasion.",
    requirementTitle: "Details Required",
    requirements: [
      "Name or custom text",
      "Font preference is optional",
    ],
  },

  "couple-tshirt": {
    description:
      "Celebrate your love with matching couple T-shirts featuring custom names, photos, dates or romantic quotes. Perfect for anniversaries, Valentine's Day and special moments.",
    requirementTitle: "Details Required",
    requirements: [
      "1–4 high-quality photos are optional",
      "Couple names",
      "Special date or custom text is optional",
    ],
  },

  "birthday-tshirt": {
    description:
      "Make birthdays extra special with a customized birthday T-shirt featuring photos, name, age and personalized birthday designs.",
    requirementTitle: "Details Required",
    requirements: [
      "1–5 high-quality photos",
      "Birthday person's name",
      "Age",
      "Custom message is optional",
    ],
  },

  "family-tshirt": {
    description:
      "Create matching family T-shirts with custom names, photos or unique designs for family events, vacations, birthdays and celebrations.",
    requirementTitle: "Details Required",
    requirements: [
      "1–8 high-quality photos are optional",
      "Family member names",
      "Custom text is optional",
    ],
  },

  "friendship-tshirt": {
    description:
      "Celebrate your friendship with personalized T-shirts featuring names, photos, funny quotes or matching designs. A perfect gift for best friends.",
    requirementTitle: "Details Required",
    requirements: [
      "1–4 high-quality photos are optional",
      "Friend names",
      "Custom quote or text is optional",
    ],
  },
};