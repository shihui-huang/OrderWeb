Pour installer le serveur SQL:
```bash
sudo apt install mysql-server
sudo sytemctl start mysql
```

Pour initialiser la base de données:
```bash
sudo mysql
```
```mysql-sql
CREATE DATABASE javascript_project;
CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON javascript_project.* TO 'user'@'localhost';
FLUSH PRIVILEGES;
```

Pour démarrer le serveur de l'API:
```bash
npm start
```