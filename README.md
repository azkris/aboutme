# Portfolio site
Personal website for information about me and some of my projects.  
Try out the site on [GitHub Pages](https://azkris.github.io/aboutme/)!

# instructions
If you want to download and edit/run the project locally, follow these steps:  
1. Ensure you have NodeJS `v24.11.1` or later and NPM `11.6.2` or later.  
2. Open the subdirectory `aboutme` in a terminal and run `npm i`.  
3. Run `npm run dev` to start a localhost for development.
4. Run `npm run test` to start vitest and watch for changes, or `npm run test run` to run the tests once.
    - You can also run the tests in a docker environment with the dockerfile provided, using `docker build . -t my-vitest` and then running the image with `docker run my-vitest`.
5. Edit the files if you want.
6. You can run the GitHub actions locally with nektos/act by running the command `act`
    - if you don't have Nektos/act installed, look up a tutorial
    - GitHub actions are configured to run tests on a pull request to the `gh-pages` branch, and to build and deploy the site on new commits/merges to that branch.