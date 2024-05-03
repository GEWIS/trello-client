build:
	#rm -rf swagger.json trello-client dist
	#wget -O swagger.json https://dac-static.atlassian.com/cloud/trello/swagger.v3.json
	npm run generate
	npm run build

release:
	npm run release
