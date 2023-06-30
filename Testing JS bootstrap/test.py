import mysql.connector

db = mysql.connector.connect(
    host='127.0.0.1',
    database='test_database',
    user='root',
    passwd='apples')

print(db.get_server_info())

mycursor = db.cursor()
