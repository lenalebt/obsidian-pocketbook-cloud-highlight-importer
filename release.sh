#!/bin/bash
# cd to git root https://stackoverflow.com/a/38843585
r=$(git rev-parse --git-dir) && r=$(cd "$r" && pwd)/ && cd "${r%%/.git/*}"

if [[ ! -f "./manifest.json" ]] ; then
	echo "manifest.json does not exist yet"
	return
fi
if [[ ! -f "./.github/workflows/release.yml" ]] ; then
	echo "/.github/workflows/release.yml does not exist yet"
	return
fi

# get version number from the manifest of the latest release
repoURL=$(git remote -v | grep git@github.com | grep fetch | head -n1 | cut -f2 | cut -d' ' -f1 | sed -e's/:/\//' -e 's/git@/https:\/\//' -e 's/\.git//' )
manifestURL="$repoURL"/releases/latest/download/manifest.json
lastVersion=$(curl -sL "$manifestURL" | grep "version" | cut -d\" -f4)
echo "last version: $lastVersion"

# Ask for new version number
echo -n "next version: "
read nextVersion

# set version number in `manifest.json`
sed -E -i '' "s/\"version\".*/\"version\": \"$nextVersion\",/" "manifest.json"

# set version number in `package.json`
sed -E -i '' "s/\"version\".*/\"version\": \"$nextVersion\",/" "package.json"

# add version number in `versions.json`, assuming same compatibility
cat "versions.json" | egrep -v "^$" | grep -v "}" | sed -e '$ d' > temp
minObsidianVersion=$(cat "versions.json" | egrep -v "^$" | grep -v "}" | tail -n1 | cut -d\" -f4)
echo "  \"$lastVersion\": \"$minObsidianVersion\"," >> temp
echo "  \"$nextVersion\": \"$minObsidianVersion\"" >> temp
echo "}" >> temp
mv temp versions.json

# push the manifest and versions JSONs
git add -A
git commit -m "version bump to $nextVersion"
git push

# trigger the release action
git tag "$nextVersion"
git push origin --tags