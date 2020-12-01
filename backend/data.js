import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'sahil',
      email: 'sainisahil1234567890@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'sunny',
      email: 's.suny0002@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Algnoma',
      category: 'plant',
      image: '/images/aglonoma1.jpg',
      price: 120,
      countInStock: 10,
      brand: '',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'aloevera',
      category: 'Plant',
      image: '/images/aglonoma2.jpg',
      price: 100,
      countInStock: 20,
      brand: '',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'tulsi',
      category: 'plant',
      image: '/images/aglonoma2.jpg',
      price: 220,
      countInStock: 0,
      brand: '',
      rating: 4.8,
      numReviews: 17,
      description: 'high quality product',
    },
    {
      name: 'marigold',
      category: 'Plant',
      image: '/images/aglonoma1.jpg',
      price: 78,
      countInStock: 15,
      brand: '',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      name: 'rose',
      category: 'Plant',
      image: '/images/aglonoma1.jpg',
      price: 65,
      countInStock: 5,
      brand: '',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    
  ],
};
export default data;
