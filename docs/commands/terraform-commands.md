# Terraform Commands Documentation

## Introduction
This document provides a collection of commonly used Terraform commands that are essential for cloud engineers. Terraform is an open-source infrastructure as code software tool that allows you to define and provision data center infrastructure using a high-level configuration language.

## Basic Commands

### Initialize a Terraform Configuration
To initialize a new or existing Terraform configuration, run:
```
terraform init
```
This command downloads the necessary provider plugins and sets up the backend.

### Validate the Configuration
To check whether the configuration files are valid, use:
```
terraform validate
```
This command verifies the syntax and checks for any errors in the configuration files.

### Plan the Deployment
To create an execution plan, run:
```
terraform plan
```
This command shows what actions Terraform will take to change the infrastructure.

### Apply the Changes
To apply the changes required to reach the desired state of the configuration, execute:
```
terraform apply
```
This command will prompt for confirmation before making any changes.

### Destroy the Infrastructure
To remove all the resources defined in the Terraform configuration, use:
```
terraform destroy
```
This command will prompt for confirmation before destroying the resources.

## Working with State

### Show the Current State
To display the current state of the infrastructure, run:
```
terraform show
```
This command outputs the current state in a human-readable format.

### List Resources in State
To list all resources in the current state file, use:
```
terraform state list
```
This command provides a list of all resources managed by Terraform.

### Remove a Resource from State
To remove a resource from the state file, execute:
```
terraform state rm <resource_address>
```
Replace `<resource_address>` with the address of the resource you want to remove.

## Output Values
To display output values defined in the configuration, run:
```
terraform output
```
This command shows the output values after applying the configuration.

## Conclusion
These commands form the foundation of working with Terraform. Mastering these commands will help cloud engineers effectively manage infrastructure as code. For more advanced usage and commands, refer to the official Terraform documentation.