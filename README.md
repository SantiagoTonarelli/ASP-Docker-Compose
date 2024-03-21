`docker network create mi_red`

`docker build -t mi_app_node .`

`docker run --name mongo_db --network mi_red -d -p 27017:27017 -v mongo-data:/data/db mongo`

`docker run --name node_app --network mi_red -d -p 3000:3000 -v $(pwd):/usr/src/app -v /usr/src/app/node_modules -e DB_URL=mongodb://mongo:27017/myDatabase mi_app_node`
