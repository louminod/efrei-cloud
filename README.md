To setup and run the project follow these instructions :

- Clone the repository : `git clone https://github.com/louminod/efrei-cloud`
- Install and run minikube with `minikube start` (advice: on mac, use the instruction `--driver=hyperkit`)
- Go to the folder kubernetes and run `kubectl apply -f .`
- Wait for the complete creation of all the pods.
- Obtain the backend service url with `minikube service backend-service --url`
- Obtain the knote service url with `minikube service knote --url`
- Obtain the mongo-express service url with `minikube service mongo-express-service —-url`
- Go on the knote service url and add your note.
- You can check it on mongo express or use the backend service by going on the route */notes*
