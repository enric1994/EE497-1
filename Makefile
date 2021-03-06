run:
	@docker-compose up -d
devel:
	@docker exec -it osgjs bash
build:
	@docker-compose build
down:
	@docker-compose down -v
status:
	@docker ps -a --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
logs:
	@docker logs osgjs -f