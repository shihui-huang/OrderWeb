## Démarrage
### Pour installer le serveur SQL:
```bash
sudo apt install mysql-server
sudo systemctl start mysql
```

### Pour initialiser la base de données:
```bash
sudo mysql
```
```mysql-sql
mysql> CREATE DATABASE javascript_project;
mysql> CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';
mysql> GRANT ALL PRIVILEGES ON javascript_project.* TO 'user'@'localhost';
mysql> FLUSH PRIVILEGES;
```
> Les tables sont automatiquement créées par le serveur, cependant elles seront vides.
> Si une requête `GET`renvoie un objet vide, assurez vous d'avoir ajouté des données à la base.

### Pour installer Node.js et les dépendances nécessaires:
```bash
sudo apt install npm
npm install
```
### Pour démarrer le serveur de l'API:
```bash
npm start
```
> Le serveur démarre en principe sur le port 3000

## Fonctionnement

### Fonctionnement général
Une fois le serveur démarré, il attend des requêtes HTTP, suivant le modèle REST. Il permet ainsi de faire un lien 
entre une base de données centralisée et les divers clients. Les objets échangés dans les 
corps des requêtes sont toujours au format json. 

### Routage
`<nom_objet>` désigne un des `owners`,`users`,`orders`,`menus`,`restaurants`.<br>
Les routes de la forme `/<nom_objet>` sont accessibles avec les méthodes
- `GET` qui permet d'avoir la liste de tous les objets de ce type présent en base de données.
- `POST` qui permet d'ajouter un objet de ce type (décrit en json dans le corps de la requête)
 à la base de données. Le corps de la réponse contient l'objet qui vient d'être ajouté.
 
Les routes de la forme `/<nom_objet>/<id_objet>` sont accessibles avec les methodes
- `GET` qui permet de récupérer l'objet d'identifiant `<id_object>`
- `DELETE` qui permet de supprimer l'objet d'identifiant `<id_object>`de la base de 
données. Le crops de la réponse contient un message confirmant la suppression.
- `PUT` qui permet de modifier l'objet d'identifiant `<id_object>`

Les routes suivantes sont accessibles uniquement par `GET`:
-`/users/<id_object>/orders` pour récupérer la liste des commandes de l'utilisateur
d'identifiant `<id_object>`
-`/menus/<id_object>/orders` pour récupérer la liste des commandes sue le menu
d'identifiant `<id_object>`
-`/owners/<id_object>/restaurants` pour récupérer la liste des restaurants du propriétaire
d'identifiant `<id_object>`
-`/restaurants/<id_object>/menus` pour récupérer la liste des menus proposés par le restaurant
d'identifiant `<id_object>`
