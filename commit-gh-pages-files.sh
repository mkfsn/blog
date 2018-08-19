#!/bin/bash
rm -rf public/*
hugo
cd public && git add --all && git commit -m "Publishing to gh-pages `date`" && cd ..
git push origin gh-pages
