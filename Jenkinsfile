pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'devops-gia', url: 'https://github.com/The-Avengers-Gamera/gamera-fe.git'
                }
        }
        stage('Prepare') {
            steps {
                sh 'yarn install'
                sh 'yarn run build'
            }
        }

        stage('Build') {
            steps {
                echo 'Buiding'
            }
        }
    
        stage('Test') {
            steps {
                echo 'Testing'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Depoying'
            }
        }
        
        stage('Cleanup') {
            steps {
                echo 'Cleanup'
            }
        }
    }
    post {
        always {
            echo 'always executed'
        }

        success {
            echo 'success'
        }

        failure {
            echo 'fail'
        }
    }
}
