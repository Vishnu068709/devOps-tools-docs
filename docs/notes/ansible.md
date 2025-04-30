# Ansible Documentation

## Overview
Ansible is an open-source automation tool that simplifies the process of managing and configuring systems, deploying applications, and orchestrating complex workflows. It uses a simple, human-readable language (YAML) to define automation tasks.

## Key Concepts
- **Playbook**: A YAML file that defines a series of tasks to be executed on managed hosts.
- **Inventory**: A file that lists the hosts and groups of hosts on which tasks will be executed.
- **Module**: A reusable script that performs a specific task, such as installing a package or managing a service.

## Installation
To install Ansible, you can use the following command:
```
sudo apt-get install ansible
```
For other operating systems, refer to the [official installation guide](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html).

## Basic Commands
Here are some basic commands to get you started with Ansible:

1. **Check Ansible Version**:
   ```
   ansible --version
   ```

2. **Ping All Hosts**:
   ```
   ansible all -m ping
   ```

3. **Run a Playbook**:
   ```
   ansible-playbook playbook.yml
   ```

4. **List Hosts in Inventory**:
   ```
   ansible-inventory --list
   ```

## Example Playbook
Here is a simple example of an Ansible playbook that installs Nginx on a remote server:

```yaml
---
- name: Install Nginx
  hosts: webservers
  become: yes
  tasks:
    - name: Install Nginx
      apt:
        name: nginx
        state: present
```

## Useful Resources
- [Ansible Documentation](https://docs.ansible.com/)
- [Ansible GitHub Repository](https://github.com/ansible/ansible)
- [Ansible Best Practices](https://docs.ansible.com/ansible/latest/user_guide/playbooks_best_practices.html)