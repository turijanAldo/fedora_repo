


java -jar -Dserver.port=${USERS_PORT} -DACTIVE_ENV=DEV  \
-Dspring.datasource.url=jdbc:mariadb://${DATABASE_HOST}:${DATABASE_PORT}/thincode_app \
-Duris.authorize=http://${AUTHORIZE_HOST}:${SECURITY_PORT}/api/v1/auth/authorize \
-Duris.genpasswdmail=http://${GENPASSWDMAIL_HOST}:${SECURITY_PORT}/api/v1/auth/genPasswdMail \
/app/users-service-0.0.1-SNAPSHOT.jar > /app/log 2>> /app/error



