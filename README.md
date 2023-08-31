
# FOR LEE & ISSAC

Little bit of context on the code and what the tech test entailed. I was given a time limit of 4 hours to create a simple UI that would take a heavily corrupted JSON. Parse it in different ways and then display programatically a list of required care homes.

What was heavily pushed by CTO was that he wished to see a breadth of skills and that completing the task was not important to him. More of a jumping off point. As I enjoyed the call with Lee so much I did some more work on the tech test (probably about another 2 hours) removing references to the previous company, rejigging the testing and doing some slight CSS changes.

This is of course not production ready and I would never dream of shipping something like this. If you decide that it would be more worthwhile for me to clean up and make production ready I would be happy to do so.

Some quick notes;

- NextJS is used because its on their current frontend.
- No CSS library for the same reason.
- This was designed in Dark Mode so switching to Light will cause a UI issue.

Below is the actual text that I added to the prior README when sending it over to the company with my own personal notes.

## Features

- Shows all institutions from the fetched JSON.
- Has a small amount of React Testing Library testing.
- Filters the api on the backend using queries (also tested with Postman).
- Has a minimal UI created to replicate the current website.
- Will rerender with selection of category and search term.

## What Would I Improve/ Things I Ran Out Of Time On

- I would pull down the actual JSON from the suggested link and then parse it properly instead of using a mock.
- Storybook would be added so that designers etc can see what we are doing (and so it can be deployed elsewhere).
- Much more testing - the amount that is included is just to show that I can do it.
- Make it MUCH prettier.
- Reactive design - at the moment this falls apart in mobile viewport sizes.

## Getting Started

1. Clone the repo etc

2. Install all the dependecies (I used npm)

    `npm i `

3. Booting it up:

    `npm run dev`

4. Running testing:

    `npm run test`

    - This will put jest in watch mode so best to do in another terminal.

## Final Thoughts

I do also have a list of things I noticed about the test and ideas for ways to improve not only what I have done but also the API etc. If you wish me to put them in comments on the PR I will be happy to do so.

Thank You

Tom
