.PHONY: run rerun build

build:
	docker-compose build

run: build
	docker-compose up -d

rerun:
	docker-compose down
	docker-compose up -d --build

stop:
	docker-compose down