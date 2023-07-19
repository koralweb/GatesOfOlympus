let productsList = [
  {
    title: 'Суп кимчи',
    desc: 'Острый суп на основе мисо, с капустой кимчи, говядиной, тофу, яйцом и водорослями вакамэ. Украшается зелёным луком и кунжутом',
    price: 360,
    image: require('../assets/img.jpeg'),
  },
  {
    title: 'Унаги сиру',
    desc: 'Сливочный суп с угрём, водорослями вакамэ, рисом. Украшается зелёным луком и кунжутом.',
    price: 230,
    image: require('../assets/img.jpeg'),
  },
];

productsList = productsList.map(el => {
  return {
    ...el,
    added: false,
    count: 1,
    id: Math.random(),
  };
});

export default productsList;
