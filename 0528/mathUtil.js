function MyMath(a, b) {
    this.n1 = a;
    this.n2 = b;
    this.max = f1;
    this.min = f2;
    this.toString = f3;
}
function f1() { return this.n1 > this.n2 ? this.n1 : this.n2; }
function f2() { return this.n1 > this.n2 ? this.n2 : this.n1; }
function f3() {
    return "첫번째숫자:" + this.n1 + ",두번째숫자:" + this.n2;
}
