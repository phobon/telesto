interface Test {
  id: number;
  data: string;
}

const testData: Test[] = [
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

export default function handle(req: any, res: { json: (data: object) => void}): void {
  res.json(testData);
};