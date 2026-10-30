import { expect, test } from "vitest";
import { isInSeason } from "@/routes/index";
const d = (m: number, day: number) => new Date(2026, m - 1, day);
test("カヤックは4月・10月・11月", () => {
  expect(isInSeason("カヤック", d(4, 15))).toBe(true);
  expect(isInSeason("カヤック", d(11, 30))).toBe(true);
  expect(isInSeason("カヤック", d(7, 1))).toBe(false);
});
test("サップは6月〜9月末", () => {
  expect(isInSeason("サップ", d(6, 1))).toBe(true);
  expect(isInSeason("サップ", d(9, 30))).toBe(true);
  expect(isInSeason("サップ", d(10, 1))).toBe(false);
});
test("パックラフトは5月〜10月10日", () => {
  expect(isInSeason("パックラフト", d(5, 1))).toBe(true);
  expect(isInSeason("パックラフト", d(10, 10))).toBe(true);
  expect(isInSeason("パックラフト", d(10, 11))).toBe(false);
});
