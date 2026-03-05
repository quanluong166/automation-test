export function parseDollar(value: string): number {
  return Number(value.replace("$", "").trim());
}

