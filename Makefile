all:
	browserify browserify.js -o js/bundle.js

clean:
	rm js/bundle.js