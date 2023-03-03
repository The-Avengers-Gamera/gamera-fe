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
        sh 'yarn start'
      }
    }

    stage('Build and Test') {
      steps {
        echo 'Bilding stage'
      }
    }
    stage('Test') {
      steps {
        echo 'Test stage'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploy stage'
      }
    }
  }
}
