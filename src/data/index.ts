import { v4 as uuid } from "uuid";
import { IProduct, IFormInput, ICategory } from "../interfaces/index";

export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "222 asdsadpoweirop",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, id voluptates. Eveniet repudiandae laudantium eos dignissimos, temporibus laboriosam, nam ad accusamus blanditiis odio voluptatem amet necessitatibus omnis illum fugiat possimus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, id voluptates. Eveniet repudiandae laudantium eos dignissimos, temporibus laboriosam, nam ad accusamus blanditiis odio voluptatem amet necessitatibus omnis illum fugiat possimus.",
    imageUrl:
      "https://images.unsplash.com/photo-1725504914698-c3e97f0e9ca4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "50000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageUrl:
        "https://images.unsplash.com/photo-1725504914698-c3e97f0e9ca4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "free palestine",
    description: "dsfsdfsdfsdfsffsdfsfsdf adasd tertretetet",
    imageUrl:
      "https://images.unsplash.com/photo-1726007403882-e8f76fe5dc07?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "50000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageUrl:
        "https://images.unsplash.com/photo-1726007403882-e8f76fe5dc07?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "free gaza",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, id voluptates. Eveniet repudiandae laudantium eos dignissimos, temporibus laboriosam, nam ad accusamus blanditiis odio voluptatem amet necessitatibus omnis illum fugiat possimus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, id voluptates. Eveniet repudiandae laudantium eos dignissimos, temporibus laboriosam, nam ad accusamus blanditiis odio voluptatem amet necessitatibus omnis illum fugiat possimus.",
    imageUrl:
      "https://images.unsplash.com/photo-1725504914698-c3e97f0e9ca4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "50000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageUrl:
        "https://images.unsplash.com/photo-1725504914698-c3e97f0e9ca4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "222 asdsadpoweirop",
    description: "dsfsdfsdfsdfsffsdfsfsdf adasd tertretetet",
    imageUrl:
      "https://images.unsplash.com/photo-1725504914698-c3e97f0e9ca4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "50000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageUrl:
        "https://images.unsplash.com/photo-1725504914698-c3e97f0e9ca4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "222 asdsadpoweirop",
    description: "dsfsdfsdfsdfsffsdfsfsdf adasd tertretetet",
    imageUrl:
      "https://images.unsplash.com/photo-1725504914698-c3e97f0e9ca4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "50000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageUrl:
        "https://images.unsplash.com/photo-1725504914698-c3e97f0e9ca4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "222 asdsadpoweirop",
    description: "dsfsdfsdfsdfsffsdfsfsdf adasd tertretetet",
    imageUrl:
      "https://images.unsplash.com/photo-1725504914698-c3e97f0e9ca4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "50000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageUrl:
        "https://images.unsplash.com/photo-1725504914698-c3e97f0e9ca4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "222 asdsadpoweirop",
    description: "dsfsdfsdfsdfsffsdfsfsdf adasd tertretetet",
    imageUrl:
      "https://images.unsplash.com/photo-1725504914698-c3e97f0e9ca4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "50000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageUrl:
        "https://images.unsplash.com/photo-1725504914698-c3e97f0e9ca4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "222 asdsadpoweirop",
    description: "dsfsdfsdfsdfsffsdfsfsdf adasd tertretetet",
    imageUrl:
      "https://images.unsplash.com/photo-1725504914698-c3e97f0e9ca4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "50000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageUrl:
        "https://images.unsplash.com/photo-1725504914698-c3e97f0e9ca4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "222 asdsadpoweirop",
    description: "dsfsdfsdfsdfsffsdfsfsdf adasd tertretetet",
    imageUrl:
      "https://images.unsplash.com/photo-1725504914698-c3e97f0e9ca4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "50000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageUrl:
        "https://images.unsplash.com/photo-1725504914698-c3e97f0e9ca4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "222 asdsadpoweirop",
    description: "dsfsdfsdfsdfsffsdfsfsdf adasd tertretetet",
    imageUrl:
      "https://images.unsplash.com/photo-1725504914698-c3e97f0e9ca4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "50000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageUrl:
        "https://images.unsplash.com/photo-1725504914698-c3e97f0e9ca4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "222 asdsadpoweirop",
    description: "dsfsdfsdfsdfsffsdfsfsdf adasd tertretetet",
    imageUrl:
      "https://images.unsplash.com/photo-1725504914698-c3e97f0e9ca4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "50000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageUrl:
        "https://images.unsplash.com/photo-1725504914698-c3e97f0e9ca4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "222 asdsadpoweirop",
    description: "dsfsdfsdfsdfsffsdfsfsdf adasd tertretetet",
    imageUrl:
      "https://images.unsplash.com/photo-1725504914698-c3e97f0e9ca4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "50000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageUrl:
        "https://images.unsplash.com/photo-1725504914698-c3e97f0e9ca4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "222 asdsadpoweirop",
    description: "dsfsdfsdfsdfsffsdfsfsdf adasd tertretetet",
    imageUrl:
      "https://images.unsplash.com/photo-1725504914698-c3e97f0e9ca4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "50000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageUrl:
        "https://images.unsplash.com/photo-1725504914698-c3e97f0e9ca4?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
];

export const formInputList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product Description",
    type: "text",
  },
  {
    id: "image",
    name: "imageUrl",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "text",
  },
];

export const COLORS: string[] = [
  "#a855f7",
  "#2563eb",
  "#84d2cd",
  "#13005A",
  "#A31ACB",
  "#3C2A21",
  "#1F8A70",
  "#820000",
  "#FF0032",
];

export const categories: ICategory[] = [
  {
    id: uuid(),
    name: "Cars",
    imageUrl:
      "https://images.unsplash.com/photo-1469285994282-454ceb49e63c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: uuid(),
    name: "Laptops",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1681702156223-ea59bfbf1065?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: uuid(),
    name: "T-Shirt",
    imageUrl:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: uuid(),
    name: "Phones",
    imageUrl:
      "https://images.unsplash.com/photo-1654648662275-dfb19ec8d4a0?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: uuid(),
    name: "Planes",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1664297441375-d8c1928bf88f?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: uuid(),
    name: "Perfume",
    imageUrl:
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: uuid(),
    name: "Gaming-Chairs",
    imageUrl:
      "https://nex-img.dxracer.cc/20001/dd8f90fd-9142-4a9c-95c2-eab43111861f-1.jpg?imageView2/2/format/webp/interlace/1",
  },
];
