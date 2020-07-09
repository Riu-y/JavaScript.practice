// import Dog from "./dog"

import readlineSync from "readline-sync";

import Dog from "../class/dog"

// const dog = new Dog("レオ", 4, "チワワ");

const dog1 = new Dog("レオ", 4, "チワワ");
const dog2 = new Dog("ベン", 2, "プードル");

const name = readlineSync.question("名前を入力してください: ");

const age = readlineSync.questionInt("年齢を入力してください: ");

const breed = readlineSync.question("犬種を入力してください: ");

const name = readlineSync.question("名前を入力してください:");

const age = readlineSync.questionInt("年齢を入力してください:");

const breed = readlineSync.question("犬種を入力してください:");


// export default dog;

export {dog1, dog2};