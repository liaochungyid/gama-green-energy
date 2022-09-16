# This is an real project for Gama Green Engergy

[Live Website](https://gama-green.tw/en)

## Get Start
First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Learn More

try to deploy static site to Github pages but the git subtree command always gets rejected

```
// https://tw.coderbridge.com/questions/b36570bbcd30407d812c1abc7e306ec3
// remove the out and commit
rm -rf out
git commit ‑am "remove out folder"
// add the subtree and push
git subtree add ‑‑prefix out origin gh‑pages
git subtree push ‑‑prefix out origin gh‑pages
```
