import pandas as pd
import mysql.connector

 
data = pd.read_excel('input.xlsx')

 
db = mysql.connector.connect(
  host="localhost",
  user="root",
  password="",
  database="python_demo"
)
 
cursor = db.cursor()
for index, row in data.iterrows():
  sql = "INSERT INTO Student (name,birtdate,mathscores,physicscore,chemistryscore) VALUES (%s, %s, %s, %s, %s)"
  values = (row['name'], row['birtdate'], row['mathscores'], row['physicscore'], row['chemistryscore'])
  cursor.execute(sql, values)
db.commit()
