# React_Tutorials

1)  Requirements:
      ->node
      ->Vscode
      ->Google Chrome

2)  steps to run a react and create a file:
      ->npx create-react-app "app name"
      ->cd appfoldername
      ->npm start

Note:	node modules will not be pushed in git hub , this is done by a file called git ignore .
	It will ignore the files mentioned in it. To install node modules we need to run npm  install ,
	it will check with things present in package.json and install the required.


3)  Important definition's:

  3.1)  The package.json file represents various metadata relevant to the project.
  	Moreover, it helps npm identify the project’s information and dependencies, 
	and ittypically resides at the root directory of a project.Therefore, 
	a package.json's primary purpose is to hold and represent the
	various metadata and configurations related to the project.


  3.2)  Using npm init
 
        The primary purpose of npm init is to initialize your project.
	Once you have decided to initialize your project by typing npm init in the command line.
        Then a prompt begins to ask for different input step by step; here is the following order:

        project’s name
        version
        description
        entry point (a JavaScript file as the entry point of your project)
        test command
        git repository
        keywords
        license
        Note
        The npm init command provides a suggestion next to the prompt;
	you can press enter to accept the default suggestion to move on to the next question/prompt.
	
3.3) Using npm install and uninstall
 
	Once you have successfully initialized your project and a package.json is already available,
	you can install some packages with your project.
