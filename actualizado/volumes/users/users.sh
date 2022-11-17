
java -jar -Dserver.port=${USER_SERVICE_PORT} -DACTIVE_ENV=DEV  \
-Dspring.datasource.url=jdbc:mariadb://${MARIA_DB_HOST}:${MARIA_DB_PORT}/thincode_app \
-Duris.authorize=http://${AUTHORIZE_HOST}:${SECURITY_SERVICE_PORT}/api/v1/auth/authorize \
-Duris.genpasswdmail=http://${GENPASSWDMAIL_HOST}:${SECURITY_SERVICE_PORT}/api/v1/auth/genPasswdMail \
/app/users-service-0.0.1-SNAPSHOT.jar