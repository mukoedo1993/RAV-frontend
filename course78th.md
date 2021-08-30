More about ES6
If you plan on going all-in on React.js, I strongly recommended learning ES6 since it's the de-facto language to use. Most tutorials and official examples use it, too.

Keep in mind, ES6 simply is the next-gen version of JavaScript and many tutorials and courses can be found on the internet (e.g. my "Accelerated ES6 Training" course on Udemy, but there also exist free alternatives of course).

You can get a good (and free) overview here: http://es6-features.org/#Constants

The most important features used in this course are the following:

`let`  and `const`: You declare variables (`let` ) and constants (`const` , variables which never change). Use it instead of `var` .

`class` : Create classes, which could be described as "reusable blueprints for creating JS objects".

`import` / `export` : Split your code over multiple files and use `export`  to provide content to other files and `import`  to import such content.

Important: When using ES6 features, you typically need a build workflow (e.g. Webpack + appropriate loaders like babel) to compile your ES6 to ES5 code as ES6 WON'T run in the browser.
