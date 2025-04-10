pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/pratheesh-dev-tech/travel-planner.git', branch: 'main'
            }
        }

        stage('Deploy Static Site') {
            steps {
                echo 'Deploying to /var/www/html on EC2...'
                sh '''
                    sudo cp -r * /var/www/html/
                '''
            }
        }
    }
}
