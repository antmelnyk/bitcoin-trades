import { Trade } from '../../store/trades/types';

export const tradesData: Trade[] = [
  {
    tradingWith: {
      id: 213,
      login: 'Chanaar',
      positiveReputation: 23,
      negativeReputation: 1,
      tradesCounter: 1,
      avatar: 'user2.jpg'
    },
    paymentMethod: 'Steam Gift Card',
    paidStatus: false,
    tradeStatus: 'is buying',
    currency: 'USD',
    currencyAmount: 25.01,
    cryptocurrency: 'BTC',
    cryptocurrencyAmount: 0.00234,
    chatId: 0,
    chatNotification: true,
    createdAt: new Date('August 14, 2019 11:20:25'),
    hash: '9cF2011'
  },
  {
    tradingWith: {
      id: 232,
      login: 'Robert',
      positiveReputation: 45,
      negativeReputation: 2,
      tradesCounter: 3,
      avatar: 'user1.jpg'
    },
    paymentMethod: 'Amazon Gift Card',
    paidStatus: true,
    tradeStatus: 'is buying',
    currency: 'USD',
    currencyAmount: 15,
    cryptocurrency: 'BTC',
    cryptocurrencyAmount: 0.00094,
    chatId: 1,
    chatNotification: false,
    createdAt: new Date('August 13, 2019 20:22:25'),
    hash: '43j341s'
  }
]

export const chatData = [
  {
    id: 0,
    messages: [
      {
        id: 0,
        date: new Date('August 13, 2019 20:24:25'),
        text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        authorId: 213
      },
      {
        id: 1,
        date: new Date('August 13, 2019 20:26:25'),
        text: "Words which don't look even slightly believable.",
        authorId: 2451
      },
      {
        id: 2,
        date: new Date('August 13, 2019 21:22:25'),
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        authorId: 2451
      },
      {
        id: 3,
        date: new Date('August 13, 2019 21:26:25'),
        text: "Words which don't look even slightly believable.",
        authorId: 213
      }
    ]
  },
  {
    id: 1,
    messages: [
      {
        id: 0,
        date: new Date('August 13, 2019 20:24:25'),
        text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        authorId: 213
      },
      {
        id: 1,
        date: new Date('August 13, 2019 20:26:25'),
        text: "Words which don't look even slightly believable.",
        authorId: 2451
      },
      {
        id: 2,
        date: new Date('August 13, 2019 21:22:25'),
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        authorId: 2451
      },
      {
        id: 3,
        date: new Date('August 13, 2019 21:26:25'),
        text: "Words which don't look even slightly believable.",
        authorId: 213
      }
    ]
  }
] 