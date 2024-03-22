pipeline {
    agent any

    stages {
        stage('Set up Node.js') {
            steps {
                script {
                    tool name: 'NodeJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                    env.PATH = "${tool 'NodeJS'}/bin:${env.PATH}"
                }
            }
        }       
    }
}