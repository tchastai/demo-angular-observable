# Demo

## Requirements

Make sure the following dependencies are installed:
- [Angular CLI](https://angular.io/cli)
- [Node 20](https://github.com/nvm-sh/nvm)

Make sure you have read this documentation:
- [Swapi Api](https://swapi.dev/documentation#starships)

### Running

```bash
$ cd demo
$ npm install
$ ng serve --open
```

### Instruction

1 - You need to complete the application to display the list of Star Wars starships, using the public SWAPI (Star Wars API).

2 - When you click on a starship, you need to display the list of films in which the starship appears, by clicking on the films field of the Starship object. The only constraint is to use lastValueFrom to retrieve the value of the films. Be careful, there may be several films, so you'll need to synchronize the calls!

You'll need to use observables and lastValueFrom only to do this. You will have to respect our current best practices. So, only the Swapi service should be the source of truth for spaceship recovery. Models and components have already been created to make your work easier. Please refer to the swapi API documentation.
