
build:
	git config --global url."https://oyekanmiayo:${access_token}@github.com".insteadOf "https://github.com"
	hugo --gc --minify
