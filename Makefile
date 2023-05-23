.PHONY: run, clean, tests, bump, publish

run:
	make clean
	npm run build
	node dist/index.js

clean:
	rm -rf dist/*

tests:
	npm run test

# check if type is defined 
bump:
	$(if $(type),,$(error type is not set))
	$(if $(filter $(type),major minor patch premajor preminor prepatch prerelease),,$(error type need to be major, minor, patch, or prefixed with pre))
	npm version $(type)

publish:
	npm publish --access public
