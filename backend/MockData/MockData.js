const bcrypt = require("bcryptjs");

const data = {
  users: [
    {
      name: "Tan",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456", 8),
      isAdmin: true,
    },
    {
      name: "Angelo",
      email: "user@example.com",
      password: bcrypt.hashSync("123456", 8),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: "แม็กกี้ เหยาะ",
      image: "/images/Maggi.jpg",
      countInStock: 20,
      category: "Seasoning",
      price: "4",
      brand: "Maggi",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      name: "แม็กกี้ สำหรับ ผัด",
      image: "/images/All-in-one-sauce.jpg",
      countInStock: 20,
      category: "Seasoning",
      price: "5",
      brand: "Maggi",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      name: "แม็กกี้ฝาเขียว",
      image: "/images/cooking-sauce-green-large.jpg",
      countInStock: 20,
      category: "Seasoning",
      price: "6",
      brand: "Maggi",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
  ],
};

module.exports = data;
