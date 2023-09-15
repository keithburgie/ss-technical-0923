# ss-technical-0923

Submission is a responsive website built with React, TypeScript, and bundled with Vite.

The website is up and running here: https://stately-cuchufli-98c758.netlify.app/

To run locally...

1. Clone the repo: `git clone git@github.com:keithburgie/ss-technical-0923.git`
2. Open the directory in a terminal and enter `pnpm run dev`.
3. See [instructions for installing pnpm](https://pnpm.io/installation) if necessary.

## How It Works

The "How It Works" work exists in the `StepsDisplay` folder.

- `StepsDisplay.tsx` makes the api call via useEffect()
- The data is processed by functions in `StepsDisplay.utils.ts` to first sort by item number, and include only the latest **versionContent** in local state.

## Bonus Points

I love bonus points and am sorry to say I've earned none of them on this submission.

### On Tests

There are tests in `StepsDisplay.utils.test.ts`, but I was not able to run them. I have typically used **create-react-app** to bootstrap new projects, but they no longer recommend that on the React website, and I end up using [Vite](https://vitejs.dev/guide/) instead of NextJS or Gatsby, thinking it would be simplest. I've since learned that Jest unit tests don't work right out of the box with Vite, and I'm out of time to play with configuration. Sorry!

### On serving different DPI screens

I understand the inclusion of a 2x DPI background image in the challenge assets. I chose not to use the 2x version, because, in my opinion, a super sharp backgroud image doesn't add to the experience of a user on a high DPI screen and is a large file.

If there were other 2x image files, for icons or other graphics, I definitely would use them. The only other "image" in this repo is the SVG logo, which never needs 2Xing.
