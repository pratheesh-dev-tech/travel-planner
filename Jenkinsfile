pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                echo 'Cloning the repo...'
                git 'https://github.com/yourusername/pratheesh-dev-tech.git'
            }
        }

        stage('Deploy to Web Folder') {
            steps {
                echo 'Copying files to /var/www/html...'
                sh '''
                sudo rm -rf /var/www/html/*
                sudo cp -r * /var/www/html/
                '''
            }
        }
    }
}
