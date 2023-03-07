pipeline {
    agent {
        label 'gcp_node'
    }

    stages {
        stage('Build') {
            steps {
                sh 'echo "building ..."'
                //Add project's dependencies
                sh 'yarn install'
                //Generate build folder for deployment
                sh 'yarn run build'
            }
        }

        stage('Test') {
            steps {
                sh 'echo "testing...."'
                //sh 'yarn test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying to AWS s3 bucket.'
                //Deploy build folder to S3 bucket
                sh 'aws s3 sync build/ s3://ron.gamera.com.au --delete'
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