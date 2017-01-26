
Install tsc & typescript

npm intall -g tsc 
npm install -g typescript

************* Setting up VS Code ********************************

Build Task 

1) Press ctrl + shift + B in VS Code that prompts for configure task runner
2) Click configure now -> configure Typescript using tsconfig
3) Sample looks below 
{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "0.1.0",
    "command": "tsc",
    "isShellCommand": true,
    "args": ["--target","ES2015",
            "--sourceMap",
            "--outDir", "JS",
            "--module", "commonJS",
            "TeamIndia.ts"],
    "showOutput": "silent",
    "problemMatcher": "$tsc"
}

4) The args command above controls the JS File emitted


Debug task

1)Click debug icon in VS 
2)Click Launch icon at the top that creates launch.json in the workspace
3)Configure the file to be debugged

Sample looks below to debug a file named TeamIndia.js

{
    // Use IntelliSense to learn about possible Node.js debug attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${workspaceRoot}\\TeamIndia.ts",
            "cwd": "${workspaceRoot}",
            "outFiles": ["${workspaceRoot}\\JS\\*.js"],
            "sourceMaps": true
        },
        {
            "type": "node",
            "request": "attach",
            "name": "Attach to Process",
            "port": 5858,
            "outFiles": [],
            "sourceMaps": true
        }
    ]
}
