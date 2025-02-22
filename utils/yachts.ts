export interface YachtDetails {
    id: string;
    type: "new" | "used";
    model: string;
    price: number;
    name?: string;
    year?: number;
    length: number;
    location: string;
    displacement?: number;
    hull?: string;
    keel?: string;
    imageUrl: string;
    designer?: string;
    category?: string;
  }

  export const sampleYachts: YachtDetails[] = [
    {
      id: "1",
      type: "new",
      model: "OPEN 630",
      price: 25500,
      length: 6.3,
      location: "Maó, Illes Balears, España",
      imageUrl: "/img/yachts/open630.jpg",
      designer: "View Yachting",
    },
    {
      id: "2",
      type: "new",
      model: "SPIRIT 1500",
      price: 990000,
      length: 14.96,
      location: "Maó, Illes Balears, España",
      imageUrl: "/img/yachts/spirit1500.jpg",
      designer: "View Yachting",
    },
    // {
    //   id: "3",
    //   type: "new",
    //   model: "Salthouse 58ft Cutter",
    //   price: 310098,
    //   name: "Rory Mhor",
    //   year: 1989,
    //   length: 17.68,
    //   location: "South Pacific, Fiji",
    //   displacement: 28000,
    //   hull: "Steel",
    //   keel: "Winged Keel",
    //   imageUrl: "/img/yacht-broker.jpg",
    //   designer: "Salthouse",
    //   category: "Used sail boat for sale",
    // },
  
    // Add more sample yachts here
  ];
  

  