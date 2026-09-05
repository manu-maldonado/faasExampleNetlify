import json
from datetime import datetime

def handler(event, context):
    # Obtenemos la hora actual del servidor
    hora_actual = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    # Creamos un diccionario con la respuesta
    respuesta = {
        "mensaje": "¡Hola Mundo desde una funcion Serverless en Python!",
        "lenguaje": "Python 3",
        "timestamp": hora_actual
    }

    # Retornamos el diccionario formateado como JSON
    return {
        "statusCode": 200,
        "headers": {"Content-Type": "application/json"},
        "body": json.dumps(respuesta)
    }
