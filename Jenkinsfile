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
        sh 'aws s3 sync build/ s3://ldwilltest.s3.ap-southeast-2.amazonaws.com/p3-fe-ldwill/ --delete'
      }
    }
  }
}
