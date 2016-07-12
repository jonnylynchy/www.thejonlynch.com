title: 'Typescript, ES2015 and Angular 2'
date: 2016-07-11 15:38:04
categories:
- Javascript
tags:
- Javascript
- ES2015
- Typescript
- Angular
- Angular2
---
> Mankind is capable of creating such marvelous beauty and magnificent destruction. Occasionally, a human being or two tap their inner-most creative and imaginative resources to create something so magnificent, so awe-inspiring, that it leaves us speechless.
<cite>Me (or no one ever)</cite>

Okay, so no one actually said that, but you get the point right? Maybe this isn't as an incredible revelation as all that, but it's still pretty cool.

Ladies and Gentlemen, if you have not familiarized yourself with the world of Angular2, Typescript and ES2015, please allow me to introduce them to you!

### Typescript
So what is Typescript? The official Typescript website states:
> TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.

Yeah, pretty much that. It's a pre-compilation version of Javascript that allows you to type just about anything. Objects, variables, return types, etc. can all be strongly typed. You can use built in types of the common variety such as:

- Boolean
- Number
- String
- Array
- Tuple
- Enum
- Any
- Void

To a Javascript developer, some of these are not so common actually. Having the ability to use Tuples, Enums and "Any" is pretty powerful. In addition to these, you can also create your own types just as in any modern object-oriented programming language.

Along with all this type awesomeness, you also have a few things not really available to the common JS runtime:

- Interfaces
- Generics
- Union Types (where type can be either or)

Now if you've been following the development of the newest versions of Javascript, you could probably just skip this next section. If you haven't, check it out.

### ES2015 (AKA ES6)

I'm not going to bore you with the details of TC39, the process of formalizing these specs and so on, but you should google those things if you're interested.

I've got an example repo set up on GitHub that wasn't really super complete, but you can see some basic examples of some of the newer features of ES2015 here: <https://github.com/jonnylynchy/es6-fun/tree/master/src/js>

I'll highlight a few of those.

#### Classes

Here's a "plain" old Javascript class with a couple methods.

```javascript
class Person {
	// Defaults
	name = '';
	friends = [];
	type = 'normal';
	strength = 'average';

	constructor(name) {
		// whatever you want to do here on initialization
		this.name = name;
	}

	printFriends(){
		// Lexicle this (remember all that _this = this nonsense?)
		// Also notice the '=>'? That's the fat arrow
		this.friends.forEach(f => console.log(this.name + " knows " + f));

		return true;
	}

	addFriend(friend){
		this.friends.push(friend);
		return true;
	}
}
```

That was pretty cool right? Under the hood, this is all still using prototypal inheritance, but now we can make sense of it all in a clear, object-oriented approach.

Some have criticized this approach as a cheap way to emulate other C-type languages. Personally, I love it. Javascript has always been a little hard to grasp once you start prototyping and getting into complex structures.

> Okay, that's nice but how does Typescript play into this?

So excited you asked. Let's type that bad boy!

```javascript
class Person {
	// Defaults
	name:string = '';
	friends:Person[] = [];
	type:string = 'normal';
	strength:string = 'average';

	constructor(name:string) {
		// whatever you want to do here on initialization
		this.name = name;
	}

	printFriends(){
		// Lexicle this (remember all that _this = this nonsense?)
		// Also notice the '=>'? That's the fat arrow
		this.friends.forEach(f => console.log(this.name + " knows " + f));

		return true;
	}

	addFriend(friend:Person){
		this.friends.push(friend);
		return true;
	}
}
```
See how we typed all the properties of this class? Did you notice how the friends array was not only a typed array, but of type Person? We just defined what a Person is and it's still valid Typescript!

We could have gone further and defined some Enums to set our type and strength properties of Person, but for this simple example a string suffices.

Now, lets extend that class (a standard ES2015 feature).

```javascript
class SuperPerson extends Person {
	constructor(args) {
		// lexical this
		super(args);
		this.type = 'definitely not normal';
		this.strength = 'super human';
		this.useSuperPower = 'I just crushed beer cans with my bare hands!';
	}

	// fat arrows using lexical this
	delayedSuperPower(){

		setTimeout(() => {
			console.log(this.useSuperPower);
		}, 1000);

		return true;
	}
}
```

Here's where the traditional Javascript developer will start thinking about prototypal inheritance. SuperPerson is inheriting from and extending Person. Nice, TC39. Nice.

Along with extending your classes, you can extend built in objects as well. Again, another existing feature in JS with prototype, but we now have a different way to write it.

I'll hit one more ES2015 example before moving on.

#### let vs var

The keyword 'let' allows us to have true blockscoping.

```javascript
// Old school
function varTest(){
	var thisThing = 'foo';
	if(true){
		var thisThing = 'bar';
		console.log(thisThing);
	}
	console.log(thisThing); // bar
}

// Let
function letTest(){
	let thisThing = 'foo';
	if(true){
		let thisThing = 'bar';
		console.log(thisThing);
	}
	// BLOCK SCOPE!!!
	console.log(thisThing); // foo
}
```

Another convenient feature. Sweetness.

ES2015 is full of features I could go on about in detail including:

- Arrow Functions
- Default Parameters
- Rest Parameters
- Spread Operator
- String Interpolation
- Unicode Strings
- Module (import, export)
- Iterators
- Generators
- etc. etc. etc.

#### Compiling ES2015

Of course, to use most of what's included in ES2015 in a wide array of browsers, you'll need a transpiler of some sort. This is because not every browser is able to interpret ES2015. <a href="http://kangax.github.io/compat-table/es6/" target="_blank">Support is really coming along though</a>.

Believe it or not the top desktop browser in this area is Safari 10. It supports 100% of ES2015. 100%!

A transpiler is sort of what it sounds like. It translates/compiles your modern Javascript to a lower version to be interpretable by javascript engines.

The most popular Transpiler right now is <a href="https://babeljs.io/" target="_blank">Babel</a>. It's pretty easy to configure and use.

However, if you're going to use Typescript, it does it's own transpiling. You'll need the Typescript CLI, or the Typescript extensions for Visual Studio if you're on Windows.

```bash
$ npm install -g typescript
```

Typescript has configurations for how it transpiles, where to place the distributed files, supported types, etc. usually stored in a .tsconfig file. There's plenty more to learn about it. By default it transpiles down to ES5.

Once you have a file with Typescript, it's as easy as:

```bash
$ tsc your-awesome-typescript-file.ts
```
For more information on Typescript, visit the official Typescript website: <https://www.typescriptlang.org/>

To learn more about transpiling ES2015 and beyond, visit <https://babeljs.io/>

### Angular 2

Okay, on to the star of the show, Angular 2.

![Angular 2](/images/blog/angular.png "Angular 2")

I embraced Angular. While the whole $scope thing can be a little confusing at first, it makes for a great way to write single page applications. With it's dependency injection, clever scoping pattern, services and directives, it made writing SPAs modular and gave you a framework you could leverage. Angular 1 is far from dead, but any day now Angular 2 is going to be in full release mode. As of this post, Angular 2 is in RC4.

> So if Angular 1 is far from dead, why Angular 2?

Great question! One word: **ES2015**!

Okay, that's not one word, and it's actually a crap-ton more than that. Modules, better dependency injection, better testability, code completion in more text editors, templates for views, better routing, Angular on the server via Angular Universal, Native mobile apps, much better performance overall, on and on and on.

While you can develop Angular 2 in pretty much any text editor and with plain-jane ES2015 and transpile via babeljs, IMHO it's best to use Typescript and a text editor with Typescript support. Atom has good Typescript support, but Visual Studio Code is basically built for it. Either will give you great code completion support, but the former will need a plugin.

To get started, I would suggest downloading <a href="https://code.visualstudio.com/download" target="_blank">Visual Studio Code</a> and going through the <a href="https://angular.io/docs/ts/latest/quickstart.html" target="_blank">5 Minute Quickstart for Typescript.</a>

Once you've done that, a run through the Angular team's <a href="https://angular.io/docs/ts/latest/tutorial/" target="_blank">Hero Tutorial</a> will get you familiar with components, services, directives, routing, and Http.

The core of Angular 2 is components. Each Angular component is basically made up of a class that is exported (to be imported into other module/component), with imports from the Angular framework, and ES7 decorators.

Consider the following simple example (my-app-component.ts):

```javascript
import { Component } from '@angular/core';

@Component({
	selector: 'my-app-component',
	template: `
		<h2>My Component</h2>
		<p>{{ myLocalComponentVar }}</p>
	`
})
export class MyAppComponent {
	myLocalComponentVar: string = 'This is my component.';

	constructor() {}

	ngOnInit() {
		// anything you want to put here on initialization
	}

	myComponentMethod() {
		console.log('This is from my component!';
	}
}
```

#### @Component

The *@Component* symbol just above the class declaration is a decorator. It's passed a meta-data object that tells Angular some basic things about this component.

#### selector

The *selector* property is the html tag that Angular will use to render the component. Once your app is Bootstrapped, Angular will render the component within that tag. That tag can be placed in another component's template, or rendered in the initial view if this component is included in the original html document when bootstrapped.

#### template

The *template* property contains the markup that is going to be rendered into the DOM at runtime. Notice that we're using the backtick character to open and close the template.

You can specify a *templateUrl* instead if you don't want to clutter up your components:

```javascript
@Component({
	selector: 'my-app-component',
	templateUrl: 'my-app-component.html'
})
```
Then in *my-app-component.html*, you would add your markup there:

```html
<h2>My Component</h2>
<p>{{ myLocalComponentVar }}</p>
```

Those are the basics of a component which is the root piece of Angular 2.

Obviously there's a lot more to learn before you can really start developing apps with Angular 2, but if you follow the <a href="https://angular.io/docs/ts/latest/quickstart.html" target="_blank">Quickstart</a>, and run through the <a href="https://angular.io/docs/ts/latest/tutorial/" target="_blank">Hero Tutorial</a>, you'll be on your way to developing Angular 2 apps in no time.

### Conclusion

I'm developing a couple of apps in Angular 2 at the moment. I'll be updating my blog with Angular 2 gotchas, tips, and other things I find from my anything I learn.

***-- Jon***
