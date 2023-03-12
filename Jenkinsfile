pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        git branch: 'devops-ronald', url: 'https://github.com/The-Avengers-Gamera/gamera-fe.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'yarn install'
        sh 'yarn build run'
      }
    }
    stage('Test') {
      steps {
        echo 'Test stage'
      }
    }
    stage('Deploy') {
      steps {
        sh 'aws s3 sync build/ s3://ronald.gamera.com.au '
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
