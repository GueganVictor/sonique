#!/bin/bash

# Assign the filename
filename="index.html"

# Take the search string
app='sonique'
author='Victor GUEGAN'

# Take the replace string
read -p "Enter your full name: " fullName
read -p "Enter your app name: " appName
# read -p "Do you want to hard clean the repo ? (commits, routes, components, ...): " hardClean


if [[ $app != "" && $appName != "" ]]; then
sed -i "s/$app/$appName/" "index.html"
fi

if [[ $app != "" && $fullName != "" ]]; then
sed -i "s/$app/$fullName/" "LICENSE"
fi

if [[ $app != "" && $appName != "" ]]; then
sed -i "s/$app/$appName/" "package.json"
fi