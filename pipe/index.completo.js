
pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x)

getName = (person) => person.name;
getName({ name: "Buckethead" });
console.log(getName({ name: "Buckethead" }))
// "Buckethead"

uppercase = (string) => string.toUpperCase();
uppercase("Buckethead");
console.log(uppercase("Buckethead"))
// "BUCKETHEAD"

get6Characters = (string) => string.substring(0, 6);
get6Characters("Buckethead");
console.log(get6Characters("Buckethead"))
// "Bucket"

reverse = (string) =>
  string
    .split("")
    .reverse()
    .join("");

reverse("Buckethead");
console.log(reverse("Buckethead"))
// "daehtekcuB"

ex01 = reverse(get6Characters(uppercase(getName({ name: "Buckethead" }))));
// "TEKCUB"
console.log(ex01)

ex02 = pipe(
  getName,
  uppercase,
  get6Characters,
  reverse
)({ name: "Buckethead" });
// "TEKCUB"
console.log(ex02)