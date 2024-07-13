VERSION:=v0.01
IMAGE_NAME:=api-gateway
HOST_PORT:=8000
CONTAINER_PORT:=3000
CONTAINER_NAME:=api-gateway

build:
	@ docker build -t ${IMAGE_NAME}:${VERSION} .

run:
	@ docker run --name ${CONTAINER_NAME} -p ${HOST_PORT}:${CONTAINER_PORT} ${IMAGE_NAME}:${VERSION} 

rm:
	@ docker stop ${CONTAINER_NAME}
	@ docker rm ${CONTAINER_NAME}

login:
	@ echo "Docker Login"