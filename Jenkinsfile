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
                sh 'yarn install'
                sh 'yarn start'
            }
        }

        stage('Test') {
            steps {
                sh 'yarn test'
            }
        }

        stage('Deploy') {
            steps {
                sh 'echo Deployed'
            }
        }
    }
}