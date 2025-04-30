import React from 'react';

const CommandExamples = () => {
    const commands = [
        {
            tool: 'Terraform',
            examples: [
                'terraform init',
                'terraform plan',
                'terraform apply',
                'terraform destroy'
            ]
        },
        {
            tool: 'Ansible',
            examples: [
                'ansible-playbook playbook.yml',
                'ansible -m ping all',
                'ansible-vault encrypt secret.yml'
            ]
        },
        {
            tool: 'Kubernetes',
            examples: [
                'kubectl get pods',
                'kubectl apply -f deployment.yaml',
                'kubectl delete service my-service'
            ]
        }
    ];

    return (
        <div>
            <h2>Command Examples</h2>
            {commands.map((commandSet, index) => (
                <div key={index}>
                    <h3>{commandSet.tool}</h3>
                    <ul>
                        {commandSet.examples.map((example, idx) => (
                            <li key={idx}>{example}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default CommandExamples;