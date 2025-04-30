# Ansible Command Examples

This document provides a collection of commonly used Ansible commands for cloud engineers. These commands can help automate tasks and manage configurations across multiple servers.

## Basic Commands

### Check Ansible Version
To check the installed version of Ansible, use the following command:
```
ansible --version
```

### Ping All Hosts
To verify connectivity to all hosts defined in your inventory, run:
```
ansible all -m ping
```

### Run a Command on All Hosts
To execute a command on all hosts, use:
```
ansible all -a "command"
```
Replace `"command"` with the actual command you want to run.

## Playbook Commands

### Run a Playbook
To execute a playbook, use:
```
ansible-playbook playbook.yml
```

### Check Playbook Syntax
To check the syntax of a playbook without executing it, run:
```
ansible-playbook playbook.yml --syntax-check
```

## Inventory Commands

### List Hosts in Inventory
To list all hosts in your inventory, use:
```
ansible-inventory --list
```

### Display Inventory in a Specific Format
To display the inventory in a specific format (e.g., JSON), use:
```
ansible-inventory --list --output inventory.json
```

## Module Commands

### Use a Specific Module
To use a specific Ansible module, such as the `apt` module to install a package, run:
```
ansible all -m apt -a "name=package_name state=present"
```
Replace `package_name` with the name of the package you want to install.

### Gather Facts
To gather system information from all hosts, use:
```
ansible all -m setup
```

## Conclusion

These commands provide a foundation for using Ansible effectively. For more advanced usage and options, refer to the official Ansible documentation.