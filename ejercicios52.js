def contar_mayusculas(cadena):
    contador = sum(1 for letra in cadena if letra.isupper())
    return contador

# Ejemplo de uso:
cadena = "Hola Mundo"
print(contar_mayusculas(cadena))  # Salida: 2
