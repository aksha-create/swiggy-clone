import { sum } from "../sum";
test("sum of two numbers to be calculated", () => {
  const result = sum(3, 4);
  //ASSERTION .BUT IF WE DONT WRITE ASSERTION ,IT WILL ALWAYS PASS
  expect(result).toBe(7);
});
