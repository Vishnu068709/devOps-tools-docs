# Kubernetes Documentation

## Overview
Kubernetes is an open-source container orchestration platform designed to automate the deployment, scaling, and management of containerized applications. It provides a robust framework for running distributed systems resiliently.

## Key Concepts
- **Pod**: The smallest deployable unit in Kubernetes, which can contain one or more containers.
- **Node**: A worker machine in Kubernetes, which can be a physical or virtual machine.
- **Cluster**: A set of nodes that run containerized applications managed by Kubernetes.
- **Deployment**: A resource that provides declarative updates to applications.

## Installation
To install Kubernetes, you can use tools like Minikube or kubeadm. Here are the basic steps for each:

### Minikube
1. Install Minikube:
   ```
   curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
   sudo install minikube-linux-amd64 /usr/local/bin/minikube
   ```
2. Start Minikube:
   ```
   minikube start
   ```

### kubeadm
1. Install kubeadm:
   ```
   sudo apt-get update && sudo apt-get install -y apt-transport-https
   sudo apt-get update && sudo apt-get install -y kubelet kubeadm kubectl
   sudo apt-mark hold kubelet kubeadm kubectl
   ```
2. Initialize the cluster:
   ```
   sudo kubeadm init
   ```

## Basic Commands
Here are some essential Kubernetes commands to get you started:

### kubectl Commands
- Get cluster information:
  ```
  kubectl cluster-info
  ```
- List all nodes:
  ```
  kubectl get nodes
  ```
- Create a deployment:
  ```
  kubectl create deployment <deployment-name> --image=<image-name>
  ```
- Expose a deployment:
  ```
  kubectl expose deployment <deployment-name> --type=LoadBalancer --port=<port>
  ```

## Resources
- [Kubernetes Official Documentation](https://kubernetes.io/docs/home/)
- [Kubernetes GitHub Repository](https://github.com/kubernetes/kubernetes)

## Conclusion
Kubernetes is a powerful tool for managing containerized applications. Understanding its core concepts and commands is essential for cloud engineers looking to leverage its capabilities in their workflows.