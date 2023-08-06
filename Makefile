.PHONY: build

build:
	ng build --output-path temp
	rm -rf docs
	mv temp docs
