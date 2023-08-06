.PHONY: build

build:
	ng build --output-path temp --base-href /gilelah-tables/
	rm -rf docs
	mv temp docs
