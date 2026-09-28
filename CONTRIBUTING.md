# Contributing

## Branches

- `development` is the integration branch. Pushes publish an npm prerelease.
- `main` is the release branch. Pushes publish the `package.json` version when it is not already on npm.
- Open pull requests against `development` or `main`. CI runs on those pull requests and on pushes to both branches.

Do not create the `development` branch from a pull request workflow. Create it in the repository when the publish workflow is on `main`.

## Version

`package.json` `version` is a release version, for example `0.1.0`. Do not put a prerelease suffix there. The publish workflow rejects versions that already contain `-`.

When work toward the next release starts, change `version` on `development` in a normal commit (for example `0.1.0` to `0.1.1`) and note the change in `CHANGELOG.md`. Pushes then publish `0.1.1-dev.<run number>` with the npm dist-tag `next`. Merging that commit to `main` publishes `0.1.1` with dist-tag `latest`, tags `v0.1.1`, and opens a GitHub release.

The workflow edits `package.json` only on the runner for `development` prereleases (`npm version --no-git-tag-version`). That edit is not committed.

## Checks

`.github/workflows/ci.yml` runs `npm ci`, `npm run build`, and `npm test` on pull requests and on pushes to `main` and `development`.

`.github/workflows/publish.yml` runs the same three commands before publishing:

- `development` publishes `<version>-dev.<GitHub run number>` to dist-tag `next`. Re-running the job appends `.<run attempt>` so the version stays unique.
- `main` publishes `<version>` to dist-tag `latest` only when `npm view` does not already list that version. It then creates tag `v<version>` and a GitHub release for the pushed commit. If the version is already on npm, the job skips the publish, the tag, and the release.

`npm publish` uses `--provenance`. `publishConfig.access` is `public`.

## Repository settings

The workflow does not create branches or change settings. The repository owner configures:

1. Actions secret `NPM_TOKEN`: an npm Automation token, or a granular access token with publish access to `ris-ktx2-api`. Put it in Settings, Secrets and variables, Actions. Do not commit the token. Classic tokens that prompt for 2FA cannot publish from Actions.
2. A public repository. npm provenance is only issued for public repositories.
3. Settings, Actions, General, Workflow permissions: read and write. The `main` job needs `contents: write` to create the git tag and GitHub release. Both publish jobs request `id-token: write` for provenance.
4. Default branch `main`, with `.github/workflows/publish.yml` merged there before a provenance publish. npm checks that the publishing workflow exists on the default branch.
5. Branch `development`, created after that workflow is on `main`.

Trusted publishing (npm OIDC without a token) is not required. Authentication is `NPM_TOKEN`. Provenance is the separate `--provenance` flag.

If `main` publishes the package and then fails before the GitHub release, a re-run skips the publish because the version is already on npm. Create tag `v<version>` and the GitHub release for that commit by hand.
