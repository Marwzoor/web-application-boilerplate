# Web Application Boilerplate
I see that you have found your way to my boilerplate. How nice!

## Description
I built it to shorten time in setting up new web projects such as small web applications, wordpress plugins etc. Hopefully this will be of value to you aswell.

## Suggestions
Add an issue or make a pull request.

## License
I have chosen to make this project MIT-licensed. You can change anything you want when using this in your project, no worries.

## Requirements
* Node
* Node Package Manager (NPM)
* Bower
* Sass

## Installation / setup
With some easy steps, you can configure the boilerplate to work for your project.

Start by installing the Node dependencies for gulp to work.
```
npm install
```

Install the bower dependencies.
```
bower install
```

If you need any front-end packages like jQuery, Angular, Bootstrap or such, use bower to fetch them
```
bower install <package-name> --save
```

Open up the gulp-file and change the options at the top of the file if you want to configure it for your liking.

Use this command while developing SASS and JS (it will compile the files when they are changed)
```
gulp watch
```

Use this command when you want to minify SASS and uglify JS.
```
gulp dist
```

I hope that this comes to use!
