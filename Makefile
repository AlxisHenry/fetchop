.PHONY: run, clean, tests, publish

run:
	make clean
	npm run build
	node dist/index.js

clean:
	rm -rf dist/*

publish:
	npm publish --access public