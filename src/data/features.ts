export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  hoverImage: string;
  category: string;
}

export const features: Product[] = [
  // Uniforms (4 items - most items)
  {
    id: "9",
    title: "Chef Uniform",
    description: "Professional chef uniform for kitchen professionals.",
    image: "/Clothes/uniform/chef_1.png",
    hoverImage: "/Clothes/uniform/chef_2.png",
    category: "Uniforms",
  },
  {
    id: "10",
    title: "Medical Uniform",
    description: "Comfortable medical uniform for healthcare professionals.",
    image: "/Clothes/uniform/medical_uniform_1.png",
    hoverImage: "/Clothes/uniform/medical_uniform_2.png",
    category: "Uniforms",
  },
  {
    id: "11",
    title: "Nurse Uniform",
    description: "Professional nurse uniform with comfort and functionality.",
    image: "/Clothes/uniform/nurse_1.png",
    hoverImage: "/Clothes/uniform/nurse_2.png",
    category: "Uniforms",
  },
  {
    id: "12",
    title: "School Uniform",
    description: "Quality school uniform for educational institutions.",
    image: "/Clothes/uniform/school_uniform_1.png",
    hoverImage: "/Clothes/uniform/school_uniform_2.png",
    category: "Uniforms",
  },

  // Blouses & Dresses (3 items)
  {
    id: "4",
    title: "Professional Blouse",
    description: "Elegant blouse perfect for office and formal occasions.",
    image: "/Clothes/blouse/blouse_1.png",
    hoverImage: "/Clothes/blouse/blouse_2.png",
    category: "Blouses & Dresses",
  },
  {
    id: "5",
    title: "Classic Blouse",
    description: "Timeless blouse design with modern comfort.",
    image: "/Clothes/blouse/blouse_3.png",
    hoverImage: "/Clothes/blouse/blouse_3.png",
    category: "Blouses & Dresses",
  },
  {
    id: "6",
    title: "Elegant Dress",
    description: "Sophisticated dress for special occasions.",
    image: "/Clothes/blouse/dress_1.png",
    hoverImage: "/Clothes/blouse/dress_2.png",
    category: "Blouses & Dresses",
  },

  // T-Shirts & Polo (2 items)
  {
    id: "1",
    title: "Premium Polo Shirt",
    description: "Classic polo design with superior comfort and style.",
    image: "/Clothes/tshirt/polo_1.png",
    hoverImage: "/Clothes/tshirt/polo_2.png",
    category: "T-Shirts & Polo",
  },
  {
    id: "2",
    title: "Cotton T-Shirt",
    description: "Soft cotton t-shirt perfect for everyday wear.",
    image: "/Clothes/tshirt/tshirt_1.png",
    hoverImage: "/Clothes/tshirt/tshirt_2.png",
    category: "T-Shirts & Polo",
  },

  // Lab Coats (2 items)
  {
    id: "8",
    title: "Medical Lab Coat",
    description: "Professional lab coat for medical and laboratory use.",
    image: "/Clothes/lab_coat/lab_coat_1.png",
    hoverImage: "/Clothes/lab_coat/lab_coat_2.png",
    category: "Lab Coats",
  },

  // Work Wear (2 items)
  {
    id: "13",
    title: "Worker Uniform",
    description: "Durable workwear for industrial and construction work.",
    image: "/Clothes/worker/worker_1.png",
    hoverImage: "/Clothes/worker/worker_2.png",
    category: "Work Wear",
  },

  // Long Sleeve (2 items)
  {
    id: "3",
    title: "Long Sleeve Shirt",
    description:
      "Comfortable long sleeve shirt for professional and casual wear.",
    image: "/Clothes/long_sleeve/long_sleeve_1.png",
    hoverImage: "/Clothes/long_sleeve/long_sleeve_2.png",
    category: "Long Sleeve & Jacket",
  },
  {
    id: "7",
    title: "Professional Jacket",
    description: "Stylish jacket perfect for business and formal wear.",
    image: "/Clothes/jacket/jacket.png",
    hoverImage: "/Clothes/jacket/jacket.png",
    category: "Long Sleeve & Jacket",
  },
];
