

java -jar -Dserver.port=${SECURITY_SERVICE_PORT} -DACTIVE_ENV=DEV \
-Dspring.datasource.url=jdbc:mariadb://${MARIA_DB_HOST}:${MARIA_DB_PORT}/thincode_app \
/app/security-service-0.0.1-SNAPSHOT.jar > /app/log 2>> /app/error



