<=======NOTES=======>

<===TERMINAL COMMANDS===>

run tsc <filename.ts> to create a compiled JS file of your TS file

tsc --init to create a tsconfig.json file

<===CONFIGURING THE TS COMPILER===>

under language & environment in tsconfig.json you can update JS version ("target":""es2016) to current version with ctrl+space

changes to:

"rootDir":"./src"

/* Emit */

enabled:

"outDir": "./dist",
"removeComments":true,
...
"noEmitOnError": true,

Now run tsc (just tsc) and compiled JS files will be automatically created to the dist-folder


<===DEBUGGING===>
enable "sourceMap":true, in /* Emit */

run tsc

click on debug panel in vscode, create a launch.json file, select node.json

also add "preLaunchTask": "tsc: build - tsconfig.json", between program and outFiles:

"program": "${workspaceFolder}/src/index.ts",
"preLaunchTask": "tsc: build - tsconfig.json",
"outFiles": [
                "${workspaceFolder}/**/*.js"
]



