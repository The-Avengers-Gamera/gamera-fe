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
                sh 'yarn build'
            }
        }

        stage('Test') {
            steps {
                //Currrently test is empty
                //sh 'yarn test'
                sh 'echo "Testing"'
            }
        }

        stage('Deploy') {
            steps {
                sh 'aws s3 sync build/ s3://richard.gamera.com.au --delete'
            }
        }
    }
}