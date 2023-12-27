def branch = env.BRANCH_NAME

pipeline {
    agent any

    stages {
        stage( "Test" ) {
            steps {
                script {
                    switch( branch ) {
                        case "production":
                        case "master":
                        case "develop":
                            echo "開始進行${branch}分支的測試"
                            break
                        default:
                            echo "此為${branch}分支，不須處理"
                    }
                }
            }
        }
        stage( "Build" ) {
            steps {
                script {
                    switch( branch ) {
                        case "production":
                            sh "docker build -t combogic-official-website ."
                            break
                        case "develop":
                            sh "docker build -t combogic-official-website-test ."
                            break
                        default:
                            echo "此為${branch}分支，不處理"
                    }
                }
            }
        }
        stage( "Run" ) {
            steps {
                script {
                    switch( branch ) {
                        case "production":
                            sh "docker run -d -p 3000:3000 combogic-official-website"
                            break
                        case "develop":
                            sh "docker run -d -p 3001:3000 combogic-official-website-test"
                            break
                        default:
                            echo "此為${branch}分支，不處理"
                    }
                }
            }
        }
    }
}
