def contar_consonantes(cadena):
    consonantes = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
    contador = sum(1 for letra in cadena if letra in consonantes)
    return contador

# Ejemplo de uso:
cadena = "Hola Mundo"
print(contar_consonantes(cadena))  # Salida: 5
