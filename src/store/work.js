import onePage from './onePage';
import multiPage from './multiPage';
import email from './email';
import spa from './spa';
import Path from './path';

export const linking = [
  {
    path: Path.work.EXPRESS_DELIVERY,
    links: [
      {
        name: 'Главная',
        href: 'https://iamrealmarsel.github.io/projects/multi-page/express-delivery',
      },
      {
        name: 'Контейнерные перевозки',
        href: 'https://iamrealmarsel.github.io/projects/multi-page/express-delivery/container.html',
      },
      {
        name: 'Кросс-докинг',
        href: 'https://iamrealmarsel.github.io/projects/multi-page/express-delivery/cross.html',
      },
      {
        name: 'Таможенное оформление грузов',
        href: 'https://iamrealmarsel.github.io/projects/multi-page/express-delivery/customs.html',
      },
      {
        name: 'Международные перевозки',
        href: 'https://iamrealmarsel.github.io/projects/multi-page/express-delivery/international.html',
      },
      {
        name: 'Транспортировка негабаритных грузов по всей России',
        href: 'https://iamrealmarsel.github.io/projects/multi-page/express-delivery/oversized.html',
      },
      {
        name: 'Грузоперевозки',
        href: 'https://iamrealmarsel.github.io/projects/multi-page/express-delivery/trucking.html',
      },
    ],
  },
];

export default [...spa, ...onePage, ...multiPage, ...email];
