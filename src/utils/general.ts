export function isClass(value: any): boolean {
  return (
    typeof value === "function" &&
    /^class\s/.test(Function.prototype.toString.call(value))
  );
}
