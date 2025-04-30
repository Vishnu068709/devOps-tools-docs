# Kubernetes Command Examples

This document provides a collection of useful Kubernetes commands for cloud engineers. These commands can help manage Kubernetes clusters, deploy applications, and troubleshoot issues.

## Basic Commands

### Get Cluster Information
To get information about the Kubernetes cluster:
```
kubectl cluster-info
```

### Get Nodes
To list all nodes in the cluster:
```
kubectl get nodes
```

### Get Pods
To list all pods in the current namespace:
```
kubectl get pods
```

### Get Services
To list all services in the current namespace:
```
kubectl get services
```

## Working with Pods

### Create a Pod
To create a pod from a YAML file:
```
kubectl apply -f pod-definition.yaml
```

### Delete a Pod
To delete a specific pod:
```
kubectl delete pod <pod-name>
```

### Describe a Pod
To get detailed information about a specific pod:
```
kubectl describe pod <pod-name>
```

## Deployments

### Create a Deployment
To create a deployment from a YAML file:
```
kubectl apply -f deployment.yaml
```

### Scale a Deployment
To scale a deployment to a specific number of replicas:
```
kubectl scale deployment <deployment-name> --replicas=<number>
```

### Update a Deployment
To update a deployment with a new image:
```
kubectl set image deployment/<deployment-name> <container-name>=<new-image>
```

## Troubleshooting

### View Logs
To view logs for a specific pod:
```
kubectl logs <pod-name>
```

### Execute a Command in a Pod
To execute a command in a running pod:
```
kubectl exec -it <pod-name> -- <command>
```

### Get Events
To get events in the current namespace:
```
kubectl get events
```

## Conclusion

These commands are essential for managing Kubernetes clusters effectively. For more advanced usage and options, refer to the official Kubernetes documentation.