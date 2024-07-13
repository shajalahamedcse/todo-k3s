VERSION:=v0.01
IMAGE_NAME:=todo-service
HOST_PORT:=8000
CONTAINER_PORT:=3000
CONTAINER_NAME:=todo-service
DOCKER_PASSWORD:=Dk0987654321
DOCKER_USERNAME:=codebd
DOCKER_REGISTRY:=docker.io

build:
	@ docker build -t ${IMAGE_NAME}:${VERSION} .

run:
	@ docker run --name ${CONTAINER_NAME} -p ${HOST_PORT}:${CONTAINER_PORT} ${IMAGE_NAME}:${VERSION} 

rm:
	@ docker stop ${CONTAINER_NAME}
	@ docker rm ${CONTAINER_NAME}

login:
	@ echo "Docker Login"
	@ echo ${DOCKER_PASSWORD} | docker login -u ${DOCKER_USERNAME} --password-stdin ${DOCKER_REGISTRY}

push: 
	@ docker tag ${IMAGE_NAME}:${VERSION} ${DOCKER_USERNAME}/${IMAGE_NAME}:${VERSION}
	@ docker push ${DOCKER_USERNAME}/${IMAGE_NAME}:${VERSION}
	@ echo "Image pushed: ${DOCKER_USERNAME}/${IMAGE_NAME}:${VERSION}"