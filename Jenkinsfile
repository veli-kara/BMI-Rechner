pipeline {
    agent any
    tools {
        nodejs '20.11.1'
    }

    stages {
        stage ('Install Dependencies') {
            steps{
                script {
                    sh 'npm install express'
                    sh 'npm install --save-dev cypress'
                    sh 'npm i @cypress/xvfb'
                }
            }
        }
        stage ('start node.js server'){
            steps {
                script {
                    sh 'npm start &'
                    sh 'sleep 10'
                }
            }
        }
        stage ('run tests') {
            steps {
                script {
                    sh 'npm test'
                }
            }
        }
    }

}
