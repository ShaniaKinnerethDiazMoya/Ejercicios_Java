def intercambiar_valores(a, b):
    a, b = b, a
    return a, b

# Ejemplo de uso:
a, b = 5, 10
a, b = intercambiar_valores(a, b)
print(a, b)  # Salida: 10 5
