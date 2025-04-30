import React from 'react';

const tools = [
    {
        name: 'Terraform',
        description: 'Infrastructure as Code tool for building, changing, and versioning infrastructure safely and efficiently.',
        documentationLink: '/docs/notes/terraform.md',
        commandsLink: '/docs/commands/terraform-commands.md'
    },
    {
        name: 'Ansible',
        description: 'An open-source automation tool for configuration management, application deployment, and task automation.',
        documentationLink: '/docs/notes/ansible.md',
        commandsLink: '/docs/commands/ansible-commands.md'
    },
    {
        name: 'Kubernetes',
        description: 'An open-source system for automating the deployment, scaling, and management of containerized applications.',
        documentationLink: '/docs/notes/kubernetes.md',
        commandsLink: '/docs/commands/kubernetes-commands.md'
    }
];

const ToolList = () => {
    return (
        <div>
            <h2>DevOps Tools</h2>
            <ul>
                {tools.map((tool, index) => (
                    <li key={index}>
                        <h3>{tool.name}</h3>
                        <p>{tool.description}</p>
                        <a href={tool.documentationLink}>Documentation</a>
                        <br />
                        <a href={tool.commandsLink}>Command Examples</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToolList;