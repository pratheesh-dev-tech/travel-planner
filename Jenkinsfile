pipeline {
    agent any

    environment {
        AWS_ACCESS_KEY_ID = credentials('aws-access-key-id')
        AWS_SECRET_ACCESS_KEY = credentials('aws-secret-access-key')
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    credentialsId: 'github-creds',
                    url: 'https://github.com/pratheesh-dev-tech/travel-planner.git'
            }
        }

        stage('Initialize Terraform') {
            steps {
                bat 'terraform init'
            }
        }

        stage('Validate Terraform') {
            steps {
                bat 'terraform validate'
            }
        }

        stage('Plan Terraform') {
            steps {
                bat 'terraform plan'
            }
        }

        stage('Apply Terraform') {
            steps {
                bat 'terraform apply -auto-approve'
            }
        }
    }
}
