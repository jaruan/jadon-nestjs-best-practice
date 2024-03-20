interface IUser {
  name: string;
  age: number;
  run(): void;
}

interface IUser {
  gender: string;
}

const user: IUser = {
  name: 'John',
  age: 30,
  gender: 'male',
  run: () => console.log('running'),
};

console.log(user.run());

// type UserType = {
//   name: string;
//   age: number;
//   run(): void;
// };

// interface IPerson extends IUser {
//   gender: string;
// }

// type PersonType = IUser & { gender: string };

// interface IDog {
//   bark(): void;
//   walk(): void;
// }

// interface ICat {
//   meow(): void;
//   walk(): void;
// }

// type Pig = {
//   oink(): void;
//   walk(): void;
// };

// type Animal = ICat | IDog | Pig;

// type AnimalType = ICat & IDog & Pig;

// type AnimalList = [ICat, IDog, Pig];
