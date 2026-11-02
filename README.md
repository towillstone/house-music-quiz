# In the Pocket — House Music Production Quiz

An accessible, responsive, ten-question quiz about house production: rhythm, swing, low-end balance, dynamics, sampling, arrangement, and mixing. Built with Codex from a README-only repository for the Week Ten “Puppet Masters” exercise.

## Run locally

No dependencies or build step. From the repository root:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

Open the local server in a browser. Select an answer to get immediate feedback, continue through ten questions, review missed concepts, and restart. Nothing is sent to a server or stored between reloads. No external assets or credentials are required.

## Publish on GitHub Pages

After merging the implementation into `main`, open repository **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, and save. GitHub will show the published URL when deployment finishes.

Expected project URL: https://towillstone.github.io/house-music-quiz/ (verify deployment before submitting).

## Manual checks

- Answer all questions correctly: score should be 10/10 with no missed-question notes.
- Answer all incorrectly: score should be 0/10 with ten review notes.
- Restart: return to question 1 with cleared score.
- Use Tab and Enter to complete a session; verify visible keyboard focus.
- Check at phone and desktop widths for horizontal overflow.

Production advice is contextual. Sampling permissions vary by use and jurisdiction; this quiz is educational, not legal advice.
