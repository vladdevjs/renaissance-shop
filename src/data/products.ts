const products = [
  {
    id: 1,
    title: 'Рождение Венеры',
    author: 'Сандро Боттичелли',
    description:
      'Элегантное изображение Венеры, рождающейся из морской пены, олицетворяет идеал красоты эпохи Возрождения.',
    price: 2000000,
    sale: 1000000,
    img: '/images/the-birth-of-venus.jpg',
    images: [
      '/images/the-last-supper.jpg',
      '/images/the-anatomy-lesson.jpg',
      '/images/the-creation-of-adam.jpg',
    ],
    sold: false,
  },
  {
    id: 2,
    title: 'Тайная вечеря',
    author: 'Леонардо да Винчи',
    description:
      'Драматическая сцена последней трапезы Иисуса с учениками перед предательством, насыщенная символикой и эмоциями.',
    price: 3000000,
    sale: null,
    img: '/images/the-last-supper.jpg',
    images: [
      '/images/the-birth-of-venus.jpg',
      '/images/the-anatomy-lesson.jpg',
      '/images/the-creation-of-adam.jpg',
    ],
    sold: false,
  },
  {
    id: 3,
    title: 'Сотворение Адама',
    author: 'Микеланджело',
    description:
      'Иконический момент из Сикстинской капеллы, изображающий прикосновение Бога, дающего жизнь первому человеку.',
    price: 6000000,
    sale: 5000000,
    img: '/images/the-creation-of-adam.jpg',
    images: [
      '/images/the-last-supper.jpg',
      '/images/the-anatomy-lesson.jpg',
      '/images/the-birth-of-venus.jpg',
    ],
    sold: false,
  },
  {
    id: 4,
    title: 'Урок Анатомии',
    author: 'Рембрандт',
    description:
      'Реалистичная сцена преподавания анатомии, отражающая интерес к науке и мастерство передачи света и деталей.',
    price: 2000000,
    sale: 1000000,
    img: '/images/the-anatomy-lesson.jpg',
    images: [],
    sold: true,
  },
];

export default products;
