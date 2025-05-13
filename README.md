# Kubernetes Demo Application

This is a simple web application deployed on Kubernetes using Minikube, demonstrating basic Kubernetes concepts and CI/CD practices.

## Prerequisites

- Node.js 18 or higher
- Docker
- Minikube
- kubectl
- Docker Hub account
- GitHub account

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Run the application locally:
```bash
npm start
```

The application will be available at http://localhost:3000

## Docker Build

Build the Docker image:
```bash
docker build -t your-dockerhub-username/kubernetes-demo-app:latest .
```

Run the container:
```bash
docker run -p 3000:3000 your-dockerhub-username/kubernetes-demo-app:latest
```

## Kubernetes Deployment

1. Start Minikube:
```bash
minikube start
```

2. Create the namespace:
```bash
kubectl create namespace demo-app
```

3. Apply Kubernetes manifests:
```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

4. Access the application:
```bash
minikube service kubernetes-demo-app-service -n demo-app
```

## GitHub Actions Setup

1. Add the following secrets to your GitHub repository:
   - DOCKER_USERNAME: Your Docker Hub username
   - DOCKER_PASSWORD: Your Docker Hub password

2. Push your code to the main branch to trigger the workflow

## Project Structure

```
.
├── index.js              # Main application file
├── package.json          # Node.js dependencies
├── Dockerfile           # Docker configuration
├── deployment.yaml      # Kubernetes deployment
├── service.yaml         # Kubernetes service
└── .github/
    └── workflows/
        └── deploy.yml   # GitHub Actions workflow
```

## Monitoring

Check the status of your deployment:
```bash
kubectl get pods -n demo-app
kubectl get services -n demo-app
kubectl get deployments -n demo-app
```

## Troubleshooting

1. If pods are not starting:
```bash
kubectl describe pod <pod-name> -n demo-app
```

2. Check pod logs:
```bash
kubectl logs <pod-name> -n demo-app
```

3. If service is not accessible:
```bash
kubectl describe service kubernetes-demo-app-service -n demo-app
``` 