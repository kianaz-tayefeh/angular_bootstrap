import { ProductModel } from 'src/app/interfaces/product.model';

export const ProductMock: ProductModel[] = [
  {
    id: '1',
    index: 1,
    image: 'assets/phone.jpg',
    isEdible: false,
    price: 50,
    rating: 5,
    title: 'Flash',
    tags: ['Best Sales', 'InValid', 'Software'],
    description: 'This Product is a Flash with 20G memory',
  },
  {
    id: '2',
    index: 2,
    image: '',
    isEdible: true,
    price: 1000,
    rating: 4,
    title: 'Laptop',
    tags: ['Best Sales', 'InValid', 'Software'],
    description: 'This Product is a Laptop with 8G memory',
  },
  {
    id: '3',
    index: 3,
    image: '',
    isEdible: false,
    price: 1200,
    rating: 3,
    title: 'Mobile',
    tags: ['Best Sales', 'InValid', 'Software'],
    description: 'This Product is a Mobile with 256G memory',
  },
  {
    id: '4',
    index: 4,
    image: '',
    isEdible: true,
    price: 20,
    rating: 5,
    title: 'Cable',
    tags: ['Best Sales', 'InValid', 'Software'],
    description: 'This Product is a Cable',
  },
];