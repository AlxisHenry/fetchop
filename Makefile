.PHONY: run, clean, tests, publish

run:
	make clean
	npm run build
	node dist/index.js

clean:
	rm -rf dist/*

tests:
	npm run test

publish:
	$(if $(type),,$(error type is not set))
	$(if $(filter $(type),major minor patch premajor preminor prepatch prerelease),,$(error type need to be major, minor, patch, or prefixed with pre))
	npm version $(type)
	npm publish --access public
	git push --follow-tags