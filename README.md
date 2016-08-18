[![Build Status](https://github.com/rogergui3000/js-assessment.git)](https://github.com/rogergui3000/js-assessment.git)

# SHORT PROGRAMMING SOLUTIONS

This repo includes a set of tests question  solution

## I want to see solution on the tests; what do I do?
To see solution for the tests, you will need to install [Node](https://nodejs.org/). Note
that on Windows, there are some reports that you will need to restart
after installing Node - see #12.

You can clone or download this repo. Once you have done so, from the root
directory of the repo, run:

    npm install
    npm start

You can then view the tests in your browser at
[http://localhost:4444](http://localhost:4444).

When you visit that page, all of the tests should be successful.

You can also run (most of) the tests on the command line:

    npm test

The command line runner is a work in progress; contributions welcome :)

### Available dependencies

The repo includes jQuery, Backbone, and Underscore. Use when writing your solutions!

## I want to contribute solution tests; what do I do?

Submit a pull request! The tests are currently loosely organized by topic, so
you should do your best to add tests to the appropriate file in `tests/app`, or
create a new file there if you don't see an appropriate one. If you do create
a new file, make sure to add it to `tests/runner.js`, and to add a stub for the
solution to the corresponding file in `app/`. Finally, it would be great if you
could update the [answers](https://github.com/rogergui3000/js-assessment.git)
as well.

If you're not sure how or where to, please open an issue.

## I hate \<some technology you've chosen\>

This repo uses [Mocha](https://github.com/mochajs/mocha) and
[Chai](http://chaijs.com/) for the tests themselves. It uses the BDD style for authoring tests.
If this doesn't suit you, please fork away, or, better, submit a pull request that lets
this be more flexible than it currently is.

# Todos

There are a number of things that would make this project better; check out the
[issues](https://github.com/rogergui3000/js-assessment/issues) for details, pull
requests welcome!

# License

Copyright &copy; 2016 Mekeidje Roger 

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a>

This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
