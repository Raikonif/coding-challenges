"""Ruta de archivo más larga (hard).

Source exercise: https://coding-challenges.dev/problems/python-longest-file-path

> Adaptado de [Daily Coding Problem](https://www.dailycodingproblem.com).

Este ejercicio fue preguntado por **Google**.

Tenemos un sistema de archivos representado como un string con el siguiente formato:

El string `"dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"` representa:

```
dir
    subdir1
    subdir2
        file.ext
```

El directorio `dir` contiene un subdirectorio vacío `subdir1` y un subdirectorio `subdir2` que contiene el archivo `file.ext`.

El string `"dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"` representa:

```
dir
    subdir1
        file1.ext
        subsubdir1
    subdir2
        subsubdir2
            file2.ext
```

El directorio `dir` contiene dos subdirectorios: `subdir1` y `subdir2`. `subdir1` contiene el archivo `file1.ext` y el subdirectorio vacío `subsubdir1`. `subdir2` contiene `subsubdir2`, que a su vez contiene `file2.ext`.

Dado un string que representa un sistema de archivos en este formato, devuelve la **longitud** de la ruta absoluta más larga hacia un archivo. Si no hay ningún archivo en el sistema, devuelve `0`.

Nota: un archivo siempre tiene una extensión (contiene un punto `.`). Los directorios nunca tienen extensión."""


def longest_file_path(*args):
    """Implement this challenge using the prompt above."""
    raise NotImplementedError("Complete this exercise to make its tests pass.")


solve = longest_file_path
