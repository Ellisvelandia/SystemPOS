export const categories = [
  { id: "all", name: "All" },
  { id: "hot-dishes", name: "Hot Dishes" },
  { id: "cold-dishes", name: "Cold Dishes" },
  { id: "soup", name: "Soup" },
  { id: "grill", name: "Grill" },
  { id: "desserts", name: "Desserts" },
  { id: "drinks", name: "Drinks" },
];

export const products = [
  {
    id: 1,
    name: "Spicy Chicken Burger",
    description: "Crispy chicken with special sauce",
    price: 12.99,
    category: "hot-dishes",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=60",
    available: true,
  },
  {
    id: 2,
    name: "Classic Pizza",
    description: "Fresh tomatoes and mozzarella",
    price: 14.99,
    category: "hot-dishes",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800&auto=format&fit=crop&q=60",
    available: true,
  },
  {
    id: 3,
    name: "Caesar Salad",
    description: "Fresh romaine lettuce with Caesar dressing",
    price: 8.99,
    category: "cold-dishes",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&auto=format&fit=crop&q=60",
    available: true,
  },
  {
    id: 4,
    name: "Chocolate Cake",
    description: "Rich and moist chocolate cake",
    price: 6.99,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=60",
    available: true,
  },
];

export const orders = [
  {
    id: "ORD001",
    customer: "John Doe",
    status: "completed",
    total: 45.98,
    items: 3,
    date: new Date("2024-03-10T14:30:00"),
  },
  {
    id: "ORD002",
    customer: "Jane Smith",
    status: "preparing",
    total: 32.50,
    items: 2,
    date: new Date("2024-03-10T15:15:00"),
  },
  {
    id: "ORD003",
    customer: "Bob Johnson",
    status: "pending",
    total: 78.25,
    items: 5,
    date: new Date("2024-03-10T15:45:00"),
  },
] as const;