pipeline {
    agent {
        label 'gcp_node'
    }

    stages {
        stage('Git checkout') {
            steps {
                //Get source code from project's repository
                git branch: 'devops-richard-jenkins',
                url: 'https://github.com/The-Avengers-Gamera/gamera-fe.git'
            }
        }

        stage('Build') {
            steps {
                //Add project's dependencies
                sh 'yarn install'

                //Generate build folder for deployment
                sh 'yarn run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing'
                //Currrently test is empty
                //sh 'yarn test'
            }
        }

        stage('Deploy') {
            steps {
                //Deploy build folder to S3 bucket
                sh 'aws s3 sync build/ s3://richard.gamera.com.au --delete'
                sh 'aws cloudfront create-invalidation --distribution-id  E3BU2FM9FX62ZF --paths "/*"'
            }
        }
    }

    post {
        always {
            //Clean the workspace after every pipeline build process
            echo 'Cleaning workspace'
            cleanWs()
        }

        failure {
            //Send error messages to developer to debug
            echo 'Build fail, sending error message to developer'
        }
    }
}