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
	npm publish --access public