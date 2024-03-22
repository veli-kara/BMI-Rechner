pipeline {
    agent any

    stages {
        stage('Set up Node.js') {
            steps {
                node {
                    def nodeVersion = '20.11.1'
                    tool name: 'NodeJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                    env.PATH = "${tool 'NodeJS'}/bin:${env.PATH}"
                    sh "node -v"
                }
            }
        }
    }       
}
