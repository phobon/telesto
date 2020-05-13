const testData = [
  {
    id: 1,
    data: '123',
  },
  {
    id: 2,
    data: '234',
  },
  {
    id: 3,
    data: '345',
  },
  {
    id: 4,
    data: '456',
  },
  {
    id: 5,
    data: '567',
  },
];

export default function handle(req, res) {
  res.json(testData);
};