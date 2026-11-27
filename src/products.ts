export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  code?: string;
  usage?: {
    title: string;
    steps: string[];
  }[];
};

const productImage = (filename: string) =>
  `${import.meta.env.BASE_URL}images/${filename}`;

export const products: Product[] = [
  {
    slug: "sandal-powder-face-pack",
    name: "Sandal Powder Face Pack",
    category: "Skin care",
    description: "A face pack made with pure sandal powder.",
    image: productImage("face-pack-sandal.png"),
    imageAlt: "Sandal powder and sandalwood pieces in a bowl",
    code: "SRGFP – Sandal 1",
  },
  {
    slug: "saffron-mixed-face-pack",
    name: "Saffron Mixed Face Pack",
    category: "Skin care",
    description: "Face pack powder blended with saffron.",
    image: productImage("face-pack-saffron.png"),
    imageAlt: "Face pack powder with saffron threads and sandalwood",
    code: "SRGFP – Saff 1",
  },
  {
    slug: "multani-mitti-face-pack",
    name: "Multani Mitti Face Pack",
    category: "Skin care",
    description: "A traditional Multani Mitti powder face pack.",
    image: productImage("face-pack-multani.png"),
    imageAlt: "Multani Mitti powder and a prepared face pack",
    code: "SRGFP – MULFP 1",
  },
  {
    slug: "raw-rice-powder-face-pack",
    name: "Raw Rice Powder Face Pack",
    category: "Skin care",
    description: "A face pack made with organic raw rice powder.",
    image: productImage("face-pack-rice.png"),
    imageAlt: "Face powder jars arranged together",
    code: "SRGFP – RRFP 1",
  },
  {
    slug: "abi-herbal-hair-oil",
    name: "Abi Herbal Hair Oil",
    category: "Hair care",
    description: "Herbal hair oil for scalp massage and your hair-care routine.",
    image: productImage("herbal-hair-oil.jpeg"),
    imageAlt: "Bottle of Abi Herbals hair oil",
    usage: [
      {
        title: "Application",
        steps: [
          "Warm the oil slightly.",
          "Massage it into the scalp for 5–10 minutes, then apply along the hair.",
          "Leave it on for at least 1–2 hours or overnight.",
          "Wash with a mild shampoo and conditioner. The guide suggests using it 2–3 times a week.",
        ],
      },
    ],
  },
  {
    slug: "shikakai-powder",
    name: "Shikakai Powder",
    category: "Hair care",
    description: "A traditional powder for hair cleansing or a hair mask.",
    image: productImage("shikakai-powder.jpeg"),
    imageAlt: "Abi Herbals Shikakai powder pouch",
    usage: [
      {
        title: "Hair cleanser",
        steps: [
          "Mix 2 tablespoons of Shikakai powder with 1 cup of water. The guide also lists Amla and Reetha powder as optional additions.",
          "Boil the mixture for 5–10 minutes, let it cool, then strain.",
          "Use the strained liquid to cleanse the hair.",
        ],
      },
      {
        title: "Hair mask",
        steps: [
          "Mix 2 tablespoons of Shikakai powder with 1 tablespoon each of yogurt and honey.",
          "Apply the paste to the scalp and hair, leave it for 30 minutes, then rinse with lukewarm water.",
        ],
      },
    ],
  },
  {
    slug: "face-cleansing-oil",
    name: "Face Cleansing Oil",
    category: "Skin care",
    description:
      "An oil cleanser to massage onto skin and wipe away with a warm, damp cloth.",
    image: productImage("face-cleansing-oil.jpeg"),
    imageAlt: "Bottle of Abi Herbals face cleansing oil",
    usage: [
      {
        title: "Application",
        steps: [
          "Apply a few drops to the face and gently massage in circles for 2–3 minutes.",
          "Wipe away with a warm, damp cloth or rinse with lukewarm water.",
          "Follow with a mild herbal face wash if needed.",
        ],
      },
    ],
  },
  {
    slug: "bathing-powder",
    name: "Bathing Powder",
    category: "Bath & body",
    description: "A herbal cleansing powder for your bath-time routine.",
    image: productImage("bathing-powder.jpeg"),
    imageAlt: "Abi Herbals bathing powder pouch",
    usage: [
      {
        title: "Application",
        steps: [
          "Mix 2–3 tablespoons of powder with water, milk, yogurt, or rose water to make a paste.",
          "Apply to wet skin and gently massage in circular motions.",
          "Leave it on for 2–3 minutes, then rinse with warm water.",
        ],
      },
    ],
  },
];