pipeline {
    agent any

    stages {
        stage('Git checkout') {
            steps {
                git branch: 'devops-richard-jenkins',
                url: 'https://github.com/The-Avengers-Gamera/gamera-fe.git'
            }
        }

        stage('Build') {
            steps {
                sh 'curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - &&\
                sudo apt-get install -y nodejs'
                sh 'sudo corepack enable'
                sh 'yarn install'
                sh 'yarn start'
            }
        }

        stage('Test') {
            steps {
                sh 'echo Tested'
            }
        }

        stage('Deploy') {
            steps {
                sh 'echo Deployed'
            }
        }
    }
}