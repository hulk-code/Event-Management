<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the correct answer from the following options and give an explanation (2-5 lines).

let greeting;
greetign = {};
console.log(greetign);

- A: {}
- B: ReferenceError: greetign is not defined
- C: undefined

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>The correct answer is B. Because "greetign" is Not define. So it will return undefine.</i>

</p>
</details>

###### 2. Write the correct answer from the following options and give an explanation (2-5 lines).

function sum(a, b) {
  return a + b;
}

sum(1, "2");

- A: NaN
- B: TypeError
- C: "12"
- D: 3

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>The correct answer will be C that means the output of this code will be 12. 1 is a number, and "2" is a string so it perform string concatenation , the expression 1 + "2" set as "12" </i>

</p>
</details>

###### 3. Write the correct answer from the following options and give an explanation (2-5 lines).

const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);

- A:['🍕', '🍫', '🥑', '🍔']`
- B:['🍝', '🍫', '🥑', '🍔']`
- C['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: ReferenceError

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>The correct answer will be A. The food array will be the same as it is.Because it create an array of info bt the food Array remain unchage.</i>

</p>
</details>

###### 4. Write the correct answer from the following options and give an explanation (2-5 lines).

function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());

- A: Hi there,
- B: Hi there, undefined
- C: Hi there, null
- D: ReferenceError

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>The correct answer will be B.Didn't provide an argument for the name parameter when calling sayHi(), the name variable inside the function will have the value of undefined by default.So it return Hi there Undefine</i>

</p>
</details>

###### 5. Write the correct answer from the following options and give an explanation (2-5 lines).

let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>The correct answer will be C. That means the output will be 3. Here the condition is if num is truthy , increment the count variable by 1. The array contains [0,1,2,3]. Here, 0 is falsy value. That's why  it will not add 1 to the count. For other three others numbers it will add 1 for each time. That's why the answer will be 3.</i>

</p>
</details>

<p>Live Link:https://social-event-management-bdc18.web.app/</p>