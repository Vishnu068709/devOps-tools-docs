// This file contains utility functions to fetch and manipulate data related to the tools and commands.

const toolsData = [
    {
        name: "Terraform",
        description: "Infrastructure as Code tool for building, changing, and versioning infrastructure safely and efficiently.",
        documentationLink: "https://www.terraform.io/docs/index.html",
        commandExamples: [
            "terraform init",
            "terraform plan",
            "terraform apply",
            "terraform destroy"
        ]
    },
    {
        name: "Ansible",
        description: "An open-source automation tool for configuration management, application deployment, and task automation.",
        documentationLink: "https://docs.ansible.com/ansible/latest/index.html",
        commandExamples: [
            "ansible-playbook playbook.yml",
            "ansible-galaxy install <role>",
            "ansible <host> -m ping"
        ]
    },
    {
        name: "Kubernetes",
        description: "An open-source container orchestration platform for automating deployment, scaling, and management of containerized applications.",
        documentationLink: "https://kubernetes.io/docs/home/",
        commandExamples: [
            "kubectl get pods",
            "kubectl apply -f deployment.yaml",
            "kubectl delete pod <pod-name>"
        ]
    }
];

export const getToolsData = () => {
    return toolsData;
};

export const getToolByName = (name) => {
    return toolsData.find(tool => tool.name.toLowerCase() === name.toLowerCase());
};