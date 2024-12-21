## Steps To Reproduce

As a user:
1. **`npm install` to install dependencies.** I’m using Rollup and one plugin for JS — tried doing this with CDN but I get an error about `e` being undefined! 
2. **`npm run start` to run a dev server.** Runs Rollup real quick and `http-server` to serve the site.
3. **Visit the localhost URL given.**
4. **Use either the nav link or the post-\<h1> link to navigate to `/path`.** "TestTransition" that changes the color of the page should run, but instead "RegularTransition" runs.

## My patch
At line 38 of RouteStore.js, one adds a check to see if pathname is an empty string, in which case it is replaced with `/`. 

```js
for (const [fromPattern, potentialMatches] of this.data) {
    let currentPathname = currentUrl.pathname;
    if (currentPathname === '') {
        currentPathname = '/'
    }

    // If we have a match
    if (currentPathname.match(this.regexCache.get(fromPattern))) {
```