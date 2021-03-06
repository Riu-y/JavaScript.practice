// 「Hello World」とコンソールに出力してください
console.log("Hello World");

// 「にんじゃわんこ」とコンソールに出力してください
console.log("にんじゃわんこ");

// 以下の行をコメントアウトしてください
// console.log("この行をコメントアウトしてください");

// 5と3を足した値を出力してください
console.log(5 + 3);

// 20から8を引いた値を出力してください
console.log(20 - 8);

// "4 + 5" を文字列として出力してください
console.log("4 + 5");

// 8と4をかけた結果を出力してください
console.log(8 * 4);

// 24を4で割った結果を出力してください
console.log(24 / 4);

// 7を2で割った余りを出力してください
console.log(7 % 2);

// 「ひつじ」と「仙人」を連結してコンソールに出力してください
console.log("ひつじ" + "仙人");

// 文字列の「20」と「15」を連結してコンソールに出力してください
console.log("20" + "15");

// 変数nameを定義し、「にんじゃわんこ」を代入してください
let name = "にんじゃわんこ";

// 変数nameの値を出力してください
console.log(name);

//---変数の代入 -----

// 変数lengthを定義してください
let length = 5;

// 変数lengthの値を出力してください
console.log(length);

// 変数lengthを用いて、円の面積を出力してください
console.log(length * length * 3);

let name = "にんじゃわんこ";
console.log(name);

// 変数nameの値を"とりずきん"に更新してください
// 一度変数を宣言したら、次回以降はletをつけなくても良い
name = "とりずきん";

// 変数nameの値を出力してください
console.log(name);

// ---- 変数自信を変更する -----

//変数自身に代入するイメージ
//x = X + 10 は x += 10 に省略した形で入力できる

let number = 7;
console.log(number);

// 変数numberの値に3を加えてください
number +=3;

console.log(number);

// 変数numberの値を2で割ってください
number /=2;

console.log(number);

// -- 定数の定義----
//const name = "John"
//constで定義する

定数と変数の違い
定数は変数と違い一度代入したもの値を更新できない

// 定数を使うメリット
// 値を変えられない不便生もあるが予期せぬ更新を防ぐことができる

// 定数languageを定義してください
const language = "フランス語";

// 定数languageの値を出力してください
console.log(language);

// 定数languageを用いて、「〇〇を話せます」と出力してください
console.log(language + "を話せます");

// テンプレートリテラル
// 文字列や整数の連結に使用できる連結方法
// テンプレートリテラルを使う際はバックコーテーションを使う
// `${}`

const name = "にんじゃわんこ";
console.log(`こんにちは ${name}`);

const name = "にんじゃわんこ";
const age = 14;

// 「ぼくの名前は〇〇です」とコンソールに出力してください
console.log(`ぼくの名前は${name}です`);

// 「今は〇〇歳です」と出力してください
console.log(`今は${age}歳です`);

// ---- if 条件分岐------
const level = 12;

// 条件式を「level > 10」とするif文を作ってください
if (level > 10) {
  console.log("レベルが10より大きいです");
}

const age = 24;

// 「age >= 20」を出力してください
console.log(age >= 20);

// 「age < 20」を出力してください
console.log(age < 20);

// ageの値が20以上の場合に、「私は20歳以上です」と出力してください
if (age >= 20){
  console.log("私は20歳以上です");
  }  
const password = "ninjawanko";

// passwordの値が"ninjawanko"の場合、「ログインに成功しました」と出力してください
if(password === "ninjawanko"){
  console.log("ログインに成功しました");
}

// passwordの値が"ninjawanko"でない場合、「パスワードが間違っています」と出力してください
if(password !== "ninjawanko"){
  console.log("パスワードが間違っています");
}

const age = 17;

// 条件式が成り立たない場合に「私は20歳未満です」と出力してください
if (age >= 20) {
  console.log("私は20歳以上です");
} else{
  console.log("私は20歳未満です");
}

const age = 17;

// ageの値が10以上20未満のとき、「私は20歳未満ですが、10歳以上です」と出力してください
if (age >= 20) {
  console.log("私は20歳以上です");
} else if (age >= 10){
  console.log("私は10歳以上です");
} else {
  console.log("私は10歳未満です");
}

// --- Switch文 ----
const rank = 2;

switch (rank) {
  case 1:
    console.log("金メダルです！");
    break;

  // rankの値が2のcaseを追加してください
  case 2:
    console.log("銀メダルです");
    break;
  // rankの値が3のcaseを追加してください
  case 3:
    console.log("銅メダルです");
    break;
}

//defaultの設定

const rank = 5

switch (rank) {
	case 1:
		console.log("金メダルです！");
		break;
	case 2:
		console.log("銀メダルです！");
		break;
	case 3:
		console.log("銅メダルです！");
		break;
	default:
		console.log("メダルはありません");
		break;
}


// 変数numberを定義してください
let number = 0;

// 変数numberに1を加えて、その後に変数numberの値を出力してください

number += 1;
console.log(number);

// 上述の2行のコードを4回、貼り付けてください

number += 1;
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);

///---- 繰り返し文while ----

// 変数numberを定義してください
let number = 1;

// while文を作成してください
while(number <= 100){
  console.log(number);
  number += 1;
}


///---- 繰り返し文 for ----

// for文を用いて、1から100までの数字を出力してください
for (let number = 1; number <= 100; number ++ ){
  console.log(number);
}
// += 1 は ++と省略できる

///---- 繰り返し処理のまとめ ----

for(let number = 1; number <= 100; number ++){
	if(number % 3 === 0){
		console.log("3の倍数です");
	else{
		console.log(number);
	}
}

// ---配列、配列を定数に格納する-----
// 定数animalsに、指定された配列を代入してください
const animals = ["dog", "cat", "sheep"];

// 定数animalsを出力しaて下さい
console.log(animals);

// 定数animalsに、指定された配列を代入してください
const animals = ["dog", "cat", "sheep"];

// 定数animalsを出力しaて下さい
console.log(animals);

const animals = ["dog", "cat", "sheep"];

// 配列animalsの3つ目の要素を「rabbit」に更新してください
animals[2] = "rabbit"; 

// 配列animalsの3つ目の要素をコンソールに表示して下さい
console.log(animals[2]);

//---- 配列の繰り返し処理 -----

const animals = ["dog","cat","sheep"];

for(let i = 0; i < 3; i ++){
	console.log(animals[i]);
}

const animals = ["dog", "cat", "sheep", "rabbit", "monkey", "tiger", "bear", "elephant"];

console.log(animals.length)

for(let i = 0; i < animals.length; i++){
	console.log(animals[i]);
}

// ----オブジェクト---

// 定数characterを定義し、指定されたオブジェクトを代入してください
const character = {name: "にんじゃわんこ", age: 14};

// characterの値を出力してください
console.log(character);

const character = {name: "にんじゃわんこ", age: 14};

// characterのnameの値を出力してください
console.log(character.name);

// characterのageの値を「20」に更新してください
character.age = 20;

// characterをコンソールに出力してください

console.log(character);

const characters = [
  {name: "にんじゃわんこ", age: 14},
  {name: "ひつじ仙人", age: 1000}
];

// charactersの1つ目の要素をコンソールに出力してください
console.log(characters[0]);

// charactersの2つ目の要素の「name」に対応する値をコンソールに出力してください

console.log(characters[1].name);

const characters = [
  {name: "にんじゃわんこ", age: 14},
  {name: "ひつじ仙人", age: 100},
  {name: "ベイビーわんこ", age: 5},
];

for (let i = 0; i < characters.length; i++){
  console.log("--------------------");
  console.log(`名前は${characters[i].name}です`);
  console.log(`${characters[i].age}歳です`);
};

const characters = [
  {name: "にんじゃわんこ", age: 14},
  {name: "ひつじ仙人", age: 100},
  {name: "ベイビーわんこ", age: 5},
];

// for文を完成させてください
for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");
  
  // 定数characterを定義してください
  const character = characters[i];
  
  // 「名前は〇〇です」を出力してください
  console.log(`名前は${character.name}です`);
  
  // 「〇〇歳です」を出力してください
  console.log(`${character.age}歳です`);
  
}


// 存在しないデータを呼び出した時
const characters = [
  {name: "にんじゃわんこ", age: 14},
  {name: "ひつじ仙人", age: 100},
  {name: "ベイビーわんこ", age: 5},
  // 要素を追加してください
  {name: "とりずきん"}
];

for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");
  
  const character = characters[i];
  
  console.log(`名前は${character.name}です`);
  console.log(`${character.age}歳です`);
}

const characters = [
  {name: "にんじゃわんこ", age: 14},
  {name: "ひつじ仙人", age: 100},
  {name: "ベイビーわんこ", age: 5},
  {name: "とりずきん"}
];

for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");
  
  const character = characters[i];
  
  console.log(`名前は${character.name}です`);
  
  // if文を追加してください
  if (character.age === undefined){
    console.log("年齢は秘密です");
  } else {
    console.log(`${character.age}歳です`);
  }
 }

const cafe = {
  name: "Progateカフェ",
  businessHours: {
    // businessHoursの値に指定されたオブジェクトを代入してください
    opening: "10:00(AM)",
    closing: "8:00(PM)"
    
  },
};

// 「店名:〇〇」を出力してください
console.log(`店名: ${cafe.name}`)

// 「営業時間:〇〇から△△」を出力してください
console.log(`営業時間:${cafe.businessHours.opening}から${cafe.businessHours.closing}`);

const cafe = {
  name: "Progateカフェ",
  businessHours: { 
    opening: "10:00(AM)",
    closing: "8:00(PM)"
  },
  // menusプロパティに配列を代入してください
  menus:["コーヒー","紅茶", "チョコレートケーキ"]
  
};

console.log(`店名: ${cafe.name}`);
console.log(`営業時間:${cafe.businessHours.opening}から${cafe.businessHours.closing}`);
console.log(`----------------------------`);
console.log("おすすめメニューはこちら");

// for文を用いて配列menusの中身を表示させてください
for (let i = 0; i < cafe.menus.length; i++){
    console.log(cafe.menus[i]);
}

const cafe = {
	name: "Progateカフェ",
	businessHours{
		opening: "10:00(AM)",
		closing: "8:00(PM)"
	};
	menus:["コーヒー","紅茶", "チョコレートケーキ"]
};

console.log(`店名:${cafe.name}`)
console.log(`営業時間:${cafe.businessHours.opening}から${cafe.businessHours.closing}`);
console.log(`----------------------------`);
console.log("おすすめメニューはこちら");

for (let i = 0; i < cafe.menus.length; i++){
	console.log(cafe.menus[i]);
}

//関数の定義
const 定数名 = function(){
	まとめいたい処理
}

const introduce = function(){
	console.log("こんにちは");
	console.log("Hello");
	};
	introduce();

// 関数に引数を渡す

// 関数の引数にnameを追加してください
const greet = (name) => {
  // 「こんにちは、〇〇さん」となるように出力してください
  console.log(`こんにちは、${name}さん`);
  
};

// greetの引数に「ひつじ仙人」を渡して呼び出してください
greet("ひつじ仙人");

// 複数の引数を渡す
// 関数の引数にnumber1とnumber2を追加してください
const add = (number1,number2) => {
  // number1とnumber2を足した値をコンソールに出力してください
  console.log(number1 + number2);
  
};

// 引数に5と7を渡して関数を呼び出してください
add(5,7);

// 戻り値を定数に代入する

const half = (number) => {
  // numberを2で割った値を戻り値として返してください
  return number / 2;a
};

// 定数resultを定義してください
const result = half(130);

// 「130の半分は〇〇です」となるように出力してください
console.log(`130の半分は${result}です`);

//真偽値をリターンで返す

const check = (number) => {
  // numberが3の倍数かどうかを戻り値として返してください
  return number % 3 === 0;
  
};

// if文の条件式で、checkを呼び出してください
if (check(123)) {
  console.log("3の倍数です");
} else {
  console.log("3の倍数ではありません");
}

// 定数nameを定義してください
const name = "にんじゃわんこ";

const introduce = (name) => {
  // 「わたしは〇〇です」を出力してください
  console.log(`わたしは${name}です`);
  
};

// 関数introduceを呼び出してください
introduce("ひつじ仙人");


// 定数nameの値を出力してください
console.log(name);

const number1 = 103;
const number2 = 72;
const number3 = 189;

// getMax関数を定義してください
const getMax = (a, b, c) => {
	let max = a;
	if(max < b){
		max = b;
	}
	if (max < c){
		max = c;
	}
	return max
};

// 「最大値は○○です」と出力してください
const max = getMax(number1,number2,number3)
console.log(`最大値は${max}です`);

// プロパティに関数を入れる

// 定数animalを定義してください
const animal = {
  name: "レオ",
  age: 3,
  greet: () => {
    console.log("こんにちは");
  }
}

// animalのnameプロパティの値を出力してください
console.log(animal.name);

// animalのgreetプロパティの関数を実行してください
animal.greet();

--- オブジェクトを量産する ---

クラスの作成
クラスから生成したオブジェクトはインスタンスと呼ぶ

class Animal {
}
// Animalクラスのインスタンスを定数animalに代入してください
const animal = new Animal();

constructorの設定

// 定数animalの値を出力してください
console.log(animal);
class Animal {
  // コンストラクタを追加してください
  constructor(){
    console.log("インスタンスを生成しました");
  }
}

const animal = new Animal();

constructor内の値をインスタンスプロパティにする

class Animal {
  constructor() {
    // nameの値に文字列「レオ」を代入してください
    this.name = "レオ";

    // ageの値に数値の「3」を代入してください
    this.age = 3;
  }
}

const animal = new Animal();

// 「名前: 〇〇」となるように出力してください
console.log(`名前:${animal.name}`);

// 「年齢: 〇〇」となるように出力してください
console.log(`年齢:${animal.age}`);

constructorのインスタンスメソッドを引数で渡せる様にする

class Animal {
  // 引数に「name」と「age」を追加してください
  constructor(name,age) {
    // 「"レオ"」の代わりに引数nameの値を代入してください
    this.name = name;
    
    // 「3」の代わりに引数ageの値を代入してください
    this.age = age;
  }
}

// 引数に「"モカ"」と「8」を渡してください
const animal = new Animal("モカ",8);

console.log(`名前: ${animal.name}`);
console.log(`年齢: ${animal.age}`);

メソッドの定義

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // greetメソッドを追加してください
  greet(){
    console.log("こんにちは");
  }
  
}

const animal = new Animal("レオ", 3);

console.log(`名前: ${animal.name}`);
console.log(`年齢: ${animal.age}`);

// animalに対してgreetメソッドを呼び出してください
animal.greet();

メソッドの中でメソッドを呼び出す

class Animal {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	greet(){
		console.log("こんにちは");
		}
	info(){
		this.greet();
		console.log(`名前は${this.name}`);
		console.log(`${this.age}歳です`);
	}
}

const animal = new Animal("レオ", 3);
animal.info();

---クラスの継承---

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("こんにちは");
  }
  
  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}

class Dog extends Animal {
}

// 定数dogにDogクラスのインスタンスを代入してください
const dog = new Dog("レオ", 4);

// dogに対してinfoメソッドを呼び出してください
dog.info();

--独自メソッド--

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("こんにちは");
  }
  
  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}

class Dog extends Animal {
  // getHumanAgeメソッドを追加してください
  getHumanAge(){
    return this.age * 7;
  }
}

const dog = new Dog("レオ", 4);
dog.info();

// 定数humanAgeを定義し、定数dogに対してgetHumanAgeメソッドを呼び出した値を代入してください
const humanAge = dog.getHumanAge();

// 「人間年齢で〇〇歳です」と出力してください
console.log(`人間年齢で${humanAge}歳です`);

--メソッドのオーバーライド--

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("こんにちは");
  }
  
  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}

class Dog extends Animal {
  // infoメソッドを追加してください
  info(){
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
    
    const humanAge = this.getHumanAge();
    console.log(`人間年齢で${humanAge}歳です`);
  }
  

  getHumanAge() {
    return this.age * 7;
  }
}

const dog = new Dog("レオ", 4);
dog.info();

----コンストラクタのオーバーライド-----

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("こんにちは");
  }
  
  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}

class Dog extends Animal {
  // constructorを追加してください
  constructor(name, age, breed){
    super(name, age);
    this.breed = breed;
  }

  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    // 「犬種は〇〇です」と出力してください


    console.log(`${this.age}歳です`);
    const humanAge = this.getHumanAge();
    console.log(`人間年齢で${humanAge}歳です`);
    console.log(`犬種は${this.breed}です`);
  }
  
  getHumanAge() {
    return this.age * 7;
  }
}

// 3つ目の引数に「"チワワ"」を渡してください
const dog = new Dog("レオ", 4, "チワワ");
dog.info();

ファイルの分割 exportとimport

export default クラスネーム;

import クラスネーム from "./ファイルネーム"

値のエクスポート
クラスだけではなく、定数や値、文字列などもエクスポートすることができる

//dogDate.js
import Dog from "./dog"

const dog = new Dog("レオ", 4, "チワワ");

export default dog;

//dog.js
import dog from "./dogData"

dog.info();


名前付きエクスポート
デフォルトエクスポートでは一つの値しか自動的にインポートしないため複数の場合は以下のようにする

// script.js
import {dog1, dog2} from "./data/dogData"

dog1.info();
dog2.info();

dogData.js
import Dog from "../class/dog"

const dog1 = new Dog("レオ", 4, "チワワ");
const dog2 = new Dog("ベン", 2, "プードル");

export {dog1, dog2};

------パッケージ------



プッシュメソッド

const characters = ["にんじゃわんこ", "ベイビーわんこ", "ひつじ仙人"];

console.log(characters);

// pushメソッドを使って配列charactersに、文字列「とりずきん」を追加してください
characters.push("とりずきん");

// 配列charactersを出力してください
console.log(characters);

forEach

const numbers = [1,2,3];

numbers.forEach(→ (number) =>{console.log(number); ←};コールバック関数

const characters = ["にんじゃわんこ", "ベイビーわんこ", "ひつじ仙人", "とりずきん"];
// forEachメソッドを使って、配列charactersの中身をすべて出力してください
characters.forEach((character) => {console.log(character);});

findメソッド

const numbers = [1, 3, 5, 7, 9];

// findメソッドを使って配列numbersから3の倍数を見つけ、定数foundNumberに代入してください
const foundNumber = numbers.find((number) =>{ return  number % 3 === 0; });
// foundNumberを出力してください
console.log(foundNumber);

const characters = [
  {id: 1, name: "にんじゃわんこ", age: 6},
  {id: 2, name: "ベイビーわんこ", age: 2},
  {id: 3, name: "ひつじ仙人", age: 100},
  {id: 4, name: "とりずきん", age: 21}
];

// 定数charactersからidが3のオブジェクトを見つけ、定数foundCharacterに代入してください
const foundCharacter = characters.find(character =>{return character.id === 3; });

// foundCharacterを出力してください
console.log(foundCharacter);

filterメソッド

const numbers = [1, 2, 3, 4];

// filterメソッドを使ってnumbersから偶数を取り出し、定数evenNumbersに代入してください
const evenNumbers = numbers.filter((number) =>{return number % 2 === 0; });

// evenNumbersを出力してください
console.log(evenNumbers);


const characters = [
  {id: 1, name:"にんじゃわんこ", age: 14},
  {id: 2, name:"ベイビーわんこ", age: 5},
  {id: 3, name:"ひつじ仙人", age: 100}
];

// charactersから20歳未満のキャラクターを取り出し、定数underTwentyに代入してください
const underTwenty = characters.filter((character) =>{ return character.age < 20; });

// underTwentyを出力してください
console.log(underTwenty);

mapメソッド
const numbers = [1, 2, 3, 4];

// 定数numbersにmapメソッドを使って配列を作り、定数doubledNumbersに代入してください
const doubledNumbers = numbers.map((number) =>{ return number * 2; });

// 定数doubledNumbersを出力してください
console.log(doubledNumbers);


const names = [
  {firstName: "Kate", lastName: "Jones"},
	{firstName: "John", lastName: "Smith"},
	{firstName: "Denis", lastName: "Williams"},
	{firstName: "David", lastName: "Black"}
];

// 定数namesにmapメソッドを使って新しい配列を作り、定数fullNamesに代入してください
const fullNames = names.map((name) =>{ return name.firstName + name.lastName; });

// 定数fullNamesを出力してください
console.log(fullNames);

コールバック関数に関して学ぶ
JavaScriptでは引数に関数を渡すことができてそのことをコールバック関数と呼ぶ

const printWanko = () => {
  console.log("にんじゃわんこ");
};

// 関数callにcallbackという名前の引数を追加してください
const call = (callback) => {
  console.log("コールバック関数を呼び出します。");
  // 引数に渡したcallbackを呼び出してください
  callback();
};

// 関数printWankoを引数に渡して関数callを実行してください
call(printWanko);

引数の中で関数を定義することも可能

const printWanko = () => {
  console.log("にんじゃわんこ");
};

const call = (callback) => {
  console.log("コールバック関数を呼び出します。");
  callback();
};

call(printWanko);

// 引数で関数を定義して渡してください
call(() => {
  console.log("ひつじ仙人");
});


引数を渡す


複数の引数を渡す

const call = (callback) =>{
	callback("にんじゃわんこ",14)
};

class((name, age) =>{
	console.log(`${name}は${age}歳です。`);
});


