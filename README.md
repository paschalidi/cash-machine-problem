# cash-machine-problem[![Travis](https://img.shields.io/travis/paschalidi/cash-machine-problem.svg)](https://travis-ci.org/paschalidi/cash-machine-problem)
[![Travis](https://img.shields.io/travis/paschalidi/cash-machine-problem.svg)](https://travis-ci.org/paschalidi/cash-machine-problem)

a simple micro-library that develops a solution that simulates the delivery of notes when a client does a withdraw in a cash machine.



#### Requirements

- Always deliver the lowest number of possible notes
- It’s possible to get the amount requested with available notes
- The client balance is infinite
- Amount of notes is infinite
- Available notes 100,00, 50,00, 20,00, 10,00 $

#### Examples

1. Entry: 30.00 Result: [20.00, 10.00]
2. Entry: 80.00 Result: [50.00, 20.00, 10.00]
3. Entry: 125.00 Result: throw NoteUnavailableException
4. Entry: -130.00 Result: throw InvalidArgumentException
5. Entry: NULL Result: [Empty Set]



## Install

`npm i cash-machine-problem`



## Install locally

1. `git clone https://github.com/paschalidi/cash-machine-problem.git`

2. `cd cash-machine-problem`

3. `npm i`


#### Watch Tests

`npm run test`

#### Run tests once

`npm run test:single`



## Usage

```
import calculateNotes from 'cash-machine-problem'

// Returns an array of the lowest number of possible notes
calculateNotes(100)
//=> [100, 0, 0, 0]

calculateNotes(120)
//=> [100, 0, 20, 0]

calculateNotes(130)
//=> [100, 0, 20, 10]

...
```



## API

calculateNotes([integer])

Returns an array of of 4 integers in the following format `[x1, x2, x3, x4]`.

`x1` represents the amount of $100.00 that the cash machine should return

`x2` represents the amount of $50.00 that the cash machine should return

`x3` represents the amount of $20.00 that the cash machine should return

`x4` represents the amount of $10.00 that the cash machine should return



## Architectural Notes

#### Automated releases with `semantic-release-cli`

* We set up smeantic-release-cli with `semantic-release-cli setup`

* We chose `Travis CI` for continuous integration

* We added an extra script to `travis.yml` so that tests run before every release. This way if tests dont pass then the release wont happen

* We also added `ghooks` so that before every `commit` tests run and any test fail `commit` wont take place.



#### Testing

For testing we chose `mocha` and `chai`. There reason is the clean api they provide.



#### Code structure

* `src/index.js` contains the implementation of the `calculateNotes()`
* exports a `default` function so that the end user can be able to specify the name of it herself/himself.
* The tests are also included in the `src` directory.



#### Build process

* When travis builds the lib the following comand is being executed `babel --copy-files --out-dir dist --ignore *.test.js src`.
  `babel` will copy all the files from the `src` directory into the `dist` directory and will also convert them to `es5` so that it is executable from every browser or `node` version needed. Also the test files are ignored so that the end user wont have them in her/his `node_modules` directory.

* before every build the following script will run `rimraf dist`.

  This will remove the `dist` directory and will run the command for every operating system (Windows, iOS or Linux).

  More info about `rimraf` [here](https://github.com/isaacs/rimraf).



## Contributing

Angular's document for the [contribution](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md) can be found here. Thanks :)
